import React from "react";
import MyCV from "../assets/MyCV.pdf";

const Cv = () => {
  return (
    <>
      <div className="cv-container">
        <iframe className="my-cv" src={MyCV}></iframe>
      </div>
    </>
  );
};

export default Cv;
