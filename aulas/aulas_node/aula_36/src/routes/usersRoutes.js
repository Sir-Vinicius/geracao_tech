const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const usersMiddlewares = require('../middleware/userMiddlewares');

router.get('/user-get', usersControllers.usersGetAll);
router.post('/user-create', usersMiddlewares.middlewareCreateNewUser, usersControllers.userCreate);
router.put('/user-update/:id', usersControllers.userUpdateById);
router.delete('/user-delete/:id', usersControllers.userDeleteById);


module.exports = router;