import React from 'react';
import styles from './Favoritos.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import { useFavoritoContext } from 'contexts/Favoritos';

const Favoritos = () => {
  const {favorito} = useFavoritoContext()
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
      <h1>Filmes favoritos!</h1>
      </Titulo>
      <section className={styles.container}>
        {
          favorito.map(fav=> <Card {...fav} key={fav.id} />)
        }
      </section>
    </>
  );
}

export default Favoritos;