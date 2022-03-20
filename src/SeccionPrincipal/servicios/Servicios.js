import React from 'react';
import '../servicios/EstilosServicios.scss';

export default function Servicios(){
    return(
        <section className='Servicios'>
            <article className='contenedorServicio'>
                <figure className='serviciosImagen' data-aos-duration="800" data-aos="fade-right" ><img loading='lazy' className='serviciosImagen__img' src="./IconosServicios/DesarrolloWeb.svg" alt="Servicio brindado: Desarrollo Web" /></figure>
                <section className='servicioInfo'>
                    <h2 className='serviciosInfo__titulo' data-aos-duration="800" data-aos="fade-right">Desarrollo Web</h2>
                    <p className='serviciosInfo__parrafo' data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    ¡Si puedes pensarlo, podemos crearlo! Desarrollo con entusiasmo y profesionalidad paginas orientadas al cliente con el fin de impulsar sus emprendimientos.
                    </p>
                </section>
            </article>

            <article className='contenedorServicio'>
                <figure className='serviciosImagen'  data-aos-duration="800" data-aos="fade-right"><img loading='lazy' className='serviciosImagen__img' src="./IconosServicios/ResponsiveDesing.svg" alt="Servicio brindado: Desarrollo Web Responsive Desing" /></figure>
                <section className='serviciosInfo'>
                    <h2 className='serviciosInfo__titulo' data-aos-duration="800" data-aos="fade-right">Responsive Desing</h2>
                    <p className='serviciosInfo__parrafo' data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    Todos los sitios webs, contaran con este 'Diseño Responsive', el cual consta de hacer que cada página web, se adapte a resoluciones desde un Smartphone hasta una computadora de escritorio.
                    </p>
                </section>
            </article>

            <article className='contenedorServicio'>
                <figure className='serviciosImagen' data-aos-duration="800" data-aos="fade-right" ><img loading='lazy' className='serviciosImagen__img' src="./IconosServicios/Seo.svg" alt="Servicio brindado: Optimizacion de motores de busqueda" /></figure>
                <section className='serviciosInfo'>
                    <h2 className='serviciosInfo__titulo' data-aos-duration="800" data-aos="fade-right">Optimizacion Web</h2>
                    <p className='serviciosInfo__parrafo' data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    La optimización para los motores de búsqueda (SEO) es lo más importante para un sitio web, contar con un gran tráfico de personas que estén interesadas en tu negocio.
                    </p>
                </section>
            </article>

            <article className='contenedorServicio'>
                <figure className='serviciosImagen' data-aos-duration="800" data-aos="fade-right" ><img loading='lazy' className='serviciosImagen__img' src="./IconosServicios/MantenimientoWeb.svg" alt="Servicio brindado: Mantenimiento web, support hosting" /></figure>
                <section className='serviciosInfo'>
                    <h2 className='serviciosInfo__titulo' data-aos-duration="800" data-aos="fade-right">Mantenimiento Web</h2>
                    <p className='serviciosInfo__parrafo' data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    El mantenimiento web de cada sitio incluye un cuidado semanal o mensual, ya sea para actualizaciones mínimas o grandes, corrección de errores, optimizaciones del contenido y mejoras en la seguridad de la página.
                    </p>
                </section>
            </article>
        </section>
    );
}