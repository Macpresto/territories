const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');



router.get('/home/index', homeControllers.home_page);

module.exports = router;
