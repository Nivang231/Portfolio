import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-gray-900/80 backdrop-blur-md shadow-md z-50 px-6 py-4 flex justify-between items-center"
    >
      <div className="text-2xl font-bold">Nivang</div>
      <div className="hidden md:flex gap-6">
        <a href="#home" className="hover:text-cyan-400 transition">Home</a>
        <a href="#about" className="hover:text-cyan-400 transition">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
      </div>
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-4 py-4 md:hidden"
        >
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;