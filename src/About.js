import "./App.css";
import JackImage from "./Alaska.JPG"

const About = (props) => {
    console.log("This is Jack");
    return (
      <div>
      <img alt="Me in Alaska" className="photo" src={JackImage} />
      <div> 
      Hello! I'm Jack Ning. I graduated
      from the University of Virginia double majoring in
      Finance and Computer Science. This website is a place
      for me to post my projects.
      </div>
      </div>
  );
}

export default About;
