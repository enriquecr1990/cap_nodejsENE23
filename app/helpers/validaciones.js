var Validaciones = {

    msg_validacion : [],

    form_empleado : function(formulario){
        var form_valido = true;
        //pasamos cada una de las validaciones correspondientes al formulario y en caso de que falle, se regrese el mensaje
        if(!this.validar_campo(formulario.nombre,'nombre')){form_valido = false;}
        if(!this.validar_campo(formulario.paterno,'apellido paterno')){form_valido = false;}
        if(!this.validar_campo(formulario.materno,'apellido materno')){form_valido = false;}
        if(!this.validar_campo(formulario.nacimiento,'fecha de nacimiento')){form_valido = false;}
        if(!this.validar_campo(formulario.genero,'genero')){form_valido = false;}

        return form_valido;
    },

    validar_campo : function(campo,etiqueta){
        var es_valido = true;
        console.log(campo,etiqueta);
        if(campo == undefined || campo == null || campo == '' || campo.trim() == ''){
            es_valido = false;
            this.msg_validacion.push('El campo '+etiqueta+' es requerido o no es valido');
        }
        return es_valido;
    }

}

module.exports = Validaciones;