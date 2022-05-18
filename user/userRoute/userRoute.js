const express = require('express');
const bodyParser = require('body-parser');
const route = express.Router()

route.use(bodyParser.urlencoded({extended: false}));
route.use(bodyParser.json());
route.use(express.json())

const userService = require('../userService/userService');

const checkAuth = require('../../middleware/checkAuth');

route.post('/users', userService.createUSer);

// route.get('/users', userService.getAllUser);

route.get('/users/:id', checkAuth, userService.getUserById);
route.get('/allUsers', checkAuth, userService.getAllUser);
route.get('/user/eamil', userService.getUserByEmail);
route.get('/commanDetails', checkAuth, userService.commanDetails);
route.put('/updateUser/:id',checkAuth, userService.updateUser);
route.delete('/deleteUser/:id', checkAuth, userService.deleteUserById);

module.exports = route;
