import React from 'react';
import { Link } from 'react-router-dom';


const Cabecalho = () => {
  return(
    <header>
      <Link to="./">
        <img src="./logo.png" alt="" />
      </Link>
    </header>
  )
}

export default Cabecalho;