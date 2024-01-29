import { Task } from "../entities/task"

export interface TaskRepository {
  add(task: string): Promise<Task | null>
  mark(id: number): Promise<Task | null>
  show(): Promise<Task[]>
  remove(id: number): Promise<void>
}
