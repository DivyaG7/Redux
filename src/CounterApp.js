// src/CounterApp.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';

const CounterApp = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div>
      <h1>Redux Counter</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default CounterApp;
