const express = require('express');

const route = express.Router();


const accountService = require('../services/accountService');


route.post('/accounts', accountService.createAccount)

module.exports = route;