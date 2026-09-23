import { useState } from "react" 
    //esse usestate cria uma variavel que vai fazer o componente lembrar  
              //prop
function Square({valor}){  //aqui, vamos escrever um único componente reutilizavel que funciona para todos os quadrados. Esse é o diferencial dos componentes, escrever um único codigo mas se aplicado como se fosse único para cada. Cada um terá seu próprio estado independente
   return <button className="square">{valor}</button>
}

export default function Board() { //componente pai
            //o componente pai pode passar um valor diferente para cada componente filho. Esse valor são props
         //valor atual   //setsquares = usado para mudar o valor
    const [squares, setsquares] = useState(Array(9).fill(null))//esse null é o valor inicial da funcao. Nesse caso, o "squares" começa com valor inicial de null
        //esse default diz que é a funcao principal do seu arquivo para outros arquivos que estão utilizando. Tbm da liberdade para as outras pastas que importam dar o nome que quiser

        //aqui estamos usando componentes aninhados

        //o valor ao lado de square tem que ter o mesmo nome do prop colocado dentro da funcao square
  return ( <> 
  <div className="board"> 
      <Square valor={squares[0]}/>  
      <Square valor={squares[1]}/>
      <Square valor={squares[2]}/>
  </div>
  <div className="board">
      <Square valor={squares[3]}/>
      <Square valor={squares[4]}/>
      <Square valor={squares[5]}/>
  </div>
  <div className="board">
      <Square valor={squares[6]}/>
      <Square valor={squares[7]}/>
      <Square valor={squares[8]}/>
  </div>
  </> )
}