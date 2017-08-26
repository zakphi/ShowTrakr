import React, { Component, PropTypes } from 'react';
import auth from '../services/auth';

class Logout extends Component {
    componentDidMount() {
        auth.deleteToken();
        this.props.router.push('/');
    }

    render() {
        return (
            <h1 className="loading">
                Logging Out..
            </h1>
        );
    }
}

Logout.propTypes = {
    router: PropTypes.object.isRequired
};

export default Logout;
