'use client'
import { toAddImage, toAddTask, toDeleteTask } from './server/actions.ts'
import React, { useState,useEffect } from 'react'
import ListTasks from '../componentes/list-tasks.jsx'
import CardTasks from '../componentes/card-tasks.jsx'
import { useRouter } from 'next/navigation'
import { toGetTasks } from './server/actions.ts'

import {OrbitronBlackFont} from '../services/fonts.js'

const toFormatDate = () => {
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
const $FormattedDate = toFormatDate()

const TaskPage = () => {
	const { refresh } = useRouter()
	const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState('')
	const [ image, setImg ] = useState('')
	const [ isCard, setIsCard ] = useState(false)
	const [Kyrye,setKyrye] = useState('Kyrye')

	useEffect(() => {
		const $getTasks = async () => {
			const $tasksInitial = await toGetTasks()
			setTasks($tasksInitial)
			setKyrye(localStorage.getItem('kyrye'))
		}
		$getTasks()
	}, [])
	
	
	//! Select between Card and List
	const handleIsCard = (evt) => {
		evt.preventDefault()
		setIsCard(!isCard)
		console.log({ isCard })
		return
	}

	//! Save the image on the cloud
	const handleAddImg = async (e) => {
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append('img', file)
		formData.append('category', 'tasks-app')
		const imgUrl = await toAddImage(formData)
		setImg(imgUrl.message)
		console.log({ imgUrl })
		return
	}

	const handleInputChange = (e) => {
		setNewTask(e.target.value)
	}

	let task = {}

	const handleAddTask = async () => {
		if (newTask.trim() === '') return

		if (newTask.includes(':')) {
			const partTask = newTask.split(':')

			if (partTask[ 1 ] === 'del') return await toDeleteTask(partTask[ 0 ])
			
			if (partTask[ 1 ] === 'kyrye') {
				setKyrye(partTask[ 0 ])
				// guardar el nombre en el localStorage o en una base de datos
				localStorage.setItem('kyrye', partTask[ 0 ])
				return
			}

            
			task = {
				concept: partTask[1],
                debit: parseFloat(partTask[ 0 ]) < 0 ?? false,
                notes:partTask[ 1 ].includes('kyrye') ? partTask[ 0 ]: '',
				img: image,
				initAt: $FormattedDate,
				amount: parseFloat(partTask[0]) || 0			}
		} else {
			task = {
				concept: newTask,
				debit: false,
				img: image,
				initAt: $FormattedDate,
				amount: parseFloat(newTask) || 0,
			}
		}

		setTasks([...tasks, task])
		setNewTask('')

	try {
		const $AddTask = await toAddTask(task)
		setImg('')
		refresh()
		console.log({$AddTask})
		return
		}
		catch (error) {
			console.error(error)
		}
	}	

	return (
		<section className={`${OrbitronBlackFont.className} w-full min-h-screen lg:pt-4 flex flex-col justify-start overflow-hidden bg-indigo-800`}>
			<article className='w-[380px] h-fit mx-auto bg-indigo-800'>
				<h1 className='text-center pt-8 text-4xl'>
					Tasks Manager
				</h1>
				{/* <!-- Word of Week --> */}
				<section>
                	<h2 className={`${OrbitronBlackFont.className} text-indigo-50 text-4xl uppercase underline py-8 text-center`}>{Kyrye}</h2>
            	</section>
				<section className='flex flex-col pt-4 pb-1'>
					<div className='flex justify-between'>
						<input
							type='text'
							value={newTask}
							onChange={handleInputChange}
							placeholder='Add a new task'
							className='w-full h-10 bg-indigo-400 hover:bg-orange-500 text-black font-bold py-2 pl-1 placeholder-slate-50 focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0 sm:rounded-tl-lg'
						/>
						<button
							onClick={handleAddTask}
							className='w-20 h-10 bg-indigo-600 hover:bg-orange-700 text-4xl text-white font-bold cursor-pointer sm:rounded-tr-lg'
						>
							+
						</button>
					</div>
					<input
						type='file'
						name='img'
						id='img'
						className='<input type="file" class="block w-full text-xs bg-cyan-500 text-slate-600 file:mr-2 file:p-2 file:border-0 file:text-xs file:font-semibold file:bg-cyan-400 file:text-slate-50 hover:file:bg-orange-600 border-t-2 border-indigo-700 " />'
						onChange={(evt) => handleAddImg(evt)}
						accept='image/png, image/jpeg, image/jpg'
					/>
				</section>
				{/* <!-- isCard - isList --> */}
				<section className='w-full'>
					<input
						type="button"
						value={isCard ? 'List': 'Cards'}
						onClick={(evt) => handleIsCard(evt)}
						className="w-full cursor-pointer uppercase text-center text-2xl text-slate-50 font-bold sm:rounded-b-xl bg-cyan-500 hover:bg-orange-600 py-2"
						/>
				</section>
			</article>
			<section className=" bg-indigo-800">
			{!isCard ?
				<CardTasks tasks={tasks} /> :
				<ListTasks tasks={tasks} />
			}
			</section>
		</section>
	)
}

export default TaskPage

// %##""4
