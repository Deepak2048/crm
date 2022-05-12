const express = require('express');

const route = express.Router();

const accountService = require('../services/accountService');

route.post('/accounts', accountService.createAccount)

/**
 * @swagger
 * /account/accounts/:
 *  get:
 *      description: This api is used to check if post method is working or not
 *      responses:
 *          200:
 *              description: All the accounts details are listed successfully
 */

route.get('/accounts', accountService.getAllAccounts)
route.get('/accounts/:accountId', accountService.getByAccountId);

module.exports = route;