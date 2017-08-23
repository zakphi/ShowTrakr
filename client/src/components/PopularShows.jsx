import React, { Component } from 'react';
import PopularShow from './PopularShow'

class PopularShows extends Component {
  renderPopularShows(){
    if(this.props.dataLoaded){
      return this.props.popularShows.map((show) => {
        return <PopularShow
          key={show.id}
          show={show}
          getShowData={this.props.getShowData}
        />
      })
    } else {
      return <h1>Loading...</h1>
    }
  }

  renderingPageButtons(){
    if(this.props.pageNum === 1){
      return(
        <div>
          <button onClick={() => this.props.changePopularPage(1)} className="next">Next &raquo;</button>
        </div>
      )
    }
    if(this.props.pageNum > 1 && this.props.pageNum < this.props.lastPage) {
      return (
        <div>
          <button onClick={() => this.props.changePopularPage(-1)} className="prev">&laquo; Prev</button>
          <button onClick={() => this.props.changePopularPage(1)} className="next">Next &raquo;</button>
        </div>
      )
    }
    if(this.props.pageNum === this.props.lastPage) {
      return(
        <button onClick={() => this.props.changePopularPage(-1)} className="prev">&laquo; Prev</button>
      )
    }
  }

  render(){
    return (
      <div className="home">
        <h1>Popular Shows</h1>
        <div className='popularShows'>
          {this.renderPopularShows()}
        </div>
        <div className='changepage'>
          {this.renderingPageButtons()}
        </div>
      </div>
    )
  }
}


export default PopularShows;
