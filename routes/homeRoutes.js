const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');



router.get('/home/index', { title : 'Home'});

module.exports = router;
