import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';



function FormServicio(props) {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios({
            method: 'post',
            url: 'http://localhost/sanrafa-master/enviar_datos2.php',
            data: data
        })
            .then(function (resp) {
                console.log(resp);

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

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="selTipo">Seleccione el tipo de servicio:</label>
                    </div>
                    <select

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
                        placeholder="Nombre del comercio o establecimiento"
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
                                <span className="input-group-text" id="spnTelefono">Teléfoono</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Número de teléfono"
                                id="txtTelefono"
                                name="telefono"
                                ref={register({ required: true })}
                            />
                        </div>
                        {errors.telefono && <p className="text-danger" >Teléfono requerido</p>}
                    </div>

                    <div className="col-sm-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="spnHorario">Horario</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Horario"
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
                        <span className="input-group-text" id="spnDireccion">Dirección</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Dirección"
                        id="txtDireccion"
                        name="direccion"
                        ref={register({ required: true })}
                    />
                </div>
                {errors.direccion && <p className="text-danger" >Dirección requerido</p>}


                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="spnDireccion">Detalles del servicio</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Detalles"
                        id="txtDetalle"
                        name="detalle"
                        ref={register({ required: true })}
                    />
                </div>
                {errors.detalle && <p className="text-danger" >Detalle requerido</p>}

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="spnDireccion">Persona de contacto</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Persona que a cargo del negocio"
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