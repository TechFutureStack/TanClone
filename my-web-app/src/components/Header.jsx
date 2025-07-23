import React, { useState, useEffect } from "react";
import "./Header.css";
import TanLogo from "./tan.png";
import { FaShoppingCart, FaSearch, FaBook, FaCubes } from "react-icons/fa";

const navLinks = [
  { label: "Resources", url: "#", icon: <FaBook className="nav-link-icon" /> },
  { label: "BlockBuilders", url: "#", icon: <FaCubes className="nav-link-icon" /> },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-root${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo-group">
        <img
          src={TanLogo}
          alt="TAN Logo"
          className={`nav-logo ${scrolled ? "nav-logo-small" : "nav-logo-large"}`}
        />
      </div>
      <nav className="nav-links-group">
        <ul>
          {/* Search Bar */}
          <li className="nav-search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              aria-label="Search input"
            />
            <button className="search-button" aria-label="Search">
              <FaSearch />
            </button>
          </li>

          {/* Other Links */}
          {navLinks.map(({ label, url, highlight, icon }) => (
            <li key={label}>
              <a
                href={url}
                className={highlight ? "nav-link nav-link--highlight" : "nav-link"}
                aria-label={label}
              >
                {icon}
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-cart" href="#" aria-label="Shop">
          <FaShoppingCart className="cart-icon" />
        </a>
      </nav>
    </header>
  );
}
