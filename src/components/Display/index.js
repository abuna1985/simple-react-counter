import React from 'react';
import styles from './Display.module.css'; 

const Display = ({counter}) => {
  return (
    <p className={styles.counter}>{counter}</p>
  );
}

export default Display;