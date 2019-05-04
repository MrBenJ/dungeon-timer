import React, { Component } from 'react';
import Timer from 'easytimer/dist/easytimer.min.js';
import InputMask from 'react-input-mask';

class ControlView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      timerValue: '00:00:00',
      remainingTime: ''

    };

    this.timer = new Timer();
  }

  updateFormValues = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });

    if (name === 'title') {
      localStorage.setItem('title', value);
    }

  }

  setTimerValue = () => {
    this.setState({

    })
  }

  startTimer = () => {
    this.timer.start({
      countdown: true
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
    const { title, timerValue } = this.state;
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

      </div>
    );
  }
}

export default ControlView;
