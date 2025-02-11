import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Hasan International
        </Link>
        {/* Hamburger Button (only visible on small screens via CSS) */}
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        {/* Full Menu */}
        <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
          {["Equestrian", "Finished Leather", "Artisan Products", "About Us"].map((item) => (
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
