var express = require('express');

var rutas_catalogos = express.Router();

var Catalogo_controller = require('../controllers/catalogo_controller');

rutas_catalogos.get('/tipo_contacto/listar',Catalogo_controller.tipoContacto);

module.exports = rutas_catalogos;