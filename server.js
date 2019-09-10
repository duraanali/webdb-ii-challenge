const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

const carsRouter = require('./cars/carsRouter');
server.use('/api/cars', carsRouter);

module.exports = server;