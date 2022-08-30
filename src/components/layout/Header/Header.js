import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Header() {
    return (
        // fontAwesome uses
        // <header>
        //     <a href="" className="logo"><span>Best</span>Designer</a>
        //     <input type="checkbox" id="menu-bar" />
        //     <label htmlFor="menu-bar" className="fas fa-bars"> <FontAwesomeIcon icon={faBars} /></label>
        //     <nav className="navbar">
        //         <Link to="/"><a>Home</a></Link>
        //         <Link to="login"><a>Login</a></Link>
        //         <Link to="register"><a>Register</a></Link>
        //     </nav>
        // </header>

        // fontAwesome cdn uses index.html file
        <header>
            <a href="" className="logo"><span>best</span>App</a>
            <input type="checkbox" id="menu-bar" />
            <label htmlFor="menu-bar" className="fas fa-bars"></label>
            <nav className="navbar">
                <Link to="/"><a>Home</a></Link>
                <Link to="login"><a>Login</a></Link>
                <Link to="register"><a>Register</a></Link>
            </nav>
        </header>
    )
}

export default Header
