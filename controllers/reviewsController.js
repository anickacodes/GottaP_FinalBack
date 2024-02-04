// Reviews Controller

const express = require("express")
const reviews = express.Router()
const { getReviews, getReview, createReview} = require("../queries/reviews")
const {checkComments, checkRating} =require("../validations/checkReviews")

reviews.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const reviews = await getReviews(id)
        res.status(200).json(reviews)
    } catch (error) {
        res.status(404).json({error: error})
    }
})


reviews.get("/:id", async (req, res) => {
    const {id} = req.params
    try {
        const review = await getReview(id)
        res.status(200).json(review)
    } catch (error) {
        res.status(404).json({error: error})
    }
})

reviews.post("/", checkRating, checkComments, async (req, res) => {
    try {
        const createdReview = await createReview(req.body)
        res.status(201).json(createdReview)
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})


module.exports = reviews