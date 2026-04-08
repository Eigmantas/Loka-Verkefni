const express = require('express');
const router = express.Router();
const sneakerController = require('../Controller/sneakerController');

router.get('/', sneakerController.getHomePage);

module.exports = router;