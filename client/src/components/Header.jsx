import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return(
        <header className="header">
            <div className="mobile-nav">
                <h1>TV Show Trackr</h1>
                <a onClick={props.handleNavClick} className="mobile-menu">&#9776;</a>
            </div>
            <div className={(props.mobileNavVisible ? '':'slide')}>
            <div className="slideBar">
            <nav className="navBar">
                <li><NavLink exact to='/' activeClassName='active'>Home</NavLink></li>
                {!props.auth ? <li><NavLink exact to='/login' activeClassName='active'>Log In</NavLink></li> : ''}
                {!props.auth ? <li><NavLink exact to='/register' activeClassName='active'>Register</NavLink></li> : ''}
                {props.auth ? <li>My Profile</li> : ''}
                {props.auth ? <li onClick={props.logOut}><NavLink exact to='/' activeClassName='active'>Log Out</NavLink></li> : ''}
            </nav>
            </div>
            </div>
        </header>
    )
}

export default Header;