import React from 'react';
import styles from "./Banner.module.css"
const Banner = () => {
  return (
    <div className={styles.capa} style={{backgroundImage: `url('../../../public/banner-${imagem}.png')`}}>
      
    </div>
  )
}

export default Banner;