const express = require('express');
const router = express.Router();
const productRouter = require('./product.router');

// colocar las rutas aquí
router.use('/products', productRouter);

module.exports = router;