import { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import Title from './components/Title';
import styles from './App.module.css';

function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [counterThree, setCounterThree] = useState(0);

  const incrementCounter = (func, counter) => func(counter + 1);
  const decrementCounter = (func, counter) => func(counter - 1);



  return (
    <>
      <header className={styles.header}>
        <Title text="Simple React Counter" isWhiteText={true} />
      </header>
      <div className={`${styles.container} ${styles.flexContainer}`}>
        <div className={styles.counter}>
          <Title type="h2" text="Counter 1" />
          <div className={styles.body}>
            <Button testId="counter-one-button-down" isDisabled={!counterOne} handleClick={() => decrementCounter(setCounterOne, counterOne)}>-</Button>
            <Display testId="counter-one" counter={counterOne} />  
            <Button testId="counter-one-button-up" handleClick={() => incrementCounter(setCounterOne, counterOne)}>+</Button>
          </div>
        </div>
        <div className={styles.counter}>
          <Title type="h2" text="Counter 2" />
          <div className={styles.body}>
            <Button testId="counter-two-button-down" isDisabled={!counterTwo} handleClick={() => decrementCounter(setCounterTwo, counterTwo)}>-</Button>
            <Display testId="counter-two" counter={counterTwo} />  
            <Button testId="counter-two-button-up" handleClick={() => incrementCounter(setCounterTwo, counterTwo)}>+</Button>
          </div>
        </div>
        <div className={styles.counter}>
          <Title type="h2" text="Counter 3" />
          <div className={styles.body}>
            <Button testId="counter-three-button-down" isDisabled={!counterThree} handleClick={() => decrementCounter(setCounterThree, counterThree)}>-</Button>
            <Display testId="counter-three" counter={counterThree} />  
            <Button testId="counter-three-button-up" handleClick={() => incrementCounter(setCounterThree, counterThree)}>+</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
