import React from 'react';
import Cabecalho from '../../components/Cabecalho';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Rodape from '../../components/Rodape';
import Titulo from '../../components/Titulo';
import styles from './Inicio.module.css'
import videos from "../../json/db.json"
function Inicio(){
  return(
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
      <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {
          videos.map(video => <Card {...video} key={video.id} />)
        }
      </section>
      <Rodape />
    </>
  )
}

export default Inicio;