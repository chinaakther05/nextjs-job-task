'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Truck, 
  ShieldCheck, 
  Headphones, 
  RefreshCw,
  Clock,
  DollarSign,
  Package,
  ThumbsUp 
} from 'lucide-react';

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Fast Delivery",
      description: "24-hour delivery across major cities. Free shipping on orders above $50.",
      // 🚚 নীল রং - Truck আইকনের জন্য
      color: "bg-blue-50 text-blue-600",
      borderColor: "border-l-4 border-blue-500",
      delay: 0
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Secure Payment",
      description: "100% secure payment gateway with SSL encryption. Multiple payment options.",
      // 🛡️ সবুজ রং - Security/Checkmark এর জন্য
      color: "bg-green-50 text-green-600",
      borderColor: "border-l-4 border-green-500",
      delay: 0.1
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support via chat, email, and phone.",
      // 🎧 বেগুনি রং - Support/Headphones এর জন্য
      color: "bg-purple-50 text-purple-600",
      borderColor: "border-l-4 border-purple-500",
      delay: 0.2
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: "Easy Returns",
      description: "30-day return policy. No questions asked for damaged products.",
      // 🔄 কমলা রং - Return/Refresh এর জন্য
      color: "bg-orange-50 text-orange-600",
      borderColor: "border-l-4 border-orange-500",
      delay: 0.3
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Real-time Tracking",
      description: "Track your order live from warehouse to your doorstep.",
      // ⏰ গাঢ় নীল রং - Clock/Tracking এর জন্য
      color: "bg-indigo-50 text-indigo-600",
      borderColor: "border-l-4 border-indigo-500",
      delay: 0.4
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Best Price Guarantee",
      description: "We guarantee the lowest prices or we'll match the difference.",
      // 💰 সবজে-নীল রং - Money/Price এর জন্য
      color: "bg-emerald-50 text-emerald-600",
      borderColor: "border-l-4 border-emerald-500",
      delay: 0.5
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Genuine Products",
      description: "100% authentic products with manufacturer warranty.",
      // 📦 গোলাপি রং - Package/Product এর জন্য
      color: "bg-rose-50 text-rose-600",
      borderColor: "border-l-4 border-rose-500",
      delay: 0.6
    },
    {
      icon: <ThumbsUp className="w-12 h-12" />,
      title: "Customer Satisfaction",
      description: "98% customer satisfaction rate based on 10,000+ reviews.",
      // 👍 হলদে রং - Thumbs up/Satisfaction এর জন্য
      color: "bg-amber-50 text-amber-600",
      borderColor: "border-l-4 border-amber-500",
      delay: 0.7
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Us</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best shopping experience with features designed for your convenience
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* কার্ডের বর্ডার */}
              <div className={`bg-white rounded-2xl shadow-lg p-6 h-full transform transition-all duration-300 hover:shadow-2xl ${feature.borderColor}`}>
                {/* আইকন সেকশন */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ 
                    delay: feature.delay, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                  className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </motion.div>

                {/* কন্টেন্ট সেকশন */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>

                {/* হোভার এফেক্ট লাইন */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"
                  initial={false}
                />
              </div>

              {/* ফ্লোটিং অ্যানিমেশন */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
                className="absolute inset-0 -z-10"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* স্ট্যাটস সেকশন - মিল রেখে কালার দেওয়া */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              // 😊 - সবজে নীল (Customers)
              { number: "10K+", label: "Happy Customers", icon: "😊", color: "text-emerald-300" },
              // 📞 - বেগুনি (Support)
              { number: "24/7", label: "Support Available", icon: "📞", color: "text-purple-300" },
              // ⭐ - হলদে (Satisfaction)
              { number: "98%", label: "Satisfaction Rate", icon: "⭐", color: "text-yellow-300" },
              // 🔄 - কমলা (Returns)
              { number: "30", label: "Day Returns", icon: "🔄", color: "text-orange-300" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
                  <span className={`text-3xl ${stat.color}`}>{stat.icon}</span>
                  <span>{stat.number}</span>
                </div>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;