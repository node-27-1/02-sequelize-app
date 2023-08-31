const express = require('express');
const router = express.Router();
const productRouter = require('./product.router');
const carRouter = require('./car.router');

// colocar las rutas aquí
router.use('/products', productRouter);
router.use('/cars', carRouter);

module.exports = router;
