import React from 'react';
import HeaderMenu from './SeccionPrincipal/menu/HeaderHome';
import TituloHome from './SeccionPrincipal/textohome/TituloHome';
import Servicios from './SeccionPrincipal/servicios/Servicios';
import Infoweb from './SeccionInfoWeb/Infoweb';
import PlanesDesarrollo from './SeccionPlanes/PlanesDesarrollo';


export default function SeccionHome(){
    return(
        <section style={{overflow:"hidden"}}>
            {/* MENU */}
            <HeaderMenu></HeaderMenu>
            {/* IMAGEN INICIO CON TEXTO */}
            <TituloHome></TituloHome>
            {/* Servicios */}
            <Servicios></Servicios>
            {/* INFO DE LA WEB */}
            <Infoweb
            imagen={'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
            lista={<ul className='listaDesarrollo' data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
                <li>Desarrollo web responsivo</li>
                <li>Optimizacion del sitio web</li>
                <li>Mejora de posicionamiento web</li>
                <li>Funcionalidades y estilos</li>
                <li>Dinamismo</li>
            </ul>}
            titulo={"DESARROLLO & FORMATO"}
            alt={"Desarrollamos paginas web completamente dinamicas y reactivas."}
            descripcion={"Creamos tu pagina web dinamica, optimizada y con un alto rendimiento para que impulses tu marca o tu negocio y puedas crecer mientras generas ingresos."}
            ></Infoweb>
             <Infoweb
             lista={<ul className='listaDesarrollo' data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
             <li>Contenido original del sitio</li>
             <li>Optimizacion de contenido multimedia</li>
             <li>Enlaces de calidad</li>
             <li>Mejoras del rendimiento</li>
             <li>Mejor posicionamiento</li>
         </ul>}
            imagen={'https://images.pexels.com/photos/3183179/pexels-photo-3183179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            titulo={"OPTIMIZACION & ESTRATEGIA"}
            alt={"Desarrollamos paginas web completamente dinamicas y reactivas."}
            descripcion={"Creamos tu pagina web dinamica, optimizada y con un alto rendimiento para que impulses tu marca o tu negocio y puedas crecer mientras generas ingresos."}
            ></Infoweb>
            {/* PLANES DE DESARROLLO */}
            <PlanesDesarrollo></PlanesDesarrollo>


        </section>
    );
}