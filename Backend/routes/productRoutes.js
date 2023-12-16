const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/asyncHandler.js");
const Product = require("../models/productModel.js");
const {getProducts,getProductById} = require('../controllers/productControllers.js')

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

module.exports = router;
