import image1 from "../assets/front1.jpeg";

function IntroBackground() {
  return (
    <div className="intro-background">
      <img src={image1} alt="" />
      <div className="image-fade"></div>
    </div>
  );
}

export default IntroBackground;