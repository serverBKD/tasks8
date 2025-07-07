import Image from "next/image"
import LinkBar from "../componentes/link-bar.jsx"
// import { IconsBarcode } from "../../public/icons/icons-hugeicons"
// import { toast } from "sonner"

const ImagePlaceholder = "/assets/placeholder-image.webp" // Placeholder image path

export default function CardTasks({ tasks }) {
  console.log("fromCardTasks", tasks)
  return (
    <section className="card_container">
      {tasks?.map((task) => (
        <article className="card_box" key={task?.id - Math.random()}>
          {/* Imagen */}
          <div className="w-full">
            {!task?.img ? (
              <Image src={ImagePlaceholder} alt={task?.concept} width={1080} height={1080} className="card_image" />
            ) : (
              <Image src={task?.img} alt={task?.concept} width={1080} height={1080} className="card_image" />
            )}
          </div>
          {/* <!-- Card like YT --> */}
          <div className="card_info">
            <p
              id="task-concept-card"
              style={{
                textDecoration: task?.completed ? "line-through" : "none",
              }}
            >
              {task.concept}
            </p>
            <p id="task-amount-card" className={`${task.amount < 0 ? "text-x-error" : "text-dark-bg"} `}>
              USD({task.amount === 0 ? "zero" : task.amount})
            </p>
            <p id="task-date-card">{task?.initAt}</p>
          </div>
          {/* <!-- Card like YT --> */}

          <LinkBar />
        </article>
      ))}
    </section>
  )
}
