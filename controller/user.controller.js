import { createToken } from "../authentication.js";
import { User } from "../model/user.model.js";

export default async function registerUser(req, res) {
    try {
        const { email, password } = req.body;
        const isExist = await User.findOne({ email: email })
        if (!isExist) {
            const result = await User.create({ email, password })
            if (result) {
                return res.status(200).json({ message: "User created", data: result });
            }
        }
        else {
            return res.status(400).json({ message: "user already exists" })
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" })
    }
}
