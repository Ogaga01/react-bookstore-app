import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        <h1 className="header-one">Bookstore</h1>
        <nav>
          <Link className="navlink" to="/">Books</Link>
          <Link className="navlink" to="/Category">Category</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
