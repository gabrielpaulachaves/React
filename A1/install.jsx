//instalando react. Usaremos npm create vite@latest my-app -- --template react (esse my-app é o nome do projeto, pode ser qualquer nome. Ele cria uma pasta com esse nome escolhido. Depois entre na pasta criada, usando cd "pasta" e escreva npm start no terminal, e é necessario usar npm start em outra maquina pois os arquivos nao vao pro github)
//para rodar, usaremos npm run dev 

//antes eu tava usando o create-react-app, mas o vite é mais rapido e leve, e é mais facil de usar. O vite é um bundler, ele junta todos os arquivos do projeto em um unico arquivo, e tambem faz a parte de desenvolvimento, como o hot reload (quando voce salva o arquivo ele atualiza automaticamente no navegador sem precisar atualizar a pagina). O vite tambem tem suporte a typescript, mas nesse curso vamos usar apenas javascript.

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