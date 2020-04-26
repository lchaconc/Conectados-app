<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);  
require 'conectar.php';


$conexion = conectarDB();
$idComercio = $dataObject-> idComercio;
$activo= $dataObject-> activo;

   $actualizacion = "UPDATE `comercios` SET `activo`= '$activo' WHERE `idComercio`='$idComercio'";

   $resultadoActualizacion = mysqli_query($conexion, $actualizacion); 

   if($resultadoActualizacion)
   {
    echo json_encode(array('error'=>'false','msj'=>'Datos actualizados correctamente'));
   }
   else
   {
    echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
   }
?>