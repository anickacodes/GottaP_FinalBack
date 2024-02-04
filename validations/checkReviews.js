const checkComments = (req, res, next) => {
  if (req.body.comments) {
    return next();
  } else {
    res.status(400).json({ error: "A comment is required" });
  }
};

const checkRating = (req, res, next) => {
  if (req.body.rating) {
    return next();
  } else {
    res.status(400).json({ error: "A rating is required" });
  }
};

module.exports = { checkComments, checkRating };
