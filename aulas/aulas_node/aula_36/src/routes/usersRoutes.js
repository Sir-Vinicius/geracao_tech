const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');

router.post('/user-create', usersControllers.userCreate);
router.get('/user-list', usersControllers.userList);


module.exports = router;