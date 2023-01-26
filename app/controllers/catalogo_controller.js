var Catalogo_model = require('../models/catalogo_model');

var Catalogo_controller = {

    tipoContacto : function(req,res){
        Catalogo_model.tipo_contacto(function(error,result){
            if(error){
                res.json({
                    status : false,
                    msg : [
                       'Hubo un error al obtener el catalogo',
                       error.code,error.errno,error.sqlMessage
                    ],
                });
            }else{
                res.json({
                    status : true,
                    msg : ['Se obtuvo el catalogo correctamente'],
                    data : result
                });
            }
        });
    },

    tipoContacto_old : function(request,response){
        console.log('***** catalogoscontroller -> tipoContacto');
        //response.send('hola mundo controladores');
        var catalogo_tipo_contacto = Catalogo_model.tipo_contacto();
        response.json({
            status : true,
            msg : ['Se obtuvo el catalogo correctamente'],
            data : [
                catalogo_tipo_contacto
            ]
        });
    }

}

module.exports = Catalogo_controller;