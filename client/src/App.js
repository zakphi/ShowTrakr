import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
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
      dataLoaded: false,
      redirect: false
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
    this.getShowData = this.getShowData.bind(this);
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
        redirect: true
      });
    }).catch(err => console.log(err));
  }

  handleRegisterSubmit(e, first_name, last_name, username, password, email) {
    e.preventDefault();
    axios.post('/auth/register', {
      first_name,
      last_name,
      username,
      password,
      email,
    }).then(res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
        redirect: true
      });
    }).catch(err => console.log(err));
  }

  logOut() {
    axios.get('/auth/logout')
      .then(res => {
        console.log(res);
        this.setState({
          auth: false,
          redirect: false
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
  
  getShowData(showName) {
    axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${showName}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        title: res.data.name,
        genre: res.data.genre,
        sched_time: res.data.sched_time,
        sched_date: res.data.sched_date,
        image_url: res.data.image_url,
        summary: res.data.summary,
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header logOut={this.logOut} auth={this.state.auth} />
          <Route exact path='/' render={() => <Home dataLoaded={this.state.dataLoaded} popularShows={this.state.popularShows} getShowData={this.getShowData} />} />
          <Route exact path='/login' render={() => <Login handleLoginSubmit={this.handleLoginSubmit} />} />
          <Route exact path='/register' render={() => <Register handleRegisterSubmit={this.handleRegisterSubmit} />} />
          {this.state.redirect ? <Redirect push to={'/'} /> : ''}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
