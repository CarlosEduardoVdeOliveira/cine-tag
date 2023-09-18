import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Cabecalho.module.css";
import logo from "./logo.png";
import CabecalhoLink from '../CabecalhoLink/index';

const Cabecalho = () => {
  return(
    <header  className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do cine tag" />
      </Link>
      <nav>
        <CabecalhoLink url="./">
          Home
        </CabecalhoLink>
        <CabecalhoLink url="./Favoritos">
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  )
}

export default Cabecalho;