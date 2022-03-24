import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';

const Header = () => (
  <header className="header">
    <div className="left-header">
      <Link className="logo" to="/">
        <h1>Bookstore CMS</h1>
      </Link>
      <nav className="navigation">
        <Link to="/">Books</Link>
        <Link to="Categories">Categories</Link>
      </nav>
    </div>
    <div className="right-header">
      <div className="profile" />
    </div>
  </header>
);

export default Header;
