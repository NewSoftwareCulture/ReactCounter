import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.points = { min: props.min || -100, max: props.max || 100};
    this.state = { counter: 0 };
  }
  render() {
    const increment = () => this.state.counter !== this.points.max ? this.setState({ counter: this.state.counter + 1} ) : {};
    const decrement = () => this.state.counter !== this.points.min ? this.setState({ counter: this.state.counter - 1} ) : {};

    return (
      <div className="App">
        <h1> Task 1.3 – Counter with bounds </h1>
        <button onClick = { increment }> + </button>
        &ensp;&ensp; { this.state.counter } &ensp;&ensp;
        <button onClick = { decrement }> - </button>
      </div>
    );
  };
}

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Counter;
