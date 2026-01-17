"use client";

import { useState, useEffect } from 'react';
import { 
  FaUser, FaEnvelope, FaComment, FaPaperPlane, 
  FaMapMarkerAlt, FaPhone, FaClock, FaFacebook, 
  FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp,
  FaCheckCircle
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Confetti effect state
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (submitted) {
      setConfetti(true);
      const timer = setTimeout(() => {
        setSubmitted(false);
        setConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Contact Information Cards
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Address",
      details: ["123 Business Street", "Dhaka 1209, Bangladesh"],
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br",
      delay: 0.1
    },
    {
      icon: <FaPhone />,
      title: "Phone Number",
      details: ["+880 1712-345678", "+880 1912-987654"],
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br",
      delay: 0.2
    },
    {
      icon: <MdEmail />,
      title: "Email Address",
      details: ["support@yourcompany.com", "info@yourcompany.com"],
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br",
      delay: 0.3
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      color: "from-orange-500 to-yellow-500",
      gradient: "bg-gradient-to-br",
      delay: 0.4
    }
  ];

  // Social Media Links
  const socialMedia = [
    { icon: <FaFacebook />, name: "Facebook", color: "bg-blue-600", hover: "hover:bg-blue-700", link: "#" },
    { icon: <FaWhatsapp />, name: "WhatsApp", color: "bg-green-600", hover: "hover:bg-green-700", link: "#" },
    { icon: <FaInstagram />, name: "Instagram", color: "bg-pink-600", hover: "hover:bg-pink-700", link: "#" },
    { icon: <FaTwitter />, name: "Twitter", color: "bg-sky-500", hover: "hover:bg-sky-600", link: "#" },
    { icon: <FaLinkedin />, name: "LinkedIn", color: "bg-blue-700", hover: "hover:bg-blue-800", link: "#" }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const formVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3
      }
    }
  };

  // Confetti Component
  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: [
              '#3B82F6', '#10B981', '#8B5CF6', '#EF4444', '#F59E0B'
            ][i % 5],
            left: `${Math.random() * 100}%`,
            top: '-10px'
          }}
          initial={{ y: 0, rotate: 0 }}
          animate={{
            y: window.innerHeight,
            rotate: 360,
            x: Math.sin(i) * 200
          }}
          transition={{
            duration: 1.5 + Math.random(),
            delay: i * 0.02,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ y: -100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -100, opacity: 0, scale: 0.5 }}
            className="fixed top-6 right-6 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 max-w-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.5 }}
            >
              <FaCheckCircle className="text-2xl" />
            </motion.div>
            <div>
              <p className="font-bold">Success! 🎉</p>
              <p className="text-sm text-green-100">We'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti Effect */}
      {confetti && <Confetti />}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Floating Animation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            delay: 0.1
          }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 rounded-full text-sm font-semibold shadow-lg">
              ✨ Get in Touch
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions, ideas, or feedback? We'd love to hear from you. 
            Our team is ready to assist you with any inquiry.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`${item.gradient} ${item.color} p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="text-2xl">{item.icon}</div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 mb-1 last:mb-0">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5,
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} ${social.hover} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform`}
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-600 mt-6 text-sm">
                Follow us for updates, news, and exclusive offers
              </p>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={formVariants}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
              {/* Form Header */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Send a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you ASAP</p>
              </div>
              
              {/* Animated Form Border */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wide">
                      <FaUser className="inline mr-2 text-blue-500" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wide">
                      <FaEnvelope className="inline mr-2 text-blue-500" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wide">
                      <FaPhone className="inline mr-2 text-blue-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wide">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className="relative"
                >
                  <label className="block text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wide">
                    <FaComment className="inline mr-2 text-blue-500" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  animate={isSubmitting ? { 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 20px 25px -5px rgba(59, 130, 246, 0.3)",
                      "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                      "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
                    ]
                  } : {}}
                  transition={isSubmitting ? { 
                    repeat: Infinity, 
                    duration: 1.5 
                  } : {}}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="w-6 h-6 border-3 border-white border-t-transparent rounded-full mr-3"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-3 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </span>
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </form>

              {/* Form Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-10 pt-6 border-t border-gray-200 text-center"
              >
                <p className="text-gray-600">
                  <span className="font-bold text-blue-600">Quick Response:</span> Typically within 4-6 hours
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Your information is safe with us. We respect your privacy.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Live Chat Floating Button */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 1,
            type: "spring",
            stiffness: 200
          }}
          className="fixed bottom-8 right-8 z-40"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              y: [0, -10, 0],
              boxShadow: [
                "0 10px 25px rgba(0, 0, 0, 0.1)",
                "0 20px 40px rgba(59, 130, 246, 0.3)",
                "0 10px 25px rgba(0, 0, 0, 0.1)"
              ]
            }}
            transition={{ 
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-5 rounded-full shadow-2xl flex items-center justify-center group"
          >
            <FaWhatsapp className="text-3xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
              Live
            </span>
          </motion.button>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-center text-sm font-semibold text-gray-700 mt-2"
          >
            Chat Now
          </motion.p>
        </motion.div>

        {/* Map Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-8 text-white mt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
              <p className="text-blue-100 mb-6 max-w-md">
                Come meet us in person! Our team would be delighted to welcome you 
                and discuss how we can work together.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Get Directions →
              </button>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 w-full md:w-1/2">
              <div className="h-48 bg-gradient-to-br from-white/30 to-white/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl mx-auto mb-3" />
                  <p className="font-semibold">Interactive Map Location</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;