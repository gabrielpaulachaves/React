import { useState } from "react" 
 //prop
function Square(){  //aqui, vamos escrever um único componente reutilizavel que funciona para todos os quadrados. Esse é o diferencial dos componentes, escrever um único codigo mas se aplicado como se fosse único para cada. Cada um terá seu próprio estado independente

    //valor atual   //setValue = usado para mudar o valor
    const [squares, setsquares] = useState(Array(9).fill(null))//esse null é o valor inicial da funcao. Nesse caso, o "valor" começa com valor inicial de null

    function handleclick(){
        setValue('x')
    }

   return <button className="square" onClick={handleclick}>{valor}</button>
}

export default function Board() { //componente pai
            //o componente pai pode passar um valor diferente para cada componente filho. Esse valor são props
        
        //esse default diz que é a funcao principal do seu arquivo para outros arquivos que estão utilizando. Tbm da liberdade para as outras pastas que importam dar o nome que quiser

        //aqui estamos usando componentes aninhados

        //o valor ao lado de square tem que ter o mesmo nome do prop colocado dentro da funcao square
  return  <> 
  <div className="board"> 
      <Square />  
      <Square />
      <Square />
  </div>
  <div className="board">
      <Square />
      <Square />
      <Square />
  </div>
  <div className="board">
      <Square />
      <Square />
      <Square />
  </div>
  </> 
}