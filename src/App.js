import React from 'react';
import './App.css';
import Home from "./Components/Static/Home"
import SignIn from "./Components/Login/Login"
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
    </Router>
      {/* <About/> */}
    </div>
  );
}

export default App;
