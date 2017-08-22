const express = require('express');
const showRoutes = express.Router();
const showsController = require('../controllers/shows-controller');


showRoutes.get('/', showsController.index);
showRoutes.post('/', showsController.create);
showRoutes.delete('/:id', showsController.delete);

module.exports = showRoutes;
