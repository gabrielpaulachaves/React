import Itens from "./Itens"

export default function Lists(){
    return(
    <>
    <h1>Minha lista de itens</h1>
    <ul>
        <Itens marca="Mouse attack shark R1" lancamento={1984} /> 
        <Itens marca="Monitor AOC 144hz" lancamento={1765} />
        <Itens marca="Teclado Attack shark x87" lancamento={1881} />
        <Itens />
    </ul>
    </>
)
}
//para passar um numero para uma propriedade de um prop, usamos {}