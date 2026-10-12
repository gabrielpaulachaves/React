export default function Seunome({setseunome}){
    return(
    <>
        <label>Digite seu nome</label>
        <input type="text" name="" id="" placeholder="digite seu nome" onChange={(e)=> {setseunome(e.target.value)}}/>

        
    </>
    )
}