import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}){ //esse chieldren representa todos os componentes que ficarao dentro do AuthProvider
        //é tudo que fica dentro de <AuthProvider> </AuthProvider>

    const [log, setLog] = useState('Eren') //criamos o useState para guardar o dado que vamos transmitir

    return ( //esse .Provider é para dizer que ele que vai prover o valor dentro do value para tudo que estiver dentro dele (o children)
       <AuthContext.Provider value={{ log, setLog }}>
        {children}
       </AuthContext.Provider>
    )
}

