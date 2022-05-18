const express = require('express');

const route = express.Router();

const accountService = require('../accountService/accountService');
const checkAuth = require('../../middleware/checkAuth');

route.post('/accounts', checkAuth, accountService.createAccount);


route.get('/allAccounts', checkAuth, accountService.getAllAccounts)
route.get('/accounts/:accountId', checkAuth, accountService.getByAccountId);
route.put('/updateAccount/:accountId', checkAuth, accountService.updateAccount);
route.delete('/deleteAccount/:accountId', checkAuth, accountService.deleteAccountById)

module.exports = route;