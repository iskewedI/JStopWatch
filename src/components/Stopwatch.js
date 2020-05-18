import React, { Component } from "react";
import "../styles/components.css";

import {stopTimer, restartTimer} from '../helper/timerFunctions.js';
class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval( () => {
      this.setState({
        timerTime: Date.now () - this.state.timerStart
      });
    }, 10);
  };

  render() {
    const { timerTime } = this.state;

    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>

        <div className="Stopwatch-display">
          {hours} : {minutes} : {seconds}
        </div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
        <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={stopTimer.bind(this)}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={restartTimer.bind(this, 0)}>Restart</button>
        )}
      </div>
    );
  }
}
export default Stopwatch;