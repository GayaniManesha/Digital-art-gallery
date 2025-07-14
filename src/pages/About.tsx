import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.div
      className="pt-24 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-amber-500/20 blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-blue-700/20 blur-3xl"></div>
          </div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              About ARTISTRY
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light">
            Dedicated to showcasing and preserving the finest digital art from
            around the world.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Our <span className="text-amber-400">Story</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2018 by a collective of digital artists and tech
                enthusiasts, ARTISTRY was born from a vision to create a
                dedicated space for digital art in an increasingly digital
                world.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                What began as a small online gallery has evolved into a global
                platform, showcasing works from over 500 artists across 40
                countries. Our physical gallery space, opened in 2021, allows
                visitors to experience digital art in immersive, thoughtfully
                designed environments.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, ARTISTRY stands at the forefront of the digital art
                revolution, bridging the gap between technology and traditional
                art appreciation, while fostering a community of creators and
                collectors passionate about the future of artistic expression.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577083552431-6e5fd01511c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="ARTISTRY Gallery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-amber-400 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Our <span className="text-amber-400">Mission</span>
          </h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            ARTISTRY is committed to elevating digital art as a respected medium
            in the contemporary art world. We aim to provide a platform where
            digital artists can showcase their work to a global audience, where
            art enthusiasts can discover new forms of artistic expression, and
            where the boundaries between technology and art continue to be
            explored.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-serif mb-4 text-amber-400">
                Discover
              </h3>
              <p className="text-gray-400">
                Explore the innovative works of digital artists pushing the
                boundaries of creativity and technology
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-serif mb-4 text-amber-400">Learn</h3>
              <p className="text-gray-400">
                Understand the techniques, tools, and concepts behind digital
                art creation and appreciation
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-serif mb-4 text-amber-400">
                Connect
              </h3>
              <p className="text-gray-400">
                Join a community of artists, collectors, and enthusiasts
                passionate about digital art
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
