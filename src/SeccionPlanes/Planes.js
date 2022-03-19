import {useState} from 'react';
import ModalHome from './ModalHome';
import '../SeccionPlanes/EstilosModalHome.scss';

export default function Planes({clase, precio, descripcion, lista, estilo}){
    const [modal, setModal] = useState(false);
    return(
        <section className='cardplan'>
                <article className={`contenedorplan ${estilo}`}>
                    <div className='contenedorplanInfo'>
                        <h4 className='contenedorplanInfo__titulo'data-aos="fade-right" data-aos-duration="800">{clase}</h4>
                        <em className='contenedorplanInfo__precio'data-aos="fade-down-left" data-aos-duration="800">${precio}</em>
                        <p className='contenedorplanInfo__desc'>{descripcion}</p>
                    </div>
                    <div className='contenedorplanboton'>
                        <button className='contenedorplanboton__btn' onClick={()=>setModal(true)}>CONTRATAR</button>
                    </div>
                    <div className='contenedorplanlista'>
                        <p className='incluyeplan' data-aos="fade-right" data-aos-delay="500" data-aos-duration="800">Plan incluye:</p>
                       {lista}
                    </div>
                </article>
                {modal && <ModalHome funcion={setModal} estado={modal}></ModalHome>}
            </section>
    );
}