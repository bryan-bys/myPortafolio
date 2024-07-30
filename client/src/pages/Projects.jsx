import React, { useState } from "react";
import { Link } from "react-router-dom";
import XTwitter from "../components/XTwitter";
import CoffeeShop from "../components/CoffeeShop";
import PhotoGallery from "../components/PhotoGallery";

const Projects = () => {
  const [myxActivate, setMyxActivate] = useState(false);
  const [cshopActivate, setCshopActivate] = useState(false);
  const [pGalleryActivate, setPGalleryActivate] = useState(false);

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
          <PhotoGallery
            pGalleryActivate={pGalleryActivate}
            setPGalleryActivate={setPGalleryActivate}
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
            <p
              onClick={() => {
                setPGalleryActivate(true);
              }}
            >
              PHOTOS GALERY
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
