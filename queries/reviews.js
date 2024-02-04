const db = require("../db/dbConfig");

const getReviews = async (id) => {
  try {
    const reviews = await db.any(
      "SELECT * FROM reviews WHERE bathroom_id = $1",
      id
    );
    return reviews;
  } catch (error) {
    return error;
  }
};

const getReview = async (id) => {
  try {
    const review = await db.one(
      "SELECT * FROM reviews WHERE bathroom_id=$1",
      id
    );
    return review;
  } catch (error) {
    return error;
  }
};

const createReview = async (reviews) => {
  try {
    const {rating, comments, bathroom_id } = reviews;
    const newBathroom = await db.one(
      "INSERT INTO bathroom (bathroom_id) VALUES ($1) RETURNING *",
      bathroom_id
    );

    const newReview = await db.one(
      "INSERT INTO reviews (rating, comments, bathroom_id) VALUES ($1, $2, $3) RETURNING *",
      [rating, comments, bathroom_id]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

const updateReview = async (id) => {
  try {
    const {rating, comments, bathroom_id} = review;
    const updatedReview = await db.one(
      "UPDATE reviews SET rating=$1, comments=$2, bathroom_id=$3, WHERE id=$4 RETURNING *",
      [rating, comments, bathroom_id, id]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE review_id=$1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
