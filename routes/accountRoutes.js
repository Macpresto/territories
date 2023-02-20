const express = require('express');
const router = express.Router();
const accountControllers = require('../controllers/accountControllers');

router.get('/account/login', accountControllers.login_page);
router.post('/account/login', accountControllers.account_login);


module.exports = router;