import React from 'react';
import styles from './Container.module.css';

// import { Container } from './styles';

const Container = ({children}) => {
  return <section className={styles.container}>{children}</section>;
}

export default Container;