import { Server } from "./index"

const app = new Server(5000)
app.start()
app.stop()
