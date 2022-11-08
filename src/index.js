import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Componente({titulo , contenido}){
  return(
    <div>
      <h1>{titulo}</h1>
      <div>{contenido}</div>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <Componente titulo="Titulo 1" contenido="Hola desde React"/>
  </React.StrictMode>
);

