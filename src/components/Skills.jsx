import { useEffect, useRef, useState } from "react";
import "./Skills.css";

function Skills() {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      number: "01",
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React"],
      position: "skill-frontend",
    },
    {
      number: "02",
      title: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
      position: "skill-backend",
    },
    {
      number: "03",
      title: "Database",
      items: ["MongoDB", "MySQL", "DBMS"],
      position: "skill-database",
    },
    {
      number: "04",
      title: "Languages",
      items: ["Java", "C++", "JavaScript"],
      position: "skill-languages",
    },
    {
      number: "05",
      title: "Tools",
      items: ["Git", "GitHub", "VS Code"],
      position: "skill-tools",
    },
  ];

  return (
    <section
      className={`skills-section ${visible ? "skills-visible" : ""}`}
      id="skills"
      ref={skillsRef}
    >

      <div className="skills-heading">
        <span>03 · SKILLS</span>
        <h2>What I work with.</h2>
      </div>

      <div className="skills-orbit">

        {/* CENTER */}
        <div className="skills-center">
          <div className="center-dot"></div>

          <h3>FULL STACK</h3>
          <span>DEVELOPMENT</span>
        </div>

        {/* CONNECTING LINES */}
        <div className="orbit-line line-one"></div>
        <div className="orbit-line line-two"></div>
        <div className="orbit-line line-three"></div>
        <div className="orbit-line line-four"></div>
        <div className="orbit-line line-five"></div>

        {/* SKILLS */}
        {skills.map((skill) => (
          <div
            className={`skill-card ${skill.position}`}
            key={skill.title}
          >

            <div className="skill-card-title">
              <small>{skill.number}</small>
              <h3>{skill.title}</h3>
            </div>

            <div className="skill-items">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;