import React from 'react';
import './App.css';
import Home from "./Components/Static/Home"

import Auth from'./Container/Auth/Auth'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
       
        <Route path="/home">
          <Home/>
        </Route >
        <Route path="/auth" exact component={Auth}/>
      </Switch>
    </Router>
      {/* <About/> */}
    </div>
  );
}

export default App;
