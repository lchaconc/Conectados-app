import React from 'react';
import Tarjeta from './comp/Tarjeta';

const item= {
  likes: 5,
  dislikes: 0,
  imagen: "https://cdn2.salud180.com/sites/default/files/field/image/2016/02/salon111.jpg",
  nombre: "Salón de belleza Elena",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic perspiciatis vero tenetur beatae sint atque esse quod.",
  url: "https://www.facebook.com/saladebellezamarme/",
  telefono: "2255-8899"
 };


function App() {
  return (
    <div className="row">
          <Tarjeta item={item} />
    </div>
  );
}

export default App;
