import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Login from './components/Login';
import Nav from './components/Nav';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logOut={this.logOut} />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' render={() => <Login handleLoginSubmit={this.handleLoginSubmit} />} />
        <Route exact path='/register' render={() => <Register handleRegisterSubmit={this.handleRegisterSubmit} />} /> 
        <Footer />
      </div>
    );
  }
}

export default App;
