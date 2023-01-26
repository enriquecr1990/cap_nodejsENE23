/**
 * crear nuestra variable de JS que tendra un tratamiento como si fuera clase/objeto
 * entidad de POO que contiene funciones/metodos y atributos
 * listado
 * agregar
 * modificar
 * eliminar
 */
var swig = require('swig');

var Constantes = require('../config/constantes');
var Validaciones = require('../helpers/validaciones');
var ConvertidorDTO = require('../helpers/ConvertidorDTO');
var EmpleadoModel = require('../models/empleado_model');

var Empleado_controller = {

    tablero : function(req,res){
        try{
            //mandar a llamar el modelo que obtiene los datos del empleado
            EmpleadoModel.listar(function(error,result){
                if(error){
                    console.log('***** no se ejecuto la query correctamente');
                    res.send('<li>error al procesar la query</li>');
                }else{
                    console.log('***** se obtuvo la lista de empleados correctamente');
                    var tabler_html = swig.renderFile(
                        Constantes.RUTA_VISTAS+'tablero_empleado.html',
                        {
                            empleados : result
                        }
                    );
                    res.send(tabler_html);
                }
            });
        }catch (error){
            console.log('**** hubo un error en el tablero');
            res.send('<li>Hubo un error al obtener el tablero</li>');
        }
    },

    agregar : function(req,res){
        try{
            console.log('***** se inicia el agregar empleado Empleado_controller -> agregar');
            Validaciones.msg_validacion = [];
            console.log(req,req.body);
            if(Validaciones.form_empleado(req.body)){
                //bajar al model para guardar informacion en la BD
                //convertir los datos del formulario en una entidad empleado
                var empleado = ConvertidorDTO.obtenerEntidadEmpleado(req.body);
                EmpleadoModel.guardar(function(error,resultado){
                    if(error){
                        res.json({
                            status : false,
                            msg: [
                                'Nooooo se guardo el empleado correctamente, intenta más tarde'
                            ]
                        });
                    }else{
                        res.json({
                            status : true,
                            msg: [
                                'Se guardo el empleado correctamente'
                            ]
                        });
                    }
                },empleado);
            }else{
                res.json({
                    status : false,
                    msg : Validaciones.msg_validacion,
                });
            }
        }catch (error){
            console.log(error);
            res.json({
                status : false,
                msg : [
                    'Ocurrio un error en el servidor, intentar más tarde'
                ]
            });
        }
    },

    modificar : function(req,res){},

    eliminar : function(req,res){},

    contacto : function(req,res){},

}

module.exports = Empleado_controller;