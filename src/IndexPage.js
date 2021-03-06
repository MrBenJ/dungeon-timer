import React, { Component } from 'react';

import Hourglass from './Hourglass';
class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      showTimer: 'false',
      bgImage: ''
    }
  }

  updateState = () => {
    const title = localStorage.getItem('title');
    const showTimer = localStorage.getItem('showTimer');
    const totalTime = localStorage.getItem('totalTime');
    const remainingTime = localStorage.getItem('remainingTime');
    const bgImage = localStorage.getItem('bgImage');

    this.setState({
      title,
      showTimer: showTimer && showTimer.toString(),
      totalTime: +totalTime,
      remainingTime: +remainingTime,
      bgImage
    });
  }

  render() {
    if (!localStorage) {
      return (
        <div className="no-support">
          Real dungeon masters use a browser that has localStorage support.
          Adopt the technologies of 2011. Use a modern browser!
        </div>
      );
    }

    const { title, showTimer, totalTime, remainingTime, bgImage } = this.state;

    return (
      <div className="app" style={{
        backgroundImage: `url(${bgImage})`
      }}>
        <div className="app-content">
          <p className="app-title">{title || ' '}</p>
          <Hourglass
            showTimer={Boolean(showTimer === 'true')}
            totalSeconds={totalTime}
            remainingSeconds={remainingTime}
          />
          {/* <Link to="/control" target="_blank">Open controller</Link> */}
        </div>
      </div>
    );
  }

  componentDidMount() {
    // rehydrate the timer with whatever values are inside of localStorage
    this.updateState();

    // Establish a localStorage Listener as a controller
    window.addEventListener('storage', this.updateState)
  }
}

export default IndexPage;
