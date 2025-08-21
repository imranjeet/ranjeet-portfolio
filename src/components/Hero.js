import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/imranjeet', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/iamranjeet/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:ranjeetkmr54321@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional Background with Multiple Layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
        }}
      >
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/95 via-neutral-900/90 to-neutral-800/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-accent-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent"></div>
      </div>

      {/* Animated Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto px-4">
          {/* Professional Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-success-500/20 to-success-600/20 border border-success-400/30 text-success-300 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg">
              <span className="w-2 h-2 bg-success-400 rounded-full mr-3 animate-pulse"></span>
              Available for new opportunities
            </span>
          </motion.div>

          {/* Greeting with enhanced typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="text-primary-300 font-medium tracking-widest uppercase text-sm bg-gradient-to-r from-primary-400/20 to-accent-400/20 px-4 py-2 rounded-full border border-primary-400/20">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name with enhanced gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl md:text-9xl font-black mb-8 text-white leading-none"
          >
            <span className="bg-gradient-to-r from-white via-primary-100 to-accent-100 bg-clip-text text-transparent">
              Ranjeet Kumar
            </span>
          </motion.h1>

          {/* Professional Title with enhanced styling */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-5xl text-neutral-200 mb-10 font-light tracking-wide"
          >
            Full Stack App And Web Developer. AI Enthusiast
          </motion.h2>

          {/* Professional Description with better typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
          >
            I architect and build <span className="text-primary-300 font-semibold">scalable applications</span> that drive business growth. 
            With expertise in modern technologies and a passion for <span className="text-accent-300 font-semibold">AI innovation</span>, 
            I transform complex problems into elegant solutions.
          </motion.p>

          {/* Enhanced Professional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center space-x-12 mb-16 text-center"
          >
            <div className="text-center group">
              <div className="text-4xl font-black text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">3+</div>
              <div className="text-neutral-400 text-sm font-medium uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-white mb-2 group-hover:text-accent-300 transition-colors duration-300">20+</div>
              <div className="text-neutral-400 text-sm font-medium uppercase tracking-wide">Projects Completed</div>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
          >
            <Link to="projects" smooth={true} duration={500} offset={-64}>
              <button className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 text-lg">
                <span className="relative z-10 flex items-center">
                  View My Work
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-64}>
              <button className="group px-10 py-5 bg-transparent border-2 border-neutral-300/30 text-neutral-200 font-bold rounded-xl hover:bg-neutral-200/10 hover:border-neutral-200/50 transition-all duration-300 backdrop-blur-sm text-lg">
                Get In Touch
              </button>
            </Link>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center space-x-8 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-neutral-200/10 backdrop-blur-sm rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-200/20 transition-all duration-300 border border-neutral-200/10 hover:border-neutral-200/30 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <social.icon size={28} className="group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Link to="about" smooth={true} duration={500} offset={-64}>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-neutral-400 hover:text-white cursor-pointer p-3 bg-neutral-200/10 backdrop-blur-sm rounded-full border border-neutral-200/10 hover:border-neutral-200/30 transition-all duration-300"
              >
                <FiArrowDown size={24} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
