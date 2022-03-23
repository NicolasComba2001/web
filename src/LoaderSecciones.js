import './EstilosSeccionLoader.scss';

export default function LoaderSecciones(){
    return (
        <>
        <figure className="loaderSeccion">
            <img className="loaderSeccion__img" src="./LogoHome/DesarrolloWeb.png" alt="Desarrollo web, web arg, crea tu sitio web ideal." />
            <article className="tituloSeccion">
                <em className="tituloSeccion__titulo">WEBS ARG</em>
            </article>
            <p className='tituloSeccion__sub'>Cargando contenido<span className='tipado'>. . . .</span></p>
        </figure>
        </>
    );
}