import express from "express"
import "dotenv/config"
import { startDB } from "./src/config/database.js"
import { userRoutes } from "./src/routers/user.routes.js"
import { personRoutes } from "./src/routers/person.routes.js"

const app = express()
app.use(express.json())

const PORT = process.env.PORT 
app.use("/api", userRoutes)
app.use("/api", personRoutes)

app.listen(PORT, async () => {
    console.log("server prendido");
    await startDB()
})