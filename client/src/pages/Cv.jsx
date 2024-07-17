import React from "react";
import MyCV from "../assets/myCv.png";

const Cv = () => {
  return (
    <>
      <div className="cv-background">
        <div className="cv-container">
          <img className="my-cv" src={MyCV}></img>
        </div>
      </div>
    </>
  );
};

export default Cv;
