import React, { Component } from 'react';

class Footer extends Component {
  constructor(){
    super()

    const year = new Date().getFullYear()

    this.state = {
      year: year
    }
  }
  render(){
    return (
      <footer>
        TV Show Trakr {this.state.year} ©
      </footer>
    )
  }
}

export default Footer;