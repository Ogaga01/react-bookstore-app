import React from 'react';
import { Link } from 'react-router-dom';
import { RiUser3Fill } from 'react-icons/ri';

const Navbar = () => (

  <nav>
    <h1 className="header-one">Bookstore</h1>
    <Link className="navlink" to="/">Books</Link>
    <Link className="navlink" to="/Categories">Categories</Link>
    <div className="circle-wrapp"><RiUser3Fill className="user" /></div>
  </nav>

);

export default Navbar;
