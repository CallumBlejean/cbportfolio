import React from "react";

function NCNews() {
  return (
    <main className="main-content">
      <header className="header">
        <h2>NC News</h2>
      </header>
      <section className="project-gallery">
        <div className="project-card">
          <h3>Video Demo</h3>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="NC News Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-card">
          <section className="project-details">
            <h4>Overview</h4>
            <p>
              <strong>NC News</strong> is a social news platform where users can
              explore, discuss, and interact with articles on a variety of
              topics. The app offers robust features for voting, commenting, and
              creating content, making it an engaging platform for users to
              share their perspectives and insights.
            </p>
            <h4>Purpose</h4>
            <p>
              NC News aims to foster an interactive community for news readers.
              By providing a platform where users can engage with articles
              through comments and votes, NC News turns passive reading into an
              active experience. The app also empowers users to create their own
              content, enhancing its value as a collaborative news hub.
            </p>
            <h4>Key Features</h4>
            <section className="feature-section">
              <h5>User Accounts</h5>
              <ul>
                <li>Secure sign-up and login system.</li>
                <li>
                  Personalized profiles where users can view and manage their
                  activity history.
                </li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Articles</h5>
              <ul>
                <li>View articles by topic, author, or popularity.</li>
                <li>
                  Sort articles by date, votes, or comment count for tailored
                  browsing.
                </li>
                <li>
                  Read detailed articles with dynamically loaded content and
                  comments.
                </li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Interactive Features</h5>
              <ul>
                <li>Upvote or downvote articles and comments to express opinions.</li>
                <li>
                  Add comments to articles, with live updates and user
                  attribution.
                </li>
                <li>
                  Delete your own comments with confirmation and status
                  indicators.
                </li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Article Creation</h5>
              <ul>
                <li>Create and post articles, selecting from predefined topics.</li>
                <li>
                  Include an image URL, title, and body for a rich content
                  experience.
                </li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Topic Management</h5>
              <p>
                Explore articles by topic or add new topics to expand discussion
                categories.
              </p>
            </section>
            <section className="feature-section">
              <h5>Technologies Used</h5>
              <ul>
                <li>
                  <strong>Frontend:</strong> React for an interactive and
                  dynamic user interface.
                </li>
                <li>
                  <strong>Backend:</strong> Node.js and Express for efficient
                  API management.
                </li>
                <li>
                  <strong>Database:</strong> PostgreSQL for structured and
                  reliable data storage.
                </li>
                <li>
                  <strong>Testing:</strong> Jest and Supertest for thorough
                  end-to-end testing.
                </li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>User Experience Highlights</h5>
              <p>
                The user-friendly interface allows seamless browsing, voting,
                and commenting.
              </p>
              <p>
                Dynamic updates enhance interactivity, keeping content fresh and
                engaging.
              </p>
              <p>
                The ability to create and discuss articles fosters a vibrant
                community.
              </p>
            </section>
            <footer className="features-conclusion">
              <h5>Conclusion</h5>
              <p>
                NC News transforms the news experience by merging content
                creation and interaction into a single platform. With features
                designed for collaboration, usability, and engagement, NC News
                provides a modern solution for staying informed and expressing
                ideas in a connected world.
              </p>
            </footer>
          </section>
        </div>
      </section>
    </main>
  );
}

export default NCNews;
