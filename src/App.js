import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Live from './components/pages/Live';
import DVR from './components/pages/DVR';
import Audio from './components/pages/Audio';
import Player from './components/pages/Player';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/player' component={Player} />
          <Route path='/live' component={Live} />
          <Route path='/DVR' component={DVR} />
          <Route path='/audio' component={Audio} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;