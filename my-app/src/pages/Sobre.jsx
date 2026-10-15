import { useState, useEffect } from "react"
export default function Sobre(){
    
    const [usuario, setUsuario] = useState([])


        useEffect(()=>{
        console.log("Salvando o nome do usuário no banco de dados..")

        setUsuario(["Gabriel"])
    }, [])
    
    return(
        <>
        <h1>Pagina sobre</h1>
        <h2>Quem somos?</h2>
        <ul> 
        {usuario.map(usu => (
            <li key={usu}>{usu}</li>
        ))}</ul>
        </>
    )
}

