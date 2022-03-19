import React from 'react';
import ContRedes from './ContRedes';
import '../PiePagina/EstilosPiePagina.scss';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
export default function PiePagina(){
    return(
        <footer>
            <section className='secFooter'>
            <section>
                <article className='footerlogoinfo'>
                    <div className='logonombre'>
                        <figure className='footerimg' data-aos="fade-right" data-aos-duration="800" data-aos-delay="200"><img className='footerimg__img' src="./LogoHome/DesarrolloWeb.png" alt="Webs_Arg, Desarrollamos paginas web, al mejor precio y estilo." /></figure>
                        <strong className='footerempresa'data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">Webs_Arg</strong>
                    </div>
                    <em className='footereslogan'> Realizamos paginas web de todo tipo con el mejor rendimiento y funcionalidad.</em>
                    <ContRedes></ContRedes>
                </article>
                <article className='columnasfooter' id='contacto'>
                    <section className='infofooter'>
                        <p className='infofooter__titulo'>COMPANIA</p>
                        <ul className='infofooterlist'>
                            <li className='infofooterlistanclas'><a className='infofooterlistanclas__ancla' href="https://www.instagram.com/webs_arg/" target={"_blank"} rel="noreferrer">Sobre Webs_Arg</a></li>
                            <li className='infofooterlistanclas'><a className='infofooterlistanclas__ancla' href="www.google.com">Politica de privacidad</a></li>
                            <li className='infofooterlistanclas'><a className='infofooterlistanclas__ancla' href="www.google.com">Cookies</a></li>
                            <li className='infofooterlistanclas'><a className='infofooterlistanclas__ancla' href="www.google.com">Terminos y condiciones</a></li>
                        </ul>
                    </section>
                    <section className='infofooter'>
                        <p className='infofooter__titulo'>CONTACTO</p>
                        <ul className='infofooterlist'>
                            <li className='infofooterlistanclas'><a className='infofooterlistanclas__ancla' href="mailto:disenioswebs@outlook.es?subject=Quisiera una pagina web.&body=Me ha gustado mucho tu pagina web y me gustaria poder trabajar contigo.">disenioswebs@outlook.es</a></li>
                            <li className='infofooterlistanclas'><a className='infofooterlistanclas__ancla' target={"_blank"} rel="noreferrer" href="https://www.instagram.com/webs_arg/">@Webs_Arg</a></li>
                        </ul>
                    </section>
                </article>
            </section>
            <em className='copy' >2022 Webs_Arg - All rights reserved</em>
        </section>
        </footer>
    );
}