const express = require('express');

const WeatherController = require('./controllers/WeatherController')




const routes = express.Router();

//routes.get('/historic', WeatherController.index);
//routes.post('/', WeatherController.create);


module.exports = routes;

