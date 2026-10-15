//funcoes
//sao reutilizaveis (podem ser utilizados em qualquer lugar da aplicaçao) e podem mostrar coisas diferentes
//devemos criá-los em uma pasta chamada components
//inicial de um componente começa com letra maiuscula
//é interessante saber que o nome da funcao deve ser o mesmo nome que o do arquivo. É uma boa prática
/*Ex:
    arquivo: Hworld.jsx

    function Hworld(){
    }

*/

//para usar um componente em outro arquivo, primeiro importe ele: import 'nome' from 'arquivo'

//e no codigo, use <'nome' />

//é possivel importar componentes para outros componentes

//props sao valores passados para componentes (como parametros)
//é passado como um atributo na chamada do componente
//Os props vao ser como objetos, ou seja: prop.nome, prop.qualquercoisa. Enviaremos várias propriedades para um componente, o componente vai condensar em uma prop e assim acessaremos no codigo essas propriedades.
//props sao somente de leitura, nao conseguiremos alterar igual com objetos normais

/*A 10 -
usestate é um hook, ele muda o estado dos elementos no react. Funciona com eventos
da pra mudar o state baseado em um evento. Ou seja, ao executar um evento, muda o state
*/
/*
A 11 -
passando eventos por props
metodos (funcoes) podem ser passados por props. Tipo um componente filho ativar um metodo do componente pai


A 12-
renderizacao por condicao(if)
exibiremos conteudo baseado em if/else
podemos usar state para criar condicoes
    usaremos {condicao && ()}    os && sao o if

A 13 -
renderizando listas
(componente Lista)

A 14 - statelift
tecnica para compartilhar estado
alguns componentes podem depender do mesmo estado, e pra isso, passamos o state pro componente pai
definimos quem usa e quem define
quando tenho dois ou mais componentes que precisam atualizar o mesmo estado ou usar o mesmo estado mas nao conseguir passar o estado de um pro outro, entao colocamos o estado no componente pai


A 15 - react router
é por ele que iremos mudar as paginas
muda a URL da aplicacao, é igual quando eu mudava a URL pelo nodejs, só que agora quem vai mudar é o react
vamos poder acessar outras paginas sem o page reload

para instalar: npm install react-router-dom


useEffect
é como 'o que o componente faz(a açao do componente)'
usado para gerenciar efeitos colaterias. Que é basicamente uma açao que "vaze" para fora do que é mostrado na tela(ex: buscar API, iniciar um setTimeout, ouvir evento de navegador)
sintaxe:
useEffect(()=>{o que ele vai executar}, [quando ele deve fazer]) ou seja, tudo que acontecer dentro do [], ele vai executar a funcao dentro do {}

quando passamos esse array vazio, o useEffect será executado apenas uma vez, quando o componente for renderizado


Ou seja, ele executa a partir do momento que o componente é renderizado

*/