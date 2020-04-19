import React, {useState, useEffect} from 'react';
import './tarjeta.css';
import config from '../config.json';
const assets = config.assetsImg;

const Tarjeta=(props)=> {
  const [like, setLike ] = useState(false);
  const [dislike, setDislike ] = useState(false);


  useEffect(()=>{
    console.log("Like", like);
    console.log("Dislike", dislike);
    
    
  })

  const calificar=(e)=>{
    if (e.target.id==="spnLike") {
        setLike(!like);
        setDislike(false);
    };
    if (e.target.id==="spnDislike") {
      setDislike(!dislike);
      setLike(false);
    };      
  }



const nombreFace =(url)=> {
    const res = url.replace("https://www.facebook.com/", "");
    return res;
}

    return(
        (
            <div className="col-sm-6">
            <div className="row">
            <div className="card m-2 text-center">
              <div className="card-header texto-2 text-info">                
                <button 
                  className="btn btn-outline-info mr-2"
                  id="spnLike"                  
                  onClick={calificar}
                  >
                  { like ? <i className="fas fa-thumbs-up mr-1"></i> :  <i className="far fa-thumbs-up mr-1"></i> }
                  {props.item.likes}                
                </button>              
                <button 
                  className="btn btn-outline-info ml-2"
                  id="spnDislike"                  
                  onClick={calificar}
                >
                  {dislike ? <i className="fas fa-thumbs-down mr-1"></i> :  <i className="far fa-thumbs-down mr-1"></i>}
                  {props.item.dislikes}                     
                </button>                
              </div>
              <div className="card-body">
                  <img src={ assets + props.item.imagen} alt="imagen negocio" className="img-previas" />
                <h5 className="card-title">
                    {props.item.nombre}
                </h5>
                <p>
                  <strong>Contacto: { props.item.contacto }</strong>
                </p>
                <p className="card-text">
                  {props.item.descripcion}
                </p>            
              </div>
              <div className="card-footer text-muted">
                <i className="fas fa-clock"> {props.item.horario}  </i>
                <hr/>
                <i className="fas fa-map-marker-alt"> {props.item.ubicacion }</i>  
                <hr/>
                <i className="fab fa-whatsapp-square ico-what texto-1"></i> <span className="texto-1" > {props.item.telefono1} </span>
                <br/>
                <a href={props.item.face} target="_blnak"  >
                    <i className="fab fa-facebook-square texto-1"></i> <span className="texto-1" > {nombreFace(props.item.face)}                     </span>
                </a>            
              </div>
            </div>
            </div>
            </div>
          )
    )
}

export default Tarjeta;