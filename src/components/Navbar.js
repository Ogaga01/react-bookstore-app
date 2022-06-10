import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (

  <nav>
    <h1 className="header-one">Bookstore</h1>
    <Link className="navlink" to="/">Books</Link>
    <Link className="navlink" to="/Categories">Categories</Link>
  </nav>

);

export default Navbar;
