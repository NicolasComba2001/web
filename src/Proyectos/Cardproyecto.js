import React from 'react';
import '../Proyectos/Estiloscard.scss';
export default function Cardproyecto({img, alt, web, desc,titulo}){
    return(
        <section className='card'>
            <article className='cartaproyecto' data-aos="zoom-in" data-aos-duration="800">
                        <a href={web} target="_blank" rel='noreferrer'>
                        <figure className='cartaimagen'><img className='cartaimagen__img' src={img} alt={alt} /></figure>
                        </a>
                        <div className='cartabotones'>
                                <a className='cartabotones__btn' href={web}>Sitio web</a>
                        </div>
                        <section className='cartatexto'>
                            <article className='cartadescripcion'>
                                <p className='cartadescripcion__titulo'>{titulo}</p>
                                <p className='cartadescripcion__desc'  data-aos="zoom-in" dat-aos-duration="800" data-aos-delay="300">{desc}</p>
                            </article>
                            <figure className='cartalogo'><img className='cartalogo__logo' src="./LogoHome/DesarrolloWeb.png" alt="Webs Arg desarrollo web frontend, calidad y estilo" />
                            <figcaption className='cartalogo__hecho'>Hecho por <span className='textdegrade2' data-aos="fade-up" data-aos-duration="900" data-aos-delay="300">WEBS ARG</span></figcaption>
                            </figure>
                        </section>
        </article>
        </section>
        
       
    );
}