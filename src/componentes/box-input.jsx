"use client";
import { useDebounce } from "../services/hooks.ts";
import { AddImage, AddTask, GetTasks, DeleteTask } from "../app/server/actions.ts";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ListTasks from "../componentes/list-tasks.jsx";
import CardTasks from "../componentes/card-tasks.jsx";
import BoxWord from "../componentes/box-word.jsx";

const FormattedDate = () => {
  const date = new Date(Date.now());
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString().slice(-2);
  return `${day}${month}${year}`;
};
const _FormattedDate = FormattedDate();

export default function BoxInput() {
  const router = useRouter();

  const [Phrase, setPhrase] = useState("Phrase");

  useEffect(() => {
    const _getTasks = async () => {
      const _tasksInitial = await GetTasks();
      setTasks(_tasksInitial);
      setPhrase(localStorage.getItem("phrase"));
    };
    _getTasks();
  }, []);

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [image, setImg] = useState("");
  const [isCard, setIsCard] = useState(false);

  //! Save the image on the cloud
  const handleUpImage = async (evt) => {
    const file = evt.target.files[0];
    const formData = new FormData();
    formData.append("img", file);
    formData.append("category", "tasks-app");
    const imgUrl = await AddImage(formData);
    setImg(imgUrl.message);
    console.log({ imgUrl });
    return;
  };

  const handleInputChange = useDebounce(newTask, 500);

  let task = {};

  const handleAddTask = async () => {
    if (newTask.trim() === "") return;

    if (handleInputChange.includes(":")) {
      const partTask = newTask.split(":");

      if (partTask[1] === "del") return await DeleteTask(partTask[0]);

      if (partTask[1] === "kyrye") {
        setPhrase(partTask[0]);
        // guardar el nombre en el localStorage o en una base de datos
        localStorage.setItem("phrase", partTask[0]);
        return;
      }

      task = {
        concept: partTask[1],
        debit: parseFloat(partTask[0]) < 0 ?? false,
        notes: partTask[1].includes("kyrye") ? partTask[0] : "",
        img: image,
        initAt: _FormattedDate,
        amount: parseFloat(partTask[0]) || 0,
      };
    } else {
      task = {
        concept: newTask,
        debit: false,
        img: image,
        initAt: _FormattedDate,
        amount: parseFloat(newTask) || 0,
      };
    }

    setTasks([...tasks, task]);
    setNewTask("");

    try {
      const addTask = await AddTask(task);
      console.log({ addTask });
      setImg("");
      router.refresh();
      return;
    } catch (error) {
      console.error(error);
    }
  };

  //! Select between Card and List
  const handleIsCard = (evt) => {
    evt.preventDefault();
    setIsCard(!isCard);
    return;
  };

  return (
    <section>
      <article className="box_input">
        {/* <!-- Word of Week --> */}
        <section className="flex flex-col pt-4 ">
          <div className="flex justify-between">
            <input
              type="text"
              value={newTask}
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
              placeholder="+ new task"
              className="w-full h-24 bg-x-link focus:bg-x-accent focus:text-dark-text text-2xl pl-2 py-2 placeholder-dark-text placeholder:pl-2 focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0 sm:rounded-tl-lg"
            />
            <button
              type="button"
              onClick={handleAddTask}
              className="w-48 h-24 bg-x-link hover:bg-x-accent text-dark-text text-6xl font-bold cursor-pointer sm:rounded-tr-lg"
            >
              +
            </button>
          </div>
          <input
            type="file"
            name="img"
            id="img"
            className='<input type="file" class="block w-full text-xs bg-x-link hover:file:bg-x-accent file:mr-2 file:px-4 file:py-1 file:border-0 file:placeholder:text-x-link" />'
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
            className="w-full h-24 py-2 cursor-pointer uppercase text-center text-2xl font-bold sm:rounded-b-xl bg-x-link hover:bg-x-hover"
          />
        </section>
        <BoxWord Phrase={Phrase} />
      </article>
      {/* <!-- Tasks --> */}
      <section>{!isCard ? <CardTasks tasks={tasks} /> : <ListTasks tasks={tasks} />}</section>
    </section>
  );
}

//TODO: Tailwind CSS -> CSS native
