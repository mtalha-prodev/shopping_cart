const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRouter = require("./routes/productRouter");

connectDB();

const app = express();
app.use(express.json());

app.use("/api/products", productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running port ${PORT}`));
