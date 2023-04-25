import mongoose from "mongoose";

interface userData {
    name: string,
    email: string,
    password: string,
    token: string
}

interface IuserData extends userData, mongoose.Document { };

const userModel = new mongoose.Schema(
    {
        name: {
            type: String
        },

        email: {
            type: String
        },
        
        password: {
            type: String,
        },
        
        token: {
            type: String
        }
    },
    {timestamps: true}
)

export default mongoose.model<IuserData>("user", userModel)