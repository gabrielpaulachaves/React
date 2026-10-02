
//props sao valores passados para componentes (como parametros)
//é passado como um atributo na chamada do componente
//Os props vao ser como objetos, ou seja: prop.nome, prop.qualquercoisa. Enviaremos várias propriedades para um componente, o componente vai condensar em uma prop e assim acessaremos no codigo essas propriedades.
//props sao somente de leitura, nao conseguiremos alterar igual com objetos normais
export default function Saymn(prop){
    return(
        <>
        <p>Olá, {prop.nome} você possui {prop.idade} anos</p>
            
        </>

    )
}

//lá no app.jsx coloquei <Saymn nome="Yuchikage Kira" idade="31"/>, esse nome="" e idade="" sao as propriedades. Por isso as props agem como objeto num componente
