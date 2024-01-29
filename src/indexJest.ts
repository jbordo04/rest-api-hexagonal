import "dotenv/config"
import { Server } from "./index"
export const PORT = Number(process.env.PORT) || 4000

const app = new Server(3500)
app.start().then(() => {
  console.log(`[APP] - Server is running on: http://localhost:${PORT}/api`)

  // Espera 5 segundos (5000 milisegundos) y luego detén el servidor
  setTimeout(async () => {
    console.log("Tiempo transcurrido. Cerrando el servidor...")

    // Detén el servidor antes de salir
    await app.stop()

    // Sal del proceso
    process.exit()
  }, 5000)
})
