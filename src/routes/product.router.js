const { getAll } = require('../controllers/product.controllers');
const express = require('express');

const productRouter = express.Router();

productRouter.route("/")
		.get(getAll)

module.exports = productRouter;
