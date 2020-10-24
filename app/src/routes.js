const express = require('express');  
const routes = express.Router();
const passport = require('passport');
const EventsController = require('./controllers/EventsController');


routes.get('/events/:id',EventsController.find);
routes.get('/events',EventsController.index);
routes.post('/events',passport.authenticate('local'),EventsController.create);
routes.put('/events',EventsController.update);
routes.delete('/events/:id',passport.authenticate('login'),EventsController.delete);








module.exports = routes;