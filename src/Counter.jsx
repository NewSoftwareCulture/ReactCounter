import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value || 0 };
    this.color = props.color || 'None';
  };
  onChange = this.props.onChange || function () {};

  render() {
    const increment = () => this.state.value !== 255 ? this.setState({ value: this.state.value + 1 }) : {};
    const decrement = () => this.state.value !== 0 ? this.setState({ value: this.state.value - 1 }) : {};
    return (
      <div>
        { this.color } &ensp;
        <button onClick = { () => { increment(); this.onChange(this.state.value); } }> + </button>
        &ensp;&ensp; { this.state.value } &ensp;&ensp;
        <button onClick = { () => { decrement(); this.onChange(this.state.value); } }> - </button>
      </div>
    );
  };
};

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      red: props.red || 0, 
      green: props.green || 0, 
      blue: props.blue || 0,
      styles: {
        position: 'relative',
        margin: '20px calc(50% - 250px)',
        background: `rgb(${props.red || 0}, ${props.green || 0}, ${props.blue || 0})`,
        width: '500px',
        height: '300px'
      }
    };
  };
  onChange = this.props.onChange || function() {};

  updateBG = () => this.setState({ 
    styles: { 
      ...this.state.styles,
      background: `rgb(${this.state.red || 0}, ${this.state.green || 0}, ${this.state.blue || 0})`,
    }
  });

  render() {
    this.onChange(`rgb(${this.state.red || 0}, ${this.state.green || 0}, ${this.state.blue || 0})`);
    return (
      <div className="App">
        <h1> Task 1.8 – ColorPicker </h1>
        <div style={this.state.styles}></div>
        <Color color='Red' value={this.state.red} onChange={ value => { this.setState({ red: value}); this.updateBG() } }/>
        <Color color='Green' value={this.state.green} onChange={ value => { this.setState({ green: value}); this.updateBG() } }/>
        <Color color='Blue' value={this.state.blue} onChange={ value => { this.setState({ blue: value}); this.updateBG() }}/>
      </div>
    );
  };
};

Counter.propTypes = {
  red: PropTypes.number,
  green: PropTypes.number,
  blue: PropTypes.number,
  styles: PropTypes.array,
};

Color.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string,
};

export default Counter;
