import React from 'react';
import Planes from './Planes';
import '../SeccionPlanes/EstilosPlanes.scss';

export default function PlanesDesarrollo(){
    return(
        <section className='planes'  id="planes">
            <article className='planesInfo'>
                <h3 className='planesInfo__titulo'>ELIGE TU PLAN</h3>
                <strong className='planesInfo__sub' data-aos="fade-up" data-aos-duration="800">PIENZA EN EL FUTURO Y EN CRECER</strong>
            </article>

            <Planes
            estilo={'switch'}
            clase={"BASICO"}
            descripcion={"Mejor plan para negocios pequeños que necesiten una landing page para publicitar su producto."}
            precio={40}
            lista={
                <ul className='listaplan'>
                    <li className='listaplan__items'>1 Pagina web a eleccion</li>
                    <li className='listaplan__items'>Limite de Subpaginas</li>
                    <li className='listaplan__items'>Optimizacion web</li>
                    <li className='listaplan__items'>No incluye Hosting</li>
                </ul>
            }></Planes>
             <Planes
            clase={"PREMIUM"}
            descripcion={"Mejor plan para negocios pequeños que necesiten una landing page para publicitar su producto."}
            precio={150}
            lista={
                <ul className='listaplan'>
                    <li className='listaplan__items'>'Pack de webs'</li>
                    <li className='listaplan__items'>Mantenimiento web</li>
                    <li className='listaplan__items'>Aplicacion S.E.O</li>
                    <li className='listaplan__items'>Hosting</li>
                </ul>
            }></Planes>
        </section>
    );
}