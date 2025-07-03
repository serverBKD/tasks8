import Image from "next/image"
import { IconsBarcode, IconsDollar } from "../../public/icons/icons-hugeicons"

export default function CardTasks({ tasks }) {
  return (
    <section className="w-full lg:min-h-screen mx-auto my-4 flex flex-wrap text-center gap-3 bg-1-bg text-1-text">
      {tasks?.map((task) => (
        <article
          className="card max-h-72 flex flex-col items-center justify-center mx-auto lg:flex-nowrap sm:rounded-xl overflow-hidden transition-shadow duration-300 ease-in-out bg-red-500"
          key={task.id}
        >
                    {/* <!-- Card like YT --> */}
          <div className="w-full flex items-start justify-center mx-auto bg-1-link">
            {/* icono */}
            <div className="w-18 h-full pl-4 flex items-center justify-center mx-auto">
              {task.amount === 0 ? <IconsBarcode /> : <IconsDollar />}
            </div>
            <div className="w-full flex flex-col items-start pl-6 pt-2 pb-6 text-2xl">
              <h4
                className={`${
                  task.amount < 0 ? "text-1-error" : "text-x-color"
                } tracking-wider text-3xl`}
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
          {/* Imagen */}
          <div className="w-full flex items-center justify-center mx-auto overflow-x-hidden bg-1-link">
            {task.img && (
              <Image
                src={task?.img}
                alt={task?.concept}
                width={1080}
                height={1080}
                className="card object-cover object-center pt-36 "
              />
            ) }
          </div>
        </article>
      ))}
    </section>
  )
}
