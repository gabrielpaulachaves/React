export default function Form(){

    function cadastrarusu(e){
        e.preventDefault() //metodo que nao envia o formulario. Quando fomos usar o evento onSubmit iremos usar esse metodo tbm, pois vai nos ajudar a concluir oq deve ser feito com o componente. VEndo oq ele fez: a pagina nao resetou, ou seja, nao enviou, e o console.log apareceu
        console.log("cadastrado")
    }
    return(
        <>
        <h1>formulário</h1>
        <form action="post" onSubmit={cadastrarusu}>
        <input type="text" name="" id="" placeholder="Digite seu nome" />
        <input type="submit" value="cadastrar" />
        </form>
        
        </>
    )
}