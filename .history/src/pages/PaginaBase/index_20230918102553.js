import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contexts/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase(){
  return(
    <main>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Outlet />
        </FavoritosProvider>
      </Container>
      <Rodape />
    </main>
  )
}

export default PaginaBase