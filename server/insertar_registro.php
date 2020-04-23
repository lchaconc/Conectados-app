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

$conexion=conectarDB();

if ($_POST) {
$idTipo= $dataObject-> idTipo;
$nombre= $dataObject-> nombre;
$telefono1= $dataObject-> telefono1;
$horario= $dataObject-> horario;
$ubicacion= $dataObject-> ubicacion;
$descripcion= $dataObject-> descripcion;
$contacto= $dataObject-> contacto;
$face= $dataObject-> face;
$imagen= "pepito";
$activo= 0;

/*echo $idTipo;
echo $nombre;
echo $telefono1;
echo $horario; */

       $insercion = "INSERT INTO `comercios`(`idTipo`,`nombre`,`telefono1`,`horario`, `ubicacion`, `descripcion`, `contacto`, `face`, `imagen`) 
	   VALUES ('idTipo','nombre','telefono1','horario', 'ubicacion', 'descripcion', 'contacto', 'face', 'imagen')";
        if ($conexion->query($insercion) === TRUE) {
            echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente'));
            } else {
                echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
            }
            mysqli_close($conexion);
  }
 