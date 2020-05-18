export function stopTimer() {
    this.setState( { timerOn: false } );
    clearInterval(this.timer);
  }
export function resetTimer(ds) {
    this.setState({
      timerTime: this.state.timerStart
    });
};
export function restartTimer(time) {
  this.setState({
      timerOn: false,
      timerStart: 0,
      timerTime: time
  })
}