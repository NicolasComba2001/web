import React from 'react';
import { Link } from 'react-router-dom';
import Cardproyecto from './Proyectos/Cardproyecto';
import './Proyectos/EstilosProyectos.scss';
import './MediaQueri/MediaQueri.scss';

export default function SeccionProyecto({children}){
    return(
        <section className='seccionProyectos'>
            <section id='proyectos' className='proyectoinicio'>
                <article className='proyectotitulos'>
                    <div className='proyectotexto'>
                        <h2 className='proyectotexto__titulo'>CREA TU SITIO AL ESTILO <span className='textdegrade' data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">WEBS ARG</span></h2>
                        <p className='proyectotexto__descripcion'>Dinos tu idea y te comentamos lo que necesitas; Portfolio, sitio web corporativo, blogs, paginas de publicidad y mas. Todo es posible de crear.</p>
                    </div>
                    <div className='proyectobotones'>
                        <a className='proyectobotones__btn'  href='https://nicolascomba2001.github.io/Portfolio/' target={"_blank"} rel="noreferrer" data-aos="fade-right" data-aos-duration="800">PORTFOLIO</a>
                        <Link  className='proyectobotones__btn blue' to="/" data-aos="fade-left" data-aos-duration="800">INICIO</Link>
                    </div>
                </article>
                <figure className='proyectoimagen'><img className='proyectoimagen__img' src="./ProyectosIMG/DesarrollaTuWeb.gif" alt="pide tu web para crecer en el mundo digital" /></figure>
            </section>
            <section>
                <section className='proyectoscontenedor'>
                    <h3 className='proyectos__titulo' data-aos="zoom-in" data-aos-duration="500">NUESTROS TRABAJOS</h3>
                    <section className='proyectos'>
                    <Cardproyecto
                        titulo="Takkar - Indumentaria"
                        img={"./ProyectosPersonales/takkarindumentaria.jpg"}
                        desc={"Takkar - Indumentaria Argentina, fue creada con el fin de presentar una nueva coleccion de ropa OTONO-INVIERNO. Mostrando modelos unicos y outfits irresistebles."}
                        alt={"Takkar - Indumentaria Argentina, fue creada con el fin de presentar una nueva coleccion de ropa OTONO-INVIERNO. Mostrando modelos unicos y outfits irresistebles."}
                        web={"https://nicolascomba2001.github.io/Takkar2022/"}
                    ></Cardproyecto>
                    <Cardproyecto
                        titulo="Mater - Muebleria"
                        img={"./ProyectosPersonales/matermuebles.jpg"}
                        desc={"Mater - Muebleria de cordoba, brinda la mejor madera con unos diseños increibles para que puedas decorar tu hogar y hacerlo de la manera mas economica."}
                        alt={"Mater - Muebleria de cordoba, brinda la mejor madera con unos diseños increibles para que puedas decorar tu hogar y hacerlo de la manera mas economica."}
                        web={"https://nicolascomba2001.github.io/MaterMuebles/"}
                    ></Cardproyecto>
                    <Cardproyecto
                        titulo="Sport Fitness Club"
                        img={"./ProyectosPersonales/sportfinesclub.jpg"}
                        desc={"Sport Fitness Club Gimnasio de cordoba. Asesoria online, lista de dietas recetadas por profesionales, instructores unicos y el mejor acompañamiento para cumplir tu objetivo."}
                        alt={"Sport Fitness Club Gimnasio de cordoba. Asesoria online, lista de dietas recetadas por profesionales, instructores unicos y el mejor acompañamiento para cumplir tu objetivo."}
                        web={"https://nicolascomba2001.github.io/Gimnasio/"}
                    ></Cardproyecto>
                    <Cardproyecto
                        titulo="UTN - CLONE"
                        img={"./ProyectosPersonales/utn_pagina.jpg"}
                        desc={"UTN - CLONE, se clono la pagina de la universidad tecnologica nacional para otorgarle mejor funcionalidad y dinamismo."}
                        alt={"UTN - CLONE, se clono la pagina de la universidad tecnologica nacional para otorgarle mejor funcionalidad y dinamismo."}
                        web={"*"}
                    ></Cardproyecto>
                    <Cardproyecto
                        titulo="Tienda de ropa"
                        img={"./ProyectosPersonales/tiendaderopa.jpg"}
                        desc={"Pagina web con el fin de aumentar las visitas y las ventas de una tienda de ropa, en la epoca COVID-19 año 2020."}
                        alt={"Pagina web con el fin de aumentar las visitas y las ventas de una tienda de ropa, en la epoca COVID-19 año 2020."}
                        web={"*"}
                    ></Cardproyecto>
                    <Cardproyecto
                        titulo="Venta tickets"
                        img={"./ProyectosPersonales/entradas_cena_baile.jpg"}
                        desc={"Estacion Luxardo cuenta con uno de los mejores eventos en el año para nuestra comunidad bailarina. Compra tu ticket y reserva tu asiento."}
                        alt={"Estacion Luxardo cuenta con uno de los mejores eventos en el año para nuestra comunidad bailarina. Compra tu ticket y reserva tu asiento."}
                        web={"*"}
                    ></Cardproyecto>
                    </section>
                  
                </section>
                
            </section>
            <section className='iniciarproyecto'>
            <article className='iniciarproyectoinfo'>
                <h3 className='iniciarproyectoinfo__titulo' data-aos="fade-right" data-aos-duration="800">IMPULSA TU <span className='textdegrade2'>IDEA</span></h3>
                <p className='iniciarproyectoinfo__desc' data-aos="fade-left" data-aos-duration="800">Tenemos el proyecto ideal para usted.</p>
            </article>
            <a href='mailto:disenioswebs@outlook.es?subject=Quisiera una pagina web.&body=Me ha gustado mucho tu pagina web y me gustaria poder trabajar contigo.' className='proyectoboton'>
                <span className='proyectoboton__btn'>EMPEZAR</span>
            </a>
            </section>
           {children}
        </section>
    );
}