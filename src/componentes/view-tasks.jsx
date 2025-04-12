'use client'
import { getTasks ,updateTask} from '@/app/server/actions.js'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ViewTasks() {
    // const [ tasksInitial, setTasksInitial ] = useState([])
    const [ tasks, setTasks ] = useState([])

    const [Kyrye,setKyrye] = useState('Kyrye')

    useEffect(() => {
        const _getTasks = async () => {
            const _tasksInitial = await getTasks()
            setTasks(_tasksInitial)
            console.log({_tasksInitial})
        }
        _getTasks()
    }, [])

    //  // guardar tasks de LocalStorage
    // useEffect(() => {
    //     localStorage.setItem('tasksInitial', JSON.stringify(tasksInitial))
    // }, [ tasks ])

    // // guardar tasks en LocalStorage
    // useEffect(() => {
    //     const tasks = JSON.parse(localStorage.getItem('tasksInitial')) || []
    //     setTasks(tasks)
    // }, [tasksInitial])


    
    const handleToggleTask = async (task) => {
        const TaskUpdtated = await updateTask(task)
        console.log('TaskUpdtated', TaskUpdtated)
    }

    return (
        <section className='w-full flex flex-col items-center bg-indigo-800'>
            <div>
                <h1 className='text-indigo-50 text-4xl uppercase underline py-8'>{Kyrye}</h1>
            </div>
            <ul className='w-full px-2 py-1 gap-y-3 mb-2'>
                {tasks.map((task) => (
                    <li key={task.id} className="flex flex-col justify-between py-1 text-2xl">
                        <div>
                            {task.img && !task.completed && <Image src={task.img}
                                width= {940}
                                height= {940}
                                alt="Task Image" className='w-full h-64 object-cover'
                            />}
                        </div>
                        <div className={`${task.debit ? 'bg-indigo-950 text-slate-100' : 'bg-indigo-500'} w-full flex items-center justify-between px-2 py-4`}>
                            <p className=''>{task.amount}</p>
                            <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className='px-6 text-balance italic truncate max-h-32 line-clamp-3'>{task.concept}</p>
                            <button onClick={() => handleToggleTask(task)}>
                                {!task.completed ? '❌' : '✔️'}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
