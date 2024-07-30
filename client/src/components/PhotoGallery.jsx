import React from "react";
import pGallery1 from "../assets/PhotoGallery.png";
import pGallery2 from "../assets/PhotoGallery2.png";
import djangoLogo from "../assets/django-original.svg";

const PhotoGallery = ({ pGalleryActivate, setPGalleryActivate }) => {
  return (
    <>
      <div
        className={`p-gallery-container ${
          pGalleryActivate
            ? "p-gallery-container-activate"
            : "p-gallery-container-out"
        }`}
      >
        <div className="arrow-container">
          <i
            onClick={() => {
              setPGalleryActivate(false);
            }}
            className="fa-solid fa-arrow-right close-arrow"
          ></i>
        </div>
        <div className="text-project-son">
          <h3>PHOTO GALLERY</h3>
          <p className="project-son-description ">
            App que utiliza la API de unsplash para recrear una galeria de arte
            virtual en donde las protagonistas son las fotografias especial
            mente las de arte
          </p>
          <div className="languages">
            <p>
              <i className="fa-brands fa-react"></i>
            </p>
            <p>
              <img className="django-logo" src={djangoLogo} />
            </p>
            <p>
              <i className="fa-brands fa-github"></i>
            </p>
          </div>

          <a href="https://myunsplash-82oq.onrender.com" target="_blank">
            PUEDE VISITARLA AQUI
            <i className="fa-solid fa-square-arrow-up-right"></i>
          </a>
        </div>

        <div className="project-son-img-container">
          <img src={pGallery1} />
          <img src={pGallery2} />
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
