const mongoose = require("mongoose");

module.exports = mongoose.model("Supplier", {
  name: String,
  contact: String
});