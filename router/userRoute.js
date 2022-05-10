const express = require('express');
const bodyParser = require('body-parser');
const route = express.Router()

route.use(bodyParser.urlencoded({extended: false}));
route.use(bodyParser.json());

const userService = require('../services/userService');
const swaggerSpec = require('../app');

/**
 * @swagger
 * /user/users/:
 *  post:
 *   description: This api is used to check if post method is working or not
 *   properties:
 *      id:
 *         type: integer
 *         description: The auto-generated id of the user.
 *      userName:
 *         type: string
 *         description: Name of the user.
 *      email:
 *         type: string
 *         description: email of the user.
 *      password:
 *         type: string
 *      accountid:
 *         type: string
 *         description: accountId of the user.
 *      createdOn:
 *         type: date
 *      createdBy:
 *         type: integer
 *      updatedOn: 
 *         type: date
 *      updatedBy:
 *         type: integer
 *   responses: 
 *       200:
 *           description: To test the post method
 *   
 */
route.post('/users', userService.createUSer);

module.exports = route;