import React from 'react';
import loader from '../assets/img/loader.gif';


function Splash () {
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-success text-center">
                    <h1>Negocios Conectados</h1>
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