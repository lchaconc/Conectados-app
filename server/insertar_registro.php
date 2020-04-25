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

//if ($_POST) {
$idTipo= $dataObject-> idTipo;
$nombre= utf8_decode($dataObject-> nombre);
$telefono1= $dataObject-> telefono1;
$horario= utf8_decode($dataObject-> horario);
$ubicacion= utf8_decode($dataObject-> ubicacion);
$descripcion= utf8_decode($dataObject-> descripcion);
$contacto= utf8_decode($dataObject-> contacto);
$face= $dataObject-> face;
$imagen=$dataObject-> imagen;
$activo=0;
$likes=0;
$dislikes=0;

$insercion = "INSERT INTO `comercios`(`idTipo`,`nombre`,`telefono1`,`horario`, `ubicacion`, `descripcion`, `contacto`, `face`, `imagen`, `likes`, `dislikes`, `activo`) 
							VALUES ('$idTipo','$nombre','$telefono1','$horario', '$ubicacion', '$descripcion', '$contacto', '$face', '$imagen', '$likes', '$dislikes', '$activo' )";

/*echo $idTipo;
echo $nombre;
echo $telefono1;
echo $horario; */

 
        if ($conexion->query($insercion) === TRUE) {
            echo json_encode(array('error'=>'false','msj'=>'Registro enviado satisfactoriamente. En cuanto sean verficados los datos, estará siendo publicado.'));
            } else {
                echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
            }
            mysqli_close($conexion);
//  }
 