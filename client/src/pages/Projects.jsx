import React, { useState } from "react";
import { Link } from "react-router-dom";
import XTwitter from "../components/XTwitter";
import CoffeeShop from "../components/CoffeeShop";

const Projects = () => {
  const [myxActivate, setMyxActivate] = useState(false);
  const [cshopActivate, setCshopActivate] = useState(false);

  return (
    <>
      <div className="projects-background"></div>
      <div className="projects-back">
        <div className="projects-container">
          <XTwitter myxActivate={myxActivate} setMyxActivate={setMyxActivate} />
          <CoffeeShop
            cshopActivate={cshopActivate}
            setCshopActivate={setCshopActivate}
          />
          <div className="projects-home-btn">
            <Link to="/">HOME</Link>
          </div>
          <div className="projects-links">
            <p
              onClick={() => {
                setMyxActivate(true);
              }}
            >
              X - TWITTER
            </p>
            <p
              onClick={() => {
                setCshopActivate(true);
              }}
            >
              COFFEE-SHOP
            </p>
            <p>PHOTOS GALERY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
