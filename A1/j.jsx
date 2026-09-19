import { useState } from 'react';

function Button(){
    const [click, setclicando] = useState;

    function clicar(){
        useState(setclicando + 1);
    }

    return(
        <button onClick={clicar}>
            <div>
                vc clicou {click} vezes
            </div>
        </button>


    )
}