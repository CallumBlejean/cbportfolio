import React from "react";
import { Link } from "react-router-dom";


function Projects() {
  return (
    <main className="project-content">
      <header className="header">
        <h2>Projects</h2>
      </header>

      <section className="project-gallery">
        <div className="project-card">
          <h5>Trippy - Travel Planning App</h5>
          <Link to="/trippy">
          <img
            src="/assets/TrippyLogo.png"
            alt="Trippy Project Screenshot"
            className="project-image"
          />
          </Link>
        </div>

        <div className="project-card">
          <h5>NC News - Social News Platform</h5>
          <Link to="/nc-news">
          <img
            src="/assets/NCnewsHomeScreen.png"
            alt="NC News Project Screenshot"
            className="project-image"
          />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Projects;
