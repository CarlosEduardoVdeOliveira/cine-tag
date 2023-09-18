import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Cabecalho.module.css"
import logo from "./logo.png"
import CabecalhoLink from 'components/Links';

const Cabecalho = () => {
  return(
    <header>
      <Link to="./" className={styles.cabecalho}>
        <img src={logo} alt="Logo do cine tag" />
      </Link>
      <nav>
        <CabecalhoLink url="./">
          Home
        </CabecalhoLink>
      </nav>
    </header>
  )
}

export default Cabecalho;