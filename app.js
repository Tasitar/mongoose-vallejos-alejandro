import express from "express"
import "dotenv/config"
import { startDB } from "./src/config/database.js"

const app = express()
app.use(express.json())

const PORT = process.env.PORT 


app.listen(PORT, async () => {
    console.log("server prendido");
    await startDB()
})