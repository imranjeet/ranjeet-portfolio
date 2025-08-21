import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email content
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
    `);
    
    // Open email client with pre-filled information
    const mailtoLink = `mailto:ranjeetkmr54321@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'ranjeetkmr54321@gmail.com',
      link: 'mailto:ranjeetkmr54321@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Location',
      value: 'India',
      link: '#'
    },
    {
      icon: FiMapPin,
      title: 'GitHub',
      value: 'github.com/imranjeet',
      link: 'https://github.com/imranjeet'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/imranjeet', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/iamranjeet/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:ranjeetkmr54321@gmail.com', label: 'Email' },
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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-primary-50"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
          >
            <FiMail className="mr-2" />
            Let's Connect
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect or discuss potential collaborations.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary-100 rounded-lg mr-4">
                <FiMail className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-800">Send Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-neutral-50 focus:bg-white"
                    placeholder="Ranjeet Kumar"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-neutral-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-neutral-50 focus:bg-white"
                  placeholder="What's this about?"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none bg-neutral-50 focus:bg-white"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiMail className="mr-2" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-success-100 border border-success-400 text-success-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">Message Sent Successfully!</p>
                      <p className="text-sm mt-1">Your email client should open with the message pre-filled. If it doesn't open automatically, please check your email settings.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Get In Touch</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Ready to start a project or have a question? Fill out the form below and I'll get back to you as soon as possible. 
                You can also reach me directly at{' '}
                <a 
                  href="mailto:ranjeetkmr54321@gmail.com" 
                  className="text-primary-600 hover:text-primary-700 font-semibold underline"
                >
                  ranjeetkmr54321@gmail.com
                </a>
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <info.icon className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-medium">{info.title}</p>
                      <p className="text-neutral-800 font-semibold">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-neutral-600 hover:text-primary-600 border border-neutral-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-r from-success-50 to-success-100 p-6 rounded-xl border border-success-200"
            >
              <h4 className="text-lg font-semibold text-neutral-800 mb-2">Current Status</h4>
              <p className="text-neutral-600 mb-3">
                I'm currently available for new opportunities and exciting projects.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-success-600 font-medium">Available for work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
