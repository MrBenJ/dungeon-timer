import React, { Component } from 'react';
import Timer from 'easytimer/dist/easytimer.min.js';
import InputMask from 'react-input-mask';

import { formatTimerValues, getTotalSeconds } from './utils';

class ControlView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      timerValue: '00:00:00',
      displayTimer: '00:00:00',
      showTimer: false
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
    if (this.timer.isPaused()) {
      this.timer.start();
      return;
    }
    const { timerValue } = this.state;

    const [ hours, minutes, seconds ] = timerValue.replace('_', '0').split(':');
    const totalTime = getTotalSeconds(+hours, +minutes, +seconds);

    this.timer.start({
      countdown: true,
      startValues: {
        seconds: parseInt(seconds, 10),
        minutes: parseInt(minutes, 10),
        hours: parseInt(hours, 10)
      }
    });

    this.timer.addEventListener('secondsUpdated', () => {
      const { hours, minutes, seconds } = formatTimerValues(this.timer.getTimeValues());

      const { hours: _hours, minutes: _minutes, seconds: _seconds } = this.timer.getTimeValues();


      const remainingTime = getTotalSeconds(_hours, _minutes, _seconds);

      this.setState({
        displayTimer: `${hours}:${minutes}:${seconds}`
      });

      localStorage.setItem('remainingTime', remainingTime);

    });

    localStorage.setItem('totalTime', totalTime);
  }

  pauseTimer = () => {
    this.timer.pause();
  }

  resetTimer = () => {
    this.timer.reset();
  }

  toggleTimer = event => {
    const { checked } = event.target;
    this.setState({
      showTimer: checked
    });

    localStorage.setItem('showTimer', checked);
  }

  render() {

    const { title, timerValue, displayTimer, showTimer } = this.state;
    const [hours, minutes, seconds ] = displayTimer.split(':');

    return (
      <div className="controller">
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
          <button className="timer-controller-button" onClick={this.startTimer}>Start</button>
          <button className="timer-controller-button" onClick={this.pauseTimer}>Pause</button>
          <button className="timer-controller-button" onClick={this.resetTimer}>Reset</button>
        </div>
        <input
          id="showTimer"
          type="checkbox"
          onChange={this.toggleTimer}
          value={showTimer}
        />
        <label htmlFor="showTimer">
          Show timer to players?
        </label>
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
