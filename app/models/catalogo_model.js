var mysql = require('../basedatos/conexionbd');

var Catalogo_model = {

    tipo_contacto : function(call_response){
        console.log('*** llamado de la funcion modelo catalogo_model -> tipo_contacto');
        var querySQL = "select * from catalogo_tipo_telefono";
        console.log('*** query: '+ querySQL);
        mysql.query(querySQL,call_response);
    },

    tipo_contacto_old : function(){
        mysql.query(
            "select * from catalogo_tipo_telefono",
            function(error,resultados){
                if(error){
                    console.log('*** hubo un error en la query');
                    console.log(error.code);
                    console.log(error.errno);
                    console.log(error.sqlMessage);
                }else{
                    console.log(resultados);
                }
            }
        );
        var tipo_contacto = [
            {id : 1,tipo : 'Celular'},
        ];
        return tipo_contacto;
    }

}

module.exports = Catalogo_model;