import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Trippy from "./components/Trippy";
import NCNews from "./components/NCNews";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/trippy" element={<Trippy />} />
        <Route path="/nc-news" element={<NCNews />} />
      </Routes>
    </Router>
  );
}

export default App;
