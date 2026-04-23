import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import project1 from "../assets/avatar1.png";
import project2 from "../assets/avatar2.png";
import project3 from "../assets/e-com1.png";
import project4 from "../assets/e-com2.png";
import project4a from "../assets/e-com3.png";
import project4b from "../assets/e-com4.png";
import project5 from "../assets/todo-1.png";
import project6 from "../assets/todo-2.png";
import project6a from "../assets/todo-3.png";
import project7 from "../assets/weather-1.png";
import project8 from "../assets/weather-2.png";
import project9 from "../assets/aifin-1.png";
import project10 from "../assets/aifin-2.png";
import project11 from "../assets/resumind1.png";
import project12 from "../assets/resumind2.png";

const Projects = [
  {
    name: "Avatar Generator",
    link: "#",
    github: "#",
    images: [project1, project2],
    desc: "An AI-powered avatar generator that creates unique avatars",
  },
  {
    name: "E-commerce App",
    link: "#",
    github: "#",
    images: [project3, project4, project4a, project4b],
    desc: "A full-stack e-commerce application with product listing, cart functionality...",
  },
  {
    name: "Todo App",
    link: "#",
    github: "#",
    images: [project5, project6, project6a],
    desc: "A dynamic todo application that allows users to manage tasks efficiently...",
  },
  {
    name: "Weather App",
    link: "#",
    github: "#",
    images: [project7, project8],
    desc: "A real-time weather forecasting app that fetches data from API...",
  },
  {
    name: "AI Finance Advisor",
    link: "#",
    github: "#",
    images: [project9, project10],
    desc: "An AI-powered financial advisor that provides personalized recommendations...",
  },

  {
    name: "ResuMind AI",
    link: "#",
    github: "#",
    images: [project11, project12],
    desc: "An AI-powered resume builder that generates professional resumes...",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-900">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center"
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {Projects.map((project, i) => (
          <ProjectCard key={i} project={project} i={i} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, i }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: i * 0.2, duration: 0.7 }}
      className="bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition relative"
    >
      {/* Image Slider */}
      <div className="relative mb-4">
        <img
          src={project.images[index]}
          alt={project.name}
          className="w-full h-40 object-cover rounded-lg"
        />

        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <FaChevronLeft size={12} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <FaChevronRight size={12} />
        </button>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-cyan-400 mb-3">
        {project.name}
      </h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-300 flex-1 mb-4"
      >
        {project.desc}
      </motion.p>

      {/* Corner */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-400 rounded-bl-xl opacity-20"></div>
    </motion.div>
  );
};

export default ProjectsSection;