import React, { Component } from 'react';

class Profile extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div>
                {console.log(this.props)}
                {this.props.usersShows}
            </div>
        )
    }
    
}

export default Profile;