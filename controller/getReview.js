import { Review } from "../model/review.model.js"

export default async function getReview(req, res) {
    try {
        const result = await Review.find();
        if (result) {
            return res.status(200).json({ message: "Review listing", data: result });
        }
        else {
            return res.status(400).json({ message: "something went wrong" })
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" })
    }
}

