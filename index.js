import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import db from "./model/db.js"
import userRouter from "./routes/user.route.js"
import reviewRouter from "./routes/review.route.js"

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/user", userRouter)
app.use("/review", reviewRouter)

app.listen(3000, () => {
    console.log("server started on 3000")
})