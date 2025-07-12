'use server'
import { Buffer } from 'node:buffer'
import prisma from '../../db/db.prisma.js'
import path from 'node:path'
import { revalidatePath } from 'next/cache'
import { existsSync, mkdirSync } from 'node:fs'
import { upImages } from '../../services/firebase.config.js'
import { writeFile } from 'fs/promises'

//TODO: Seguridad en las Cookies

let $NAME: string | undefined

let buffer: Buffer | undefined

type FormData = {
	get: (key: string) => string | File | undefined
}

interface Task {
	id?: number
	concept?: string
	amount?: number
	debit?: string
	img?: string | URL
	notes?: string
	initAt?: string
	completed?: boolean
}

//! Tasks

export async function GetTasks() {
	const _getAllTasks = await prisma.Tasks.findMany({
		orderBy: [
			{
				completed: 'asc',
			},
			{
				createdAt: 'desc',
			},
		],
	})
	return _getAllTasks
}

export async function AddTask(AddTask: Task) {
	const { concept, amount, debit, img, notes, initAt } = AddTask
	try {
		const _newTask = await prisma.Tasks.create({
			data: {
				concept,
				amount,
				debit,
				img,
				notes,
				source: 'form-task',
				initAt,
			},
		} )
		console.log('New Task Added:', _newTask)
		if (!_newTask) return
		revalidatePath('/')
		return _newTask
	} catch (error) {
		console.error(error)
		return {
			message: 'Error adding task',
		}
	}
}

export async function UpdateTask( updateTask: Task ) {
	if ( !updateTask || typeof updateTask !== 'object' ) return
	console.log('UpdateTask', updateTask)
	const { id, completed } = updateTask
	if (!id) return
	const existingTask = await prisma.Tasks.findFirst({
		where: {
			id: id,
		},
	})
	if (!existingTask) return

	await prisma.Tasks.update({
		where: {
			id: id,
		},
		data: {
			completed: !completed,
		},
	})
	//. Revalidar la ruta para que se vea el cambio en la UI
	revalidatePath('/')
	return
}

export async function DeleteTask(deleteTask: Task) {
	const existingTask = await prisma.Tasks.findFirst({
		where: {
			concept: `${deleteTask}`,
		},
	})
	if (!existingTask) return
	const deletedTASK = await prisma.Tasks.delete({
		where: {
			id: existingTask.id,
		},
	} )
	revalidatePath('/')
	return deletedTASK
}

//! Image -> Firebase Storage

export async function AddImage(payload: FormData) {
	const $CATEGORY = payload.get('category') || 'server241'
	const $IMAGE = payload.get('img')
	if (typeof $IMAGE !== 'string' && $IMAGE?.name) {
		$NAME = $IMAGE.name.toLowerCase()
	}
	if ($IMAGE === 'undefined') {
		return {
			message: 'no image',
		}
	}

	//. Convertir FormData en Buffer: Archivo cargado en Memoria RAM
	if (typeof $IMAGE !== 'string' && $IMAGE?.arrayBuffer) {
		const bytes = await $IMAGE.arrayBuffer()
		buffer = Buffer.from(bytes)
	} else {
		return {
			message: 'Invalid image format',
		}
	}

	//. Guardar archivo en Carpeta Public
	const newFolder = typeof $CATEGORY === 'string' ? $CATEGORY : 'repoImg'
	const imagePath = `${$CATEGORY}-${Date.now()}-formTask-${$NAME}`
	const newPath = path.join(process.cwd(), 'public', 'formTask', newFolder)

	//! save at local in DEV
	if (process.env.NODE_ENV === 'development') {
		if (!existsSync(newPath)) {
			mkdirSync(newPath, {
				recursive: true,
			})
		}
		const localFilePath = path.join(newPath, imagePath)
		if (buffer) {
			await writeFile(localFilePath, buffer)
		}
	}

	try {
		//. Subir al Bucket Firebase
		if (!buffer) {
			return {
				message: 'Buffer is undefined',
			}
		}
		const imageURL = await upImages(buffer, imagePath)
		console.log(imageURL)
		return {
			message: imageURL,
		}
	} catch (error) {
		console.error(error)
		return {
			message: 'Error uploading image',
		}
	}
}

//TODO: hacer function separada a firebase: 02-1x-24
