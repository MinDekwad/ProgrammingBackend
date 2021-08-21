const express = require('express');
const route = express.Router();
const userController = require('../controller/user');

route.post('/login', userController.programLogin);

module.exports = route;