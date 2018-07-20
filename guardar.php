<?php
    //conectamos con el servidor
    $conectar=@mysql_connect('localhost', 'root', '');

    //verificar la conexion
if(!$conectar){
    echo"No se pudo conectar con el Servidor";
}else{
    $base=mysql_select_db('descripciones');
    if(!$base){
        echo"No se encontro la Base de Datos";
    }
}
    //recuperar las variables
    $nombre=$_POST['nombre'];
    $apellido$_POST['apellido'];
    $numero$_POST['numero'];
    $correo$_POST['correo'];
    $servicio$_POST['servicio'];
    $descripcion$_POST['descripcion'];
//Sentencia SQL
$sql= "INSERT INTO descripciones VALUES('$nombre', 
                                        '$apellido',
                                        '$numero',}
                                        '$correo',
                                        '$servicio',
                                        '$descripcion')";
//ejecutamos la sentencia sql
$ejecutar=mysql_query($sql);
//verificamos la ejecucion
if(!$ejecutar){
    echo"Hubo algún error";
}else{
    echo"Datos Guardados Correctamente<a href='index.html'>Volver</a>";
}
    
?>