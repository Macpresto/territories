const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');
const isAuthenticated = require('../middlewares/authentication');




router.get('/home/index', isAuthenticated,homeControllers.list_territories);

module.exports = router;
