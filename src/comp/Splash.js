import React from 'react';
import loader from '../assets/img/loader.gif';
import familia from '../assets/img/familia.png';


function Splash () {
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-success text-center">
                    <h1>Portón del Prado en Línea</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <img src={familia} alt="Familia" className="img-splash"/>
                </div>
            </div>

            <div className="row">
            <div className="col-sm-12 mt-5 text-center">
                <img src={loader} alt="loader" className="img-fluid"/>
            </div>
            </div>
        </div>
    );
    
}

export default Splash;