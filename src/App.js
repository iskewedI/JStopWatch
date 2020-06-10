import React, { Component } from "react";
import './styles/App.css';
import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';
import Toggle from './components/Toggle';
import TopPanel from './components/TopPanel';

import audioController from './helper/audioController';

import {stopwatchIcon, countdownIcon} from './components/Icons.js';

class App extends Component {
  state = {
    isStopwatch:false,
    soundSelected: "twoTick-clock-string",
    soundVolume: 50
  }
  changeTimer = () => {
    this.setState({
      isStopwatch: !this.state.isStopwatch
    })
  };

  audioController = new audioController(this.state.soundSelected);

  playSound = () => {
    if(!this.audioController.hasSound(this.state.soundSelected)){
      this.audioController.addSound(this.state.soundSelected, this.state.soundVolume);
    }
    this.audioController.play(this.state.soundSelected);
  };
  changeVolume = (event, newVolume) => {
    this.setState({soundVolume: newVolume});
    this.audioController.setVolume(this.state.soundSelected, newVolume);
  };

  render(){
    return (
      <div className="App">
        <TopPanel volume={this.state.soundVolume} onChangeVolume={this.changeVolume}/>
        <Toggle onChange={this.changeTimer} icons={[stopwatchIcon, countdownIcon]} className="changeTimer"/>
        {this.state.isStopwatch && (
          <Stopwatch />
        )}
        {!this.state.isStopwatch && (
          <Countdown audioSettings={[this.playSound]}/>
        )}
      </div>
    );
  }
}


export default App;
