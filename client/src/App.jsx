import { useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Resume from "./components/Resume";
import Cv from "./pages/Cv";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Cv />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
