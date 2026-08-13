import { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const elements = aboutRef.current.querySelectorAll(
      ".about-header, .about-card, .about-mini-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
          } else {
            entry.target.classList.remove("about-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      ref={aboutRef}
    >

      {/* =========================
          SECTION HEADER
      ========================= */}

      <div className="about-header">

        <div className="about-number">
          <span>02</span>
          <i></i>
          <strong>ABOUT</strong>
        </div>

        <h2>
          I started with the frontend,
          <br />
          <span>but I’m building beyond it.</span>
        </h2>

        <p className="about-intro">
          I'm a Computer Science Engineering student exploring full-stack
          development, backend systems and modern web technologies.
          I enjoy understanding how things work behind the interface
          and turning ideas into useful digital experiences.
        </p>

      </div>


      {/* =========================
          MAIN ABOUT CARDS
      ========================= */}

      <div className="about-main-grid">

        {/* LEFT CARD */}

        <div className="about-card about-story">

          <div className="card-label">
            THE SHORT VERSION
          </div>

          <p>
            I started by building interfaces with HTML, CSS and JavaScript.
            Over time, I became more interested in what happens behind the
            screen — APIs, databases, authentication and backend systems.
          </p>

          <p>
            Now I'm working towards becoming a full-stack developer,
            learning how frontend and backend pieces connect to create
            complete applications.
          </p>

          <p>
            I’m also strengthening my problem-solving skills through
            <span className="highlight"> Java and DSA</span>.
          </p>

        </div>


        {/* RIGHT CARD */}

        <div className="about-card about-education">

          <div className="card-label">
            EDUCATION
          </div>

          <div className="education-timeline">

            {/* EDUCATION 1 */}

            <div className="education-item active">

              <div className="timeline-dot"></div>

              <div>
                <h3>
                  B.Tech — Computer Science Engineering
                </h3>

                <p>
                  3rd Year · Currently pursuing
                </p>

                <span>
                  2024 — Present
                </span>
              </div>

            </div>


            {/* EDUCATION 2 */}

            <div className="education-item">

              <div className="timeline-dot"></div>

              <div>
                <h3>
                  Class XII — PCM
                </h3>

                <p>
                  Senior Secondary Education
                </p>

                <span>
                  Completed
                </span>
              </div>

            </div>


            {/* EDUCATION 3 */}

            <div className="education-item">

              <div className="timeline-dot"></div>

              <div>
                <h3>
                  Class X
                </h3>

                <p>
                  Secondary Education
                </p>

                <span>
                  Completed
                </span>
              </div>

            </div>

          </div>


          {/* CURRENTLY */}

          <div className="currently-card">

            <span>
              CURRENTLY
            </span>

            <p>
              Going deeper into full-stack development —
              building with React, Node.js, databases and APIs.
            </p>

          </div>

        </div>

      </div>


      {/* =========================
          BOTTOM MINI CARDS
      ========================= */}

      <div className="about-mini-grid">

        {/* CARD 01 */}

        <div className="about-mini-card">

          <div className="mini-icon">
            01
          </div>

          <h3>
            Build beyond the screen
          </h3>

          <p>
            I like understanding the complete journey of a feature,
            from the interface to the backend.
          </p>

        </div>


        {/* CARD 02 */}

        <div className="about-mini-card">

          <div className="mini-icon">
            02
          </div>

          <h3>
            Learn by building
          </h3>

          <p>
            Projects help me turn concepts into something practical,
            usable and real.
          </p>

        </div>


        {/* CARD 03 */}

        <div className="about-mini-card">

          <div className="mini-icon">
            03
          </div>

          <h3>
            Always improving
          </h3>

          <p>
            Currently sharpening my full-stack skills while continuing
            to practice Java and DSA.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;