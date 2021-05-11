const express = require("express");
const {
  getAllProducts,
  getProductById,
} = require("../controller/productsControllers");

const router = express.Router();

// get all products for db
// get all /api/porducts
// access public
router.get("/", getAllProducts);

// get all products for db
// get all /api/porducts/:id
// access public
router.get("/:id", getProductById);

module.exports = router;
