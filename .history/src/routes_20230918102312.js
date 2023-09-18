import Cabecalho from "./components/Cabecalho";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "./components/Rodape";
import Container from "components/Container";
import FavoritosProvider from "contexts/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";

function AppRoutes(){
  
  return(
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />}>
              <Route index element={<Inicio />}></Route>
              <Route path="favoritos" element={<Favoritos />}></Route>
              <Route path=":id" element={<Player />}></Route>
              <Route path="*" element={<NaoEncontrada />}></Route>
            </Route>
          </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes