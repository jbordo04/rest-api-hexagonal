// import "dotenv/config"
import supertest from "supertest"
import { Server } from "../src/index"
// const PORT = Number(process.env.PORT) || 4560
const PORT = 4560
const server = new Server(PORT)

const app = server.express
const api = supertest(app)

beforeAll(async () => {
  await server.stop()
  await server.start()
})
// beforeEach(async () => {
//   await server.stop()
//   await server.start()
// })

afterAll(async () => {
  // Cierra el servidor después de que todas las pruebas hayan finalizado
  await server.stop()
})

describe("Testing de una API REST", () => {
  it("Getting all task", async () => {
    expect.assertions(2)
    const respo = await api.get("/api/mostrarTasca")

    expect(respo.body.task.length).toBeGreaterThan(0)
    expect(respo.body.task[0].task).toBe("test")
  })

  test("Adding Task", async () => {
    expect.assertions(1)
    await api
      .post("/api/anyadirTasca")
      .send({ task: "Probando test" })
      .expect(200)

    const respo = await api.get("/api/mostrarTasca")

    expect(respo.body.task[1].task).toBe("Probando test")
  })

  it("Marking Task", async () => {
    expect.assertions(2)
    await expect(
      api.post("/api/marcarTasca").send({ id: 2 })
    ).resolves.toHaveProperty("status", 200)

    const resp = await api.get("/api/mostrarTasca")
    expect(resp.body.task[1].completed).toBe(true)
  })

  test("Removing Task", async () => {
    const respo = await api.post("/api/borrarTasca").send({ id: 2 })
    expect.assertions(1)

    expect(respo.body.result).toBe("borrado!")
  })
})
