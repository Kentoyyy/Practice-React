import React from 'react';
import "../navbar.css";

function Navbar(props) {
    return (
        <nav className="nav">
            <a href="#" className="nav__brand">
                Kentoy.
            </a>
            <ul className="nav__menu">
                <li className="nav__item">
                    <a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Skills</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Portfolio</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>

            </ul>
            <div className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;