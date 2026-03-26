import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-gray-400 text-center">
      &copy; {new Date().getFullYear()} Nivang. All rights reserved.
    </footer>
  );
};

export default Footer;