import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Aside from "./Aside";
import Projects from "../pages/Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const MainContainer = () => {
  const [homeActive, setHomeActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [resumeActive, setResumeActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <div className="main-back"></div>
      <div className="main-container">
        <Resume resumeActive={resumeActive} />
        <Contact contactActive={contactActive} />
        <div className={`home-main ${homeActive ? "home-main-on" : null}`}>
          <a
            onClick={() => {
              setHomeActive(false);
              setNavActive(false);
              setToggle(false);
            }}
          >
            HOME
          </a>
        </div>
        <Nav
          resumeActive={resumeActive}
          setResumeActive={setResumeActive}
          navActive={navActive}
          setNavActive={setNavActive}
          setToggle={setToggle}
          setHomeActive={setHomeActive}
          setContactActive={setContactActive}
        />
        <Aside toggle={toggle} homeActive={homeActive} />
      </div>
    </>
  );
};

export default MainContainer;
