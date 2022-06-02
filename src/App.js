import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        <h1 className="header-one">Bookstore</h1>
        <nav>
          <Link className="navlink" to="/">Books</Link>
          <Link className="navlink" to="/Categories">Category</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
