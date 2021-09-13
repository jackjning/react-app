import styled from "@emotion/styled";

const Resume = () => {
  return (
    <Links>
      <h1>Resume</h1>
      <a href="/JackNingResume.pdf" download>
        Click here to Download
      </a>
    </Links>
  );
};

export default Resume;

const Links = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;
