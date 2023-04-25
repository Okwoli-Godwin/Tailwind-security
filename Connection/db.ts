import mongoose from "mongoose"

const URI: string = "mongodb://localhost/Tailwind"

export const dbconnection = async () => {
    try {
        const conn = await mongoose.connect(URI);
        if (
            mongoose.connection.host === "localhost"
        ) {
            console.log("connected to localhost")
        } else (
            console.log("Database is live now")
        )
    } catch (error) {
        console.log("failed to connect to the database")
    }
}