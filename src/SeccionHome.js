import React from 'react';
import HeaderMenu from './SeccionPrincipal/menu/HeaderHome';
import TituloHome from './SeccionPrincipal/textohome/TituloHome';
import Servicios from './SeccionPrincipal/servicios/Servicios';
import Infoweb from './SeccionInfoWeb/Infoweb';
import PlanesDesarrollo from './SeccionPlanes/PlanesDesarrollo';



export default function SeccionHome({children}){
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
            imagen={'./Imagenesinfoweb/DesarrolloWebprofesional.jpg'}
            lista={<ul className='listaDesarrollo' data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
                <li>Desarrollo web responsivo</li>
                <li>Optimización del sitio web</li>
                <li>Mejora de posicionamiento web</li>
                <li>Funcionalidades y estilos</li>
                <li>Dinamismo</li>
            </ul>}
            titulo={"DESARROLLO & FORMATO"}
            alt={"Desarrollamos paginas web completamente dinamicas y reactivas."}
            descripcion={"Creamos tu página web dinámica, optimizada y con un alto rendimiento para que impulses tu marca o tu negocio y puedas crecer mientras generas ingresos."}
            ></Infoweb>
             <Infoweb
             clase="row-reverse"
             lista={<ul className='listaDesarrollo' data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
             <li>Contenido original del sitio</li>
             <li>Optimización de contenido multimedia</li>
             <li>Enlaces de calidad</li>
             <li>Mejoras del rendimiento</li>
             <li>Mejor posicionamiento</li>
         </ul>}
            imagen={'./Imagenesinfoweb/Optimizacionyformatoweb.jpg'}
            titulo={"OPTIMIZACION & ESTRATEGIA"}
            alt={"Nos enfocamos en la fluides del sitio web, la optimización de su contenido y que el usuario tenga la mejor experiencia mientras navega por el sitio web."}
            descripcion={"Nos enfocamos en la fluides del sitio web, la optimización de su contenido y que el usuario tenga la mejor experiencia mientras navega por el sitio web."}
            ></Infoweb>
            {/* PLANES DE DESARROLLO */}
            <PlanesDesarrollo></PlanesDesarrollo>
        {children}
        </section>
    );
}