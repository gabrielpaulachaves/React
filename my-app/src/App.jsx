import './App.css';
import Hworld from './components/Hworld'
import Saymn from './components/Saymn'; 
import { Pessoa } from './components/Pessoa';


function App() {
  let nome = "Gabriel"

  let url = "https://static.gazetaesportiva.com/uploads/imagem/2020/08/12/WhatsApp-Image-2020-08-12-at-00.45.17.jpeg"
  let url2 = "https://thunderdungeon.com/wp-content/uploads/2025/11/cat-memes-1-20251111.jpg"
  function somar(a, b){
    return a + b

  }


  return ( 
    <div className="App">
        <h1>Olá, {nome}</h1>
      <p>somando tudo: {somar(45, 6)}</p>
      <h2>Sua foto:</h2>
      <img src={url} alt="sua foto" />
      <Hworld />
      <Saymn nome="Yuchikage Kira" idade="31"/> 
      <Pessoa nome="Light Yagami" foto={url2} profissao="modelo"/>
    </div>
  );
}

export default App;
