import express, {Application} from "express"
import { appConfig } from "./app"
import { dbconnection } from "./Connection/db"

const app: Application = express()

appConfig(app)
dbconnection()

app.listen(2023, () => {
    console.log("Server is up and running")
})