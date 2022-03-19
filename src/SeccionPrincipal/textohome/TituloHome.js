import React from "react";
import "../textohome/EstilosTituloImgHome.scss";
import { Link } from "react-scroll";

export default function TituloHome() {
  return (
    <section className="infoHome" id="inicio">
      <article className="contenedorHome">
       <div className="contenedorhometitulo-flex">
       <h1
          className="contenedorHome__nombre"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          WEBS_ARGS
        </h1>
        <Link
            smooth={true}
            duration={600}
            to="planes"
            className="contenedorHome__btn"
            data-content="CREA TU SITIO"
            data-aos="flip-right"
            data-aos-duration="800"
          >
            CREA TU SITIO
          </Link>
       </div>
        <section className="contenedorhome-flex">
          <span className="contenedorHome__titulo">¡CREA TU SITIO WEB!</span>
          <p
            className="contenedorHome__parrafo"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            ¡Tenemos tu sitio web! Crea tu página web para tu emprendimiento
            exitoso o tu próximo negocio.
          </p>

         
        </section>
      </article>
    </section>
  );
}
