const express = require('express');
const router = express.Router();
const sneakerController = require('../controllers/sneakerController');

router.get('/', sneakerController.getHomePage);
router.get('/products', sneakerController.getProductsPage);
router.get('/product/:id', sneakerController.getProductDetail);

module.exports = router;