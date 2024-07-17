import React from "react";
import MyCV from "../assets/david.jpg";

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
