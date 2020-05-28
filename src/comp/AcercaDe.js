import React from 'react';
import config from '../config.json';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';



const urlImg = config.assetsImg + "fotos/" ;

function AcercaDe(props) {
   

    const handleAbrirImg =()=> {
        alertify
        .alert("Galería", 
        '<img class="img-fluid" src="'+urlImg+'foto2.jpeg"  alt="foto 2" /> <hr>' + 
        '<img class="img-fluid" src="'+urlImg+'foto3.jpeg"  alt="foto 2" />' ,
         );

    }

    return (
        <div className="container">
        <div className="jumbotron text-center">
            <h1>
                Portón del Prado en Línea
            </h1>
            <button
                onClick={props.handleCargarComponente}
                title="menu"
                className="btn btn-outline-dark">
                <i className="fas fa-home"></i> Inicio
            </button>
        </div>
        
            <div className="row">
                <div className="col-sm-12 mt-1">
                    <img 
                        className="img-fluid" 
                        src={urlImg + "foto1.jpeg" } 
                        alt="Imagen encabezado" 
                        onClick={handleAbrirImg}
                        />
                </div>
            </div>
        <div className="row">
            <div className="col-sm-12 mt-2">
            <h6>Comité de vecinos Portón del Prado</h6>
            <p className="text-justify">
            <strong>S</strong>omos un equipo de trabajo, que busca conocernos como vecinos y realizar acciones 
            para mejoras del lugar en el que vivimos.
            Dentro de las actividades que realizamos están:  
            </p>
            <ul>
                <li>Generar acciones para la comunicación entre vecinos y la presentación de ideas de mejora.</li>
                <li>Recuperación y mejoramiento del parque recreativo.</li>
                <li>Campañas de reciclaje en coordinación con la Municipalidad de Coronado, los segundos y cuartos miércoles del mes (el reciclaje se deja a la entrada del Parque antes de las 6:00 a.m.).</li>
                <li>Actividades recreativas y familiares de integración comunitaria.</li>
                <li>Coordinación con instituciones, recaudación de fondos, entre otras acciones.</li>
            </ul>
            <p className="text-justify">
                Puede contactarnos al correo del Comité: <br/>
                <a href="mailto:portondelprado@gmail.com"> portondelprado@gmail.com </a> <br/>
                Facebook: <a href="https://www.facebook.com/pages/Porton-Del-Prado-Vazquez-De-Coronado/396134720445386" target="_blank" rel="noopener noreferrer">
                    Urbanización Portón del Prado, Coronado 
                </a>      <br/>
                Grupo de WhatsApp: Urbanización Portón del Prado. <br/>   
                <strong>Contáctenos por correo para incluirlo. En el mensaje adjunte su nombre, teléfono y número de casa.</strong>
            </p>
            </div>
        </div>
<div className="row">
    <div className="col-sm-12 text-center">
        
    <span className="badge badge-info  p-2 mb-2">
            <strong>{config.nombre} </strong> 
            <br/>
            App desarrollada por Luis Chacón Campos
            <br/> 
            &copy; Costa Rica, 2020
        </span>
    </div>
</div>
        
        
        </div>
    );
    
}

export default AcercaDe;