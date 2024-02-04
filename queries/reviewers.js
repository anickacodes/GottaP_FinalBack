const db = require("../db/dbConfig");

const getReviewers = async () => {
    try {
        const reviewers = await db.any("SELECT * FROM reviewers")
        return reviewers  
    } catch (error) {
        return error
    }
}

const getReviewer = async (id) => {
    try {
      const reviewer = await db.one("SELECT * FROM reviewers WHERE reviewer_id=$1",
        id
      );
      return reviewer;
    } catch (error) {
      return error;
    }
  }

  const createReviewer = async (reviewer) => {
    try {
      const { first_name, last_name} = reviewer;
      const newReviewer = await db.one(
        "INSERT INTO reviewers (first_name, last_name) VALUES ($1, $2) RETURNING *",
        [first_name, last_name]
      );
      return newReviewer;
    } catch (error) {
      return error;
    }
  };


module.export = {
    getReviewers, 
    getReviewer,
    createReviewer
}