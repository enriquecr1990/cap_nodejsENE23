var mysql = require('mysql');
var configBD = {
    host : '127.0.0.1',
    user : 'root',
    port : '3306',
    password : '',
    database : 'php_curso_ago22'
};
var conexionbd = mysql.createConnection(configBD);
conexionbd.connect(function(error){
    if(error){
        console.log('*** hubo un error en la conexion de BD');
        throw error;
    }else{
        console.log('*** conexion con BD exitosa');
    }
});

module.exports = conexionbd;