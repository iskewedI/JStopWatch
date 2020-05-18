import React, { Component } from "react";
import './styles/App.css';
import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';
import Toggle from './components/Toggle';

import {stopwatchIcon, countdownIcon} from './components/Icons.js';

class App extends Component {
  state = {
    isStopwatch:false,
  }
  changeTimer = () => {
    this.setState({
      isStopwatch: !this.state.isStopwatch
    })
  };
  render(){
    return (
      <div className="App">
        <Toggle onChange={this.changeTimer} icons={[stopwatchIcon, countdownIcon]} className="changeTimer"/>
        {this.state.isStopwatch && (
          <Stopwatch />
        )}
        {!this.state.isStopwatch && (
          <Countdown />
        )}
      </div>
    );
  }
}


export default App;
