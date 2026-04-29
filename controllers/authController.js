const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
  const { username, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hash
  });

  res.json({ message: "User created", user });
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) return res.send("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.send("Wrong password");

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({
    message: "Login success",
    token
  });
};