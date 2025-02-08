import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("equestrian");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Hasan International
        </Link>
        <ul className="navbar-menu">
          {["Equestrian", "Finished Leather", "Artisan Products", "About Us"].map((item) => (
            <li key={item} className="navbar-item">
              <Link
                to={item === "About Us" ? "/about-us" : `/${item.toLowerCase().replace(" ", "-")}`}
                className={`navbar-link ${active === item.toLowerCase() ? "active" : ""}`}
                onClick={() => setActive(item.toLowerCase())}
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
