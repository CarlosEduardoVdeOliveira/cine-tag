import React from 'react';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritoContext } from 'contexts/Favoritos';

const Card = ({id, titulo, capa}) => {
  const {favorito, adicionarFavorito} = useFavoritoContext()
  const ehFavorio = favorito.some(fav=> fav.id === id)
  const icone = !ehFavorio ? iconeFavoritar : iconeDesfavoritar
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img 
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={()=> adicionarFavorito({id, titulo, capa})}
      />
    </div>
  );
}

export default Card;