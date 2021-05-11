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
    const product = await product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
