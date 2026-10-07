export function Pessoa({nome, foto, profissao}){ //uma forma mais facil de usar props, desestruturando em 3 nomes (ou a quantidade que vc decidir) de variaveis diferentes
    return(
        <>
            <img src={foto} alt="sua foto" />
            <p>Caramba, {nome}! Você é {profissao}?</p>

        </>
    )
}