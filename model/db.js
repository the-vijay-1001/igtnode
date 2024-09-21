import mongoose from "mongoose";

mongoose.connect("mongodb+srv://theingeious:PFxT8slQbOqO4iSk@cluster0.u52ofoy.mongodb.net/nodetest").then(() => {
    console.log("db connected")
}).catch((e) => {
    console.log("something went wrong", e)
})

export default mongoose.connection;