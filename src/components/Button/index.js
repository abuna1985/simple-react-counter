import React from 'react'
import styles from './Button.module.css'; 

const Button = ({handleClick, text, type }) => {
  if (type === "zero") {
    return <button onClick={handleClick} className={styles.zero}>{text}</button>;
  } 

  return  <button onClick={handleClick} className={styles.counter}>{text}</button>;
}

export default Button;