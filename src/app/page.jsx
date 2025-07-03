"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { OrbitronBlackFont } from "../services/fonts/fonts.js";
import {
  toAddImage,
  toGetTasks,
  toAddTask,
  toDeleteTask,
} from "./server/actions.ts";
import ListTasks from "../componentes/list-tasks.jsx";
import CardTasks from "../componentes/card-tasks.jsx";

const toFormatDate = () => {
  const date = new Date(Date.now());
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString().slice(-2);
  return `${day}${month}${year}`;
};
const $FormattedDate = toFormatDate();

const TaskPage = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [image, setImg] = useState("");
  const [isCard, setIsCard] = useState(false);
  const [Kyrye, setKyrye] = useState("Kyrye");

  useEffect(() => {
    const $getTasks = async () => {
      const $tasksInitial = await toGetTasks();
      setTasks($tasksInitial);
      setKyrye(localStorage.getItem("kyrye"));
    };
    $getTasks();
  }, []);

  //! Select between Card and List
  const handleIsCard = (evt) => {
    evt.preventDefault();
    setIsCard(!isCard);
    console.log({ isCard });
    return;
  };

  //! Save the image on the cloud
  const handleUpImage = async (evt) => {
    const file = evt.target.files[0];
    const formData = new FormData();
    formData.append("img", file);
    formData.append("category", "tasks-app");
    const imgUrl = await toAddImage(formData);
    setImg(imgUrl.message);
    console.log({ imgUrl });
    return;
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  let task = {};

  const handleAddTask = async () => {
    if (newTask.trim() === "") return;

    if (newTask.includes(":")) {
      const partTask = newTask.split(":");

      if (partTask[1] === "del") return await toDeleteTask(partTask[0]);

      if (partTask[1] === "kyrye") {
        setKyrye(partTask[0]);
        // guardar el nombre en el localStorage o en una base de datos
        localStorage.setItem("kyrye", partTask[0]);
        return;
      }

      task = {
        concept: partTask[1],
        debit: parseFloat(partTask[0]) < 0 ?? false,
        notes: partTask[1].includes("kyrye") ? partTask[0] : "",
        img: image,
        initAt: $FormattedDate,
        amount: parseFloat(partTask[0]) || 0,
      };
    } else {
      task = {
        concept: newTask,
        debit: false,
        img: image,
        initAt: $FormattedDate,
        amount: parseFloat(newTask) || 0,
      };
    }

    setTasks([...tasks, task]);
    setNewTask("");

    try {
      const AddTask = await toAddTask(task);
      console.log({ AddTask });
      setImg("");
      router.refresh();
      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className={`${OrbitronBlackFont.className} w-full min-h-screen lg:pt-4 flex flex-col justify-start overflow-hidden tracking-wider text-1-text bg-1-bg`}
    >
      <article className="card h-fit mx-auto">
        <h1 className="text-center pt-8 pb-2 text-4xl">
          Tasks Manager
        </h1>
        <section className="flex flex-col pt-4 ">
          <div className="flex justify-between">
            <input
              type="text"
              value={newTask}
              onChange={handleInputChange}
              placeholder="+ new task"
              className="w-full h-24 bg-1-link focus:bg-1-accent focus:text-dark-text text-2xl pl-2 py-2 placeholder-dark-text placeholder:pl-2 focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0 sm:rounded-tl-lg"
            />
            <button
              type="button"
              onClick={handleAddTask}
              className="w-48 h-24 bg-1-link hover:bg-1-accent text-dark-text text-6xl font-bold cursor-pointer sm:rounded-tr-lg"
            >
              +
            </button>
          </div>
          <input
            type="file"
            name="img"
            id="img"
            className='<input type="file" class="block w-full text-xs bg-1-link hover:file:bg-1-accent file:mr-2 file:px-4 file:py-1 file:border-0 file:placeholder:text-1-link" />'
            onChange={(evt) => handleUpImage(evt)}
            accept="image/png, image/jpeg, image/jpg"
          />
        </section>
        {/* <!-- isCard - isList --> */}
        <section className="w-full">
          <input
            type="button"
            value={isCard ? "List" : "Cards"}
            onClick={(evt) => handleIsCard(evt)}
            className="w-full h-24 py-2 cursor-pointer uppercase text-center text-2xl font-bold sm:rounded-b-xl bg-1-link hover:bg-1-hover"
          />
        </section>
      </article>
      {/* <!-- Word of Week --> */}
      <section>
        <h2
          className={`${OrbitronBlackFont.className} text-4xl uppercase underline py-6 text-center`}
        >
          {Kyrye}
        </h2>
      </section>
      <section className="w-full max-w-7xl mx-auto bg-1-bg">
        {!isCard ? <CardTasks tasks={tasks} /> : <ListTasks tasks={tasks} />}
      </section>
    </section>
  );
};

export default TaskPage;
