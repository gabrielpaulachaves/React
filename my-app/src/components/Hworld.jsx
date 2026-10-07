import Frase from "./Frase"

export default function Hworld(){
    let sohaqui = "Essa variável foi criada dentro de um componente importado"
    return ( 
        <>
        <Frase />
        <p>Primeiro componente</p>
        <div>{sohaqui}</div>
        <Frase />
        <Frase />
        
        </>
    )


}

//dentro de um componente só pode ter UM elemento (o que nao impede de ter varios elementos dentro desse unico elemento), nunca feremos isso:
/*
    return ( 
       <h1>oi</h1>
        <h2>bem vindo</h2>
    )
  isso da erro, invés disso, feche com uma div com ou <></>

     return ( 
        <>
       <h1>oi</h1>
        <h2>bem vindo</h2>
        </>
    )


*/