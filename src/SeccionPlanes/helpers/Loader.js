import React from 'react';
import '../helpers/EstiloLoader.css';

export default function Loader(){
    return(
    
            <div className="lds-ring">
                <img src="./LoaderImg/enviandoMensaje.gif" alt="enviando mensaje al correo de webs arg" />
            </div>
        
    );
}