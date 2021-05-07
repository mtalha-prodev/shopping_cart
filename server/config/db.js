require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connection Success");
  } catch (error) {
    console.error("MongoDB Connection Fail");
  }
};

module.exports = connectDB;
