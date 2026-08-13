import { useEffect, useRef, useState } from "react";
import "./Contact.css";

function Contact() {
  const contactRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const email = "jasvin75.kamra@gmail.com";

  useEffect(() => {
    const elements = contactRef.current.querySelectorAll(
      ".contact-header, .contact-panel"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible");
          } else {
            entry.target.classList.remove("contact-visible");
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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
      ref={contactRef}
    >

      {/* =========================
          HEADER
      ========================= */}

      <div className="contact-header">

        <div className="contact-number">
          <span>04</span>
          <i></i>
          <strong>CONTACT</strong>
        </div>

        <h2>
          Let's build
          <br />
          <span>something together.</span>
        </h2>

        <p>
          I'm open to internships, full-stack opportunities,
          interesting projects and conversations about technology.
        </p>

      </div>


      {/* =========================
          MAIN CONTACT PANEL
      ========================= */}

      <div className="contact-panel">


        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="contact-main">

          <div className="availability">
            <span></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h3>
            Have something
            <br />
            <span>in mind?</span>
          </h3>

          <p className="contact-main-text">
            Whether it's an internship, a project or just
            a conversation about development, I'd love to hear from you.
          </p>


          {/* ACTION BUTTONS */}

          <div className="contact-actions">

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-primary"
            >
              Send an email ↗
            </a>

            <button
              className="contact-copy"
              onClick={copyEmail}
            >
              {copied ? "Copied ✓" : "Copy email"}
            </button>

          </div>


          {/* EMAIL */}

          <div className="contact-email-box">

            <span>EMAIL</span>

            <a href={`mailto:${email}`}>
              {email}
            </a>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="contact-side">

          <div className="side-label">
            ELSEWHERE
          </div>


          {/* GITHUB */}

          <a
            href="https://github.com/2410991101"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >

            <div className="social-icon">
              GH
            </div>

            <div className="social-info">
              <strong>GitHub</strong>
              <span>View my projects</span>
            </div>

            <span className="social-arrow">
              ↗
            </span>

          </a>


          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/jaisvin-kaur-kamra-425629373/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >

            <div className="social-icon">
              in
            </div>

            <div className="social-info">
              <strong>LinkedIn</strong>
              <span>Let's connect</span>
            </div>

            <span className="social-arrow">
              ↗
            </span>

          </a>


          {/* RESUME */}

          <a
            href="/myResume.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-card"
          >
            <span>VIEW RESUME</span>
            <strong>Resume ↗</strong>
          </a>

        </div>

      </div>


      {/* =========================
          FOOTER
      ========================= */}

      <div className="contact-footer">

        <span>
          © 2026 Jaisvin Kaur
        </span>

        <span>
          Built with React
        </span>

      </div>

    </section>
  );
}

export default Contact;

