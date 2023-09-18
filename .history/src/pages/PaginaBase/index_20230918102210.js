import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contexts/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase(){
  return(
    <>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Outlet />
        </FavoritosProvider>
      </Container>
      <Rodape />
    </>
  )
}

export default PaginaBase