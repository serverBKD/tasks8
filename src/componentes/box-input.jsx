'use client'
import { useDebounce } from '../services/hooks.ts'
import {
	AddImage,
	AddTask,
	GetTasks,
	DeleteTask,
} from '../app/server/actions.ts'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import ListTasks from '../componentes/list-tasks.jsx'
import CardTasks from '../componentes/card-tasks.jsx'
import BoxWord from '../componentes/box-word.jsx'

const FormattedDate = () => {
	const date = new Date( Date.now() )
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
	const day = date.getDate().toString().padStart( 2, '0' )
	const month = months[ date.getMonth() ]
	const year = date.getFullYear().toString().slice( -2 )
	return `${ day }${ month }${ year }`
}
const _FormattedDate = FormattedDate()

export default function BoxInput() {
	const router = useRouter()
	const [ tasks, setTasks ] = useState( [] )
	const [ newTask, setNewTask ] = useState( '' )
	const [ image, setImg ] = useState( '' )
	const [ isList, setIsList ] = useState( true )
	const [ isDeleted, setIsDeleted ] = useState( false )

	const [ Phrase, setPhrase ] = useState( 'Phrase' )

	useEffect( () => {
		const _getTasks = async () => {
			const _tasksInitial = await GetTasks()
			setTasks( _tasksInitial )
			const storedPhrase = localStorage.getItem( 'phrase' )
			if ( storedPhrase ) setPhrase( storedPhrase )
		}
		_getTasks()
	}, [] )



	//* Save the image on the cloud
	const handleUpImage = async ( evt ) => {
		const file = evt.target.files[ 0 ]
		const formData = new FormData()
		formData.append( 'img', file )
		formData.append( 'category', 'tasks-app' )
		const imgUrl = await AddImage( formData )
		setImg( imgUrl.message )
		console.log( {
			imgUrl,
		} )
		return
	}

	//* Add New task and Delete task

	const handleInputChange = useDebounce( newTask, 500 )

	let task = {}

	const handleAddTask = async () => {
		if ( newTask.trim() === '' ) return

		if ( handleInputChange.includes( ':' ) ) {
			const partTask = newTask.split( ':' )

			if ( partTask[ 1 ] === 'del' ) {
				const isDeleted = await DeleteTask( partTask[ 0 ] )
				if ( isDeleted?.message == "task deleted" ) {
					router.push( '/' )
					setIsDeleted( true )
					return
				}
				return
			}

			if ( partTask[ 1 ] === 'kyrye' ) {
				setPhrase( partTask[ 0 ] )
				// guardar el nombre en el localStorage o en una base de datos
				localStorage.setItem( 'phrase', partTask[ 0 ] )
				return
			}

			task = {
				concept: partTask[ 1 ],
				debit: parseFloat( partTask[ 0 ] ) < 0 ?? false,
				notes: partTask[ 1 ].includes( 'kyrye' ) ? partTask[ 0 ] : '',
				img: image,
				initAt: _FormattedDate,
				amount: parseFloat( partTask[ 0 ] ) || 0,
			}
		} else {
			task = {
				concept: newTask,
				debit: false,
				img: image,
				initAt: _FormattedDate,
				amount: parseFloat( newTask ) || 0,
			}
		}

		setTasks( [
			...tasks,
			task,
		] )
		setNewTask( '' )

		try {
			const addTask = await AddTask( task )
			console.log( {
				addTask,
			} )
			setImg( '' )
			router.push( '/' )
			return
		} catch ( error ) {
			console.error( error )
		}
	}

	//* Select between Card and List
	const handleIsList = ( evt ) => {
		evt.preventDefault()
		setIsList( !isList )
		return
	}

	return (
		<section>
			<article className='box-input'>
				{/* <!-- Word of Week --> */ }
				<section className='flex flex-col pt-4 '>
					<div className='flex justify-between'>
						<input
							type='text'
							id='newTask'
							value={ newTask }
							onChange={ ( e ) => {
								setNewTask( e.target.value )
							} }
							placeholder='+ new task'
						/>
						<button
							type='button'
							id='btn-add-task'
							disabled={ !newTask }
							aria-label='Add new task'
							onClick={ handleAddTask }
						>
							+
						</button>
					</div>
					<input
						type='file'
						name='img'
						id='img'
						className='input-file'
						onChange={ ( evt ) => handleUpImage( evt ) }
						accept='image/png, image/jpeg, image/jpg'
					/>
				</section>
				{/* <!-- isCard - isList --> */ }
				<section>
					<input
						type='button'
						id='isList'
						aria-label='Toggle view between List and Cards'
						value={ isList ? 'List' : 'Cards' }
						onClick={ ( evt ) => handleIsList( evt ) }
					/>
				</section>
				<BoxWord Phrase={ Phrase } />
			</article>
			{/* <!-- Tasks --> */ }
			<section>
				{ isList ? (
					<ListTasks tasks={ tasks } />

				) : (
					<CardTasks tasks={ tasks } />
				) }
			</section>
		</section>
	)
}

//TODO: Tailwind CSS -> CSS native
