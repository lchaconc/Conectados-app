import React, {useState,  useEffect} from 'react';
import Buscador from './comp/Buscador';
import Splash from './comp/Splash';
import config from './config.json';

var arrayTipos=null;
var arrayComercios=null;

function App() {
  const [isCargado, setIsCargado] = useState(false);

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
  },[]);

  useEffect(()=>{
    console.log("isCargado",isCargado);
    
  })

  

  return (
   <div className="container">
     {
      isCargado ?
      <Buscador arrayComercios={arrayComercios}  arrayTipos={arrayTipos} />
      :
      <Splash />
     }
     
   </div>    
  );
}

export default App;
