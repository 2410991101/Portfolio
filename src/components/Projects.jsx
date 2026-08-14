import casaDeAmore from "../assets/casadeamore.jpg";
import studentSpace from "../assets/studentspace.avif";
import { useEffect, useRef } from "react";
import "./Projects.css";

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const elements = projectsRef.current.querySelectorAll(
      ".projects-header, .project-item"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-visible");
          } else {
            entry.target.classList.remove("project-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="projects-section"
      id="projects"
      ref={projectsRef}
    >

      {/* HEADER */}

      <div className="projects-header">

        <div className="projects-number">
          <span>03</span>
          <i></i>
          <strong>PROJECTS</strong>
        </div>

        <h2>
          Things I've built
          <br />
          <span>while learning.</span>
        </h2>

        <p>
          A collection of projects where I experiment with frontend,
          backend and full-stack development.
        </p>

      </div>


      {/* =====================================================
          PROJECT 01 — CASA DE AMORE
      ===================================================== */}

      <article className="project-item">

        <div className="project-visual">

          <img
            src={casaDeAmore}
            alt="Casa De Amore restaurant website"
          />

        </div>

        <div className="project-info">

          <div className="project-meta">
            01 / WEB DEVELOPMENT
          </div>

          <h3>
            Casa De Amore
          </h3>

          <p>
            An Italian restaurant website designed to provide a
            complete digital experience with menu browsing,
            reservations and online ordering.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <a href="https://casa-de-amore.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link">
              View project →
          </a>

        </div>

      </article>


      {/* =====================================================
          PROJECT 02 — STUDENT SPACE
      ===================================================== */}

      <article className="project-item reverse">

        <div className="project-visual">

          <img
            src={studentSpace}
            alt="Student Space full stack application"
          />

        </div>

        <div className="project-info">

          <div className="project-meta">
            02 / FULL STACK DEVELOPMENT
          </div>

          <h3>
            Student Space
          </h3>

          <p>
            A full-stack web application built to explore
            authentication, backend systems, databases and
            user-focused functionality.
          </p>

          <div className="project-tech">
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>EJS</span>
          </div>

          <a href="https://student-space-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link">
              View project →
            </a>

        </div>

      </article>


      {/* =====================================================
          PROJECT 03
      ===================================================== */}

      <article className="project-item">

        <div className="project-visual">

          <div className="project-placeholder">
            <span>03</span>
            <strong>COMING SOON</strong>
          </div>

        </div>

        <div className="project-info">

          <div className="project-meta">
            03 / IN PROGRESS
          </div>

          <h3>
            More in the making
          </h3>

          <p>
            Currently exploring new ideas and building projects
            that combine full-stack development with problem
            solving and modern web technologies.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Java</span>
            <span>DSA</span>
          </div>

        </div>

      </article>

    </section>
  );
}

export default Projects;
