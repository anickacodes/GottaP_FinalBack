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
      "SELECT * FROM bathroomreviews WHERE review_id=$1",
      id
    );
    return review;
  } catch (error) {
    return error;
  }
};

const createReview = async (review) => {
  try {
    const { bathroom_id, rating, description } = review;
    const newBathroom = await db.one(
      "INSERT INTO bathroom (bathroom_id) VALUES ($1) RETURNING *",
      bathroom_id
    );

    const newReview = await db.one(
      "INSERT INTO reviews (bathroom_id, rating, description ) VALUES ($1, $2, $3) RETURNING *",
      [bathroom_id, rating, description]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

const updateReview = async (id) => {
  try {
    const { description, rating, bathroom_name, bathroom_adress } = review;
    const updatedReview = await db.one(
      "UPDATE bathroomreviews SET description=$1, rating=$2, bathroom_name=$3, bathroom_adress=$4 WHERE id=$5 RETURNING *",
      [description, rating, bathroom_name, bathroom_adress, id]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM bathroomreviews WHERE review_id=$1 RETURNING *",
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
