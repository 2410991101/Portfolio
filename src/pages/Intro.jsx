import IntroNavbar from "../components/IntroNavBar";
import IntroHero from "../components/IntroHero";
import CursorGlow from "../components/CursorGlow";
import IntroBackground from "../components/IntroBackground";

function Intro({ onStart }) {
  return (
    <main className="intro">
      <IntroBackground />

      <CursorGlow />

      <IntroNavbar />

      <IntroHero onStart={onStart} />
    </main>
  );
}

export default Intro;