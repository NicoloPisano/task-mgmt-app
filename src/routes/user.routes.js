'use strict';
const express = require('express');
const api = express.Router();
const userController = require('../controllers/user.controller');


api.post('/user', 
  userController.createUser);

module.exports = api;
