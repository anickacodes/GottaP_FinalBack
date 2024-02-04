const checkName = (req, res, next) => {
  if (req.body.bathroom_name) {
    return next();
  } else {
    res.status(400).json({ error: "Bathroom location name is required" });
  }
};

const checkAddress = (req, res, next) => {
  if (req.body.bathroom_address) {
    return next();
  } else {
    res.status(400).json({ error: "Bathroom address is required" });
  }
};

const checkRating = (req, res, next) => {
  if (req.body.rating) {
    return next();
  } else {
    res.status(400).json({ error: "A rating is required" });
  }
};

module.exports = { checkName, checkAddress, checkRating };
