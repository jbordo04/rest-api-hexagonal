import { Task } from "../../domain/entities/task"
import { TaskRepository } from "../../domain/interfaces/task-repository"
// import json from "./TaskDB.json";
import fs from "fs"

export const readFile = async () => {
  const response = await fs.promises.readFile(
    "src/infrastructure/database/TaskDB.json",
    "utf8"
  )
  // console.log(response);
  return JSON.parse(response)
}

export const writeJSON = async (data: object) =>
  fs.promises.writeFile(
    "src/infrastructure/database/TaskDB.json",
    JSON.stringify(data)
  )

export class InMemoryTaskRepository implements TaskRepository {
  async add(task: string): Promise<Task | null> {
    const resp = await readFile()
    const dataObject = new Task(resp.index, task, false)
    resp.task.push(dataObject) //FIXME
    resp.index += 1
    await writeJSON(resp)
    return dataObject
  }
  // console.log(add('hola'))
  async show(): Promise<Task[]> {
    const response = await readFile()
    return response
  }

  async remove(id: number): Promise<void> {
    const resp = await readFile()
    const valueIndex = resp.task.findIndex((value: Task) => value.id == id)

    if (valueIndex === -1) throw new Error("No existe esta tasca")

    resp.task.splice(valueIndex, 1) // it return value eliminated, we dont save it
    await writeJSON(resp)
  }

  async mark(id: number): Promise<Task | null> {
    const resp = await readFile()
    const valueIndex = resp.task.findIndex((value: Task) => value.id == id)

    if (valueIndex === -1) throw new Error("No existe esta tasca")

    resp.task[valueIndex].completed = true
    await writeJSON(resp)
    return resp.task[valueIndex]
  }
}
