import express from "express"
import registerUser from "../controller/user.controller.js";
import createReview from "../controller/review.controller.js";
import { auth } from "../authentication.js";
import editReview from "../controller/review.edit.js";
import getReview from "../controller/getReview.js";

const router = express.Router()

router.post("/create", auth, createReview);
router.post("/list", auth, getReview);

router.post("/edit", auth, editReview);

export default router;