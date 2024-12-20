import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Trippy from "./components/Trippy";
import NCNews from "./components/NCNews";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import CanopyId from "./components/CanopyId";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/canopy-id" element={<CanopyId />} />
        <Route path="/trippy" element={<Trippy />} />
        <Route path="/nc-news" element={<NCNews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
