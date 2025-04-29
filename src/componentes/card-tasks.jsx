import Image from "next/image"
import { IconsCode1 } from "../../public/icons/icons-hugeicons"

export default function CardTasks({ tasks,$id }) {
  return (
      <section className="w-full max-w-4xl lg:min-h-screen mx-auto  mt-2 px-6 py-8 gap-2 flex flex-wrap text-center bg-indigo-800">
      {tasks.map((task) => (
  <article className="w-64 h-48 gap-2 flex flex-col items-start justify-center mx-auto  bg-slate-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out" key={task.id}>
                  {task.img ? <Image
                      src={task.img}
                      alt="Task Image"
                      width={1500}
                      height={1500}
                      className="w-64 h-48 object-cover "
                  /> : <IconsCode1/>}
          <div className="flex flex-col pl-2 py-1 text-slate-900 font-bold text-xl">
                      
                      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.concept}</h3>
                      <h4>{task.amount == 0 || task.amount}</h4>
                </div>
        </article>) )     
              }
    </section>
  )
}
