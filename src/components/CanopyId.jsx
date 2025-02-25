import React from "react";

function CanopyId() {
  return (
    <main className="project-content">
      <header className="header-canopy">
        <h2>Canopy ID</h2>
      </header>
      <section className="project-gallery">
        <div className="project-card">
          <h3>Video Demo</h3>
          <p>Video Disabled.</p> 
        </div>
        <div className="project-card">
          <section className="repo-links">
            <a href="-">Backend</a>{" "}
            <img
              src="/assets/github-mark.png"
              alt="GitHub"
              className="repo-page-icon"
            />{" "}
            <a href="-">Frontend</a>
          </section>
        </div>
        <div className="project-card">
          <section className="project-details">
            <h4>Overview</h4>
            <p>
              <strong><a href="https://canopyid.co.uk/">CanopyId</a></strong> is a web application designed to help users develop their tree identification skills by recognizing key characteristics such as bark, buds, leaves, and seeds. It provides an interactive learning environment suitable for both arborists and nature enthusiasts.
            </p>
            <h4>Purpose</h4>
            <p>
              To enable users to improve their tree identification abilities through interactive quizzes and personalized feedback, emphasizing consistency and accuracy.
            </p>
            <h4>Key Features</h4>
            <section className="feature-section">
              <h5>User Accounts</h5>
              <ul>
                <li>Users can create and deactivate accounts.</li>
                <li>Incorrect answers are logged to personalize future learning experiences.</li>
                <li>Progress tracking feature planned for future implementation.</li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Interactive Quizzes</h5>
              <ul>
                <li>Users can select quizzes based on tree type or difficulty level.</li>
                <li>Incorrect attempts are stored to help identify areas needing improvement.</li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Guided Learning</h5>
              <ul>
                <li>A structured syllabus offering tailored lessons and feedback is in development.</li>
                <li>Common errors are identified to help refine user skills.</li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Leaderboards</h5>
              <ul>
                <li>Users can compete on leaderboards, with more variations to be added soon.</li>
                <li>A weighted scoring system rewards consistent and accurate answers.</li>
              </ul>
            </section>
            
            <section className="feature-section">
              <h5>Technologies Used</h5>
              <ul>
                <li><strong>Frontend:</strong> React, CSS, Firebase, Axios</li>
                <li><strong>Backend:</strong> Node.js, Express, PostgreSQL</li>
              </ul>
            </section>
            <footer className="features-conclusion">
              <h5>Conclusion</h5>
              <p>
                Development is ongoing, with future updates planned including a detailed guided learning experience, enhanced leaderboards, and comprehensive progress tracking.
              </p>
            </footer>
          </section>
        </div>
      </section>
    </main>
  );
}

export default CanopyId;
