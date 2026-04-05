import SplitText from "./SplitText";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <SplitText text="Hello! I'm" tag="h2" style={{ color: '#ffffff' }} />
            <img
              src="/Aditya Jadhav_Name.svg"
              alt="Aditya Jadhav"
              className="name-img"
            />
          </div>

          <div className="landing-info">
            <SplitText text="A Dynamic" tag="h2" style={{ color: '#ffffff' }} />
            <img
              src="/Graphic Designer_Name.svg"
              alt="Graphic Designer"
              className="creative-designer-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
