import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Education from "./components/Education";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Blog />
      <Experience />
      <Education/>
      {/* <Hireme /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
