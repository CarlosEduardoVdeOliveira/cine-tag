import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({children}){
  const [favorito, setFavorito] = useState([]);
  return(
    <FavoritosContext.Provider 
      value={{favorito, setFavorito}}
    >
      {children}
    </FavoritosContext.Provider>
  )
}

export function useFavoritosContext(){
  const {favorito, setFavorito} = useContext(FavoritosContext);
  function adicionarFavoritos(novoFavorito){
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id );
    let novalista = [...favorito]
    if (!favoritoRepetido) {
      novalista.push(favorito)
      return setFavorito(novalista)
    }
    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novalista)
  }
  return{
    favorito,
    adicionarFavoritos
  }
}