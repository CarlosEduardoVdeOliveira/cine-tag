import React from 'react';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritoContext } from 'contexts/Favoritos';
import { Link } from 'react-router-dom';

const Card = ({id, titulo, capa}) => {
  const {favorito, adicionarFavorito} = useFavoritoContext()
  const ehFavorio = favorito.some(fav=> fav.id === id)
  const icone = !ehFavorio ? iconeFavoritar : iconeDesfavoritar
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
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