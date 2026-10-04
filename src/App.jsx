import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          SANTHIYA<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* ================= HOME ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hello">HELLO, I'M</p>

          <h1>
            G. <span>Santhiya</span>
          </h1>

          <h2>AI & Data Science Student</h2>

          <p className="hero-description">
            I am passionate about Artificial Intelligence, Data Science,
            Machine Learning and building practical technology solutions.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Projects
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/24243045-santhiya"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/santhiya-g-18967432a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:santhiya52344@gmail.com">
              Email
            </a>

          </div>

        </div>


        {/* PROFILE CARD */}

        <div className="profile-card">

          <div className="profile-circle">
            SG
          </div>

          <h3>AI & Data Science</h3>

          <p>Learn • Build • Innovate</p>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="section-heading">

          <p>WHO I AM</p>

          <h2>About Me</h2>

        </div>


        <div className="about-content">

          <div className="about-text">

            <h3>Building solutions with AI & Data</h3>

            <p>
              I am an Artificial Intelligence and Data Science student
              interested in developing intelligent applications and
              solving real-world problems using technology.
            </p>

            <p>
              I enjoy learning new technologies and building practical
              projects using programming, Artificial Intelligence,
              Data Science and web development.
            </p>

          </div>


          <div className="about-box">

            <div>
              <strong>AI</strong>
              <span>Artificial Intelligence</span>
            </div>

            <div>
              <strong>DS</strong>
              <span>Data Science</span>
            </div>

            <div>
              <strong>ML</strong>
              <span>Machine Learning</span>
            </div>

            <div>
              <strong>WEB</strong>
              <span>Web Development</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section dark-section">

        <div className="section-heading">

          <p>WHAT I WORK WITH</p>

          <h2>Skills</h2>

        </div>


        <div className="skills-grid">


          <div className="skill-card">

            <div className="skill-number">
              01
            </div>

            <h3>Programming</h3>

            <p>
              Python, Java and C
            </p>

          </div>


          <div className="skill-card">

            <div className="skill-number">
              02
            </div>

            <h3>Artificial Intelligence</h3>

            <p>
              Artificial Intelligence and Machine Learning
            </p>

          </div>


          <div className="skill-card">

            <div className="skill-number">
              03
            </div>

            <h3>Data</h3>

            <p>
              Data Analysis, SQL and Databases
            </p>

          </div>


          <div className="skill-card">

            <div className="skill-number">
              04
            </div>

            <h3>Development</h3>

            <p>
              Web Development and Application Building
            </p>

          </div>


        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <div className="section-heading">

          <p>MY WORK</p>

          <h2>Featured Projects</h2>

        </div>


        <div className="projects-grid">


          {/* PROJECT 1 */}

          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>
              Intelligent Resume Analyzer
            </h3>

            <p>
              An intelligent application designed to analyze
              resume information and help users understand
              their profile and career-related information.
            </p>

            <div className="project-tags">

              <span>AI</span>
              <span>Python</span>
              <span>Web</span>

            </div>

            <a
              href="https://github.com/24243045-santhiya"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 2 */}

          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              AI Library Assistant
            </h3>

            <p>
              An AI-powered library assistant designed to help
              with library information, book management and
              document-based question answering.
            </p>

            <div className="project-tags">

              <span>AI</span>
              <span>Python</span>
              <span>RAG</span>

            </div>

            <a
              href="https://github.com/24243045-santhiya/AI-Library-Assistant"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 3 */}

          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>
              NEC Z-Test Calculator
            </h3>

            <p>
              A statistical calculator designed to simplify
              Z-Test calculations and provide quick and
              understandable statistical results.
            </p>

            <div className="project-tags">

              <span>Statistics</span>
              <span>Python</span>
              <span>Web</span>

            </div>

            <a
              href="https://github.com/24243045-santhiya"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>


        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="section dark-section"
      >

        <div className="section-heading">

          <p>MY ACADEMIC JOURNEY</p>

          <h2>Education</h2>

        </div>


        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div>

            <h3>
              National Engineering College
            </h3>

            <p>
              Artificial Intelligence and Data Science
            </p>

            <span>
              Currently Pursuing
            </span>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}

      <section className="section">

        <div className="section-heading">

          <p>ACHIEVEMENTS</p>

          <h2>
            Certifications & Activities
          </h2>

        </div>


        <div className="certifications-grid">


          <div className="certificate-card">

            <div className="certificate-icon">
              ★
            </div>

            <h3>
              NPTEL Courses
            </h3>

            <p>
              Employment Communication, Introduction to
              Internet of Things and Cloud Computing.
            </p>

          </div>


          <div className="certificate-card">

            <div className="certificate-icon">
              ★
            </div>

            <h3>
              Hackathon
            </h3>

            <p>
              Mystery Dataset Challenge (MDC-2K26)
              7-Hour Hackathon.
            </p>

          </div>


          <div className="certificate-card">

            <div className="certificate-icon">
              ★
            </div>

            <h3>
              Paper Presentation
            </h3>

            <p>
              Participated in a paper presentation at
              Kalasalingam Academy of Research and Education.
            </p>

          </div>


        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <p>LET'S CONNECT</p>

        <h2>
          Let's build something
          <br />
          meaningful together.
        </h2>


        <a
          href="mailto:santhiya52344@gmail.com"
          className="contact-button"
        >
          Contact Me
        </a>


        <div className="contact-links">

          <a
            href="https://github.com/24243045-santhiya"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/santhiya-g-18967432a"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 G. Santhiya | AI & Data Science
        </p>

      </footer>

    </div>
  );
}

export default App;