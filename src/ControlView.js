import React, { Component } from 'react';
import Timer from 'easytimer/dist/easytimer.min.js';
import InputMask from 'react-input-mask';

class ControlView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',

    };

    this.timer = new Timer();
  }

  updateValues = event => {
    const { name, value } = event.target;
    if (name && value) {
      this.setState({
        [name]: value
      });

      localStorage.setItem(name, value);
    }
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
    const { title } = this.state;
    return (
      <div>
        <h1>DM Controller</h1>
        <label htmlFor="title">Title to display</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={this.updateValues}
        />
        <div className="timer-controller">
          <label>Set Time (HH:MM:SS)</label>
          <InputMask mask="99:99:99" />
          <button onClick={this.startTimer}>
            Start
          </button>
          <button onClick={this.pauseTimer}>
            Pause
          </button>
          <button onClick={this.resetTimer}>
            Reset
          </button>

        </div>
      </div>
    );
  }
}

export default ControlView;
