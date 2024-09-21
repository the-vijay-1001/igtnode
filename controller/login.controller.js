import { createToken } from "../authentication.js";
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken"

export default async function (req, res) {
    try {
        const { email, password } = req.body;
        const isExist = await User.findOne({ email: email, password: password })
        if (!isExist) {
            return res.status(404).json({ message: "invalid credential!" })
        }
        else {
            const JWT_SECRET = "dajsf9u4o5ijh43j"
            const token = createToken(isExist, JWT_SECRET)
            if (token) {
                return res.status(200).json({ message: "login success", data: isExist, token: token });
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}