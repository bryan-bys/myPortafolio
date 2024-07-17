import React from "react";
import mycv from "../assets/mycv.png";

const Cv = () => {
  return (
    <>
      <div className="cv-background">
        <div className="cv-container">
          <img className="my-cv" src={mycv} />
        </div>
      </div>
    </>
  );
};

export default Cv;
