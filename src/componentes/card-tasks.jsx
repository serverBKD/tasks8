import Image from "next/image"
import { IconsBarcode, IconsDollar } from "../../public/icons/icons-hugeicons"

export default function CardTasks({ tasks }) {
  return (
    <section className="w-full lg:min-h-screen mx-auto mt-2 mb-4 gap-x-1 gap-y-2 flex flex-wrap justify-start text-center lg:rounded-lg shadow-2xl shadow-slate-700 bg-indigo-800">
      {tasks?.map((task) => (
        <article
          className="max-w-xl min-w-96 max-h-96 flex flex-col items-start justify-center mx-auto lg:flex-nowrap sm:rounded-xl overflow-hidden transition-shadow duration-300 ease-in-out bg-red-500"
          key={task.id}
        >
          <div className="w-full flex items-center justify-center mx-auto overflow-hidden">
            {task.img ? (
              <Image
                src={task?.img}
                alt={task?.concept}
                width={2040}
                height={2040}
                className="lg:max-w-full max-w-96 py-2 object-cover bg-slate-400"
              />
            ) : task.amount === 0 ? (
              <IconsBarcode />
            ) : (
              <IconsDollar />
            )}
          </div>
          {/* <!-- Card like YT --> */}
          <div className="w-full flex items-start justify-center mx-auto bg-cyan-400">
            <div className="w-32 h-full px-2 flex items-center justify-center bg-cyan-400 mx-auto">
              {task.amount === 0 ? <IconsBarcode /> : <IconsDollar />}
            </div>
            <div className="w-full flex flex-col items-start pl-6 pt-2 pb-6 text-slate-900 font-bold text-xl">
              <h4
                className={`${
                  task.amount < 0 ? "text-red-500" : "text-amber-400"
                } tracking-wider text-xl`}
              >
                {task.amount === 0 || task.amount}
              </h4>
              <h3
                style={{
                  textDecoration: task?.completed ? "line-through" : "none",
                }}
              >
                {task.concept}
              </h3>
              <h5 className="text-sm">{task?.initAt}</h5>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
