import React, { useState } from 'react';
import {NavLink } from 'react-router-dom';
import {Link} from 'react-scroll';
import '../menu/EstilosMenu.scss';


export default function HeaderMenu(){
    const [menu, setMenu] = useState();
    function handleClick(){
        setMenu(!menu);
    }
    return(
        <header className='contenedorMenu'>
            <figure className='imagenHome' data-aos="fade-down" data-aos-duration="800"><img className='imagenHome__logo' src="./LogoHome/DesarrolloWeb.png" alt="Webs_Arg, logo de nuestra empresa" /></figure>
            <section className='contenedorIconoMenu' data-aos="fade-left" data-aos-duration="800">
                <div className={`iconoMenu ${menu && 'open'}`} onClick={handleClick}>
                    <div className='iconoMenu__item'></div>
                </div>
                <nav className={`contenedorAnclas ${menu && 'menuOpen'}`}>
                <ul className={`menuItems`}>
                    <li className='menuAnclas' ><Link className='menuAnclas__anclas' to="inicio" smooth={true} duration={800} data-text="INICIO" >INICIO</Link></li>
                    <li className='menuAnclas'><NavLink className='menuAnclas__anclas' to='/Proyectos' data-text="PROYECTOS">PROYECTOS</NavLink></li>
                    <li className='menuAnclas'><Link className='menuAnclas__anclas' to="contacto" smooth={true} duration={300}  data-text="CONTACTO">CONTACTO</Link></li>
                    <li className='menuAnclas'><Link className='menuAnclas__anclas' to="planes" smooth={true} duration={300} data-text="PLANES">PLANES</Link></li>
                    <li className='menuAnclas'><a className='menuAnclas__anclas' href='https://nicolascomba2001.github.io/Portfolio/' rel='noreferrer' target={"_blank"} data-text="SOBRE">SOBRE</a></li>
                </ul>
                </nav>
            </section>
        </header>
    );
}