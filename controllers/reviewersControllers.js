const express = require("express");
const reviewers = express.Router();
require("dotenv").config();
const {
  getReviwers,
  getReviewer,
  createReviewer,
} = require("../queries/reviewers.js");

reviewers.get("/", async (req, res) => {
  try {
    const reviewers = await getReviwers();
    res.status(200).json(reviewers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
reviewers.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reviewer = await getReviewer(id);
    res.status(200).json(reviewer);
  } catch (error) {
    res.status(400).json({ error: "Not found" });
  }
});
reviewers.post("/", async (req, res) => {
  try {
    const newReviewer = await createReviewer(req.body);
    res.status(401).json(newReviewer);
  } catch (error) {
    res.status(400).json({ error: "Not found" });
  }
});

module.exports = reviewers;
