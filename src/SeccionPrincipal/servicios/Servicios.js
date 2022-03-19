import React from 'react';
import '../servicios/EstilosServicios.scss';

export default function Servicios(){
    return(
        <section className='Servicios'>
            <article className='contenedorServicio'>
                <figure className='serviciosImagen' data-aos-duration="800" data-aos="fade-right" ><img className='serviciosImagen__img' src="./IconosServicios/DesarrolloWeb.svg" alt="Servicio brindado: Desarrollo Web" /></figure>
                <section className='servicioInfo'>
                    <h2 className='serviciosInfo__titulo' data-aos-duration="800" data-aos="fade-right">Desarrollo Web</h2>
                    <p className='serviciosInfo__parrafo' data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    ¡Si puedes pensarlo, puedes crearlo! Desarrollo con entusiasmo y alegría páginas de todo tipo, con los diseños de tus sueños.
                    </p>
                </section>
            </article>

            <article className='contenedorServicio'>
                <figure className='serviciosImagen'  data-aos-duration="800" data-aos="fade-right"><img className='serviciosImagen__img' src="./IconosServicios/ResponsiveDesing.svg" alt="Servicio brindado: Desarrollo Web Responsive Desing" /></figure>
                <section className='serviciosInfo'>
                    <h2 className='serviciosInfo__titulo' data-aos-duration="800" data-aos="fade-right">Responsive Desing</h2>
                    <p className='serviciosInfo__parrafo' data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    Todos los sitios webs, contaran con este 'Diseño Responsive', el cual consta de hacer que cada sitio web, se adapte a resoluciones desde un Smartphone hasta una computadora de escritorio
                    </p>
                </section>
            </article>

            <article className='contenedorServicio'>
                <figure className='serviciosImagen' data-aos-duration="800" data-aos="fade-right" ><img className='serviciosImagen__img' src="./IconosServicios/Seo.svg" alt="Servicio brindado: Optimizacion de motores de busqueda" /></figure>
                <section className='serviciosInfo'>
                    <h2 className='serviciosInfo__titulo' data-aos-duration="800" data-aos="fade-right">Optimizacion Web</h2>
                    <p className='serviciosInfo__parrafo' data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    Lo más importante para un sitio web, es contar con un gran tráfico de personas que estén interesadas en tu página. Por eso aplicamos las mejores y más limpias técnicas para que tu sitio sea increíble.
                    </p>
                </section>
            </article>

            <article className='contenedorServicio'>
                <figure className='serviciosImagen' data-aos-duration="800" data-aos="fade-right" ><img className='serviciosImagen__img' src="./IconosServicios/MantenimientoWeb.svg" alt="Servicio brindado: Mantenimiento web, support hosting" /></figure>
                <section className='serviciosInfo'>
                    <h2 className='serviciosInfo__titulo' data-aos-duration="800" data-aos="fade-right">Mantenimiento Web</h2>
                    <p className='serviciosInfo__parrafo' data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    Cada sitio web, necesita de un mantenimiento y cuidado semanal o mensual, ya sea para actualizaciones mínimas o grandes. Por eso contamos con atención al cliente las 24 horas del día.
                    </p>
                </section>
            </article>
        </section>
    );
}