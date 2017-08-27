import React, { Component } from 'react';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      email: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="formcontainer">
        <h1 className="pageTitle">Register</h1>
        <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state.first_name, this.state.last_name, this.state.username, this.state.password, this.state.email)}>
          <input
            className="containerform-reg" 
            type="text"
            name="first_name"
            value={this.state.first_name}
            placeholder="First Name"
            onChange={this.handleInputChange} />
          <input
            className="containerform-reg" 
            type="text"
            name="last_name"
            value={this.state.last_name}
            placeholder="Last Name"
            onChange={this.handleInputChange} />
          <input
            className="containerform-reg" 
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Username"
            onChange={this.handleInputChange} />
          <input
            className="containerform-reg" 
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleInputChange} />
          <input
            className="containerform-reg" 
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleInputChange} />
          <input 
            className="loginbtn"
            type="submit" 
            value='Register' />
        </form>
      </div>
    )
  }
}

export default Register;
