const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.send("Access denied");

  try {
    const verified = jwt.verify(token, "secret");
    req.user = verified;
    next();
  } catch {
    res.send("Invalid token");
  }
};