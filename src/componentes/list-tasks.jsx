"use client";
import { toUpdateTask } from "../app/server/actions.ts";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ListTasks({ tasks }) {
	const router  = useRouter();

	const handleToggleTask = async (task) => {
		await toUpdateTask(task);
		router.refresh();
		return;
	};

	return (
		<section className="card h-fit mx-auto flex flex-col items-center bg-1-bg">
			<article className="w-full px-2 py-1 gap-y-1 mb-2">
				{tasks.map((task) => (
					<li
						key={task.id}
						className="flex flex-col justify-between py-1 text-2xl"
					>
						<div
							className={`${
								task.debit ? "bg-indigo-950 text-slate-100" : "bg-indigo-500"
							} w-full flex items-center justify-between px-2 py-4`}
						>
							<p className="">{task.amount}</p>
							<p
								style={{
									textDecoration: task.completed ? "line-through" : "none",
								}}
								className="px-6 text-balance italic truncate max-h-32 line-clamp-3"
							>
								{task.concept}
							</p>
							<button
								type="button"
								aria-label="Toggle task completion"
								onClick={() => handleToggleTask(task)}
								className="cursor-pointer"
							>
								{!task.completed ? "✔️" : "❌"}
							</button>
						</div>
						<div>
							{task?.img && !task.completed && (
								<Image
									src={task.img}
									width={640}
									height={640}
									alt={task?.concept}
									className="w-full h-64 object-cover"
								/>
							)}
						</div>
					</li>
				))}
			</article>
		</section>
	);
}
