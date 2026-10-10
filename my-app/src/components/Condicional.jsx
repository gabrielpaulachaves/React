import { useState } from "react"

export default function Condicional(){

let [email, setemail] = useState()
let [useremail, setuseremail] = useState()
console.log(email)
function enviarEmail(e){
    e.preventDefault()
    //console.log(email)
    setuseremail(email)

    
    console.log(`${useremail} 1`)
}
function limparemail(){
    setuseremail(``)
    console.log(`${useremail} 2`)
}

    return(
        <>
        <h2>Cadastre seu email</h2>
        <form action="">
        <input type="email" name="" id="" placeholder="Seu email aqui" onChange={(e)=> setemail(e.target.value)}/>
        <button type="submit" onClick={enviarEmail}>Enviar</button>
       {useremail &&(
        <>
        <div>Email cadastrado, o email é {useremail}</div>
        <button onClick={limparemail}>limpar</button>
        </>
       )

       }
        </form>
        
        </>
    )
    
}
//confusao minha. Na verdade, o usestate vai fotografar o estado anterior para exibir no proximo render. Mas há um porem, quando eu coloquei console.log(email), ele nao mostrou undefined. Mas tem uma confusao na minha cabeça, ao digitar qualquer coisa, o email já "fotografa" o que foi escrito (foi um teste empirico usando console.log(email) antes da funcao enviarEmail e o valor aparece (mas estranhamente aparece duas vezes)), e para o useremail fotografar, antes eu preciso executar essa funcao clicando no botao que vai disparar essa funcao, mas era para ele fotografar o valor de email tambem, já que o setuseremail está mudando o valor de undefined para o valor que vem do email, e entao o useremail fotografa esse valor que chegou.