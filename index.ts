import express, {Application} from "express"
import { appConfig } from "./app"
import { dbconnection } from "./Connection/db"

const app: Application = express()

appConfig(app)
dbconnection()

const server = app.listen(2023, () => {
    console.log("Server is up and running")
})

process.on("uncaughtException", (err: Error) => {
    console.log("Shutting down server boss: uncaughtException")
    console.log(err)
    process.exit(1)
})

process.on("unhandledRejection", (reason: any) => {
    console.log("Shutting down server boss: unhandledRejection")
    console.log(reason)
    server.close(() => {
        process.exit(1)
    })
})