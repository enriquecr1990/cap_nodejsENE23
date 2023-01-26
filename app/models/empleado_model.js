//importar la configuracion de bd
var mysql = require('../basedatos/conexionbd');

var EmpleadoModel = {

    listar : function(call_controlador){
        console.log('***** Empleado_model -> listar');
        var query = "SELECT e.*,if(e.genero = 'h','Hombre','Mujer') genero_completo, DATE_FORMAT(e.nacimiento,'%d/%m/%Y') nacimiento_str FROM empleado e";
        console.log('***** querySQL: '+query);
        mysql.query(query,call_controlador);
    },

    guardar : function(call_controlador,empleado){
        console.log('***** EmpleadoModel -> guardar');
        var query = "INSERT INTO empleado (nombre,paterno,materno,nacimiento,domicilio,genero) values (" +
            "'"+empleado.nombre+"'," +
            "'"+empleado.paterno+"'," +
            "'"+empleado.materno+"'," +
            "'"+empleado.nacimiento+"'," +
            "'"+empleado.domicilio+"'," +
            "'"+empleado.genero+"'" +
            ")";
        console.log('***** querySQL: '+query);
        mysql.query(query,call_controlador);
    },

}

module.exports = EmpleadoModel;