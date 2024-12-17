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
            Hi, I’m <strong>Callum Blejean</strong>, a junior software developer with a
            passion for solving complex problems and building applications that
            make life easier and more efficient. After over a decade of
            experience in arboriculture, I transitioned into the world of
            software development by completing a comprehensive coding bootcamp
            at <strong>Northcoders</strong>.
          </p>
          <p>
            I thrive on building <strong>full applications</strong> where I can combine my
            problem-solving skills with creativity. One project I’m particularly
            proud of is an app I’m currently developing that helps users
            <strong> identify trees</strong> and tests their knowledge through interactive
            quizzes. I love seeing projects come to life, from idea to
            deployment.
          </p>
        </div>

        <div className="about-me-skills">
          <h3>Technical Skills</h3>
          <ul>
            <li><strong>Languages:</strong> JavaScript (Node.js, browser)</li>
            <li><strong>Testing:</strong> Jest, Supertest (TDD)</li>
            <li><strong>Back-end:</strong> SQL, PSQL, Seeding, Migrations</li>
            <li><strong>Front-end:</strong> React, React Native, HTML, CSS</li>
            <li><strong>Tools:</strong> Cloudflare, Netlify, Lighthouse</li>
            <li><strong>Methodologies:</strong> Agile, SCRUM, SDL</li>
          </ul>
        </div>

        <div className="about-me-interests">
            <h3>Outside of Coding</h3>
            <p>
            When I’m not coding, I’m tackling challenges—whether it’s exploring the outdoors or diving into virtual worlds
            </p>
            <ul>
              <li>
                <strong>Rock Climbing:</strong> I’m a big fan of trad and sport climbing, 
                and I’m often found working on multi-pitch routes across Europe. Falling 
                is all part of the process, and I’ve learned to embrace it—every slip 
                is a chance to figure things out and come back stronger (just like in coding).
              </li>
              <li>
                <strong>Kayaking:</strong> I’ve had some amazing adventures on the water, 
                including circumnavigating the Isle of Wight while carrying all our supplies. 
                That trip pushed me physically and mentally, but it was hugely rewarding. 
                Next up: I’m excited to dive into the adrenaline rush of white-water kayaking!
              </li>
              <li>
                <strong>Gaming:</strong> I love working as part of a team in <em>World of Warcraft</em>, 
                tackling challenging raids and coordinating strategies in PvP battles. Whether it's beating a tough boss or outplaying opponents, 
                achieving collective goals with a group is always satisfying. I also enjoy 
                unwinding with story-driven adventure games when I need to recharge.
              </li>
            </ul>
            <p>
              Whether I’m climbing a cliff, paddling through rough waters, or strategizing 
              in a virtual raid, I’m always looking for ways to learn, adapt, and grow—skills 
              that serve me just as well in software development as they do in life.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
