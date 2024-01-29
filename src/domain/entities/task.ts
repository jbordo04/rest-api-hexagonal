export class Task {
  constructor(
    readonly id: number,
    readonly task: string,
    readonly completed: boolean
  ) {
    this.id = id;
    this.task = task;
    this.completed = completed;
  }
}

export interface IAppToDo {
  addTask(task: string): void;
  showTasks(): void;
  deleteTask(id: number): void;
  markTask(id: number): void;
}
