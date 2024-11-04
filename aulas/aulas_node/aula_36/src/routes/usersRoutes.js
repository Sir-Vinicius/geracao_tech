const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');

router.post('/create', usersControllers.userCreate);
router.get('/list', usersControllers.userList);


module.exports = router;