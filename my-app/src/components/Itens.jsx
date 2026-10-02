import PropTypes from "prop-types"

export default function Itens({marca = "Sem marca", lancamento = 0}){
    return(
    <>
    <li>{marca} - {lancamento}</li> 
    </>
)
}

Itens.propTypes = {
    marca: PropTypes.string,
    lancamento: PropTypes.number
}

