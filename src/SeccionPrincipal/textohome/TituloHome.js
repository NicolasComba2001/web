import React, { useEffect, useRef } from "react";
import "../textohome/EstilosTituloImgHome.scss";
import Typed from 'typed.js'
import { Link } from "react-scroll";




export default function TituloHome() {
  const titulo = useRef(null);

  useEffect(()=>{
      const tipado = new Typed(titulo.current,{
        strings: ['CREA TU PAGINA WEB'],
        typeSpeed: 50,
        smartBackspace: true,
        showCursor: false,
        fadeOut: true,
        
      });

      return ()=>{
        tipado.destroy();
      };

  },[]);

  return (
    <section className="infoHome" id='inicio'>
      <article className="contenedorHome">
        <h1 className="contenedorHome__nombre" data-aos="fade-down" data-aos-duration="800">WEBS_ARGS</h1>
        <span className="contenedorHome__titulo" ref={titulo}></span>
        <p className="contenedorHome__parrafo" data-aos="fade-up" data-aos-duration="800">
          Realizamos paginas web de todo tipo con el mejor rendimiento y
          funcionalidad.
        </p>

        <Link smooth={true} duration={600} to="planes" className="contenedorHome__btn" data-content="CREA TU SITIO"  data-aos="flip-right" data-aos-duration="800">CREA TU SITIO</Link>
      </article>
      
    </section>
  );
}
