import React, { useState } from 'react';
import { ArtworkCard } from './ArtworkCard';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Digital Painting', '3D Art', 'Generative', 'Photography', 'Mixed Media'];
  const artworks = [
    {
      id: 1,
      title: 'Neon Dreams',
      artist: 'Elena Virtua',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Digital Painting',
      link: '/artwork/neon-dreams'
    },
    {
      id: 2,
      title: 'Quantum Reflections',
      artist: 'Marcus Pixel',
      image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: '3D Art',
      link: '/artwork/quantum-reflections'
    },
    {
      id: 3,
      title: 'Ethereal Fragments',
      artist: 'Sophia Prism',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Generative',
      link: '/artwork/ethereal-fragments'
    },
    {
      id: 4,
      title: 'Urban Symphony',
      artist: 'James Chroma',
      image: 'https://images.unsplash.com/photo-1614102073832-030967418971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Photography',
      link: '/artwork/urban-symphony'
    },
    {
      id: 5,
      title: 'Cyber Awakening',
      artist: 'Liam Vector',
      image: 'https://i.postimg.cc/vZy2HLT2/Chat-GPT-Image-Jul-14-2025-08-56-40-PM.png',
      category: 'Mixed Media',
      link: '/artwork/cyber-awakening'
    },
    {
      id: 6,
      title: 'Celestial Harmony',
      artist: 'Aria Digital',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: '3D Art',
      link: '/artwork/celestial-harmony'
    }
  ];

  const filteredArtworks = activeFilter === 'All'
    ? artworks
    : artworks.filter(artwork => artwork.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <motion.section
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-24 px-6 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-serif mb-12 text-center tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Featured <span className="text-amber-400 drop-shadow-lg">Exhibitions</span>
        </motion.h2>
        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 shadow-lg ${
                activeFilter === filter
                  ? 'bg-amber-400 text-black font-semibold scale-105'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.08, boxShadow: '0 0 0 2px #fbbf24' }}
              whileTap={{ scale: 0.97 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredArtworks.map(artwork => (
              <motion.div
                key={artwork.id}
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #fbbf24' }}
              >
                <ArtworkCard artwork={artwork} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* More button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            to="/exhibitions"
            className="px-8 py-3 bg-transparent border border-amber-400 text-amber-400 rounded-full hover:bg-amber-400/10 transition-all duration-300 font-light tracking-wider shadow-lg"
          >
            VIEW MORE ARTWORKS
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};