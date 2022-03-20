import React from 'react';
import ContRedes from './ContRedes';
import '../PiePagina/EstilosPiePagina.scss';
export default function PiePagina(){
    return(
        <footer>
            <section className='secFooter'>
            <section className='footer-flex'>
                <article className='footerlogoinfo'>
                    <div className='logonombre'>
                        <figure className='footerimg' data-aos="fade-right" data-aos-duration="800" data-aos-delay="200"><img className='footerimg__img' src="./LogoHome/DesarrolloWeb.png" alt="Webs_Arg, Desarrollamos paginas web, al mejor precio y estilo." /></figure>
                        <strong className='footerempresa'data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">Webs Arg</strong>
                    </div>
                    <em className='footereslogan'>Realiza tu emprendimiento, súbelo a la web y crece en el mundo digital.</em>
                    <ContRedes></ContRedes>
                </article>
                <article className='columnasfooter' id='contacto'>
                    <section className='infofooter'>
                        <p className='infofooter__titulo'>COMPANIA</p>
                        <ul className='infofooterlist'>
                            <li className='infofooterlistanclas'><a className='infofooterlistanclas__ancla' rel="noreferrer" href="https://www.instagram.com/webs_arg/" target={"_blank"} >Sobre Webs Arg</a></li>
                            <li className='infofooterlistanclas'><a className='infofooterlistanclas__ancla' rel='nofollow' href="mailto:disenioswebs@outlook.es?subject=Hola! Me puedes ayudar con una duda?.&body=Antes de iniciar cualquier tipo de negocio contigo, me gustaria pedirte informacion acerca de que sitio me convendria segun mi idea de negocio.">¿Qué sitio web me conviene?</a></li>
                            <li className='infofooterlistanclas'><a className='infofooterlistanclas__ancla'  target={"_blank"} rel="noreferrer" href="https://www.instagram.com/webs_arg/">¿Por qué Web Arg?</a></li>
                        </ul>
                    </section>
                    <section className='infofooter'>
                        <p className='infofooter__titulo'>CONTACTO</p>
                        <ul className='infofooterlist'>
                            <li className='infofooterlistanclas'><a className='infofooterlistanclas__ancla' href="mailto:disenioswebs@outlook.es?subject=Quisiera una pagina web.&body=Me ha gustado mucho tu página web y me gustaría poder trabajar contigo.">disenioswebs@outlook.es</a></li>
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