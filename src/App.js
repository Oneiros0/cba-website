import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Supporters from './Supporters.js';
import AboutUs from './About';
import Board from './Board';
import Join from './Join';
import HappyHours from './HappyHours';
import Checkout from './Checkout';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Route exact path='/' component={Home}/>
        <Switch>
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/board' component={Board} />
            <Route path='/join' component={Join} />
            <Route path='/happyhours' component={HappyHours} />
            <Route path='/supporters' component={Supporters} />
            <Route path='/checkout ' componen={Checkout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
