import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio_Static';
import Employment from './components/Employment';
import About from './components/About';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='d-flex flex-column'>
          <Header />
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/employment' component={Employment}/>
            <Route path='/about' component={About}/>
            <Route path='/login' component={Login}/>
          </Switch>
          <Footer />
          <img src='./photos/1.jpg' alt=''></img>
        </div>
      </Router>
    )
  }
}

export default App;
