import React from 'react'
import videos from "../../json/db.json"
import styles from './player.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'

const t = '<iframe width="560" height="315" src="https://www.youtube.com/embed/hHM-hr9q4mo?si=2X61mN0nmE7LdC8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
function Player() {
  return (
    <>
      <Banner imagem='player' />
      <Titulo>
        <h1>Video</h1>
      </Titulo>
    </>
   
  )
}

export default Player