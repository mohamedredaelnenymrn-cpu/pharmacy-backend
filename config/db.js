const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://mohamedredaelnenymrn_db_user:SHqJ4Ms7AsswGd8O@cluster0.sxfnyes.mongodb.net/?appName=Cluster0");
  console.log("DB connected");
};

module.exports = connectDB;