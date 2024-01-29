import { AppToDoList } from "../../application/services/app"
import { Response, Request } from "express"

export class ExpressController {
  constructor(readonly appToDoList: AppToDoList) {}
  async addTask(req: Request, res: Response) {
    const dataReq = req.body
    if (!dataReq) {
      return res.send(404)
    } else {
      await this.appToDoList.addTask(dataReq.task)
      res.send("Se ha añadido la data!!")
    }
  }
  async showTasks(req: Request, res: Response) {
    const list = await this.appToDoList.showTasks()
    res.status(200).json(list)
  }
  async deleteTask(req: Request, res: Response) {
    const dataReq = req.body

    if (!dataReq) {
      return res.send(404).send("Necesitas un id")
    } else {
      await this.appToDoList.deleteTask(dataReq.id)
      res.status(200).send({ result: "borrado!" })
    }
  }
  async markTask(req: Request, res: Response) {
    const dataReq = req.body
    if (!dataReq) {
      return res.status(404).send("Necesitas un id")
    } else {
      const response = await this.appToDoList.markTask(dataReq.id)
      // return res.status(200).send(response)
      return res.status(200).send(response)
    }
  }
}
