import React, { useState, useEffect } from "react";
import { store } from "../store/store";
import { increment, decrement } from "../store/action/CounterAction";
function CounterFunction() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    updateState();
    store.subscribe(updateState);
  });

  function updateState() {
    const state = store.getState();
    setCounter(state.counter);
  }

  const onIncrement = () => {
    store.dispatch(increment());
  };

  const onDecrement = () => {
    store.dispatch(decrement());
  };
  return (
    <div>
      <h1>CounterFunction</h1>
      <div>{counter}</div>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterFunction;
