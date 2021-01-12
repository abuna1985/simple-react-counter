import React from 'react'
import styles from './Button.module.css'; 

const Button = ({handleClick, children, type, testId, isDisabled }) => {
  if (type === "zero") {
    return <button data-testid={testId} onClick={handleClick} className={styles.zero} ><span>{children}</span></button>;
  } 

  return  <button data-testid={testId} onClick={handleClick} className={styles.counter} disabled={isDisabled}><span>{children}</span></button>;
}

export default Button;