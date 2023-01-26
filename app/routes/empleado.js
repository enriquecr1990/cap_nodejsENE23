//contendra las rutas necesarias para poder manejar la informacion del empleados
/**
 * consultar
 * agregar
 * modificar
 * eliminar
 */

var express = require('express');

var router_empleado = express.Router();

//agregamos el controlador correspondiente del empleado
var Empleado_controller = require('../controllers/empleado_controller');

router_empleado.get('/listado',Empleado_controller.tablero);
router_empleado.post('/agregar',Empleado_controller.agregar);

module.exports = router_empleado;