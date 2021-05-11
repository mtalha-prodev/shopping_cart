require("dotenv").config();

const connectDB = require("./config/db");
const productData = require("./data/productData");
const product = require("./models/product");

connectDB();

const insertData = async () => {
  try {
    console.log("1 insert data database successfully");
    await product.deleteMany({});

    console.log("2 insert data database successfully");
    await product.insertMany(productData);

    console.log("3 insert data database successfully");

    process.exit();
  } catch (error) {
    console.error("error during data inserting in database");

    process.exit();
  }
};

insertData();
