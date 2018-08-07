<?php
$user=$_POST['user'];
$pass=$_POST['pass'];

//conexion base detaos
$conexion=mysqli_connect("localhost","root","", "admin");

$consulta="SELECT * FROM user WHERE user= '$user' and pass='$pass' ";

$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_num_rows($resultado);
if ($filas>0){
    header("location:chat2.html");
    
}
else{
    echo"Error, usuario o contraseña erroneos";
}
mysqli_free_result($resultado);
mysqli_close($conexion);


