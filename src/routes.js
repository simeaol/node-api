const express = require('express');
const routes = express();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.findAll);
routes.get('/products/:id', ProductController.findById);
routes.post('/products', ProductController.create);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;
