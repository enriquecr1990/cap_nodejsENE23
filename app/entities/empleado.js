class Empleado{

    constructor(nombre,paterno,materno,nacimiento,domicilio,genero) {
        this.nombre = nombre;
        this.paterno = paterno;
        this.materno = materno;
        this.nacimiento = nacimiento;
        this.domicilio = domicilio;
        this.genero = genero;
    }

}

module.exports = Empleado;