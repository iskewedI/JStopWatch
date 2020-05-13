import React, { Component } from "react";
import "../styles/components.css";
import Toggle from './Toggle.js';

import {autoIcon, manualIcon, arrowUp, twoArrowUp, arrowDown, twoArrowDown} from './Icons.js';

class Countdown extends Component {
  state = {
    timerOn: false,
    auto: false,
    timerStart: 0,
    timerTime: 990
  };
  startTimer = () => {
    console.time("timer");
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime > 1000) {
        this.setState({
          timerTime: newTime
        });
      }else if(this.state.auto === true && this.state.timerStart > 0){
        this.setState({
            timerTime: this.state.timerStart + 990
        });
        console.log("Tiempo: " + console.timeEnd("timer"));
        console.time("timer");
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false, timerTime: 0 });
        console.timeEnd("timer");

        console.log("Countdown ended");
      }
    }, 10);
  };
  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };
  restartTimer = () => {
      this.setState({
          timerOn: false,
          timerStart: 0,
          timerTime: 0
      })
  }
  adjustTimer = (input) => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
    if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };
  toggleAuto = () => {
      this.setState({
          auto: !this.state.auto
      });
  };
  render() {
    const { timerOn, auto, timerTime, timerStart } = this.state;

    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-header">Countdown</div>
        <Toggle onChange={this.toggleAuto} icons={[autoIcon, manualIcon]} className="toggleAuto"/>

        <div className="Countdown-display">        
        <button onClick={() => this.adjustTimer("incMinutes")}>{twoArrowUp}</button>
        <button onClick={() => this.adjustTimer("incSeconds")}>{arrowUp}</button>
        

        <div className="Countdown-time">
             {minutes} : {seconds}
        </div>

        <button onClick={() => this.adjustTimer("decMinutes")}>{twoArrowDown}</button>
        <button onClick={() => this.adjustTimer("decSeconds")}>{arrowDown}</button>
        </div>
       
        {timerOn === false &&
            (timerStart === 0 || timerTime === timerStart) && (
                <button className="controllerButton" onClick={this.startTimer}>Start</button>
        )}
        {timerOn === true && timerTime >= 0 && (
                <button className="controllerButton" onClick={this.stopTimer}>Stop</button>
        )}
        {timerOn === false &&
            (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                <button className="controllerButton" onClick={this.startTimer}>Resume</button>
        )}
        {(timerOn === false || (auto === false && timerTime <= 0) ) &&
            (timerStart !== timerTime && timerStart > 0) && 
                [<button className="controllerButton" key={0} onClick={this.resetTimer}>Reset</button>,
                <button  className="controllerButton" key={1} onClick={this.restartTimer}>Restart</button>]
        }
      </div>
    );
  }
}
export default Countdown;