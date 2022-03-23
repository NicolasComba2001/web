import './index.css';
import { Routes, Route } from "react-router-dom";
// import SeccionHome from "./SeccionHome";
// import SeccionProyecto from './SeccionProyecto';
import PiePagina from './PiePagina/PiePagina';
import Error404 from './Error404';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import LoaderSecciones from './LoaderSecciones';





AOS.init();

const SeccionProyecto= React.lazy(()=> import('./SeccionProyecto'));
const SeccionHome= React.lazy(()=> import('./SeccionHome'));
function App() {
  return (
    <>
    <Routes>
      {/*Pagina principal*/}
      <Route path="/" element={<React.Suspense fallback={<LoaderSecciones></LoaderSecciones>}><SeccionHome><PiePagina></PiePagina></SeccionHome></React.Suspense>}></Route>
      <Route path='/Proyectos' element={<React.Suspense fallback={<LoaderSecciones></LoaderSecciones>}><SeccionProyecto><PiePagina></PiePagina></SeccionProyecto></React.Suspense> }></Route>
      <Route path='*' element={<Error404></Error404>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
