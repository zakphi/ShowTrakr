import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import image from '../imgComingSoon.png'
class Results extends Component {
  render(){
    return(
      <div className='show'>
        <Link to='/show'>
          <img onClick={() => this.props.getShowData(this.props.showResults.name)}
            src={this.props.showResults.image === null ? image : this.props.showResults.image.medium} 
            alt={this.props.showResults.name} /> 
          {this.props.showResults.name}
        </Link>
      </div>
    )
  }
}

export default Results;