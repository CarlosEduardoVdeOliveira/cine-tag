import React from 'react';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import { useFavoritosContext } from 'contexts/Favoritos';

const Card = ({id, titulo, capa}) => {
  const {favorito, adicionarFavoritos} = useFavoritosContext()
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img 
        src={iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={()=> adicionarFavoritos({id, titulo, capa})}
      />
    </div>
  );
}

export default Card;