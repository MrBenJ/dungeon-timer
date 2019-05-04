import React, { Component } from 'react';
import Timer from 'easytimer/dist/easytimer.min.js';
import InputMask from 'react-input-mask';

class ControlView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      timerValue: '00:00:00',
      displayTimer: '00:00:00'
    };

    this.timer = new Timer();
  }

  updateFormValues = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    if (name === 'title') {
      localStorage.setItem('title', value);
    }

  }



  startTimer = () => {
    const { timerValue } = this.state;

    const [ hours, minutes, seconds ] = timerValue.replace('_', '0').split(':');
    this.timer.start({
      countdown: true,
      startValues: {
        seconds: parseInt(seconds, 10),
        minutes: parseInt(minutes, 10),
        hours: parseInt(hours, 10)
      }
    });

    this.timer.addEventListener('secondsUpdated', () => {
      const { hours, minutes, seconds } = this.timer.getTimeValues();

      this.setState({
        displayTimer: `${hours}:${minutes}:${seconds}`
      });

    });
  }

  pauseTimer = () => {
    this.timer.start({
      countdown: true
    });
  }

  resetTimer = () => {
    this.timer.start({
      countdown: true
    });
  }

  render() {

    const { title, timerValue, displayTimer } = this.state;
    const [hours, minutes, seconds ] = displayTimer.split(':');

    return (
      <div>
        <h1>DM Controller</h1>
        <label htmlFor="title">Title to display</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={this.updateFormValues}
        />
        <div className="timer-controller">
          <label>Set Time (HH:MM:SS)</label>
          <InputMask
            mask="99:99:99"
            name="timerValue"
            value={timerValue}
            onChange={this.updateFormValues}
          />
          <br/>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.pauseTimer}>Pause</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
        <div className="timer-display">
          <h2>Current Timer</h2>
          <p className="timer">
            {`${hours}:${minutes}:${seconds}`}
          </p>
        </div>

      </div>
    );
  }
}

export default ControlView;
