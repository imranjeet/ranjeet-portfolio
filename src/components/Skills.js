import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiDatabase, FiLayers, FiTool } from 'react-icons/fi';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: FiCode,
      color: 'primary',
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'Dart', level: 90 },
        { name: 'Kotlin', level: 85 },
        { name: 'Mobile UI/UX', level: 85 },
        { name: 'State Management', level: 80 },
        { name: 'Firebase', level: 85 },
      ]
    },
    {
      title: 'Web Development',
      icon: FiDatabase,
      color: 'accent',
      skills: [
        { name: 'Django', level: 90 },
        { name: 'React', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'Laravel', level: 85 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: FiTool,
      color: 'success',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 80 },
        { name: 'Python', level: 90 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Data Analysis', level: 80 },
        { name: 'AI Integration', level: 75 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: FiLayers,
      color: 'warning',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Agile/Scrum', level: 80 },
      ]
    }
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
    <section id="skills" className="section-padding bg-neutral-50">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools to create amazing digital experiences. 
            Here are some of the skills I've developed over the years.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100"
            >
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-xl mr-4 ${
                  category.color === 'primary' ? 'bg-primary-100' :
                  category.color === 'accent' ? 'bg-accent-100' :
                  category.color === 'success' ? 'bg-success-100' :
                  'bg-warning-100'
                }`}>
                  <category.icon className={`text-2xl ${
                    category.color === 'primary' ? 'text-primary-600' :
                    category.color === 'accent' ? 'text-accent-600' :
                    category.color === 'success' ? 'text-success-600' :
                    'text-warning-600'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-neutral-700 font-semibold group-hover/skill:text-primary-600 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className={`font-bold ${
                        category.color === 'primary' ? 'text-primary-600' :
                        category.color === 'accent' ? 'text-accent-600' :
                        category.color === 'success' ? 'text-success-600' :
                        'text-warning-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full ${
                          category.color === 'primary' ? 'bg-gradient-to-r from-primary-500 to-primary-600' :
                          category.color === 'accent' ? 'bg-gradient-to-r from-accent-500 to-accent-600' :
                          category.color === 'success' ? 'bg-gradient-to-r from-success-500 to-success-600' :
                          'bg-gradient-to-r from-warning-500 to-warning-600'
                        }`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.05),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-neutral-800 text-center mb-8">
            Technologies I Work With
          </motion.h3>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'MongoDB',
              'PostgreSQL', 'Express.js', 'Next.js', 'Tailwind CSS', 'Git', 'Docker',
              'AWS', 'Firebase', 'GraphQL', 'Redux', 'Jest', 'Cypress'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + (index * 0.05)
                }}
              >
                <span className="text-neutral-700 font-medium text-sm">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
