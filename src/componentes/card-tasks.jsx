import Image from "next/image";
import LinkBar from "../componentes/link-bar.jsx"
// import { IconsBarcode } from "../../public/icons/icons-hugeicons";

const ImagePlaceholder = "/assets/placeholder-image.webp"; // Placeholder image path

export default function CardTasks({ tasks }) {
	console.log("fromCardTasks", tasks);
	return (
		<section className="card_container">
			{tasks?.map((task) => (
				<article className="card_box" key={task?.id-Math.random()}>
					{/* Imagen */}
					<div className="w-full">
						{!task?.img ?
						(<Image
								src={ImagePlaceholder}
								alt={task?.concept}
								width={1080}
								height={1080}
								className="card_image"	
						/>)
						: (
							<Image
								src={task?.img}
								alt={task?.concept}
								width={1080}
								height={1080}
								className="card_image"
							/>
						)}
					</div>
					{/* <!-- Card like YT --> */}
					<div className="card_info">
						<h4
							className={`${
								task.amount < 0 ? "text-x-error" : "text-x-color"
							} tracking-wider text-3xl`}
						>
							{task.amount === 0 ? 0 : task.amount}
						</h4>
						<p
							style={{
								textDecoration: task?.completed ? "line-through" : "none",
							}}
						>
							{task.concept}
						</p>
						<h5>{task?.initAt}</h5>
					</div>
					{/* <!-- Card like YT --> */}
					<div>
						<LinkBar/>
					</div>
				</article>
			))}
		</section>
	);
}
