import { Link } from "react-router-dom"


export default function Navbar(){



    return( //o link vai mudar a URL do navegador, o Route lá do app.jsx vai renderizar o componente de acordo com essa URL
        <>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/perfil">Seu perfil</Link></li>
        <li><Link to="/clique">Clique</Link></li>
       </ul> 
        </>
    )


}