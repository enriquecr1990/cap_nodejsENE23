var express = require('express');
var bodyParse = require('body-parser');

var app = express();

app.use(bodyParse.urlencoded({extended : true}));
app.use(bodyParse.json());

app.use(express.static('public'));

//rutas catalogos
var rutas_catalogos = require('./app/routes/catalogos');
app.use('/catalogo',rutas_catalogos);

//rutas para el empleado
var rutas_empleado = require('./app/routes/empleado');
app.use('/empleado',rutas_empleado);

//peticion inicial para probar la conexion de bd y ejecutar una query
app.get('/demosql',function(req,res){
    var mysql = require('mysql');
    var configBD = {
        host : '127.0.0.1',
        user : 'root',
        port : '3306',
        password : '',
        database : 'sitio_contacto'
    };
    var conexionbd = mysql.createConnection(configBD);
    conexionbd.connect(function(error){
        if(error){
            console.log('*** hubo un error en la conexion de BD');
            throw error;
        }else{
            console.log('*** conexion con BD exitosa');
            conexionbd.query(
                "select * from catalogo_tipo_telefono",
                function(error,resultados){
                    if(error){
                        console.log('*** hubo un error en la query');
                        console.log(error.code);
                        console.log(error.errno);
                        console.log(error.sqlMessage);
                        res.send('hubo un error en la query ');
                    }else{
                        console.log(resultados);
                        res.send('se obtuvo la informacion de la query con exito');
                    }
                }
            );
        }
    });
});

app.listen(8080,function (){
    console.log('***** Se inicio el server correctamente *****');
});
