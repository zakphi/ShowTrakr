import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Results extends Component {
    checkEmpty(){
        if(this.props.showResults.image === null){
            return ''
        } else {
            return this.props.showResults.image.medium
        }
    }
    render(){
        return(
            <div className='show'>
            <Link to='/show'>
                <img onClick={() => this.props.getShowData(this.props.showResults.name)} src={this.checkEmpty()} alt={this.props.showResults.name} /> 
                {this.props.showResults.name}
            </Link>
            </div>
        )
    }
}

export default Results;