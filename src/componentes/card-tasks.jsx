import Image from "next/image"
import { IconsBarcode,IconsDollar } from "../../public/icons/icons-hugeicons"

export default function CardTasks({ tasks }) {
  return (
      <section className="w-full max-w-4xl lg:min-h-screen mx-auto mt-2 px-6 py-8 gap-y-6 flex flex-wrap justify-start items-center text-center bg-indigo-800">
      {tasks?.map((task) => (
      <article className="min-w-64 h-90 flex flex-col items-start justify-center mx-auto bg-slate-700 rounded-xl overflow-hidden  transition-shadow duration-300 ease-in-out" key={task.id}>
      <div className="w-full max-w-64 h-full flex items-center justify-center mx-auto bg-cyan-500">
            {task?.img ?
              <Image
                src={task?.img}
                alt={task.concept}
                width={1500}
                height={1500}
                className="xs:w-full min-w-64 h-full min-h-64 object-cover drop-shadow-xl drop-shadow-slate-900"
              /> :
              (task.amount === 0) ? <IconsBarcode />:<IconsDollar />  
           }
          </div>
          {/* <!-- Card like YT --> */}
          <div className="w-full flex ">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-500 rounded-full mx-auto drop-shadow-lg drop-shadow-slate-900">
              {(task.amount === 0) ? <IconsBarcode />:<IconsDollar />}
            </div>
              <div className="w-full flex flex-col pl-2 pt-6 pb-4 text-center text-slate-50 font-bold text-2xl bg-indigo-800">
            <h4 className={`${task.amount < 0 ? 'text-red-500': 'text-indigo-400'}`}>{task.amount === 0 || task.amount}</h4>
            <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.concept}</h3>
          </div>
          </div>
      </article>) )     
              }
    </section>
  )
}
