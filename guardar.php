<?php

    $usuario = "root";
    $password = "";
    $servidor = "localhost";
    $basededatos ="descripciones";



$conexion = mysqli_connect  ($servidor,$usuario,"") or die ("No se ha podido conectar con el servidor de Base de datos // Couldn't connect with the database server");


$db = mysqli_select_db($conexion, $basededatos) or die ("Upps! No se ha encontradpo la base de datos // Oops! Database not found");


        //recuperar las variables
        $nombre=$_POST['nombredesc'];
        $apellido=$_POST['apellidodesc'];
        $numero=$_POST['numerodesc'];
        $correo=$_POST['correodesc'];
        $servicio=$_POST['serviciodesc'];
        $descripcion=$_POST['descripciondesc'];
    //sentencia sql
    $sql= "INSERT INTO descripciones VALUES('$nombre', '$apellido','$numero','$correo','$servicio','$descripcion')";

$destino="tacosricos98@hotmail.com";
$contenido =  "Nombre: ". $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $numero . "\nMensaje: " . $descripcion;
mail($destino, "Contacto", $contenido);


    
    //ejecutamos la centencia de sql
    $ejecutar=mysqli_query($conexion, $sql);
    //verificacion de la ejecucioon
    if(!$ejecutar){
        echo"Hubo algun error";
    }else{
        echo"Tu idea fue enviada! Gracias por tu confianza // Your idea was sent successfully! Thanks for choosing us<br><a href='index.html'>Volver // Return</a>";
    }
     


?>