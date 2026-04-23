import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsSection from "./components/Projects";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;