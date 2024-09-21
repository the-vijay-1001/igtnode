import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    title: {
        type: String,
        required: true
    },
    studentsWatched: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true });


export const Review = mongoose.model("review", reviewSchema);