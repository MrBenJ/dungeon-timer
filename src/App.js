import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IndexPage from './IndexPage';
import ControlView from './ControlView';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/control" component={ControlView} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
