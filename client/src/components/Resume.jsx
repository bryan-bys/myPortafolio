import React from "react";
import { Link } from "react-router-dom";

const Resume = ({ resumeActive }) => {
  return (
    <>
      <div
        className={`resume-container ${
          resumeActive ? "resume-container-active" : "resume-container-out"
        }`}
      >
        <Link to="/resume">AQUI PUEDES VER MI CV</Link>
      </div>
    </>
  );
};

export default Resume;
