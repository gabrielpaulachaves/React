import { useNavigate } from "react-router-dom"
export default function Perfil(){
    const nome = "bagre"
    const navigate = useNavigate()

    function logOut(){
        console.log("Saindo da sessão")

        navigate("/")
    }


    return (
        <>
            <h1>Bem-vindo!, {nome}</h1>
            <label htmlFor="">alterar nome</label>
            <input type="text" name="" id="" />
            <button onClick={logOut}>Sair</button>

        </>
    )
}