import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Portfolio Website",
    link: "#",
    github: "#",
    desc: "Modern portfolio using React & Tailwind with animations.",
  },
  {
    name: "E-commerce App",
    link: "#",
    github: "#",
    desc: "Full-stack shopping app with interactive UI & cart animations.",
  },
  {
    name: "Todo App",
    link: "#",
    github: "#",
    desc: "React todo app with dark/light mode & localStorage support.",
  },
  {
    name: "Weather App",
    link: "https://weather-app-bynivang.netlify.app/",
    github: "#",
    desc: "Weather forecasting app ",
  },
  {
    name: "Image Gallery",
    link: "https://search-images-gallery.netlify.app/",
    github: "#",
    desc: "Image Gallery app ",
  },
  {
    name: "Avatar Generator",
    link: "#",
    github: "#",
    desc: "Avatar Generator App",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-900">
      
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            className="bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl relative"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">{project.name}</h3>

            {/* Project Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-300 flex-1 mb-4"
            >
              {project.desc}
            </motion.p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg font-semibold hover:bg-cyan-500 transition"
              >
                Live <FaExternalLinkAlt />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-200 rounded-lg font-semibold hover:bg-gray-600 transition"
              >
                Code <FaGithub />
              </a>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-400 rounded-bl-xl opacity-20 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;