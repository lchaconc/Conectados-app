import React, {useState,  useEffect} from 'react';
import Buscador from './comp/Buscador';
import Splash from './comp/Splash';
import AcercaDe from './comp/AcercaDe';
import Menu from './comp/Menu';
import FormServicio from './comp/FormServicio';
import config from './config.json';

var arrayTipos=null;
var arrayComercios=null;

function App() {
  const [isCargado, setIsCargado]= useState(false);
  const [componente, setComponente]= useState( null );

  async function obtenerDatos () {
    let resp=null;
    resp = await fetch(config.apiServ+"obtener_tipos.php"  );
    arrayTipos = await  resp.json();
    console.log("arrayTipos",arrayTipos);

    resp = await fetch(config.apiServ+"obtener_comercios.php"  );
    arrayComercios = await  resp.json();
    console.log("arrayComercios",arrayComercios);   
    

    setIsCargado(true);
  }

  useEffect(()=>{
    obtenerDatos();
    setComponente(<Menu handleCargarComponente={handleCargarComponente} />)
  },[]);

  useEffect(()=>{
    console.log("isCargado",isCargado);
    
  })

  const handleCargarComponente=(e)=>{
    const opcion = e.target.title;
    console.log(opcion);

    switch (opcion) {
      case "menu":
          setComponente (<Menu handleCargarComponente={handleCargarComponente} />)
      break;
      case "ofrecemos":
          setComponente (<Buscador handleCargarComponente={handleCargarComponente} arrayComercios={arrayComercios}  arrayTipos={arrayTipos} />)
      break;
      case "ofrezco":
          setComponente (<FormServicio handleCargarComponente={handleCargarComponente}  arrayTipos={arrayTipos} />)
      break;
      case "acerca":
          setComponente (<AcercaDe handleCargarComponente={handleCargarComponente}  />)
      break;
    
      default:
        console.log("opcion fuera de rango");
        
        break;
    }
    
  }

  

  return (
   <div className="container">
     {
      isCargado ?
      (
            componente &&   
              componente
      )          
      :
      <Splash />
     }
     
   </div>    
  );
}

export default App;
