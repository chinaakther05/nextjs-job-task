"use client";

import React, { useState } from "react";
import { FaCalendarAlt, FaUser, FaArrowRight, FaRegHeart, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import NavLink from "../Buttons/NavLink";


const blogPosts = [
  {
    id: 1,
    title: "10 Tips to Improve Your Design Skills",
    excerpt: "Learn the best practices and shortcuts that professional designers use to improve their workflow and creativity.",
    author: "Alex Johnson",
    date: "Jan 10, 2026",
    image: "https://i.ibb.co.com/pj6MLsSK/People-Doing-Design-Thinking-as-a-Team-1024x576.webp",
    slug: "improve-design-skills",
    category: "Design",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Boost Your Marketing Strategy in 2026",
    excerpt: "Discover actionable tips and strategies to improve your marketing campaigns and increase your audience engagement.",
    author: "Maria Garcia",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&h=600&fit=crop",
    slug: "boost-marketing-strategy",
    category: "Marketing",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends, tools, and frameworks that are shaping the web development landscape in the coming years.",
    author: "David Chen",
    date: "Jan 18, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    slug: "future-of-web-development",
    category: "Technology",
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "Effective Branding Techniques for Small Businesses",
    excerpt: "Small businesses can use these branding techniques to create a strong presence and attract loyal customers.",
    author: "Sarah Williams",
    date: "Jan 20, 2026",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    slug: "branding-techniques-small-business",
    category: "Business",
    readTime: "6 min read",
  },
];

const BlogSection = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ["All", "Design", "Marketing", "Technology", "Business"];

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
    hidden: { y: 50, opacity: 0 },
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
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleLike = (postId) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const filteredPosts = activeFilter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <section 
      ref={sectionRef}
      className="py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
    
      <motion.div 
        className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"
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
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={sectionInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4"
            whileHover={{ scale: 1.1 }}
          >
            Latest Articles
          </motion.span>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Blog</span>
          </h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Stay updated with the latest news, tips, and trends from industry experts.
          </motion.p>
        </motion.div>

        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: activeFilter === category 
                  ? "0 10px 25px -5px rgba(59, 130, 246, 0.5)" 
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                custom={index}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl h-full flex flex-col"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      variants={imageVariants}
                      initial="initial"
                      whileHover="hover"
                      className="h-full w-full"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                   
                    <motion.span 
                      className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {post.category}
                    </motion.span>
                    
                  
                    <motion.button
                      onClick={() => handleLike(post.id)}
                      className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {likedPosts.includes(post.id) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart className="text-gray-600" />
                      )}
                    </motion.button>
                    
                   
                    <motion.div 
                      className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, x: 5 }}
                    >
                      {post.readTime}
                    </motion.div>
                  </div>

                 
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-3 line-clamp-2"
                        whileHover={{ color: "#3b82f6" }}
                      >
                        {post.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 text-sm leading-relaxed line-clamp-3"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {post.excerpt}
                      </motion.p>
                    </div>

                   
                    <div className="mt-auto pt-4 border-t">
                      <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                        <motion.div 
                          className="flex items-center gap-2"
                          whileHover={{ x: 3 }}
                        >
                          <FaUser className="text-gray-400" />
                          <span className="font-medium">{post.author}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2"
                          whileHover={{ x: -3 }}
                        >
                          <FaCalendarAlt className="text-gray-400" />
                          <span>{post.date}</span>
                        </motion.div>
                      </div>

                      
                      <motion.a
                        href={`/blog/${post.slug}`}
                        className="group flex items-center justify-between text-blue-600 font-semibold"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read Article</span>
                        <motion.div
                          className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100"
                          whileHover={{ rotate: 45 }}
                          transition={{ type: "spring" }}
                        >
                          <FaArrowRight />
                        </motion.div>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                "0 20px 40px -10px rgba(59, 130, 246, 0.6)",
                "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{
              boxShadow: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
          >
            <NavLink href={'/products'}>View All Articles</NavLink>
           
            
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <FaArrowRight />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;