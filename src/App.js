import './index.css';
import { Routes, Route } from "react-router-dom";
import SeccionHome from "./SeccionHome";
import SeccionProyecto from './SeccionProyecto';
import PiePagina from './PiePagina/PiePagina';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

function App() {
  return (
    <>
    <Routes>
      {/*Pagina principal*/}
      <Route path="https://NicolasComba2001.github.io/web" element={<SeccionHome></SeccionHome>}>
      </Route>
      <Route path='https://nicolascomba2001.github.io/web/Proyectos' element={<SeccionProyecto></SeccionProyecto>}></Route>
    </Routes>
    <PiePagina></PiePagina>
    </>
  );
}

export default App;
