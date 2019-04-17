import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor (props) {
    super (props); 
    this.state = {
      num1: 'one',
      num2: 'three',
      rolling: false
    }
  }

  genRandNum() {
    let nums = ['one', 'two', 'three', 'four', 'five', 'six']
    let randIdx = Math.floor(Math.random() * nums.length);
    return nums[randIdx];
  }

  clickHandler = () => {
    this.setState({
      num1: this.genRandNum(),
      num2: this.genRandNum(),
      rolling: true
    });

    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)
  }

  render () {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die number={this.state.num1}/>
          <Die number={this.state.num2}/>
        </div>
        <button className="RollDice-button" onClick={this.clickHandler} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    )
  }
}

export default RollDice; 