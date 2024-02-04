const db = require("../db/dbConfig");

const getReviews = async () => {
  try {
    const reviews = await db.any("SELECT * FROM BathroomReviews");
    return reviews;
  } catch (error) {
    return error;
  }
};

const getReview = async (id) => {
  try {
    const review = await db.one(
      "SELECT * FROM BathroomReviews WHERE review_id=$1",
      id
    );
    return review;
  } catch (error) {
    return error;
  }
};

const createReview = async (review) => {
  try {
    const { bathroom_name, bathroom_address, rating, description } = review;
    const newReview = await db.one(
      "INSERT INTO bathroomReviews (bathroom_name, bathroom_address, rating, description ) VALUES ($1, $2, $3, $4) RETURNING *",
      [bathroom_name, bathroom_address, rating, description]
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
      "UPDATE BathroomReviews SET description=$1, rating=$2, bathroom_name=$3, bathroom_adress=$4 WHERE id=$5 RETURNING *",
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
      "DELETE FROM BathroomReviews WHERE review_id=$1 RETURNING *",
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
