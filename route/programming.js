const express = require('express');
const route = express.Router();
const programmingController = require('../controller/programming');

route.get('/read/', programmingController.programRead);
route.get('/readid/:id', programmingController.programReadID);
route.post('/create/', programmingController.programCreate);
route.put('/update/:id', programmingController.programUpdate);
route.delete('/delete/:id', programmingController.programDelete);

module.exports = route;