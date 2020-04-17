import React from 'react';
import Buscador from './comp/Buscador';

const arrayGeneral=[ 
  {
  likes: 5,
  dislikes: 0,
  imagen: "https://cdn2.salud180.com/sites/default/files/field/image/2016/02/salon111.jpg",
  nombre: "Salón de belleza Elena",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic perspiciatis vero tenetur beatae sint atque esse quod.",
  face: "https://www.facebook.com/saladebellezamarme/",
  telefono: "2255-8899"
 },
 {
  likes: 25,
  dislikes: 2,
  imagen: "https://data.viaje-a-china.com/kcfinder/upload/vac/ly/ji(1).jpg",
  nombre: "El gallo veloz",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic perspiciatis vero tenetur beatae sint atque esse quod.",
  face: "https://www.facebook.com/GreenwichPizza/",
  telefono: "2255-9964"
 },
 {
  likes: 8,
  dislikes: 5,
  imagen: "https://okdiario.com/img/2019/12/23/postres-nochebuena.jpg",
  nombre: "Dulces Momentos",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic perspiciatis vero tenetur beatae sint atque esse quod.",
  face: "https://www.facebook.com/DulcesMomentos/",
  telefono: "2885-9964"
 }

]


function App() {
  return (
   <div className="container">
     <Buscador array={arrayGeneral} />
   </div>    
  );
}

export default App;
