import React, {useState} from 'react';
import Tarjeta from './Tarjeta';
import filtrar from '../modulos/filtrar';



function Buscador(props) {

    const [arrayComercios, setArrayComercios]= useState(props.arrayComercios);
    const [descripcionTipo, setDescripcionTipo]= useState("Mostrando todas las categorías...");

    function handleCargarFiltrados(e) {
        const idTipo=parseInt(e.target.value);
        console.log(idTipo);
        if (idTipo!==-1) {
            setArrayComercios( filtrar(props.arrayComercios, "idTipo", idTipo ) );
            setDescripcionTipo( filtrar( props.arrayTipos, "idTipo", idTipo )[0].descripcionTipo   );
        } else {
            setArrayComercios(props.arrayComercios);
            setDescripcionTipo("Mostrando todas las categorías...");
        }
        
    }


    return (
        <React.Fragment>
            <div className="jumbotron text-center">
                <h1>
                    Portón del Prado en Línea
                </h1>
            </div>
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Seleccione una opción</label>
                    </div>
                    <select 
                        className="custom-select" 
                        id="inputGroupSelect01"
                        onChange={handleCargarFiltrados}
                        >
                        <option defaultValue value={-1} >Todos las categorías</option>
                        {
                            props.arrayTipos.map((item,i)=>(
                                <option key={"tipo"+i} value={item.idTipo}> {item.nombreTipo} </option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 font-italic text-center  my-2 alert alert-info">
                    <h5>{descripcionTipo}</h5>
                </div>
            </div>

            <div className="row">
      {
        arrayComercios.length > 0 ?         
                arrayComercios.map((item,i)=>(
                <Tarjeta item={item} key={"tarjeta"+i} />
                )) :
                <div className="container">
                            <div className="cols-sm-12 text-center text-info">
                            <h4>
                            Todavía no hay opciones para esta categoría. <br/>
                            Lo sentimos <br/> 
                            <i className="fas fa-frown-open"></i> 
                            </h4>
                        </div>
                </div>

      }
          
    </div>
        </React.Fragment>
    );

}


export default Buscador;