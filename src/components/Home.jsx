import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main-content">
      <div className="button-container">
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <button className="projects-button">projects</button>
        </Link>
        <Link to="/about-me"style={{ textDecoration: 'none' }}>
          <button className="about-me-button">about me</button>
        </Link>
        </div>
    </main>
  );
}

export default Home;
