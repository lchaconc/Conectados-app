import React, {useState,  useEffect} from 'react';
import Buscador from './comp/Buscador';
import Splash from './comp/Splash';
import config from './config.json';

var arrayTipos=null;
var arrayComercios=null;

const arrayGeneral=[ 
  {
  likes: 5,
  dislikes: 0,  
  nombre: "Salón de belleza Elena",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic perspiciatis vero tenetur beatae sint atque esse quod.",
  face: "https://www.facebook.com/saladebellezamarme/",
  telefono1: "2255-8899",  
  telefono2: "",
  imagen: "http://192.168.0.18/conectados-app/server/assets/img/belleza.png",
  horario: "Lunes a sábado de 7 am - 3 pm",
  ubicacion: "Casa 27D",
  contacto: "Elena Prado"

 },
 {
  likes: 5,
  dislikes: 0,  
  nombre: "Reparaciones El Macho Bueno",
  descripcion: "Le reparamos desde su oola arrocera hasta su televisor. 100% garantizado",
  face: "https://www.facebook.com/machobueno/",
  telefono1: "2255-8899",  
  telefono2: "",
  imagen: "http://192.168.0.18/conectados-app/server/assets/img/vendedor.png",
  horario: "Lunes a sábado de 7 am - 3 pm",
  ubicacion: "Casa 27D",
  contacto: "Elena Prado"

 },
 {
  likes: 25,
  dislikes: 2,  
  nombre: "El gallo veloz",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic perspiciatis vero tenetur beatae sint atque esse quod.",
  face: "https://www.facebook.com/GreenwichPizza/",
  telefono1: "2255-9964",
  telefono2: "",
  imagen: "http://192.168.0.18/conectados-app/server/assets/img/mensajero.png",
  horario: "Lunes a sábado de 7 am - 3 pm",
  ubicacion: "Casa 27D",
  contacto: "Elena Prado"
 },
 {
  likes: 8,
  dislikes: 5,  
  nombre: "Dulces Momentos",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic perspiciatis vero tenetur beatae sint atque esse quod.",
  face: "https://www.facebook.com/DulcesMomentos/",
  telefono1: "2885-9964",
  telefono2: "",
  imagen: "http://192.168.0.18/conectados-app/server/assets/img/postre.png",
  horario: "Lunes a sábado de 7 am - 3 pm",
  ubicacion: "Casa 27D",
  contacto: "Elena Prado"
 }

]


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
      <Buscador arrayComercios={arrayComercios} />
      :
      <Splash />
     }
     
   </div>    
  );
}

export default App;
