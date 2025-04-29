'use client'
import { toAddImage, toAddTask, toDeleteTask } from './server/actions.ts'
import React, { useState,useEffect,useId } from 'react'
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
	const $id = useId()
	const { refresh } = useRouter()
	const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState('')
	const [ image, setImg ] = useState('')
	const [ isCard, setIsCard ] = useState(false)
	const [Kyrye,setKyrye] = useState('Kyrye')
	const [ tasksInitial, setTasksInitial ] = useState([])


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
		console.log({isCard})
	}

	//! Save the image on the cloud
	const handleAddImg = async (e) => {
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append('img', file)
		formData.append('category', tasks.source)
		const imgUrl = await toAddImage(formData)
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
		<section className={`${OrbitronBlackFont.className} w-full min-h-screen pt-2 lg:pt-4 flex flex-col justify-start overflow-hidden bg-indigo-700`}>
			<article className='w-[380px] h-fit mx-auto bg-indigo-900'>
				<h1 className='text-center py-2 text-4xl'>
					Tasks Manager
				</h1>
				<div>
                <h2 className={`${OrbitronBlackFont.className} text-indigo-50 text-4xl uppercase underline py-8 text-center`}>{Kyrye}</h2>
            </div>
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
							className='w-10 h-10 bg-indigo-600 hover:bg-indigo-700 text-4xl text-white font-bold cursor-pointer'
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
				<div className='w-full flex items-center justify-center bg-purple-600'>
					<input
						type="button"
						value={isCard ? 'List': 'Cards'}
						onClick={(evt) => handleIsCard(evt)}
						className="w-full cursor-pointer uppercase text-center text-slate-800 font-bold bg-indigo-300 hover:bg-indigo-400 py-2"
						/>
				</div>
			</article>
			{isCard ?  <CardTasks tasks={tasks}/>: <ListTasks tasks={tasks}/>}
		</section>
	)
}

export default TaskPage

// %##""4
