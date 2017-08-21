import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  constructor() {
    super();

    this.state = {
      auth: false,
      user: null,
      popularShows: null,
      dataLoaded: false
    }

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  // Auth Login/Register/Logout
  handleLoginSubmit(e, username, password) {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password,
    }).then(res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
        currentPage: 'home',
      });
    }).catch(err => console.log(err));
  }

  handleRegisterSubmit(e, username, password, email) {
    e.preventDefault();
    axios.post('/auth/register', {
      username,
      password,
      email,
    }).then(res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
        currentPage: 'home',
      });
    }).catch(err => console.log(err));
  }

  logOut() {
    axios.get('/auth/logout')
      .then(res => {
        console.log(res);
        this.setState({
          auth: false,
          currentPage: 'home',
        });
      }).catch(err => console.log(err));
  }
  
  componentDidMount(){
    axios.get('https://www.episodate.com/api/most-popular?page=1')
      .then(res => {
        this.setState({
          popularShows: res.data.tv_shows,
          dataLoaded: true
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header logOut={this.logOut} />
          <Route exact path='/' render={() => <Home dataLoaded={this.state.dataLoaded} popularShows={this.state.popularShows} />} />
          <Route exact path='/login' render={() => <Login handleLoginSubmit={this.handleLoginSubmit} />} />
          <Route exact path='/register' render={() => <Register handleRegisterSubmit={this.handleRegisterSubmit} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
