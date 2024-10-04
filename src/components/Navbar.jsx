import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <img className="w-40" src={logo} alt="logo" />
      <div className="flex gap-5 items-center text-2xl">
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <a href="https://www.linkedin.com/in/mohamed-azoud-82413727a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <a href="https://www.instagram.com/med_azoud?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <a href="https://github.com/medazd0" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
