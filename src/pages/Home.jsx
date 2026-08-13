import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useEffect } from "react";

function Home() {

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      const bar = document.querySelector(".scroll-progress");

      if (bar) {
        bar.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  return (
    <main className="home">

      {/* =========================
          SCROLL PROGRESS BAR
      ========================= */}

      <div className="scroll-progress"></div>


      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="home-navbar">

        <div className="logo">
          Jaisvin.dev
        </div>

        <div className="home-links">

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>
          <a href="/myResume.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link">
            Resume
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section className="home-hero">

        <div className="home-label">
          COMPUTER SCIENCE · FULL STACK
        </div>

        <h1>
          I build things
          <br />
          <span>for the web.</span>
        </h1>

        <p className="home-description">
          I'm Jaisvin Kaur, a Computer Science Engineering student
          exploring full-stack development, backend systems and
          modern web technologies.
        </p>

        <div className="home-actions">

          <a
            href="#projects"
            className="home-primary"
          >
            View my work →
          </a>

          <a
            href="#contact"
            className="home-secondary"
          >
            Let's connect
          </a>

        </div>

      </section>


      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <div className="scroll-indicator">

        <span></span>

        SCROLL TO EXPLORE

      </div>


      {/* =========================
          SECTIONS
      ========================= */}

      <About />

      <Skills />

      <Projects />

      <Contact />

    </main>
  );
}

export default Home;


