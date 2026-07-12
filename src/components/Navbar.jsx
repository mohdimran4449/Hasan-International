import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-container">
            <img src={logo} alt="Hasan International" className="logo-image" />
          </div>
        </Link>
        {/* Hamburger Button (only visible on small screens via CSS) */}
        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuActive}
          aria-controls="primary-navigation"
        >
          &#9776;
        </button>
        {/* Full Menu */}
        <ul
          id="primary-navigation"
          className={`navbar-menu ${menuActive ? "active" : ""}`}
        >
          {["Equestrian", "Pet Food", "Pet Supplies", "About Us"].map((item) => (
            <li key={item} className="navbar-item">
              <Link
                to={item === "About Us" ? "/about-us" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="navbar-link"
                onClick={() => setMenuActive(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
