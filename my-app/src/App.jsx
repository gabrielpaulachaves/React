import './App.css';
import Hworld from './components/Hworld'
import Saymn from './components/Saymn'; 
import { Pessoa } from './components/Pessoa';
import Lists from './components/Lists';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import Lista from './components/Lista';
import Seunome from './components/Seunome';
import { useState } from 'react';
import Saudacoes from './Saudacoes';

function App() {

  let nome = "Gabriel"

  let url = "https://static.gazetaesportiva.com/uploads/imagem/2020/08/12/WhatsApp-Image-2020-08-12-at-00.45.17.jpeg"
  let url2 = "https://thunderdungeon.com/wp-content/uploads/2025/11/cat-memes-1-20251111.jpg"
  function somar(a, b){
    return a + b

  }

  const meusitens = ['teclado', 'mouse', 'monitor', 'luminaria']

  const [seunome, setseunome] = useState('') //no statelift, ao inves de escrever o usestate no componente filho (que nesse exemplo, seria o <seunome/>, escrevemos aqui no componente pai)

  return ( 
    <div className="App">
        <h1>State lift</h1>
      <Seunome setseunome={setseunome}/>
      
      <Saudacoes nome={seunome}/>
      {/*
    <Lista itens={meusitens}/>
       <Lista itens=''/> 
      
      <Condicional />

        CODIGO ANTIGO, IREI TESTAR OUTRO
      
        <h1>Olá, {nome}</h1>
      <p>somando tudo: {somar(45, 6)}</p>
      <h2>Sua foto:</h2>
      <img src={url} alt="sua foto" />
      <Hworld />
      <Saymn nome="Yuchikage Kira" idade="31"/> 
      <Pessoa nome="Light Yagami" foto={url2} profissao="modelo"/>
      <Lists />
      <Evento/>
      <Form />
    */}


    </div>
  );
}

export default App;


//referente aula 08: podemos definir tipos para props, definimos em um objeto chamado PropTypes no componente, e também podemos definir um valor default. Para isso, usamos import PropTypes from "prop-types" (no arquivo Itens.jsx há eu fazendo o uso)