import { useSearchParams } from "react-router-dom"

export default function Contato(){
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const descricao = searchParams.get("descricao")
    return(
        <>
        <h1>Pagina de contatos</h1>
        <h2>{title}</h2>
        <p>{descricao}</p>
        </>
    )


}