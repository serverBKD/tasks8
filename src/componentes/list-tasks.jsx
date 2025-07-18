'use client'
import { UpdateTask } from '../app/server/actions.ts'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ListTasks( { tasks } ) {
	console.log( 'fromCardLists', tasks )

	const router = useRouter()

	const handleToggleTask = async ( task ) => {
		await UpdateTask( task )
		router.push( '/' )
		return
	}

	return (
		<section className='x-container'>
			<ul className='list-box'>
				{ tasks.map( ( task ) => (
					<div key={ task?.id - Math.random() }>
						<div
							className={ `${ task?.debit
								? 'bg-x-error text-light-text'
								: 'bg-x-link text-dark-text'
								} box-list` }
						>
							<p className=''>{ task.amount }</p>
							<p
								style={ {
									textDecoration: task.completed
										? 'line-through'
										: 'none',
								} }
								className='px-6 text-balance italic truncate max-h-32 line-clamp-3'
							>
								{ task.concept }
							</p>
							<button
								type='button'
								aria-label='Toggle task completion'
								onClick={ () => handleToggleTask( task ) }
								className='cursor-pointer bg-inherit text-dark-bg'
							>
								{ !task.completed ? '✅' : '❌' }
							</button>
						</div>
						<div>
							{ task?.img && !task.completed && (
								<Image
									src={ task?.img }
									width={ 640 }
									height={ 640 }
									alt={ task?.concept }
									className='card_image'
								/>
							) }
						</div>
					</div>
				) ) }
			</ul>
		</section>
	)
}
