import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"  //regra: usamos {} quando importamos algo no qual o nome deve ser identico ao do arquivo
//import AuthProvider from '../contexts/AuthContext';  aqui nao preciso colocar {}, eu poderia chamar por outro nome, pois defini como export default no arquivo de onde foi escrito. E só podemos ter UM export default nos arquivos


export default function Perfil(){

    const [nome, setNome] = useState()
    const {log, setLog }= useContext(AuthContext)
    

    return (
        <>
        <h1>Olá, {log}</h1>
        <input type="text" name="nome" id="nome" placeholder="alterar nome" onChange={(e)=> setNome(e.target.value)}/>
        <button onClick={()=> setLog(nome)}>alterar</button>
        </>
    )
}