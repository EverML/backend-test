const express = require('express');  
const routes = express.Router();

const EventsController = require('./controllers/EventsController');


routes.get('/events/:id',EventsController.find);
routes.get('/events',EventsController.index);
routes.post('/events',EventsController.create);
routes.put('/events',EventsController.update);
routes.delete('/events/:id',EventsController.delete);








module.exports = routes;