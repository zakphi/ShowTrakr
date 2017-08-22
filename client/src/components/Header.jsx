import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return(
        <header className="header">
            <h1>TV Show Trackr</h1>
            <nav className="navBar">
                <li><Link to='/'>Home</Link></li>
                {!props.auth ? <li><Link to='/login'>Log In</Link></li> : ''}
                {!props.auth ? <li><Link to='/register'>Register</Link></li> : ''}
                {props.auth ? <li>My Profile</li> : ''}
                {props.auth ? <li onClick={props.logOut}><Link to='/'>Log Out</Link></li> : ''}
            </nav>
        </header>
    )
}

export default Header;