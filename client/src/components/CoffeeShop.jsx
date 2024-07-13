import React from "react";
import djangoLogo from "../assets/django-original.svg";
import coffee1 from "../assets/coffee1.png";
import coffee2 from "../assets/coffee2.png";

const CoffeeShop = ({ cshopActivate, setCshopActivate }) => {
  return (
    <>
      <div
        className={`cshop-container ${
          cshopActivate ? "cshop-container-activate" : "cshop-container-out"
        }`}
      >
        <div className="text-project-son">
          <h3> COFFEE SHOP</h3>
          <p className="project-son-description ">
            App que simula el comportamiento de de una tienda de cafe online. El
            usuario puede ver los productos en diferentes secciones, agregarlos
            al carrito de compras y eliminarlos del carrito.
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

          <a href="https://mycoffeeshop-zw5y.onrender.com" target="_blank">
            PUEDE VISITARLA AQUI
            <i className="fa-solid fa-square-arrow-up-right"></i>
          </a>
        </div>

        <div className="project-son-img-container">
          <img src={coffee1} />
          <img src={coffee2} />
        </div>
        <i
          onClick={() => {
            setCshopActivate(false);
          }}
          className="fa-solid fa-arrow-up close-arrow"
        ></i>
      </div>
    </>
  );
};

export default CoffeeShop;
