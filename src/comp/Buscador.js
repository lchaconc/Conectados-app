import React, {useState} from 'react';
import Tarjeta from './Tarjeta';
import filtrar from '../modulos/filtrar';



function Buscador(props) {

    const [arrayComercios, setArrayComercios] = useState(props.arrayComercios);

    function handleCargarFiltrados(e) {
        const idTipo=parseInt(e.target.value);
        console.log(idTipo);
        setArrayComercios( filtrar(props.arrayComercios, "idTipo", idTipo ) )        
    }


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
                    <select 
                        className="custom-select" 
                        id="inputGroupSelect01"
                        onChange={handleCargarFiltrados}
                        >
                        <option defaultValue>Todos las categorías</option>
                        {
                            props.arrayTipos.map((item,i)=>(
                                <option key={"tipo"+i} value={item.idTipo}> {item.nombreTipo} </option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="row">
      {
        arrayComercios.length > 0 ?         
                arrayComercios.map((item,i)=>(
                <Tarjeta item={item} key={"tarjeta"+i} />
                )) :
                <p className="text-center text-info">
                    <h4>
                    Todavía no hay opciones para esta categoría. <br/>
                    Lo sentimos <br/> 
                    <i className="fas fa-frown-open"></i> 
                    </h4>
                </p>

      }
          
    </div>
        </React.Fragment>
    );

}


export default Buscador;