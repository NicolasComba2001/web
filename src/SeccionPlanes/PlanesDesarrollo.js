import React from 'react';
import Planes from './Planes';
import '../SeccionPlanes/EstilosPlanes.scss';

export default function PlanesDesarrollo(){
    return(
        <section className='planes'  id="planes">
            <article className='planesInfo'>
                <h3 className='planesInfo__titulo'>ELIGE TU PLAN</h3>
                <strong className='planesInfo__sub' data-aos="fade-up" data-aos-duration="800">PLAN DE NEGOCIOS PARA EMPRENDEDORES</strong>
            </article>
            <section className='planes-flex'>
            <Planes
            estilo={'switch'}
            clase={"BASICO"}
            descripcion={"El mejor plan para publicitar tus productos y servicios alcanzando numerosas visitas en la web."}
            precio={40}
            lista={
                <ul className='listaplan'>
                    <li className='listaplan__items'>1 página web a elección</li>
                    <li className='listaplan__items'>Límite de Subpáginas</li>
                    <li className='listaplan__items'>Optimización web</li>
                    <li className='listaplan__items'>No incluye Hosting</li>
                </ul>
            }></Planes>
             <Planes
            clase={"PREMIUM"}
            descripcion={"¡Ten grandes ideas! Impúlsate mas allá de tu sitio convencional, crea más sitios web para crecer en tu negocio."}
            precio={150}
            lista={
                <ul className='listaplan'>
                    <li className='listaplan__items'>'Pack de webs'</li>
                    <li className='listaplan__items'>Mantenimiento web</li>
                    <li className='listaplan__items'>Aplicación S.E.O</li>
                    <li className='listaplan__items'>Hosting</li>
                </ul>
            }></Planes>
            </section>
        </section>
    );
}