import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      displayTime: '',
    }
  }

  updateState = () => {
    const title = localStorage.getItem('title');
    this.setState({
      title
    });
  }

  render() {
    if (!localStorage) {
      return (
        <div className="no-support">
          Real dungeon masters use a browser that has
          localStorage support. Adopt the technologies of 2011.
          Use a modern browser!
        </div>
      )
    }

    return (
      <div className="app">
        <p>{this.state.title}</p>
        <Link to="/control" target="_blank">Open controller</Link>
      </div>
    );
  }

  componentDidMount() {
    // Establish a localStorage Listener as a controller
    window.addEventListener('storage', this.updateState)
  }
}

export default IndexPage;
