import React from 'react';
import { createStore } from 'redux';

// Reducer function
const reducer = (state = [], action) => {
  if (action.type === 'NEW_ORDER') {
    let newState = [...state, action.payload];
    return newState;
  }
  return state;
}

const store = createStore(reducer);

const App = () => {
  const handleDispatch = () => {
    const action = { type: 'NEW_ORDER', payload: 'coffee' };
    store.dispatch(action);
    console.log(store.getState());
  }

  return (
    <div className="App">
      <h1>Redux Example</h1>
      <button onClick={handleDispatch}>Dispatch Action</button>
    </div>
  );
}

export default App;
