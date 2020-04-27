import React  from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import config from '../config.json';
import filtrar from '../modulos/filtrar';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';

var icono;

function FormServicio(props) {
    const { register, handleSubmit, errors } = useForm();
    
    const handleCargarIcono=(e)=>{
        const indice = parseInt(e.target.value);

        if (indice) {
            icono = filtrar(props.arrayTipos, "idTipo", indice )[0].icono;
            console.log(icono);                    
        }
    }

    const onSubmit = data => {
        //Se agrega el nombre de la imagen 
        //que representa la categoria seleccionada

        data.imagen=icono;
        console.log("*******datos a enviar:", data);              
        
        axios({
            method: 'post',
            url: config.apiServ+'insertar_registro.php',
            data: data
        })
            .then(function (resp) {
                console.log(resp);
                alertify
                .alert(config.nombre,resp.data.msj, function(){
                    //alertify.message('OK');
                    console.log("ok");
                    props.handleCargarComponente()
                    
                });
            });

    }
    console.log(errors);

  
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
                    <h4 className="text-info">QUIERO OFRECER:</h4>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-12 alert alert-danger">
                    <strong>Importante:</strong> El negocio o servicio no será publicado hasta que los datos hayan sido verificados.
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="selTipo">Seleccione el tipo de servicio:</label>
                    </div>
                    <select
                        onChange={handleCargarIcono}
                        className="custom-select"
                        id="selTipo"
                        name="idTipo"
                        ref={register({ required: true })}
                    >
                        <option value=""> Seleccionar una opción </option>
                        {
                            props.arrayTipos.map((item, i) =>
                                (
                                    <option key={"tipo" + i} value={item.idTipo}> {item.nombreTipo} </option>
                                ))
                        }

                    </select>
                </div>
                {errors.idTipo && <p className="text-danger" >Debe seleccionar el tipo de negocio</p>}

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="spnNombre">Nombre comercial</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre del negocio. Por ejemplo 'Fogón de doña Chela' "
                        id="selTipo"
                        name="nombre"
                        ref={register({ required: true })}
                    />
                </div>
                {errors.nombre && <p className="text-danger" >Nombre requerido</p>}

                <div className="row">
                    <div className="col-sm-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="spnTelefono1">Teléfono</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Número de teléfono para contacto"
                                id="txtTelefono1"
                                name="telefono1"
                                ref={register({ required: true })}
                            />
                        </div>
                        {errors.telefono1 && <p className="text-danger" >Teléfono requerido</p>}
                    </div>

                    <div className="col-sm-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="spnHorario">Horario</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Horario de atención. Disponibilidad"
                                id="txtHorario"
                                name="horario"
                                ref={register({ required: true })}
                            />
                        </div>
                        {errors.horario && <p className="text-danger" >Horario requerido</p>}
                    </div>


                </div>


                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="spnDireccion">Ubicación</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ubicación (Número de casa)"
                        id="txtUbicacion"
                        name="ubicacion"
                        ref={register({ required: true })}
                    />
                </div>
                {errors.ubicacion && <p className="text-danger" >Ubicación requerida</p>}

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="spnFace">Página de Facebook</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Dirección de pagina de Facebook del negocio"
                        id="txtFace"
                        name="face"
                        ref={register}
                    />
                </div>


                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="spnDescripcion">Descripción</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Descripción o detalles del servicio o negocio"
                        id="txtDescripcion"
                        name="descripcion"
                        ref={register({ required: true })}
                    />
                </div>
                {errors.descripcion && <p className="text-danger" >Descripción requerido</p>}

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="spnDireccion">Persona de contacto</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Persona que a cargo del negocio o de contacto para información"
                        id="txtContacto"
                        name="contacto"
                        ref={register({ required: true })}
                    />
                </div>
                {errors.contacto && <p className="text-danger" >Contacto requerido</p>}
                <br />



                <button type="submit" className="btn btn-success btn-lg btn-block" > Enviar </button>

            </form >
        </div>

    );

}


export default FormServicio;