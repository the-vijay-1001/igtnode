import express from "express"
import registerUser from "../controller/user.controller.js";
import login from "../controller/login.controller.js"

const router = express.Router()

router.post("/register", registerUser);
router.post("/login", login);

export default router;