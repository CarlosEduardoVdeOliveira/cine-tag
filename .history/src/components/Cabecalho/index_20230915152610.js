import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Cabecalho.module.css"
import logo from "./logo.png"

const Cabecalho = () => {
  return(
    <header>
      <Link to="./" className={styles.cabecalho}>
        <img src={logo} alt="" />
      </Link>
      <nav>

      </nav>
    </header>
  )
}

export default Cabecalho;