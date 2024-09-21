import { Review } from "../model/review.model.js"

export default async function createReview(req, res) {
    try {
        const { image, stars, title, studentsWatched, user } = req.body;
        console.log(req.body);
        const result = await Review.create({ image, stars, title, studentsWatched, user })
        if (result) {
            return res.status(200).json({ message: "Review Created",data:result });
        }
        else {
            return res.status(400).json({ message: "something went wrong" })
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" })
    }
}

