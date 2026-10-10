import { useState } from "react"

export default function Form(){

    function cadastrarusu(e){
        e.preventDefault() //metodo que nao envia o formulario. Quando fomos usar o evento onSubmit iremos usar esse metodo tbm, pois vai nos ajudar a concluir oq deve ser feito com o componente. VEndo oq ele fez: a pagina nao resetou, ou seja, nao enviou, e o console.log apareceu
        console.log(`seu nome é ${name}`)
        console.log("cadastrado")
    }

    const [name, setname] = useState() 
    //o name é o "antigo", ou atual mesmo, o setname é o que vai colocar outro valor no name. O que tiver no setname, irá para o name
    const [senha, setsenha] = useState()
    //no codigo, onChange={(e) => setsenha(e.target.value)} basicamente isso significa: um evento de mudança irá colocar dentro do setsenha o valor digitado pelo elemento que executou aquela funcao (o e.target). 
    //o set"algumacoisa" sempre será a constante que irá mudar o valor da primeira constante (nao é obrigatorio usar set, mas é uma boa pratica, só de ser a segunda variavel, ela já terá a funcao de mudar o valor da primeira)

    return(
        <>
        <h1>formulário</h1>
        <form action="post" onSubmit={cadastrarusu}>
            <label htmlFor="name"></label>
        <input type="text" name="name" id="name" placeholder="Digite seu nome" onChange={(e) => setname(e.target.value)}/>
        <label htmlFor="senha"></label>
        <input type="password" name="senha" id="senha" placeholder="digite sua senha" onChange={(e) => setsenha(e.target.value)}/>
                                                                                                
        <input type="submit" value="cadastrar" />
        </form>
        
        </>
    )
}