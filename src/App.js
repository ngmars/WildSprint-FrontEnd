import React, { Component } from 'react';
import './App.css';

import Auth from'./Container/Auth/Auth';
import Events from './Container/Dashboard/Events/Events';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

class App extends Component {
  render () {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Auth}/>
        <Route path="/events" exact component={Events}/>
      </Switch>
    </Router>

    </div>
  );
};
}

export default App;
