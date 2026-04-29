const mongoose = require("mongoose");

module.exports = mongoose.model("Sale", {
  medicineId: String,
  quantity: Number,
  total: Number,
  date: { type: Date, default: Date.now }
});