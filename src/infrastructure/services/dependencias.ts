import { AppToDoList } from "../../application/services/app";
import { ExpressController } from "../repositories/express-controller";
import { InMemoryTaskRepository } from "./in-memory-express-repository";

export const inMemoryTaskRepository = new InMemoryTaskRepository();

export const Applic = new AppToDoList(inMemoryTaskRepository);

export const expressController = new ExpressController(Applic);
