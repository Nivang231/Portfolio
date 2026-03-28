import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaPython
} from "react-icons/fa";
import { SiC, SiTailwindcss, SiExpress, SiBootstrap, SiJquery, SiPostman, SiMongodb } from "react-icons/si";

// Education Data
const education = [
  {
    degree: "Class XII (Senior Secondary)",
    school: "Prem Public School, Jalesar, Etah",
    board: "CBSE Board",
    year: "2024-2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA) – Data Analytics",
    school: "Amity University",
    year: "2025 – 2028",
  },
  {
    degree: "Full Stack Web Development (Frontend+Backend)",
    school: "Technosters Technologies Pvt. Ltd, Agra",
  },
];

// Hard Skills
const hardSkills = [
  { icon: SiC, name: "C Language", color: "text-blue-500" },
  { icon: FaPython, name: "Python", color: "text-yellow-400" },
  { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
  { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
  { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiExpress, name: "Express.js", color: "text-gray-300" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-400" },
  { icon: SiJquery, name: "jQuery", color: "text-blue-300" },
  { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-400" },
  { icon: SiPostman, name: "Postman", color: "text-orange-300" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
  { icon: FaGitAlt, name: "Git & GitHub", color: "text-gray-100" },
];

// Soft Skills
const softSkills = [
  "Time Management",
  "Presentation Skills",
  "Communication",
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-900 text-gray-300">

      {/* Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl leading-relaxed mb-12 text-center md:text-left"
      >
        I am a passionate learner and developer who loves creating modern and user-friendly experiences while continuously improving my skills and exploring new ideas.
        I enjoy solving real-world problems and turning simple ideas into meaningful and impactful digital experiences.
      </motion.p>

      {/* Education & Skills Grid */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Education */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-cyan-400"
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Education</h3>
          <ul className="space-y-4">
            {education.map((edu, i) => (
              <li key={i} className="text-gray-300">
                <span className="font-bold">{edu.degree}</span>
                {edu.board && <span> - {edu.board}</span>}
                <br />
                <span className="italic">{edu.school}</span>
                {edu.year && <span> ({edu.year})</span>}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Skills</h3>

          {/* Hard Skills */}
          <h4 className="text-lg font-semibold text-gray-200 mb-3">Hard Skills</h4>
          <div className="flex flex-wrap gap-6 mb-6 justify-center md:justify-start">
            {hardSkills.map((skill, i) => {
              const Icon = skill.icon;
              const hoverClass = {
                "text-blue-500": "hover:text-blue-500",
                "text-yellow-400": "hover:text-yellow-400",
                "text-orange-500": "hover:text-orange-500",
                "text-gray-300": "hover:text-gray-300",
                "text-cyan-400": "hover:text-cyan-400",
                "text-green-400": "hover:text-green-400",
                "text-blue-300": "hover:text-blue-300",
                "text-purple-400": "hover:text-purple-400",
                "text-orange-300": "hover:text-orange-300",
                "text-green-600": "hover:text-green-600",
                "text-gray-100": "hover:text-gray-100",
              }[skill.color];

              return (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-2 transform transition duration-300 hover:scale-110 ${hoverClass}`}
                >
                  <Icon className="text-4xl" />
                  <span className="text-sm">{skill.name}</span>
                </div>
              );
            })}
          </div>

          {/* Soft Skills */}
          <h4 className="text-lg font-semibold text-gray-200 mb-3">Soft Skills</h4>
          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-cyan-400 text-gray-900 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;