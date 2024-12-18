import React from "react";

function Trippy() {
  return (
    <main className="project-content">
      <header className="header-trippy">
        <h2>Trippy</h2>
      </header>
      <section className="project-gallery">
      <div className="project-card">
          <h3>Video Demo</h3>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Trippy Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-card">
          <section className="repo-links">
          <a href="https://github.com/markw53/backend-for-trippy">Backend Repo</a> <img src="/assets/github-mark.png" alt="GitHub" className="repo-page-icon" />  <a href="https://github.com/markw53/trippy">Frontend Repo</a>
          </section>
        </div>
        <div className="project-card">
          <section className="project-details">
            <h4>Overview</h4>
            <p>
              <strong>Trippy</strong> is a travel planning application designed
              to simplify the complexities of organizing group trips. From
              collaborative itineraries to real-time communication, Trippy helps
              travelers focus on enjoying their experiences rather than managing
              logistics. Whether planning a family vacation, a getaway with
              friends, or a team outing, Trippy provides the tools needed to
              streamline group travel and ensure everyone is on the same page.
            </p>
            <h4>Purpose</h4>
            <p>
              The purpose of Trippy is to minimize the stress of trip planning.
              Group trips often involve coordinating schedules, preferences, and
              communication, which can lead to miscommunication and chaos.
              Trippy was built to centralize the process, saving users time and
              effort while reducing the likelihood of errors or
              misunderstandings.
            </p>
            <h4>Key Features</h4>
            <section className="feature-section">
              <h5>User Accounts</h5>
              <ul>
                <li>Secure sign-up and login system.</li>
                <li>
                  Personalized profiles with the ability to edit details such as
                  name, profile picture, and email address.
                </li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Trip Management</h5>
              <ul>
                <li>
                  Create trips by adding a name, destination, start and end
                  dates, description, and an optional image URL.
                </li>
                <li>
                  Search for destinations with auto-suggestions and view them on
                  an interactive map.
                </li>
                <li>Add or remove group members to/from a trip effortlessly.</li>
                <li>
                  Customize trip settings and manage activities, itineraries, and
                  possibilities within each trip.
                </li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Itineraries and Activities</h5>
              <ul>
                <li>Plan activities and save them under "Possibilities" for group discussion.</li>
                <li>Move activities to the official itinerary or delete them as needed.</li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Collaborative Communication</h5>
              <ul>
                <li>Native chat functionality with dedicated chat rooms for each trip.</li>
                <li>
                  Group messaging to share ideas, updates, and gossip in a private and
                  organized manner.
                </li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>Real-Time Weather Updates</h5>
              <p>Check the 5-day weather forecast for your destination to ensure everyone is prepared.</p>
            </section>
            <section className="feature-section">
              <h5>Dynamic Maps</h5>
              <p>
                Display trip destinations on maps, helping users visualize their plans and explore
                nearby areas.
              </p>
            </section>
            <section className="feature-section">
              <h5>Guest Access</h5>
              <p>
                Sign in as a guest to create trips, interact with chats, and manage activities
                without creating a permanent account.
              </p>
            </section>
            <section className="feature-section">
              <h5>Technologies Used</h5>
              <ul>
                <li><strong>Frontend:</strong> React, React Native for seamless cross-platform user interfaces.</li>
                <li><strong>Backend:</strong> Node.js and Express for robust and scalable APIs.</li>
                <li><strong>Database:</strong> PostgreSQL for reliable data storage and management.</li>
                <li><strong>APIs:</strong> OpenWeatherMap for real-time weather data.</li>
                <li><strong>Authentication:</strong> Secure login using JWT (JSON Web Tokens).</li>
              </ul>
            </section>
            <section className="feature-section">
              <h5>User Experience Highlights</h5>
              <p>
                Trippy’s intuitive design ensures that users can easily navigate through trips,
                itineraries, and settings.
              </p>
              <p>
                Collaboration tools like chat and group management enhance teamwork during the
                planning process.
              </p>
              <p>
                Features like weather forecasts and dynamic maps provide practical value, ensuring
                trips are well-prepared and enjoyable.
              </p>
            </section>
            <footer className="features-conclusion">
              <h5>Conclusion</h5>
              <p>
                Trippy transforms the chaotic process of group travel planning into a seamless,
                enjoyable experience. By offering a centralized platform for itinerary creation,
                group communication, and trip management, Trippy ensures that users can focus on
                making memories rather than stressing over details. With features tailored for
                collaboration and usability, Trippy is the ultimate companion for modern travelers
                seeking to simplify and enhance their adventures.
              </p>
            </footer>
          </section>
        </div>
        
      </section>
    </main>
  );
}

export default Trippy;
