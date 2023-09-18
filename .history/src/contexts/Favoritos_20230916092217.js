import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({children}){
  const [favoritos, setFavoritos] = useState([]);
  return(
    <FavoritosContext.Provider 
      value={{favoritos, setFavoritos}}
    >
      {children}
    </FavoritosContext.Provider>
  )
}

export default function useFavoritosContext(){
  const {favoritos, setFavoritos} = useContext(FavoritosContext)
}