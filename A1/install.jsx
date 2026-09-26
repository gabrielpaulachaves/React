//instalando react. Usaremos npx create-react-app my-app (esse my-app é o nome do projeto, pode ser qualquer nome. Ele cria uma pasta com esse nome escolhido. Depois entre na pasta criada, usando cd "pasta" e escreva npm start no terminal, e é necessario usar npm start em outra maquina pois os arquivos nao vao pro github)

//arquivos JSX é tipo javascript e HTML

//é baiscamente a funçao principal, na parte de fora criamos os componentes e fazemos importaçoes, veja essa funcao como o body do html

function app(){
    let nome = "Gabriel"


    return (
        <>
            <h1>Olá, {nome}</h1>
        </>
    )

}

//nao vai dar para testar isso no navegador pois precisaria passar esse arquivo para a pasta .src, mas entao irei anotar cada codigo em arquivos separados e para testar irei copiar e colar no src/App.js
export default app