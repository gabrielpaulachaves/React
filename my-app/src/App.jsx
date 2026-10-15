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
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Navbar from './components/Navbar';
import Perfil from './pages/Perfil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //BrowserRouter é o Router
//QUALQUER HOOK DO REACT ROUTER (COMO O useNavigate, useSearchParams) SÓ FUNCIONAM DENTRO DO <Router />

export default function App() {

 // let nome = "Gabriel"

  //let url = "https://static.gazetaesportiva.com/uploads/imagem/2020/08/12/WhatsApp-Image-2020-08-12-at-00.45.17.jpeg"
 // let url2 = "https://thunderdungeon.com/wp-content/uploads/2025/11/cat-memes-1-20251111.jpg"
  //function somar(a, b){
  //  return a + b

 // }

  //const meusitens = ['teclado', 'mouse', 'monitor', 'luminaria']

  //const [seunome, setseunome] = useState('') //no statelift, ao inves de escrever o usestate no componente filho (que nesse exemplo, seria o <seunome/>, escrevemos aqui no componente pai)

    //dentro de Router posso definir tbm componentes padroes e views(que serao as rotas)
  //<li><Link to="/"></Link></li>  esse 'to' é igual ao href no html, ele leva para a URL
  //<Route path='/'> esse path diz que a URL (que está dentro dos "" no path) exibirá o componente home

  return (  //o Routes substituiu o switch, o componente navbar fica dentro de Router mas fora de Routes, pois ele deve aparecer em todas as paginas
          //o componente vai dentro de {} em element. O path é o caminnho da URL para acessar ele
          //essa é a ordem. Router>Routes>Route
          //quando colocamos um componente dentro de Router, mas fora de Routes, o reat entende que é estatico
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/contato" element={<Contato />}/> 
        <Route path="/perfil" element={<Perfil />}/> 
        </Routes>
    </Router>
  );

 //com o Router, podemos tirar essa div.App
   
      
      {/*
       <div className="App">
     <h1>State lift</h1>
      <Seunome setseunome={setseunome}/>
      
      <Saudacoes nome={seunome}/>

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
      </div>

    */}
}


//referente aula 08: podemos definir tipos para props, definimos em um objeto chamado PropTypes no componente, e também podemos definir um valor default. Para isso, usamos import PropTypes from "prop-types" (no arquivo Itens.jsx há eu fazendo o uso)