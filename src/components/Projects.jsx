import React from "react";
import { Link } from "react-router-dom";


function Projects() {
  return (
    <main className="project-content">
      <header className="header-project">
        <h2>Projects</h2>
      </header>

      <section className="project-gallery">
      <div className="project-card">
        <Link to="/canopy-id">
          <h5>Canopy ID - Learn to Identify Trees - (In Progress)</h5>
          
          <img
            src="/assets/CanopyId.png"
            alt="NC News Project Screenshot"
            className="project-image"
          />
          </Link>
        </div>


      
        <div className="project-card">
        <Link to="/trippy">
          <h5>Trippy - Travel Planning App</h5>
          
          <img
            src="/assets/TrippyLogo.png"
            alt="Trippy Project Screenshot"
            className="project-image"
          />
          </Link>
        </div>

        <div className="project-card">
        <Link to="/nc-news">
          <h5>NC News - Social News Platform</h5>
          
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
