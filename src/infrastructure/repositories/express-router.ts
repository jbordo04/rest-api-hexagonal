import { expressController } from "../services/dependencias";
import express from "express";

const router = express.Router();

router.post("/anyadirTasca", expressController.addTask.bind(expressController));
router.get(
  "/mostrarTasca",
  expressController.showTasks.bind(expressController)
);
router.post("/marcarTasca", expressController.markTask.bind(expressController));
router.post(
  "/borrarTasca",
  expressController.deleteTask.bind(expressController)
);

export { router };
