const express = require('express');  
const routes = express.Router();

const token = require('./middlewares/token');
const EventsController = require('./controllers/EventsController');
const UsersController = require('./controllers/UsersController');

routes.get('/events/featured',EventsController.featured);
routes.get('/events/:id',EventsController.find);
routes.get('/events',EventsController.index);
routes.post('/events',token.authenticateToken,EventsController.create);
routes.put('/events',EventsController.update);
routes.delete('/events/:id',EventsController.delete);



routes.post('/login',UsersController.login);




module.exports = routes