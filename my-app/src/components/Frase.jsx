//para importar o css pra cá: import styles from "./Frase.module.css"

//funciona como props
import styles from "./Frase.module.css"

export default function Frase(){
    return (
        <>
        <p className={styles.frasinha}>Utilizando componentes reutilizáveis em react</p>
        </>
    )
}