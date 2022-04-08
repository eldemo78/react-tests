import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>
    setCount(currentCount => currentCount + 1);

  const handleDecrement = () =>
    setCount(currentCount => currentCount - 1);

  return (
    <div data-testid='counter'>
      <h1 data-testid='value'>{count}</h1>

      <button data-testid='increment' type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button data-testid='decrement' type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;