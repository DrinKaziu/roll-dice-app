import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor (props) {
    super (props); 
    this.state = {
      num1: 'one',
      num2: 'three'
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
      num2: this.genRandNum()
    });
  }

  render () {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die number={this.state.num1}/>
          <Die number={this.state.num2}/>
        </div>
        <button className="RollDice-button" onClick={this.clickHandler}>Roll!!</button>
      </div>
    )
  }
}

export default RollDice; 