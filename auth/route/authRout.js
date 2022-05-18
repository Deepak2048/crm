const express  = require('express');
const route = express.Router();

const authService = require('../services/authService');

route.post('/signUp', authService.register)
route.post('/login' , authService.login)

module.exports = route
