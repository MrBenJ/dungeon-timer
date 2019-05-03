import React, { Component } from 'react';

export default class Hourglass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTime: '00:00:00',
      setTime: null,
      remainingTime: null
    };
  }

  render() {
    return (
      <div></div>
    );
  }
