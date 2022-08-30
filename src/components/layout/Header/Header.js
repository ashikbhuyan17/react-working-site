import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Header() {
    return (
        <header>
            <a href="" className="logo"><span>best</span>App</a>
            <input type="checkbox" id="menu-bar" />
            <label htmlFor="menu-bar" className="fas fa-bars"> <FontAwesomeIcon icon={faBars} /></label>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#Features">Features</a>
                <a href="#About">About</a>
                <a href="#Review">Review</a>
                <a href="#pricing">Pricing</a>
                <a href="#Contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header
