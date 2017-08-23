import React, { Component } from 'react';

class SingleShow extends Component {
  renderHTML(){
    return {__html: this.props.showData.summary}
  }
  
  showSummary(){
    return <span dangerouslySetInnerHTML={this.renderHTML()}></span>
  }

  render(){
    return(
      <div className='singleShow'>
        <img src={this.props.showData.image_url} />
        <ul>
          <li>{this.props.showData.title}</li>
          <li>{this.props.showData.sched_day}</li>
          <li>{this.props.showData.sched_time}</li>
        </ul>
        {this.showSummary()}
      </div>
    )
  }
}

export default SingleShow;