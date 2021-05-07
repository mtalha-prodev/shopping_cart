const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => console.log(`server running port ${PORT}`));
