import JackImage from "./Alaska.JPG";
import styled from "@emotion/styled";

const About = (props) => {
  return (
    <div>
      <h1 className="center">About Me</h1>
      <StyledImage alt="Me in Alaska" src={JackImage} />
      <div>
        Hello! I'm Jack Ning. I graduated from the University of Virginia,
        double majoring in Finance and Computer Science. I like playing video
        games and working out. This website is a place for me to post my
        projects.
      </div>
    </div>
  );
};

export default About;

const StyledImage = styled.img`
  height: 300px;
  width: 400px;
`;
