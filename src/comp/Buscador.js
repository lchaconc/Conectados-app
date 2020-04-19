import React from 'react';
import Tarjeta from './Tarjeta';


function Buscador(props) {


    return (
        <React.Fragment>
            <div className="jumbotron text-center">
                <h1>
                    Conectados
                </h1>
            </div>
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Seleccione una opción</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option defaultValue>Todos las categorías</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="row">
      {
        props.arrayComercios.map((item,i)=>(
          <Tarjeta item={item} key={"tarjeta"+i} />
        ))
      }
          
    </div>
        </React.Fragment>
    );

}


export default Buscador;