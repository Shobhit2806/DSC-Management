import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './Components/Search';
import Landing from './Components/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/search' component={Search} />
        </Switch>
        </Router>

    </div>
  );
}

export default App;
