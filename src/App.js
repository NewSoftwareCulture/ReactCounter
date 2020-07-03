import React from 'react';
import './App.css'

function App() {
  let counter = 0;  
  const click = () => {
    counter++;
    console.log(counter);
  };
  return (
    <div className="App">
      <h1>Task 1.1 – Counter</h1>
      <button onClick = { click }>
        Button was clicked: {counter} times
      </button>
    </div>
  );
}

export default App;
