import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/imranjeet', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/iamranjeet', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/iamranjeet', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:your.ranjeetkmr54321@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Ranjeet Kumar</h3>
              <p className="text-neutral-400 leading-relaxed">
                A passionate Full Stack App And Web Developer with expertise in AI/ML technologies, 
                creating innovative digital solutions and turning ideas into reality through intelligent code and modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-neutral-400">
                  <span className="text-primary-400">Email:</span> ranjeetkmr54321@gmail.com
                </p>
                <p className="text-neutral-400">
                  <span className="text-primary-400">Location:</span> India
                </p>
                <p className="text-neutral-400">
                  <span className="text-success-400">Status:</span> Available for work
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/imranjeet"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/iamranjeet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <FiLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:ranjeetkmr54321@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <FiMail size={20} />
                </motion.a>
              </div>

              {/* Copyright */}
              <div className="text-neutral-400 text-sm text-center md:text-right">
                <p>
                  © {currentYear} Ranjeet Kumar. All rights reserved.
                </p>
                <p className="flex items-center justify-center md:justify-end mt-1">
                  Made with <FiHeart className="text-red-500 mx-1" /> using React & Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
