import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        <h1 className="header-one">Bookstore</h1>
        <nav>
          <Link className="navlink" to="/">Book</Link>
          <Link className="navlink" to="/Category">Category</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
