'use client'
import { toAddImage, toAddTask, toDeleteTask } from '../app/server/actions.ts'
import React, { useState } from 'react'
import ViewTasks from '../componentes/view-tasks.jsx'
import CardTasks from '../componentes/card-tasks.jsx'

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
	const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState('')
	const [ image, setImg ] = useState('')
	const [ isCard, setIsCard ] = useState(false)

	const handleIsCard = (evt) => {
		evt.preventDefault()
		setIsCard(!isCard)
		console.log({isCard})
	}

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

		const $AddTask = await toAddTask(task)
		console.log($AddTask)
	}

	return (
		<section className='w-full min-h-screen flex flex-col justify-center  overflow-hidden pt-4 bg-indigo-300'>
			<article className='w-[380px] h-fit mx-auto bg-indigo-900'>
				<h1 className='text-center py-6 text-2xl  underline'>
					Tasks Manager
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
			{isCard ?  <CardTasks />: <ViewTasks/>}
		</section>
	)
}

export default TaskPage
