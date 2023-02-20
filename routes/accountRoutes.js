const express = require('express');
const router = express.Router();
const accountControllers = require('../controllers/accountControllers');

router.get('/account/login', { title : 'Login'});
router.post('/account/login', { title : 'Login'});



module.exports = router;