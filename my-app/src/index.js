//esse é o arquivo central

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //esse é o css global da aplicacao
//porem, quando chegamos a nivel de componente, é interessante um arquivo CSS para cada um. Criamos assim: Frase.module.css (ou seja: "Componente".module.css)
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
