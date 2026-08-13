function IntroHero({onStart}) {
  return (
    <section className="intro-hero">

      <div className="intro-label">
        <span>●</span> PORTFOLIO · 2026
      </div>

      <h1>
        Building the web,
        <br />
        <span>one stack at a time.</span>
      </h1>

      <p className="intro-description">
        I'm Jaisvin Kaur, a Computer Science Engineering student
        exploring full-stack development and building digital
        experiences from frontend to backend.
      </p>

      <div className="intro-stats">

      <div>
        <span>3rd Year</span>
        <small>CSE Student</small>
      </div>

      <div>
        <span>Full Stack</span>
        <small>Developer</small>
      </div>

      <div>
        <span>Java</span>
        <small>DSA</small>
      </div>

    </div>

      <button className="start-tour" onClick={onStart}>
        Start the tour →
      </button>

      <p className="enter-text">
        or press ENTER
      </p>

    </section>
  );
}

export default IntroHero;