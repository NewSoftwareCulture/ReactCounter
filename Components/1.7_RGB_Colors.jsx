import React from 'react';
import PropTypes from 'prop-types';
import './App.css'
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      width: '50px',
      height: '30px',
      background: `rgb(${props.red}, ${props.green}, ${props.blue})`,
    }
  };

  render() {
    return (
      <div className="App">
        <h1> Task 1.7 – RGB colors </h1>
        <div style={this.styles}></div>
      </div>
    );
  };
};

Counter.propTypes = {
  red: PropTypes.number,
  green: PropTypes.number,
  blue: PropTypes.number,
};

export default Counter;