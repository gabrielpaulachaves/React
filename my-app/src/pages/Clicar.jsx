import { useState, useEffect } from "react"
export default function Clicar(){
    
        const [numero, setNumero] = useState(0)

        useEffect(()=>{
            document.title = `você clicou ${numero} vezes`
            console.log(`Aba atualizada`)
        }, [numero])

    return(
        <>
        <button onClick={()=> setNumero(numero + 1)}>clicar</button>
        </>
    )
}