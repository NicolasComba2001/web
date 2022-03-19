import React from 'react';
import '../SeccionPlanes/EstilosModalHome.scss';
import {useFormValidations} from '../SeccionPlanes/helpers/useFormValidations';
import Loader from './helpers/Loader';
import MensajeForm from './helpers/MensajeForm';

const initialForm={
    nombrecompleto:"",
    correo:"",
}
const validations =(form)=>{
    let errores = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;


    if(!form.nombrecompleto.trim())
    {errores.nombre = "el campo 'nombre completo' es requerido";} 
    else if(!regexName.test(form.nombrecompleto.trim()))errores.nombre="Tu nombre es muy poco comun, vuelve a escribirlo.";
    
    if(form.nombrecompleto.length <= 2) errores.nombre="Tu nombre es muy poco comun, vuelve a escribirlo.";

    if(!form.correo.trim())
    {errores.email = "el campo 'email' es requerido"; } 
    else if(!regexEmail.test(form.correo.trim())) errores.email="El e-mail que intentas escribir no es valido, por favor vuelve a escribirlo.";

    return errores;
}

export default function ModalHome({estado, funcion}){
    const {form,
        error,
         loading,
          response,
           handleBlur,
            handleChange, 
               handleSubmit,
               handleClick,
                    handlePlan} = useFormValidations(initialForm, validations);
    return(
        <section className='modal'>
            <section className='modalform'>
                <form onSubmit={handleSubmit}>
                    <div className='grupoform'>
                        <label className='grupoform__titulo' htmlFor='nombrecompleto'>Nombre completo:</label>
                        <input maxLength={"30"} className='grupoform__input elementoForm' required type="text" id='nombrecompleto' name='nombrecompleto' onBlur={handleBlur} onChange={handleChange} value={form.nombrecompleto}   />
                        {error.nombre && <p className='errorMensaje'>{error.nombre}</p>}
                    </div>
                    <div className='grupoform'>
                        <label className='grupoform__titulo' htmlFor='correo' >Correo Electronico:</label>
                        <input maxLength={"250"} required className='grupoform__input elementoForm' type="email" id='correo' name='correo' onBlur={handleBlur} onChange={handleChange} value={form.correo}  />
                        {error.email && <p className='errorMensaje'>{error.email}</p>}
                    </div>
                    <div className='grupoform'>
                        <label className='grupoform__titulo' htmlFor='plan'>Planes</label>
                        <select id='plan' onChange={handleClick} name="plan">
                            <option value={"basico"}>Basico</option>
                            <option value={"premium"}>Premium</option>
                        </select>
                    </div>
                    <div className='grupoform'>
                        <label className='grupoform__titulo' htmlFor='tipopage'>Tipo de pagina</label>
                        <select id='tipopage' onChange={handlePlan} name="tipo de pagina">
                            <option value="landingpage">Landingpage</option>
                            <option value="blogs">Blogs</option>
                            <option value="corporativo" defaultValue={'corporativo'}>Coorporativo</option>
                            <option value="portfolio">Portfolio</option>
                            <option value="packdewebs" id='web' disabled>Pack de webs</option>
                        </select>
                    </div>
                    <input type="submit" value={"enviar"} className="cerrarForm" />
                    {loading && <Loader></Loader>}
                {response && <MensajeForm mensaje={`los datos fueron enviados`} bgColor="#198754"></MensajeForm>}
                </form>
                <button className='grupoform__cerrar' onClick={()=>funcion(!estado)}>X</button>
            </section>
        </section>
    );
}