const express = require('express');
const departmetController = require('./controllers/departmentsController');
const userController = require('./controllers/userController');
const { request, response } = require('express');

const routes = express.Router();

// Routes for ::Departments::
routes.get('/departments', departmetController.list);
routes.post('/departments', departmetController.creat);
routes.delete('/departments/:departmentId', departmetController.remove);

// Routes for ::Users::
routes.get('/users', userController.list);
routes.post('/users', userController.creat);

module.exports = routes;