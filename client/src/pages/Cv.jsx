import React from "react";
import gitMyCV from "../assets/MyCV.png";

const Cv = () => {
  return (
    <>
      <div className="cv-background">
        <div className="cv-container">
          <img className="my-cv" src={MyCV} />
        </div>
      </div>
    </>
  );
};

export default Cv;
