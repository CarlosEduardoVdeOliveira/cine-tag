import Cabecalho from "./components/Cabecalho";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "./components/Rodape";
import Container from "components/Container";
import FavoritosProvider from "contexts/Favoritos";

function AppRoutes(){
  
  return(
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes