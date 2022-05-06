import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';
import { CgProfile } from 'react-icons/cg';

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
      <div className="icon" style={{ color: ' #0290ff' }}>
        <CgProfile size={40} />
      </div>
    </div>
  </header>
);

export default Header;
