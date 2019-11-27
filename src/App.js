import React, { useState } from 'react';
import ControlledComponentDemo from './components/ControlledComponentDemo';
import EventHandlerDemo from './components/EventHandlerDemo';
import KeyPressDemo from './components/KeyPressDemo';

function App() {
  const [number, setNumber] = useState(1)

  const range = []
  for (let i = 0; i < number; i++) {
    range.push(i)
  }

  return (
    <div className="App">

      <ControlledComponentDemo />

      <KeyPressDemo />

      <div>
        <button onClick={() => setNumber(number => number + 1)}>+</button>
        <button onClick={() => setNumber(number => number - 1)}>-</button>
      </div>
      {range.map(i => <EventHandlerDemo key={i} />)}
    </div>
  );
}

export default App;
