import React from 'react';
import './App.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  render() {
    const increment = () => this.setState({ counter: this.state.counter + 1} );
    
    return (
      <div className="App">
        <h1> Task 1.1 – Counter </h1>
        <button onClick = { increment }> Button was clicked: { this.state.counter } times </button>
      </div>
    );
  };
}

export default Counter;