// src/components/Header.jsx
import React from 'react';
import './Header.css'; // Styling for the header and coin
import AnimatedWin50KLink from './AnimatedWin50KLink'; // Import the special animated link

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        {/* The <a> tag now wraps the new logo-container */}
        <a href="/" className="company-logo-link">
          <div className="logo-container"> {/* New container for the logo elements */}
            <div className="logo-coin"> {/* This will be the spinning outline */}
              {/* This div is now empty inside, it only creates the spinning circle */}
            </div>
            <div className="logo-text-static"> {/* This will be the static "TAN" text */}
              TAN
            </div>
          </div>
        </a>
      </div>
      <nav className="header-nav">
        <ul>
          <li><AnimatedWin50KLink /></li>
          <li><a href="#resources" className="nav-link">Resources</a></li>
          <li><a href="#explorer" className="nav-link">Explorer</a></li>
          <li><a href="#block-builders" className="nav-link">Block Builders</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <button className="buy-now-button">Buy Now</button>
      </div>
    </header>
  );
};

export default Header;