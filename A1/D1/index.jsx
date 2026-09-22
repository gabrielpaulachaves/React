import { StrictMode } from 'react'; //o proprio react
import { createRoot } from 'react-dom/client'; //biblioteca react que "conversa" com o navegador

import App from "./App"

const root = createRoot(document.getElementById("root"))  //é basicamente a conexao do react com o HTML. O react vai controlar tudo do HTML que estiver dentro desa root
root.render((
    <StrictMode>
        <App />
    </StrictMode>
))
