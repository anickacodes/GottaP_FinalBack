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

const createReview = async (review) => {
  try {
    const { bathroom_id, rating, comments } = review;
    const newBathroom = await db.one(
      "INSERT INTO bathroom (bathroom_id) VALUES ($1) RETURNING *",
      bathroom_id
    );

    const newReview = await db.one(
      "INSERT INTO reviews (bathroom_id, rating, comments ) VALUES ($1, $2, $3) RETURNING *",
      [bathroom_id, rating, comments]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

const updateReview = async (id) => {
  try {
    const { bathroom_id, rating, comments } = review;
    const updatedReview = await db.one(
      "UPDATE reviews SET bathroom_id=$1, rating=$2, comments=$3, WHERE id=$4 RETURNING *",
      [bathroom_id, rating, comments, id]
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
