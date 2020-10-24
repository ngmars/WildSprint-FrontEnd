import React from 'react';
import './App.css';

import Auth from'./Container/Auth/Auth'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/auth" exact component={Auth}/>
      </Switch>
    </Router>
      {/* <About/> */}
    </div>
  );
}

export default App;
