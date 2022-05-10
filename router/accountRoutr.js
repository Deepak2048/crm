const express = require('express');

const route = express.Router();


const accountService = require('../services/accountService');
const swaggerSpec = require('../app');

/**
 * @swagger
 * /account/accounts/:
 *  post:
 *   description: This api is used to check if post method is working or not
 *   responses: 
 *       200:
 *           description: To test the post method
 *   
 */

route.post('/accounts', accountService.createAccount)

module.exports = route;