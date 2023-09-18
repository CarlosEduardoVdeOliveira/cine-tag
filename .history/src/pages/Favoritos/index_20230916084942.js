import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import React from 'react';
import styles from './Favoritos.module.css';

const Favoritos = () => {
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
      <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {
          videos.map(video => <Card {...video} key={video.id} />)
        }
      </section>
    </>
  );
}

export default Favoritos;