import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Blog Platform</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-post">Create Post</Link>
          </li>
          {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
