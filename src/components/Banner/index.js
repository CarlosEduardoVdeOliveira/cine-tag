import React from 'react';
import styles from "./Banner.module.css";
const Banner = ({imagem}) => {
  return (
    <div className={styles.capa} 
      style={
        {backgroundImage: `url('imagens/banner-${imagem}.png')`}
      }
    >
      
    </div>
  )
}

export default Banner;