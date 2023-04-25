import express, {Request, Response} from "express"
import Usermodel from "../Model/Usermodel"
import bcrypt from "bcrypt"

export const signinUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, token } = req.body;

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(salt, password)

        const user = Usermodel.create({
            name,
            email,
            password: hash,
            token
        })


        return res.status(200).json({
            message: "user signedin successfully",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            message: "cannot signin user"
        })
    }
}