import "dotenv/config";
import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import { router } from "./infrastructure/repositories/express-router";
export const PORT = Number(process.env.PORT) ?? 4000;

// const corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// }
export class Server {
  readonly port: number;
  readonly express: express.Application;
  constructor(port: number) {
    this.port = port;
    this.express = express();
    this.express.use(cors());
    this.express.use(urlencoded({ extended: true }));
    this.express.use(json());
    this.express.use("/api", router);
  }

  async start() {
    await new Promise<void>((resolve) => {
      this.express.listen(this.port, async () => {
        console.log(
          `[APP] - Server is running on: http://localhost:${this.port}/api`
        );
        resolve();
      });
    });
  }
}

new Server(PORT).start();
