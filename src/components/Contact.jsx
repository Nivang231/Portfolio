import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bjewdrt", // EmailJS service ID
        "template_ux0ncvs", // EmailJS template ID
        formRef.current,
        "5IDinl00Uo1H6p0Vt" // EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully! ✅");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage("Oops! Something went wrong ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-800 text-gray-300">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-12 text-cyan-400 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12"
      >
        <div className="flex items-center gap-3">
          <FiMail className="text-cyan-400 text-2xl" />
          <span>goyalnivang2008@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FiPhone className="text-cyan-400 text-2xl" />
          <span>+91 6395397185</span>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto flex flex-col gap-6 bg-gray-900 p-8 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-cyan-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-cyan-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-cyan-400"
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-cyan-500 transition"
        >
          Send Message
        </button>

        {message && <p className="text-center text-green-400 font-semibold mt-2">{message}</p>}
      </motion.form>
    </section>
  );
};

export default Contact;