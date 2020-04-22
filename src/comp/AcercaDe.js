import React from 'react';


function AcercaDe(props) {

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

        <hr/>
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="text-info">ACERCA DE NOSOTROS:</h4>
                </div>
            </div>

        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro repellat hic, quae corrupti minus quisquam amet id blanditiis molestiae sed perferendis obcaecati veritatis alias natus nihil explicabo beatae et.
        </div>
    );
    
}

export default AcercaDe;