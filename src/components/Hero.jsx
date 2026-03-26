import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
// import photo from "../assets/photo.png"; // apni photo
// import circleArrow from "../assets/circle-row.svg"; // decorative arrow


const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10 relative">
      
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-6 text-center md:text-left z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-cyan-400"
        >
          I am Nivang Goyal
        </motion.h1>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-semibold text-gray-300"
        >
          Full Stack Web Developer.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-400 leading-relaxed"
        >
          I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          {/* CV Download Button */}
          <a href="/resume_pdf.pdf" download>
            <button className="px-6 py-3 bg-cyan-400 text-gray-900 font-bold rounded-lg shadow-lg hover:bg-cyan-500 transition flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5"
              >
                <path fill="currentColor" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM244.7 395.3l-112-112c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l64 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 64 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0z"/>
              </svg>
              Download CV
            </button>
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 sm:mt-0 text-2xl text-gray-300">
            <a href="https://wa.me/+916395397185" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/linkedin.com/in/nivang-goyal-aa6512362/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-500 transition" />
            </a>
            <a href="https://www.instagram.com/nivang_goyal" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="https://github.com/nivang231" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-100 transition" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Image Content */}
        <div className="flex-1 relative z-10">
  {/* Profile Image */}
  <motion.img
    src="/profile.jpeg"
    alt="Tanisha"
    initial={{ x: 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="rounded-full border-4 border-cyan-400 shadow-xl w-64 md:w-80 mx-auto"
  />

  {/* Static Arrow on Left-Top of Image */}
  {/* <img
    src="/circle-arrow.svg"
    alt="Decorative Arrow"
    className="absolute -top-6 -left-6 w-16 md:w-24"
  /> */}
</div>

      {/* Optional Background Arrow Decoration */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 flex justify-end items-end pointer-events-none"
      >
        <img src="/circle-arrow.svg" alt="Background Arrow" className="w-32 md:w-48" />
      </motion.div> */}

    </section>
  );
};

export default Hero;