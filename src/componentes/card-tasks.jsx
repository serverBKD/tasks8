import Image from "next/image";
import { IconsBarcode, IconsDollar } from "../../public/icons/icons-hugeicons";

export default function CardTasks({ tasks }) {
  return (
    <section className="w-full max-w-4xl lg:min-h-screen mx-auto mt-2 mb-4 px-6 py-8 gap-y-2 flex flex-wrap justify-start text-center lg:rounded-lg shadow-2xl shadow-slate-700 bg-indigo-800">
      {tasks?.map((task) => (
        <article
          className="w-64 h-90 flex flex-col items-start justify-center mx-auto sm:rounded-xl overflow-hidden  transition-shadow duration-300 ease-in-out"
          key={task.id}
        >
          <div className="w-full max-w-72 h-full flex items-center justify-center mx-auto bg-cyan-400">
            {task.img ? (
              <Image
                src={task.img}
                alt={task.concept}
                width={1500}
                height={1500}
                className="w-full min-w-64 h-full min-h-64 max-h-72 object-cover drop-shadow-xl hover:drop-shadow-slate-900"
              />
            ) : task.amount === 0 ? (
              <IconsBarcode />
            ) : (
              <IconsDollar />
            )}
          </div>
          {/* <!-- Card like YT --> */}
          <div className="w-full max-w-72 h-full flex items-start justify-center mx-auto bg-cyan-400">
            <div className="w-24 h-full min-h-24 flex items-center justify-center bg-indigo-500 mx-auto ">
              {task.amount === 0 ? <IconsBarcode /> : <IconsDollar />}
            </div>
            <div className="w-full flex flex-col pl-2 pt-2 pb-6 text-center text-slate-900 font-bold text-xl bg-cyan-400">
              <h4
                className={`${
                  task.amount < 0 ? "text-red-500" : "text-amber-400"
                } tracking-wider text-xl`}
              >
                {task.amount === 0 || task.amount}
              </h4>
              <h3
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.concept}
              </h3>
              <h5 className="text-sm ">{task.initAt}</h5>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
