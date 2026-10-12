export default function Saudacoes({nome}){

    function gerarsaudacao(qualquernome){
        if(qualquernome){
           return `Oi, ${qualquernome}` 
        }else{
            return ``
        }
        
    }

    return(
        <>
     <p>{gerarsaudacao(nome)}</p>   
        </>
    )
}