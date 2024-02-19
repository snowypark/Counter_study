import React, { useState } from 'react';
import '../CSS/Counter.css'

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  }

  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <div className='wrap'>
        <h1 className='title'>Counter</h1>
        <div className='counter-box'>
         <h1 className='counter'>{number}</h1>
            <div className='button-box'>
             <button className='plus-button' onClick={onIncrease}>+1</button>
             <button className='minus-button' onClick={onDecrease}>-1</button>
            </div>
        </div>
    </div>
  );
}

export default Counter;