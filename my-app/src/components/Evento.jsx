

export default function Evento({num}){

    function meuEvento(){
        console.log(`clicado com sucesso ${num}`)

    }

    return(
        <>
        <p>Clique</p>
        <button onClick={meuEvento}>Clicar</button>
        </>
    )
}
//testando eventos