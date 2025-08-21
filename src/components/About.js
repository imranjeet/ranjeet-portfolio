import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiMapPin, FiCalendar, FiMail, FiAward, FiCode, FiExternalLink } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const personalInfo = [
    { icon: FiUser, label: 'Name', value: 'Ranjeet Kumar' },
    { icon: FiMapPin, label: 'Location', value: 'India' },
    { icon: FiCalendar, label: 'Experience', value: '3+ Years' },
    { icon: FiMail, label: 'Email', value: 'ranjeetkmr54321@gmail.com' },
  ];

  const achievements = [
    { icon: FiAward, title: 'Full Stack Developer', description: 'End-to-end application development with modern technologies' },
    { icon: FiCode, title: 'AI Enthusiast', description: 'Machine Learning, Deep Learning, and AI integration expertise' },
    { icon: FiAward, title: 'Open Source Contributor', description: 'Active GitHub contributor with 34+ repositories' },
  ];

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
    <section id="about" className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Professional Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Professional Profile Image */}
              <div className="relative w-96 h-96 mx-auto">
                <img
                  src="https://avatars.githubusercontent.com/u/48348342?s=400&u=f30cb196b47c650f18686eae16d7120ab25e7f1d&v=4"
                  alt="Professional Headshot"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent rounded-2xl"></div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-success-500 to-success-600 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold">Available</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-200 rounded-full opacity-30"></div>
              
              {/* Experience badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-800">3+</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
              >
                <FiUser className="mr-2" />
                About Me
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Crafting Digital <span className="gradient-text">Excellence</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                I'm a <strong className="text-neutral-800">Full Stack App And Web Developer</strong> with 3+ years of experience 
                building innovative applications and web solutions. My passion lies in creating 
                cutting-edge experiences that leverage <strong className="text-neutral-800">AI and modern technologies</strong> to drive business growth.
              </p>
              
              <p>
                With expertise in technologies like <strong className="text-neutral-800">Flutter, Django, React, and AI/ML</strong>, 
                I specialize in developing robust full-stack applications that work seamlessly across multiple platforms while 
                incorporating intelligent features and exceptional user experiences.
              </p>
              
              <p>
                As an <strong className="text-neutral-800">AI Enthusiast</strong>, I'm constantly exploring machine learning, deep learning, 
                and artificial intelligence to create smarter, more efficient solutions. I believe in writing 
                <strong className="text-neutral-800"> clean, maintainable code</strong> and staying at the forefront of technological innovation.
              </p>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100"
                >
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <info.icon className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-medium">{info.label}</p>
                    <p className="text-neutral-800 font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="https://drive.google.com/file/d/1O3q2Ye9xJMGGD8vl2tgP3_lFhWJ3DKbO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  <FiAward className="mr-2" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>

            {/* Professional Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">{achievement.title}</h3>
                  <p className="text-neutral-600 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CodeCanyon Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 p-8 bg-gradient-to-r from-success-50 to-warning-50 rounded-2xl border border-success-200"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-800 mb-2">Commercial App Development Success</h3>
                <p className="text-neutral-600">Professional Flutter applications published on Google Play Store and CodeCanyon marketplace</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-success-100">
                  <div className="text-3xl font-bold text-success-600 mb-2">2</div>
                  <div className="text-sm text-neutral-600">Google Play Apps</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-success-100">
                  <div className="text-3xl font-bold text-success-600 mb-2">3</div>
                  <div className="text-sm text-neutral-600">CodeCanyon Apps</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-success-100">
                  <div className="text-3xl font-bold text-success-600 mb-2">11</div>
                  <div className="text-sm text-neutral-600">Total Sales</div>
                </div>
              </div>
              
              <div className="mt-6 text-center space-y-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.aryago.customer&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1 mr-4"
                >
                  <FiExternalLink className="mr-2" size={20} />
                  View Google Play Apps
                </a>
                <a
                  href="https://codecanyon.net/user/infous_tech/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-success-500 to-success-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-success-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FiExternalLink className="mr-2" size={20} />
                  View CodeCanyon Portfolio
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
 
      </div>
    </section>
  );
};

export default About;
