import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className={`header ${isHomePage ? "header-center" : "header-left"}`}>
      
        <Link to="/" className="home-link">
        <h1>Callum Blejean</h1>
        </Link>
        <div className="header-icons-wrapper">
        <div className="header-icons">
        <a href="https://github.com/CallumBlejean" >
          <img src="/assets/github-mark.png" alt="GitHub" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/callumblejean/" >
          <img src="/assets/linkedin.png" alt="LinkedIn" className="icon" />
        </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
