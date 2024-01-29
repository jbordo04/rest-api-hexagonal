import "dotenv/config"
import { Server } from "./index"
export const PORT = Number(process.env.PORT) || 4000

const app = new Server(3500)
app.start().then(() => {
  // Espera 5 segundos (5000 milisegundos) y luego deténemos forzadamente el servidor
  setTimeout(async () => {
    console.log("Tiempo transcurrido. Cerrando el servidor...")

    // Detén el servidor antes de salir
    await app.stop()

    // Salimos del proceso === ctrl + C
    process.exit()
  }, 5000)
})
