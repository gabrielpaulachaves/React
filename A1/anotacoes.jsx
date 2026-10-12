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

*/