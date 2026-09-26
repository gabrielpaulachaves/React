import './App.css';
import Hworld from './components/Hworld'

function App() {
  let nome = "Gabriel"

  let url = "https://static.gazetaesportiva.com/uploads/imagem/2020/08/12/WhatsApp-Image-2020-08-12-at-00.45.17.jpeg"
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
    </div>
  );
}

export default App;
