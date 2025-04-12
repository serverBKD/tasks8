'use client'
import { addImage, addTask, deleteTask } from '@/app/server/actions'
import React, { useState } from 'react'
import ViewTasks from '@/componentes/view-tasks.jsx'

const formatDate = () => {
	const date = new Date(Date.now())
	const months = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC',
	]
	const day = date.getDate().toString().padStart(2, '0')
	const month = months[date.getMonth()]
	const year = date.getFullYear().toString().slice(-2)
	return `${day}${month}${year}`
}
const formattedDate = formatDate()

const TaskPage = () => {
	const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState('')
	const [image, setImg] = useState('')

	const handleAddImg = async (e) => {
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append('img', file)
		formData.append('category', tasks.source)
		const imgUrl = await addImage(formData)
		setImg(imgUrl.message)
		console.log({ imgUrl })
	}

	const handleInputChange = (e) => {
		setNewTask(e.target.value)
	}

	let task = {}

	const handleAddTask = async () => {
		if (newTask.trim() === '') return

		if (newTask.includes(':')) {
			const partTask = newTask.split(':')

            if (partTask[ 1 ] === 'del') return await deleteTask(partTask[ 0 ])
            
			task = {
				concept: partTask[1],
                debit: parseFloat(partTask[ 0 ]) < 0 ?? false,
                notes:partTask[ 1 ].includes('kyrye') ? partTask[ 0 ]: '',
				img: image,
				initAt: formattedDate,
				amount: parseFloat(partTask[0]) || 0,
			}
		} else {
			task = {
				concept: newTask,
				debit: false,
				img: image,
				initAt: formattedDate,
				amount: parseFloat(newTask) || 0,
			}
		}

		setTasks([...tasks, task])
		setNewTask('')

		const _addTask = await addTask(task)
		console.log(_addTask)
	}

	return (
		<section className='w-full min-h-screen flex justify-center overflow-hidden pt-4 bg-indigo-300'>
			<article className='w-[380px] h-fit bg-indigo-100'>
				<h1 className='text-center py-6 text-2xl  underline'>
					Tasks Manager [T-8]
				</h1>
				<section className='flex flex-col py-4'>
					<div className='flex justify-between '>
						<input
							type='text'
							value={newTask}
							onChange={handleInputChange}
							placeholder='Add a new task'
							className='w-full h-10 bg-indigo-300 hover:bg-indigo-400 text-black font-bold py-2 placeholder:pl-2 pl-1 placeholder-slate-800'
						/>
						<button
							onClick={handleAddTask}
							className='w-10 h-10 bg-indigo-600 hover:bg-indigo-700 text-4xl text-white font-bold '
						>
							+
						</button>
					</div>
					<div>
						<input
							type='file'
							name='img'
							id='img'
							className='<input type="file" class="block w-full text-xs bg-indigo-300 text-slate-600 file:mr-2 file:py-2 file:px-4 file:border-0 file:text-xs file:font-semibold file:bg-indigo-300 file:text-slate-600 hover:file:bg-indigo-400 border-t-2 border-indigo-700 " />'
							onChange={(e) => handleAddImg(e)}
						/>
					</div>
				</section>
				<ViewTasks formattedDate />
			</article>
		</section>
	)
}

export default TaskPage
