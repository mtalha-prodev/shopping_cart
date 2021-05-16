const product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await product.find({});

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await product.findById(req.params.id);

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error id not fetch" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
