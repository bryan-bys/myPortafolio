import { Link } from "react-router-dom";
import Projects from "../pages/Projects";
import { useState } from "react";

const Nav = ({
  setHomeActive,
  setToggle,
  navActive,
  setNavActive,
  setResumeActive,
  setContactActive,
}) => {
  const handleNav = () => {
    setNavActive(true);
    setToggle(true);
    setResumeActive(false);
    setContactActive(false);
  };

  return (
    <>
      <div className={`nav-container ${!navActive ? "nav-active" : "nav-out"}`}>
        <div className="links-container">
          <Link
            onClick={() => {
              setHomeActive(true);
              handleNav();
            }}
            to="/"
          >
            HOLA
          </Link>
          <Link to="/projects">PROJECTS</Link>
          <Link
            onClick={() => {
              setResumeActive(true);
              setContactActive(false);
            }}
          >
            RESUME
          </Link>
          <Link
            onClick={() => {
              setContactActive(true);
              setResumeActive(false);
            }}
          >
            CONTACT
          </Link>
        </div>
        <h4>BRYAN MARTINEZ</h4>
      </div>
    </>
  );
};

export default Nav;
