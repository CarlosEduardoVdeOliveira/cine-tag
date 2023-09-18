import Cabecalho from "./components/Cabecalho";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "./components/Rodape";

function AppRoutes(){
  
  return(
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/favoritos" element={<Favoritos />}></Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes