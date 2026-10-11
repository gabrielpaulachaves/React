export default function Lista({itens}){
    return(
        <>
        <h2>Lista de inutilidades</h2>

        { itens.length > 0 ? (
               itens.map((item, index) =>(
                <p key={index}>{item}</p> //essa key é como o identificador, como nao estamos usando objetos dentro de array, fizemos dessa forma, normalmente essa key vem do backend    
            )) 
        ) : ( <p>Não há nada na lista</p> )
        }
        </>
    )
}