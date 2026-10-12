import { useSearchParams } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"


export default function Navbar(){
const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const descricao = searchParams.get("descricao")

function verDetalhes(e){
    navigate(`/contato?title=${e.title}&descricao=${e.descricao}`)
}

    return(
        <>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link onClick={()=>{verDetalhes(contato)}} to="/contato">Contato</Link></li>
       </ul> 
        </>
    )


}