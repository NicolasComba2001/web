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
      <Route path="/" element={<SeccionHome></SeccionHome>}></Route>
      <Route path='Proyectos' element={<SeccionProyecto></SeccionProyecto>}></Route>
    </Routes>
    <PiePagina></PiePagina>
    </>
  );
}

export default App;
