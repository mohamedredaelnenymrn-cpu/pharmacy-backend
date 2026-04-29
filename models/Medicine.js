const mongoose = require("mongoose");

module.exports = mongoose.model("Medicine", {
  name: String,
  price: Number,
  quantity: Number,
  expiryDate: Date
});