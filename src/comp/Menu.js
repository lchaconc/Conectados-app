import React from 'react';

function Menu(props) {


    return (
        <React.Fragment>
            <div className="jumbotron text-center">
                <h1>
                    Portón del Prado en Línea
                    </h1>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <button  
                        onClick={props.handleCargarComponente}
                        title="ofrecemos"
                        type="button" 
                        className="btn btn-outline-primary btn-lg btn-block">
                        <i className="fas fa-concierge-bell"></i>
                        <br />
                        Le ofrecemos
                    </button>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-12">
                    <button 
                    onClick={props.handleCargarComponente}
                    title="ofrezco"
                    type="button" 
                    className="btn btn-outline-success btn-lg btn-block">
                        <i className="fas fa-user-edit"></i>
                        <br />
                        Quiero ofrecer
                    </button>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-12">
                    <button 
                    type="button" 
                    onClick={props.handleCargarComponente}
                    title="acerca"
                    className="btn btn-outline-info btn-lg btn-block">
                        <i className="fas fa-user-cog"></i>
                        <br />
                        Acerca de nosotros
                    </button>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Menu;