var Empleado = require('../entities/empleado');

//la tipo clase que va a convertir lo que llega en el controlador a una entidad DTO
var ConvertidorDTO = {

    obtenerEntidadEmpleado : function(formulario){
        var empleado = new Empleado(
            formulario.nombre ? formulario.nombre : '',
            formulario.paterno ? formulario.paterno : '',
            formulario.materno ? formulario.materno : '',
            formulario.nacimiento ? formulario.nacimiento : '',
            formulario.domicilio ? formulario.domicilio : '',
            formulario.genero ? formulario.genero : '',
        );
        return empleado;
    }

};

module.exports = ConvertidorDTO;