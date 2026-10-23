import "./App.css";

const skills = [
  "Java",
  "Python",
  "C / C++",
  "JavaScript",
  "HTML & CSS",
  "Data Structures",
  "DBMS",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Redis Server in Java",
    description:
      "A Redis-inspired server built from scratch to explore networking, data structures, persistence, and core database concepts.",
    tech: ["Java 21", "Maven", "TCP Sockets", "RESP2", "JUnit 5"],
    github: "https://github.com/jaisandeep842/REDIS-SERVER",
  },
];

function App() {
  function downloadResume() {
    window.print();
  }

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home">
          SJ<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Let's Connect ↗
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              Engineering Student · Aspiring Developer
            </div>

            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              Sandeep
              <br />
              <span>Jaiswar.</span>
            </h1>

            <p className="hero-description">
              I enjoy building software, understanding how systems work,
              and turning ideas into practical projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <button
                className="button button-secondary"
                onClick={downloadResume}
              >
                Print / Save Resume
              </button>
            </div>

            <div className="hero-links">
              <a
                href="https://github.com/jaisandeep842"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <span>·</span>
              <a href="#contact">Get in touch ↘</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer introduction">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-center">
              <span className="monogram">SJ</span>
              <span className="monogram-dot">.</span>
            </div>
            <div className="floating-card card-top">
              <span className="mini-icon">&lt;/&gt;</span>
              <div>
                <strong>Build</strong>
                <small>Learn by doing</small>
              </div>
            </div>
            <div className="floating-card card-bottom">
              <span className="mini-icon">{"{ }"}</span>
              <div>
                <strong>Explore</strong>
                <small>Think. Code. Improve.</small>
              </div>
            </div>
            <span className="visual-label">CURIOUS BY NATURE</span>
          </div>

          <a className="scroll-cue" href="#about">
            <span>↓</span> SCROLL TO EXPLORE
          </a>
        </section>

       <section className="section about-section" id="about">
  <div className="section-heading">
    <p className="eyebrow">01 / ABOUT</p>
    <h2>A little about <span>me.</span></h2>
  </div>

  <div className="about-grid">
    <div>
      <p className="about-lead">
        I'm an engineering student who enjoys understanding how software
        works and building things from the ground up.
      </p>

      <div className="about-highlight">
        <span className="about-highlight-icon">&lt;/&gt;</span>
        <div>
          <strong>Learning by building</strong>
          <p>Turning programming concepts into practical projects.</p>
        </div>
      </div>
    </div>

    <div className="about-details">
      <p>
        My current focus is on strengthening my programming fundamentals,
        data structures, and software development skills.
      </p>

      <p>
        One of my key projects is a Redis-inspired server built in Java,
        where I explore TCP communication, the RESP2 protocol, data
        structures, and data persistence.
      </p>

      <p>
        I'm continuously learning, experimenting with new ideas, and
        improving through hands-on development.
      </p>

      <a className="about-github-link"
        href="https://github.com/jaisandeep842/REDIS-SERVER"
        target="_blank"
        rel="noreferrer"
      >
        Explore my Java project <span>↗</span>
      </a>
    </div>
  </div>
</section>
        <section className="section skills-section" id="skills">
  <div className="section-heading">
    <p className="eyebrow">02 / TOOLKIT</p>
    <h2>My technical <span>toolkit.</span></h2>
    <p className="section-subtitle">
      Technologies and concepts I use while learning and building projects.
    </p>
  </div>

  <div className="skill-category-grid">
    <article className="skill-category">
      <div className="category-top">
        <span className="category-icon">{"</>"}</span>
        <span className="category-number">01</span>
      </div>
      <h3>Programming</h3>
      <p>Languages for problem solving and application development.</p>
      <div className="category-tags">
        <span>Java</span>
        <span>Python</span>
        <span>C</span>
        <span>C++</span>
      </div>
    </article>

    <article className="skill-category">
      <div className="category-top">
        <span className="category-icon">{"{ }"}</span>
        <span className="category-number">02</span>
      </div>
      <h3>Web Development</h3>
      <p>Core technologies for building web experiences.</p>
      <div className="category-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
    </article>

    <article className="skill-category">
      <div className="category-top">
        <span className="category-icon">▤</span>
        <span className="category-number">03</span>
      </div>
      <h3>Computer Science</h3>
      <p>Foundational concepts used in software engineering.</p>
      <div className="category-tags">
        <span>DSA</span>
        <span>DBMS</span>
        <span>OOP</span>
      </div>
    </article>

    <article className="skill-category">
      <div className="category-top">
        <span className="category-icon">⌘</span>
        <span className="category-number">04</span>
      </div>
      <h3>Tools</h3>
      <p>Tools I use to write, manage, and maintain code.</p>
      <div className="category-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>Figma</span>
      </div>
    </article>
  </div>
</section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>Built with <span>curiosity.</span></h2>
            <p className="section-subtitle">
              A look at a project I have worked on.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span className="project-number">{project.number}</span>
                  <span className="project-label">PERSONAL PROJECT</span>
                </div>

                <div className="project-illustration">
                  <div className="terminal-window">
                    <div className="terminal-bar">
                      <i />
                      <i />
                      <i />
                      <span>redis-server.java</span>
                    </div>
                    <div className="terminal-code">
                      <p><span>01</span> class RedisServer {"{"}</p>
                      <p><span>02</span> &nbsp; startServer();</p>
                      <p><span>03</span> &nbsp; handleCommands();</p>
                      <p><span>04</span> &nbsp; persistData();</p>
                      <p><span>05</span> {"}"}</p>
                      <p className="terminal-comment">// Learn by building</p>
                    </div>
                  </div>
                </div>

                <h3>{project.title}</h3>
<p className="project-description">{project.description}</p>

<div className="feature-grid">
  <div className="feature-item">
    <span className="feature-symbol">⌘</span>
    <div>
      <strong>RESP2 Protocol</strong>
      <small>Redis-style command communication</small>
    </div>
  </div>

  <div className="feature-item">
    <span className="feature-symbol">◷</span>
    <div>
      <strong>TTL Support</strong>
      <small>Key expiration management</small>
    </div>
  </div>

  <div className="feature-item">
    <span className="feature-symbol">↻</span>
    <div>
      <strong>AOF Persistence</strong>
      <small>Data recovery after restart</small>
    </div>
  </div>

  <div className="feature-item">
    <span className="feature-symbol">▦</span>
    <div>
      <strong>16 Logical Databases</strong>
      <small>Separate data spaces</small>
    </div>
  </div>
</div>

<div className="tech-list">
  {project.tech.map((tech) => (
    <span key={tech}>{tech}</span>
  ))}
</div>

<a
  className="project-link"
  href={project.github}
  target="_blank"
  rel="noreferrer"
>
  View source on GitHub <span>↗</span>
</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">04 / EDUCATION</p>
            <h2>Learning is <span>ongoing.</span></h2>
          </div>

          <div className="education-card">
            <div className="education-icon">ED</div>
            <div>
              <p className="education-label">ENGINEERING STUDENT</p>
              <h3>Shree L. R. Tiwari College of Engineering</h3>
              <p>Building a foundation in computing and software development.</p>
            </div>
            <span className="education-arrow">↗</span>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Have an idea?<br /><span>Let's connect.</span></h2>
          <p className="contact-description">
            Open to connecting with fellow developers, learning from others,
            and discussing software projects.
          </p>
          <a
            className="button button-light"
            href="https://github.com/jaisandeep842"
            target="_blank"
            rel="noreferrer"
          >
            Find me on GitHub ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">SJ<span>.</span></a>
        <p>Designed and built with curiosity.</p>
        <a href="#home">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Sandeep Jaiswar</span>
      </footer>
    </>
  );
}

export default App;