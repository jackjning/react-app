import "./App.css";
import JackImage from "./Alaska.JPG";

const About = (props) => {
  return (
    <div>
      <h1 className="center">About Me</h1>
      <img alt="Me in Alaska" className="photo" src={JackImage} />
      <div>
        Hello! I'm Jack Ning. I graduated from the University of Virginia, double
        majoring in Finance and Computer Science. I like playing video games and 
        working out. This website is a place for me to post my projects.
      </div>
    </div>
  );
};

export default About;
