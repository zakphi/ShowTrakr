import React, { Component } from 'react';

import Results from './Results';

class SearchResults extends Component {
  renderImageSearch(){
    if(this.props.dataLoaded){
      return this.props.showResults.map((results) => {
        return <Results
          key={results.show.id}
          showResults={results.show}
          showData={this.props.showData}
          getShowData={this.props.getShowData} />
      })
    } else {
      return <h1>Loading...</h1>
    }
  }

  render(){
    return (
      <div className="home">
        <h1 className="pageTitle">Search Results</h1>
        <div className='searchResults'>
          {this.renderImageSearch()}
        </div>
      </div>
    )
  }
}

export default SearchResults;