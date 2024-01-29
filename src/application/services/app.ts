import { IAppToDo } from "../../domain/entities/task";
import { TaskRepository } from "../../domain/interfaces/task-repository";

export class AppToDoList implements IAppToDo {
  constructor(private readonly taskRepository: TaskRepository) {}

  async addTask(task: string) {
    const resp = await this.taskRepository.add(task);
    // const resp = await add(task)
    console.log("added", task);
    return resp;
  }
  async showTasks() {
    const response = await this.taskRepository.show();
    console.log("shows");
    return response;
  }
  async deleteTask(id: number) {
    const response = await this.taskRepository.remove(id);
    console.log("borrado", id);
    return response;
  }
  async markTask(id: number) {
    const task = this.taskRepository.mark(id);
    console.log("marcado", id);
    return task;
  }
}
