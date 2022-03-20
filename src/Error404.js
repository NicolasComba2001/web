import { Link } from 'react-router-dom';
import './EstilosError404/EstilosError.scss';
export default function Error404(){
    return(
        <>
        <figure className="errorpage">
            <img className="errorpage__img" src="./Error404/Error404.gif" alt="no se ha encontrado la pagina que buscas, vuelve a https://nicolascomba2001.github.io/web/" />
            <figure className="errorpageinfo">
                <p className='mensajeError'> <span className='mensaje404'>404</span><br/> NOT FOUND : (</p>
                <p className="errorpageinfo__titulo">UPS! No se ha encontrado esta seccion de nuestra pagina. Vuelve al enlace original.</p>
                <Link className="errorpageinfo__enlace" to="/">Enlace Original</Link>
            </figure>
        </figure>
        </>
    );
}