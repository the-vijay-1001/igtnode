import { Review } from "../model/review.model.js"

export default async function editReview(req, res) {
    try {
        const { image, stars, title, studentsWatched } = req.body;
        const review = await Review.findByIdAndUpdate(req.body.id, { image, stars, title, studentsWatched }, { new: true });
        if (review) {
            return res.status(200).json({ message: "review updated", data: review })
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" })
    }
}

