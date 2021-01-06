//USANDO REACT E JSX
import React from 'react';
import ReactDom from 'react-dom';

import './index.css'; //arquivo css

import App from './App';

ReactDom.render( 
    <App> </App>, //jsx
     document.getElementById('root')
  

)

// USANDO REACT-DOM

// import ReactDom from 'react-dom';
// //serve para redenrizar, mostrar algo na tela

// // pegando a div do indexedDB.html
// const el = document.getElementById('root');

// //o 1º parametro serve para colocar o 
// // que eu quero renderizar na tela
// //o 2º é para onde eu quero inserir o que 
// // eu renderizei
// ReactDom.render('OLá React', el);