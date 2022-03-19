import React from 'react';
import '../SeccionInfoWeb/EstilosInfoWeb.scss';

export default function Infoweb({titulo, descripcion, lista, imagen, alt, clase}){
    return(
        <section className={`infoWeb ${clase}`}>
            <article className='webinfo'>
                <h3 className='webinfo__titulo' data-aos="fade-right" data-aos-duration="800">{titulo}</h3>
                <p className='webinfo__parrafo'>{descripcion}</p>
                {lista}
            </article>
            <figure className='webimagen'><img className='webimagen__img' src={imagen} alt={alt}/></figure>
        </section>
    );
}