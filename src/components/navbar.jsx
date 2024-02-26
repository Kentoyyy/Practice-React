import React, { useState } from 'react';
import "../navbar.css";

function Navbar(props) {
    const [active, setActive] = useState("nav__menu");
    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive("nav__menu");
    };
    return (
        <nav className="nav">
            <a href="#" className="nav__brand">
                Kentoy.
            </a>
            <ul className={active}>
                <li className="nav__item">
                    <a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Skills</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Portfolio</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>

            </ul>
            <div onClick = {navToggle} className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;