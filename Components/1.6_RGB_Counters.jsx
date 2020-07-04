import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value || 0 };
    this.color = props.color || '';
  }
  render() {
    const increment = () => this.setState({ value: this.state.value + 1 });
    const decrement = () => this.setState({ value: this.state.value - 1 });
    return (
      <div>
          { this.color } &ensp;
          <button onClick = { increment }> + </button>
          &ensp;&ensp; { this.state.value } &ensp;&ensp;
          <button onClick = { decrement }> - </button>
        </div>
    );
  };
}
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { red: props.red || 0, green: props.green || 0, blue: props.blue || 0 };
  }
  render() {
    return (
      <div className="App">
        <h1> Task 1.6 – RGB Counters </h1>
        <Color color='Red' value={this.state.red}/>
        <Color color='Green' value={this.state.green}/>
        <Color color='Blue' value={this.state.blue}/>
      </div>
    );
  };
};

Counter.propTypes = {
  red: PropTypes.number,
  green: PropTypes.number,
  blue: PropTypes.number,
};

Color.propTypes = {
  color: PropTypes.string,
  value: PropTypes.number,
};

export default Counter;