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

$id = $dataObject-> id; //id del registro a actualizar
$valor = $dataObject-> valor;  //Recibe un 1 o un -1 (dependiento de si estaba o no marcado el botón correspondiente)
$elemento = $dataObject-> elemento;  // Recibe la palabra likes o dislikes
   $actualizacion = "UPDATE `comercios` SET $elemento=$elemento + $valor WHERE `idComercio`='$id'";

   $resultadoActualizacion = mysqli_query($conexion, $actualizacion); 

   if($resultadoActualizacion)
   {
      echo json_encode(array('error'=>'false','msj'=>'Datos actualizados de forma exitosa'));
   }
   else
   {
    echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
   }
?>