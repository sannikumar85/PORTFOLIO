import React, { useState } from 'react';
import './Nav.css';
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import logo from './G.png'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav>
                <div className="logo">
                <Link to="/about"><img src={logo} alt="" /> </Link>
                    
                </div>
                <ul
                    id="menuList"
                    style={{ maxHeight: menuOpen ? "300px" : "0px", transition: "max-height 0.3s ease" }}
                >
                    <Link to="/"> <li>Home</li></Link>
                    <Link to="/about"> <li>About</li></Link>
                    <Link to="/service"> <li>Services</li></Link>
                    <Link to="/project"> <li>Project</li> </Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
                <div className="menu-icon" onClick={toggleMenu} style={{ cursor: "pointer" }}>
                    <i> <CiMenuFries /></i>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
