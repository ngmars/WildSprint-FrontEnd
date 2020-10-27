import React, { Component } from 'react';
import './App.css';

import Auth from'./Container/Auth/Auth';
import Logout from'./Container/Auth/Logout/Logout';
import ProfileDisp from './Container/Dashboard/Profile/Profile';
import Events from './Container/Dashboard/Events/Events';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

class App extends Component {
  render () {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Auth}/>

        </Switch>
        <Switch>
        <Route path="/events" exact component={Events}/>
        </Switch>
        <Switch>
        <Route path="/logout" exact component={Logout}/>
        </Switch>
        <Switch>
        <Route path="/profile" exact component={ProfileDisp}/>
        </Switch>
    </Router>

    </div>
  );
};
}

export default App;
