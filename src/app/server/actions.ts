"use server";
import prisma from "../../db/db.prisma.js";
import { Buffer } from "node:buffer";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import path from "node:path";
import { existsSync, mkdirSync } from "node:fs";
import { SubirFiles } from "../../services/firebase.config.js";

//TODO: Seguridad en las Cookies

let NAME: string | undefined;

let URL: string | undefined;
let FILE: string | undefined;
let buffer: Buffer | undefined;

type FormData = {
  get: {(key: string) : string | File | undefined}
}

interface Task {
  id?: string
  concept?: string 
  amount?: Number 
  debit?: string 
  img?: string | URL 
  notes?: string 
  initAt?: string 
  completed?: boolean
}

//! Tasks

export async function toGetTasks() {
  const $Task = await prisma.Tasks.findMany({
    orderBy: [
      {
        completed: "asc",
      },
      {
        createdAt: "desc",
      },
    ],
  });
  return $Task;
}

export async function toAddTask($AddTask: Task) {
  const { concept, amount, debit, img, notes, initAt } = $AddTask;
  const $newTask = await prisma.Tasks.create({
    data: {
      concept,
      amount,
      debit,
      img,
      notes,
      source: "form-task",
      initAt,
    },
  });

  if (!$newTask) return;
  return $newTask;
}

export async function toUpdateTask(updateTask: Task) {
  const { id, completed } = updateTask;
  if (!id) return;
  const $idTask = await prisma.Tasks.findFirst({
    where: {
      id: id,
    },
  });
  if (!$idTask) return;

  await prisma.Tasks.update({
    where: {
      id: id,
    },
    data: {
      completed: !completed,
    },
  });
  //. Revalidar la ruta para que se vea el cambio en la UI
  revalidatePath("/");
  return;
}

export async function toDeleteTask(deleteTask: Task) {
  const $idTask = await prisma.Tasks.findFirst({
    where: {
      concept: `${deleteTask}`,
    },
  });
  if (!$idTask) return;
  const $TASK = await prisma.Tasks.delete({
    where: {
      id: $idTask.id,
    },
  });
  return $TASK;
}

//! Image -> Firebase Storage

export async function toAddImage(payload: FormData) {
  const CATEGORY = payload.get("category") || "server241";
  const IMAGE = payload.get("img");
  if (typeof IMAGE !== "string" && IMAGE?.name) {
    NAME = IMAGE.name.toLowerCase();
  }
  if (IMAGE === "undefined") {
    return { message: "no image" };
  }

  //. Convertir FormData en Buffer: Archivo cargado en Memoria RAM
  if (typeof IMAGE !== "string" && IMAGE?.arrayBuffer) {
    const bytes = await IMAGE.arrayBuffer();
    buffer = Buffer.from(bytes);
  } else {
    return { message: "Invalid image format" };
  }

  //. Guardar archivo en Carpeta Public
  const newFolder = typeof CATEGORY === "string" ? CATEGORY : "repoImg";
  const imagePath = `${CATEGORY}-${new Date().getTime()}-server241-${NAME}`;
  const newPath = path.join(process.cwd(), "public", "repo", newFolder);

  //! save at local in DEV
  if (process.env.NODE_ENV === "development") {
    if (!existsSync(newPath)) {
      mkdirSync(newPath, { recursive: true });
    }
    const localFilePath = path.join(newPath, imagePath);
    await writeFile(localFilePath, buffer);
  }

  try {
    //. Subir al Bucket Firebase
    const imageURL = await SubirFiles(buffer, NAME);
    console.log(imageURL);
    if (!imageURL) {
      const localFilePath = path.join(newPath, imagePath); // Ensure localFilePath is defined
      return { message: localFilePath };
    }
    return { message: imageURL };
  } catch (error) {
    console.log(error);
  }
}

//TODO: hacer function separada a firebase: 02-11-24