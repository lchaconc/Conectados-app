import React, {useState} from 'react';
import './tarjeta.css';
import config from '../config.json';
const axios = require('axios');
const assets = config.assetsImg;

const Tarjeta=(props)=> {
  const [like, setLike ] = useState(false);  
  const [dislike, setDislike ] = useState(false);
  const [cantLikes, setCantLikes ]= useState(parseInt( props.item.likes) );
  const [cantDislikes, setCantDislikes ]= useState( parseInt(props.item.dislikes) );
  const [valorDisabled, setValorDisabled ]= useState(false);
  


  



  const handleCalificar=(e)=>{
    //Extrae del id si es like o disl(ike)
    const modo=e.target.id.slice(0,1);
    console.log(modo);

    let id=e.target.id.slice(1);
    let elemento=null;
    let valor=1;
    //console.log(id);
    
    if (modo==="L") {
        elemento="likes";        
        setLike(!like)
        setDislike(false);
        setCantLikes(cantLikes+1);
        
    };
    if (modo==="D") {
      elemento="disLikes";      
      setDislike(!dislike);
      setLike(false);
      setCantDislikes(cantDislikes+1);
    };

    let dataform = {id, elemento, valor }
    console.log("dataform",dataform);

    setValorDisabled(true);
    
    
    
    axios.post( config.apiServ + "actualiza_likes.php", dataform )
    .then((resp) => {
      console.log("Respuesta", resp);      
    }, (error)=> {
      console.log("Error", error);
      
    })
    
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
              <div  className="card-header texto-2 text-info">                
                  <button 
                  className="btn btn-outline-info mr-2"
                  id={"L"+props.item.idComercio}
                  onClick={handleCalificar}  
                  disabled={valorDisabled}                                                    
                  >
                  { like ? <i className="fas fa-thumbs-up mr-1"></i> :  <i className="far fa-thumbs-up mr-1"></i> }
                  {cantLikes}
                </button>              
                
                <button 
                  className="btn btn-outline-info ml-2"
                  id={"D"+props.item.idComercio}                  
                  onClick={handleCalificar}
                  disabled={valorDisabled}
                >
                  {dislike ? <i className="fas fa-thumbs-down mr-1"></i> :  <i className="far fa-thumbs-down mr-1"></i>}
                  {cantDislikes }                     
                </button>                
              </div>
              <div className="card-body">
                  <img src={ assets + props.item.imagen +"."+ config.extIcono } alt="imagen negocio" className="img-previas" />
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
                  <a className="link-tel" href={"tel:"+props.item.telefono1}>
                  <i className="fab fa-whatsapp-square ico-what texto-1"></i> 
                  <span className="texto-1" > {props.item.telefono1} </span>
                  </a>
                <br/>                
                {
                  props.item.telefono2 &&
                  <React.Fragment>
                     <a className="link-tel" href={"tel:"+props.item.telefono2}>
                      <i className="fas fa-phone-volume" /> 
                      <span className="texto-1" > {props.item.telefono2} </span>
                    </a>
                  </React.Fragment>
                }
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