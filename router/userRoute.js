const express = require('express');
const route = express.Router()

const userService = require('../services/userService');
// /**
//  * @swagger
//  * /users:
//  *  post:
//  *      summary: This api is used to check if pos method is working or not
//  *      description:This api is used to check if pos method is working or not
//  *      responce: 
//  *          200:
//  *              description: To test the post method
//  */
route.post('/users', userService.createUSer);

module.exports = route;