import React from 'react'
import videos from "../../json/db.json"
import styles from './player.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada'


function Player() {
  const parametros = useParams()
  const video = videos.find(video=> video.id === Number(parametros.id))
  if(!video){
    <NaoEncontrada />
  }
  return (
    <>
      <Banner imagem='player' />
      <Titulo>
        <h1>{video.titulo}</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe 
          width="100%" 
          height="100%" 
          src={video.link} 
          title={video.titulo} 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </section>
    </>
  
  )
}

export default Player