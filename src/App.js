import './index.css';
import { Routes, Route } from "react-router-dom";
 import SeccionHome from "./SeccionHome";
import SeccionProyecto from './SeccionProyecto';
import PiePagina from './PiePagina/PiePagina';
import Error404 from './Error404';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MediaQueri/MediaQueri.scss';


AOS.init();


function App() {
  

  return (
    <>
    <Routes>
      {/*Pagina principal*/}
      <Route path="/" element={<SeccionHome><PiePagina></PiePagina></SeccionHome>}></Route>
      <Route path='/Proyectos' element={<SeccionProyecto><PiePagina></PiePagina></SeccionProyecto>}></Route>
      <Route path='*' element={<Error404></Error404>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
