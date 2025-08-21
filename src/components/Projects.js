import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Travix – Flutter Travel & Place Exploration App',
      description: 'A comprehensive Flutter travel application with admin panel integration, featuring place exploration, travel planning, and cross-platform compatibility. Available on CodeCanyon marketplace.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'commercial',
      technologies: ['Flutter', 'Dart', 'Admin Panel', 'Travel API', 'Firebase'],
      github: 'https://codecanyon.net/user/infous_tech/portfolio',
      live: 'https://codecanyon.net/user/infous_tech/portfolio',
      featured: true,
      marketplace: 'CodeCanyon'
    },
    {
      id: 2,
      title: 'Flutter Health Tracking UI',
      description: 'A modern health tracking application with beautiful UI/UX design, featuring fitness monitoring, health metrics, and personalized wellness tracking.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'commercial',
      technologies: ['Flutter', 'Dart', 'Health APIs', 'UI/UX Design', 'Data Visualization'],
      github: 'https://codecanyon.net/user/infous_tech/portfolio',
      live: 'https://codecanyon.net/user/infous_tech/portfolio',
      featured: true,
      marketplace: 'CodeCanyon'
    },
    {
      id: 3,
      title: 'Flutter Toffers Grocery UI',
      description: 'A complete grocery shopping application with modern UI design, featuring product catalog, shopping cart, and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'commercial',
      technologies: ['Flutter', 'Dart', 'E-commerce', 'UI/UX Design', 'State Management'],
      github: 'https://codecanyon.net/user/infous_tech/portfolio',
      live: 'https://codecanyon.net/user/infous_tech/portfolio',
      featured: true,
      marketplace: 'CodeCanyon'
    },
    {
      id: 4,
      title: 'AryaGO Customer App',
      description: 'A complete ride-booking Flutter app with OTP authentication, real-time tracking, ride booking flow, wallet integration, and driver-customer matching. Published on Google Play Store with 100+ downloads.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80',
      category: 'commercial',
      technologies: ['Flutter', 'Dart', 'Socket.IO', 'Real-time Tracking', 'OTP Authentication', 'Wallet Integration'],
      github: 'https://play.google.com/store/apps/details?id=com.aryago.customer&hl=en',
      live: 'https://play.google.com/store/apps/details?id=com.aryago.customer&hl=en',
      featured: false,
      marketplace: 'Google Play',
      published: true
    },
    {
      id: 5,
      title: 'AryaGO Driver App',
      description: 'Companion driver app with ride request handling, trip navigation, earnings tracking, and profile management. Built with responsive UI/UX and real-time driver-customer communication.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'commercial',
      technologies: ['Flutter', 'Dart', 'Socket.IO', 'Navigation', 'Earnings Tracking', 'Real-time Communication'],
      github: 'https://play.google.com/store/apps/details?id=com.aryago.driver&hl=en',
      live: 'https://play.google.com/store/apps/details?id=com.aryago.driver&hl=en',
      featured: false,
      marketplace: 'Google Play',
      published: true
    },
    {
      id: 6,
      title: 'Malaria Parasite Detection System',
      description: 'Deep Learning-based system for detecting malaria parasites in blood samples using computer vision and AI. Built with Python and advanced ML algorithms for medical diagnosis.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'ai',
      technologies: ['Python', 'Deep Learning', 'Computer Vision', 'TensorFlow', 'Medical AI', 'Image Processing'],
      github: 'https://github.com/imranjeet/Malaria-Parasite-Detection-System-Using-Deep-Learning',
      live: 'https://github.com/imranjeet/Malaria-Parasite-Detection-System-Using-Deep-Learning',
      featured: false
    },
    {
      id: 7,
      title: 'Flutter AI Assistant',
      description: 'AI-powered Flutter app integrating ChatGPT and DALL-E for intelligent conversations and image generation. Features natural language processing and AI image creation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'ai',
      technologies: ['Flutter', 'Dart', 'ChatGPT API', 'DALL-E', 'AI Integration', 'Natural Language Processing'],
      github: 'https://github.com/imranjeet/Flutter-AI-Assistant-using-chatGPT-and-dall-e',
      live: 'https://github.com/imranjeet/Flutter-AI-Assistant-using-chatGPT-and-dall-e',
      featured: false
    },
    {
      id: 8,
      title: 'Instagram Clone (Kotlin)',
      description: 'Native Android Instagram clone built with Kotlin, featuring social media functionality, image sharing, user profiles, and real-time interactions.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'mobile',
      technologies: ['Kotlin', 'Android', 'Social Media', 'Image Sharing', 'User Authentication', 'Real-time Features'],
      github: 'https://github.com/imranjeet/instagram-clone-kotlin',
      live: 'https://github.com/imranjeet/instagram-clone-kotlin',
      featured: false
    },
    {
      id: 9,
      title: 'Quizzy - Native Android Quiz App',
      description: 'Interactive quiz application built with Kotlin for Android, featuring multiple-choice questions, score tracking, and engaging user interface.',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'mobile',
      technologies: ['Kotlin', 'Android', 'Quiz App', 'Score Tracking', 'Interactive UI', 'Educational'],
      github: 'https://github.com/imranjeet/Quizzy-A-Native-Android-Quiz-App-Kotlin--',
      live: 'https://github.com/imranjeet/Quizzy-A-Native-Android-Quiz-App-Kotlin--',
      featured: false
    },
    {
      id: 10,
      title: 'Yoga Asana App',
      description: 'Flutter-based yoga application featuring asana guides, pose detection, workout tracking, and wellness features for fitness enthusiasts.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Yoga App', 'Fitness Tracking', 'Pose Detection', 'Wellness'],
      github: 'https://github.com/imranjeet/YogaAsana',
      live: 'https://github.com/imranjeet/YogaAsana',
      featured: false
    },
    {
      id: 11,
      title: 'Netflix Clone (Flutter)',
      description: 'Streaming platform clone built with Flutter, featuring video content, user authentication, and modern streaming interface design.',
      image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Video Streaming', 'User Authentication', 'Content Management', 'UI/UX'],
      github: 'https://github.com/imranjeet/netflix-clone-in-flutter',
      live: 'https://github.com/imranjeet/netflix-clone-in-flutter',
      featured: false
    },
    {
      id: 12,
      title: 'TikTok Clone App',
      description: 'A feature-rich TikTok clone built with Flutter, featuring video streaming, user interactions, social features, and modern UI/UX design.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Video Streaming', 'UI/UX'],
      github: 'https://github.com/imranjeet/TikTok-Clone',
      live: 'https://github.com/imranjeet/TikTok-Clone',
      featured: false
    },
    {
      id: 13,
      title: 'Exercise App',
      description: 'A comprehensive fitness application with workout tracking, exercise libraries, progress monitoring, and personalized training plans.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Health APIs', 'Data Visualization', 'UI/UX'],
      github: 'https://github.com/imranjeet/Exercise-App',
      live: 'https://github.com/imranjeet/Exercise-App',
      featured: false
    },
    {
      id: 14,
      title: 'Travel Buddy App',
      description: 'Travel companion app with trip planning, location services, travel guides, and itinerary management for seamless travel experiences.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Travel Planning', 'Location Services', 'Itinerary Management'],
      github: 'https://github.com/imranjeet/Travel-Buddy',
      live: 'https://github.com/imranjeet/Travel-Buddy',
      featured: false
    },
    {
      id: 15,
      title: 'Django E-commerce Marketplace',
      description: 'Full-featured e-commerce platform built with Django, featuring product management, user authentication, payment integration, and admin panel.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'fullstack',
      technologies: ['Django', 'Python', 'E-commerce', 'Payment Integration', 'Admin Panel', 'Database'],
      github: 'https://github.com/imranjeet/marketplace-using-django',
      live: 'https://github.com/imranjeet/marketplace-using-django',
      featured: false
    },
    {
      id: 16,
      title: 'Django E-commerce Website',
      description: 'Complete e-commerce solution with product catalog, shopping cart, user management, and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'fullstack',
      technologies: ['Django', 'Python', 'E-commerce', 'Shopping Cart', 'User Management', 'Payment Processing'],
      github: 'https://github.com/imranjeet/ecommerce-website-using-django',
      live: 'https://github.com/imranjeet/ecommerce-website-using-django',
      featured: false
    },
    {
      id: 17,
      title: 'Employee Management System',
      description: 'Comprehensive employee management system with HR features, attendance tracking, payroll management, and reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'fullstack',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Employee Management', 'HR System', 'Reporting'],
      github: 'https://github.com/imranjeet/Employee-Managemet',
      live: 'https://github.com/imranjeet/Employee-Managemet',
      featured: false
    },
    {
      id: 18,
      title: 'Flutter Firebase Authentication',
      description: 'Secure authentication system built with Flutter and Firebase, featuring email/password login, social authentication, and user management.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Authentication', 'GetX', 'User Management'],
      github: 'https://github.com/imranjeet/flutter-firebase-login-with-email-using-getx',
      live: 'https://github.com/imranjeet/flutter-firebase-login-with-email-using-getx',
      featured: false
    },
    {
      id: 19,
      title: 'Laravel Blog Panel',
      description: 'A powerful admin panel built with Laravel for managing blog content, featuring user management, content creation, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'backend',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Admin Panel', 'RESTful APIs'],
      github: 'https://github.com/imranjeet/laravel_blog_panel',
      live: 'https://github.com/imranjeet/laravel_blog_panel',
      featured: false
    },
    {
      id: 20,
      title: 'Flutter Blog Explorer',
      description: 'A comprehensive Flutter blog application with admin panel integration, featuring real-time content management, user authentication, and cross-platform compatibility.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'fullstack',
      technologies: ['Flutter', 'Dart', 'Laravel', 'MySQL', 'Firebase'],
      github: 'https://github.com/imranjeet/Flutter-Blog-Explorer',
      live: 'https://github.com/imranjeet/Flutter-Blog-Explorer',
      featured: false
    },
    {
      id: 21,
      title: 'Content Engine',
      description: 'AI-powered content generation and management system built with Jupyter Notebooks, featuring automated content creation and optimization.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'ai',
      technologies: ['Python', 'Jupyter Notebooks', 'AI Content Generation', 'Data Analysis', 'Machine Learning'],
      github: 'https://github.com/imranjeet/content-engine',
      live: 'https://github.com/imranjeet/content-engine',
      featured: false
    },
    {
      id: 22,
      title: 'Gym UI App',
      description: 'Modern fitness app UI built with Flutter, featuring workout tracking, exercise libraries, and beautiful fitness-focused design.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Fitness UI', 'Workout Tracking', 'Exercise Library', 'Modern Design'],
      github: 'https://github.com/imranjeet/Gym-ui',
      live: 'https://github.com/imranjeet/Gym-ui',
      featured: false
    },
    {
      id: 23,
      title: 'Weather App (C++)',
      description: 'Weather application built with C++, featuring real-time weather data, location services, and weather forecasting capabilities.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'backend',
      technologies: ['C++', 'Weather API', 'Data Processing', 'Location Services', 'Forecasting'],
      github: 'https://github.com/imranjeet/Weather-App',
      live: 'https://github.com/imranjeet/Weather-App',
      featured: false
    }
  ];

  const filterCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-neutral-800 mb-4">
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on. Each project represents a unique challenge 
            and showcases different aspects of my development skills.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {filterCategories.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Image Overlay with Quick Actions */}
                  <div className="absolute inset-0 bg-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Marketplace Badge for Commercial Projects */}
                  {project.marketplace && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-success-500 to-success-600 text-white text-xs font-bold rounded-full">
                        {project.marketplace}
                      </span>
                    </div>
                  )}

                  {/* Published Badge for Google Play Apps */}
                  {project.published && (
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold rounded-full">
                        Published
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 text-neutral-700 text-xs font-medium rounded-full border border-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-300"
                    >
                      <FiGithub className="mr-2" size={16} />
                      {project.marketplace ? 'View on Marketplace' : 'View Code'}
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-neutral-600 hover:text-neutral-800 font-medium text-sm transition-colors duration-300"
                    >
                      <FiExternalLink className="mr-2" size={16} />
                      {project.marketplace ? 'View Portfolio' : 'Live Demo'}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects.
          </p>
          <a
            href="https://github.com/imranjeet"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiGithub size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
