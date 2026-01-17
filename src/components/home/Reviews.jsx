"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  StarHalf,
  Quote,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Product Designer",
      rating: 5,
      comment:
        "The service was exceptional! Everything exceeded my expectations.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b786d4d1?w=100&h=100&fit=crop&crop=face",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Marketing Manager",
      rating: 4.5,
      comment:
        "Great experience overall. The team was professional and delivered on time.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Software Engineer",
      rating: 5,
      comment:
        "Outstanding quality and attention to detail. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "3 days ago",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Business Owner",
      rating: 4,
      comment:
        "Good service with a professional team and clear communication.",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      date: "2 weeks ago",
    },
  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };


  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

 
  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.03, 
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  
  const starVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;

    for (let i = 0; i < full; i++) {
      stars.push(
        <motion.div
          key={`f-${i}`}
          custom={i}
          variants={starVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 15 }}
        >
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        </motion.div>
      );
    }

    if (half) {
      stars.push(
        <motion.div
          key="half"
          custom={full}
          variants={starVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 15 }}
        >
          <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        </motion.div>
      );
    }

    return stars;
  };

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.firstChild.offsetWidth + 24;

    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.firstChild.offsetWidth + 24;

    container.scrollBy({ left: cardWidth, behavior: "smooth" });
    setCurrentIndex((prev) =>
      Math.min(prev + 1, reviews.length - 1)
    );
  };

  
  useEffect(() => {
    if (isHovered) return; 

    const interval = setInterval(() => {
      if (currentIndex >= reviews.length - 1) {
        setCurrentIndex(0);
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        scrollRight();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-50 to-blue-50 py-10 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, repeatDelay: 3 }}
          >
            <Quote className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          </motion.div>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-3"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Customer Reviews
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            What our clients say about us
          </motion.p>
        </motion.div>

        
        <div className="flex justify-end gap-4 mb-6">
          <motion.button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              x: currentIndex === 0 ? [0, -5, 0] : 0,
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={scrollRight}
            disabled={currentIndex === reviews.length - 1}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              x: currentIndex === reviews.length - 1 ? [0, 5, 0] : 0,
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Slider Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] snap-center flex-shrink-0"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-6 h-full border border-gray-100"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3 }}
                >
                  {/* User Info */}
                  <motion.div 
                    className="flex items-center gap-4 mb-4"
                    whileHover={{ x: 5 }}
                  >
                    <motion.img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full ring-4 ring-blue-50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring" }}
                    />
                    <div>
                      <motion.h4 
                        className="font-bold text-gray-900"
                        whileHover={{ color: "#3b82f6" }}
                      >
                        {review.name}
                      </motion.h4>
                      <motion.p 
                        className="text-sm text-gray-500"
                        whileHover={{ x: 3 }}
                      >
                        {review.role}
                      </motion.p>
                    </div>
                  </motion.div>

                 
                  <motion.div 
                    className="flex items-center gap-1 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {renderStars(review.rating)}
                    <motion.span 
                      className="text-sm font-semibold text-gray-700 ml-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {review.rating}
                    </motion.span>
                  </motion.div>

                  {/* Comment */}
                  <motion.p 
                    className="text-gray-700 text-sm leading-relaxed mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {review.comment}
                  </motion.p>

                  {/* Date */}
                  <motion.div
                    className="border-t pt-4"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.p 
                      className="text-xs text-gray-400"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      {review.date}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

       
        <motion.div 
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                if (scrollContainerRef.current) {
                  const cardWidth = scrollContainerRef.current.firstChild.offsetWidth + 24;
                  scrollContainerRef.current.scrollTo({
                    left: cardWidth * index,
                    behavior: "smooth",
                  });
                }
              }}
              className="w-2 h-2 rounded-full"
              animate={{
                scale: currentIndex === index ? 1.5 : 1,
                backgroundColor: currentIndex === index ? "#3b82f6" : "#d1d5db",
              }}
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default Reviews;