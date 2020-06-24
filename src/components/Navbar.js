import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/">
        <div className='logo-doctolib'>Doctolib</div>
      </Link>
    </nav>
  );
};

export default Navbar;
