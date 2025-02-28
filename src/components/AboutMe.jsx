import React from "react";

function AboutMe() {
  return (
    <main className="project-content">
      <header className="header-about-me">
        <h2>About Me</h2>
        <div className="about-me-image-container">
          <img 
            src="/assets/callumPfPic.jpeg" 
            alt="Callum Blejean" 
            className="about-me-image"
          />
        </div>
      </header>

      <section className="about-me-content">
        <div className="about-me-card">
          <div className="about-me-intro">
            <p>
              Hi, I’m <strong>Callum Blejean</strong>, a junior software developer with a passion for working on interesting problems and finding efficient solutions. With over a decade of experience in arboriculture, I’ve cultivated a strong foundation in <strong>leadership</strong>, <strong>teamwork</strong>, and <strong>risk management</strong>, which I now apply to my work in software development.
            </p>
            <p>
              As an arborist, I led teams in diverse, high-stakes environments, managing complex projects that required precise planning and execution. My role involved liaising with clients to understand their needs, communicating detailed project specifications to my team, and ensuring safety standards were met at every step. These experiences honed my problem-solving and adaptability skills, preparing me to excel in dynamic technical fields.
            </p>
            <p>
              Today, I thrive on building <strong>full applications</strong>, blending creativity with logical thinking. My most exciting project so far is an app that helps users <strong>identify trees</strong> and test their knowledge with interactive quizzes—bringing together my passion for technology and nature.
            </p>
          </div>

          <div className="about-me-skills">
            <h3>Technical Skills</h3>
            <ul>
              <li><strong>Languages:</strong> JavaScript (Node.js, browser)</li>
              <li><strong>Testing:</strong> Jest, Supertest (TDD)</li>
              <li><strong>Back-end:</strong> SQL, PSQL, Seeding, Migrations</li>
              <li><strong>Front-end:</strong> React, React Native, HTML, CSS</li>
              <li><strong>Tools:</strong> Cloudflare, Netlify, Firebase</li>
              <li><strong>Methodologies:</strong> Agile, SCRUM</li>
            </ul>
          </div>

          <div className="about-me-experience">
            <h3>Translating Arboriculture to Tech</h3>
            <p>
              My time in arboriculture taught me to work efficiently under pressure, navigate challenging environments, and lead diverse teams. Whether managing safety in high-risk settings or aligning team efforts toward a shared goal, I developed a knack for clear communication and strategic thinking—qualities that now guide my work as a developer.
            </p>
            <p>
              For example, the risk assessment practices I used daily have instilled in me a meticulous approach to debugging and testing code, ensuring reliable and robust applications. My leadership background enables me to thrive in collaborative settings, bridging technical and non-technical perspectives effectively.
            </p>
          </div>

          <div className="about-me-interests">
            <h3>Outside of Coding</h3>
            <p>
              When I’m not coding, I’m tackling challenges in the great outdoors or online worlds.
            </p>
            <ul>
              <li>
                <strong>Rock Climbing:</strong> I’m a big fan of trad and sport climbing and often work on multi-pitch routes across Europe. Falling is part of the process, and each slip teaches me resilience and problem-solving—skills I carry into coding.
              </li>
              <li>
                <strong>Kayaking:</strong> Adventures like circumnavigating the Isle of Wight have pushed me physically and mentally. I’m now diving into the adrenaline rush of white-water kayaking!
              </li>
              <li>
                <strong>Gaming:</strong> I enjoy coordinating strategies with teams in <em>World of Warcraft</em>, valuing the teamwork and focus required to achieve collective goals.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
