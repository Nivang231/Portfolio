import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow-md z-50 px-4 md:px-6 py-4 flex justify-between items-center"
    >
      {/* Logo */}
      <div className="text-2xl font-bold">Nivang</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <a href="#home" className="hover:text-cyan-400 transition">Home</a>
        <a href="#about" className="hover:text-cyan-400 transition">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
      </div>

      {/* Mobile Button */}
      <div 
        className="md:hidden cursor-pointer z-50"
        onClick={() => setOpen(!open)}
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 right-0 w-full bg-gray-900 flex flex-col items-center gap-4 py-6 md:hidden"
        >
          <a href="#home" onClick={() => setOpen(false)} className="hover:text-cyan-400">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-cyan-400">About</a>
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-cyan-400">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-cyan-400">Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;