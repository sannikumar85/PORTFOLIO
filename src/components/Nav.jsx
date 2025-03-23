import React, { useState } from 'react';
import './Nav.css';
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';
import logo from './p.png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
       <img src={logo} alt="Logo" />
      </div>

      <ul
        id="menuList"
        style={{ maxHeight: menuOpen ? "300px" : "0px" }}
      >
        <Link to="/"> <li>HOME</li></Link>
        <Link to="/about"> <li>ABOUT</li></Link>
        <Link to="/service"> <li>SERVICES</li></Link>
        <Link to="/project"> <li>PROJECT</li> </Link>
        <Link to="/contact"><li>CONTACT</li></Link>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        <CiMenuFries />
      </div>
    </nav>
  );
};

export default Nav;
