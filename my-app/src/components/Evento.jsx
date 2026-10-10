
import Botao from "./Botao"

export default function Evento(){

    function meuEvento(){
        console.log("ativando evento")

    }
    function segundoEvento(){
        console.log("ativando segundo evento")
    }

    return(
        <>    
        <p>Clique</p>
         <Botao event={meuEvento} text="evento"/>
         <Botao event={segundoEvento} text="evento dois"/>
        </>
    )
}
//testando eventos