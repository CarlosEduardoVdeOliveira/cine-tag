import Cabecalho from "./components/Cabecalho";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "./components/Rodape";
import Container from "components/Container";

function AppRoutes(){
  
  return(
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Container>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Container>
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes