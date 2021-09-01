import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <Link
        to="JackNingResume.pdf"
        target="_blank"
        download
        style={{ textDecoration: "none" }}
      >
        Download
      </Link>
    </div>
  );
};

export default Resume;
