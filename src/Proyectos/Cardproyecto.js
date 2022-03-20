import React from 'react';
import { Link } from 'react-router-dom';
import '../Proyectos/Estiloscard.scss';
export default function Cardproyecto({img, alt, web, desc,titulo}){
    return(
        <section className='card' data-aos="zoom-in-down" data-aos-duration="1000">
            <article className='cartaproyecto'>
                        <Link to={web} target="_blank" rel='noreferrer'>
                        <figure className='cartaimagen'><img loading='lazy' className='cartaimagen__img' src={img} alt={alt} /></figure>
                        </Link>
                        <div className='cartabotones'>
                                <Link className='cartabotones__btn' to={web}>Sitio web</Link>
                        </div>
                        <section className='cartatexto'>
                            <article className='cartadescripcion'>
                                <p className='cartadescripcion__titulo'>{titulo}</p>
                                <p className='cartadescripcion__desc' >{desc}</p>
                            </article>
                            <figure className='cartalogo'><img className='cartalogo__logo' src="./LogoHome/DesarrolloWeb.png" alt="Webs Arg desarrollo web frontend, calidad y estilo" />
                            <figcaption className='cartalogo__hecho'>Hecho por <span className='textdegrade2'>WEBS ARG</span></figcaption>
                            </figure>
                        </section>
        </article>
        </section>
        
       
    );
}