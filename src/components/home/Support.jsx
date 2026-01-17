'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaClock, FaComments } from 'react-icons/fa';

const Support = () => {
  const supportOptions = [
    {
      icon: <FaWhatsapp className="text-3xl" />,
      title: "WhatsApp Support",
      description: "Instant chat support via WhatsApp",
      contact: "+880 1234 567890",
      color: "from-green-400 to-green-600",
      delay: 0.1
    },
    {
      icon: <FaPhoneAlt className="text-3xl" />,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      contact: "+880 9876 543210",
      color: "from-blue-400 to-blue-600",
      delay: 0.2
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email Support",
      description: "Send us your queries via email",
      contact: "support@shopapp.com",
      color: "from-red-400 to-red-600",
      delay: 0.3
    },
    {
      icon: <FaComments className="text-3xl" />,
      title: "Live Chat",
      description: "24/7 live chat support",
      contact: "Chat Now",
      color: "from-purple-400 to-purple-600",
      delay: 0.4
    }
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order from your account dashboard or using the tracking link sent to your email."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all products. Items must be in original condition."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery usually takes 2-5 business days within major cities and 5-10 days for remote areas."
    },
    {
      question: "Do you offer COD (Cash on Delivery)?",
      answer: "Yes, we offer Cash on Delivery for all orders within Bangladesh."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-gray-900 relative overflow-hidden">
      {/* Animated background elements - Light version */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-100 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Light version */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
            <FaHeadset className="text-3xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We're Here to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Help You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any questions or concerns
          </p>
        </motion.div>

        {/* Support Options Grid - Light version */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: option.delay }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 h-full">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6 mx-auto`}
                >
                  <div className="text-white">
                    {option.icon}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{option.title}</h3>
                <p className="text-gray-600 text-center mb-4">{option.description}</p>
                <div className="text-center">
                  <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {option.contact}
                  </p>
                </div>

                {/* Hover effect border - Light version */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Stats - Light version */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16 border border-blue-100 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-gray-700 font-medium">Support Availability</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                &lt; 2 min
              </div>
              <p className="text-gray-700 font-medium">Average Response Time</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-gray-700 font-medium">Satisfaction Rate</p>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ Section - Light version */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form - Light version */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;