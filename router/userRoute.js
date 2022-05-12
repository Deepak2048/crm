const express = require('express');
const bodyParser = require('body-parser');
const route = express.Router()

route.use(bodyParser.urlencoded({extended: false}));
route.use(bodyParser.json());
route.use(express.json())

const userService = require('../services/userService');

route.post('/users', userService.createUSer);

route.get('/users', userService.getAllUser);

route.get('/users/:id', userService.getUserById);
route.get('/user/eamil', userService.getUserByEmail);


module.exports = route;
