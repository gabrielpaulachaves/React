import { useState } from "react" 
    //esse usestate cria uma variavel que vai fazer o componente lembrar seu estado toda vez que houver um re-render(quando uma funcao é chamada dnv) 
              //prop
function Square({valor, onsquareclick}){  //aqui, vamos escrever um único componente reutilizavel que funciona para todos os quadrados. Esse é o diferencial dos componentes, escrever um único codigo mas se aplicado como se fosse único para cada. Cada um terá seu próprio estado independente
   return <button className="square" onClick={onsquareclick}>{valor}</button>
}
        //esse default diz que é a funcao principal do seu arquivo para outros arquivos que estão utilizando. Tbm da liberdade para as outras pastas que importam dar o nome que quiser
export default function Board() { //componente pai
            //o componente pai pode passar um valor diferente para cada componente filho. Esse valor são props

     //squares = valor atual, vai ser tipo uma camera dos valores guardados no setsquares   //setsquares = usado para mudar o valor. Quem guarda os valores é o react
    const [squares, setsquares] = useState(Array(9).fill(null))//esse null é o valor inicial da funcao. Nesse caso, o "squares" começa com valor inicial de null
        function handleclick(i){
            const nextsquare = squares.slice()
            nextsquare[i] = "X"
            setsquares(nextsquare)
        }

        //o valor ao lado de square tem que ter o mesmo nome do prop colocado dentro da funcao square
  return ( <> 
  <div className="board"> 
      <Square valor={squares[0]} onsquareclick={() => handleclick(0)}/>  
      <Square valor={squares[1]} onsquareclick={() => handleclick(1)}/>
      <Square valor={squares[2]} onsquareclick={() => handleclick(2)}/>
  </div>
  <div className="board">
      <Square valor={squares[3]} onsquareclick={() => handleclick(3)}/>
      <Square valor={squares[4]} onsquareclick={() => handleclick(4)}/>
      <Square valor={squares[5]} onsquareclick={() => handleclick(5)}/>
  </div>
  <div className="board">
      <Square valor={squares[6]} onsquareclick={() => handleclick(6)}/>
      <Square valor={squares[7]} onsquareclick={() => handleclick(7)}/>
      <Square valor={squares[8]} onsquareclick={() => handleclick(8)}/>
  </div>
  </> )
}

//<Square valor={squares[0]}/>  nessa linha aqui, esse componente (ou funcao) está recebendo como prop o valor guardado nesse indice no array, que irá para a funcao Square(), e nessa funcao Square, há um elemento que irá exibir o valor desse prop. É basicamente assim que o pai da o valor para o filho exibir
//re-render é basicamente a ideia de chamar uma funcao toda vez que algo muda na tela. o UseState entra em cena para evitar com que os valores sejam resetados tbm, para manter os valores já clicados ainda exibindo quando algo novo atualiza na tela. Quem faz essa chamada é o react