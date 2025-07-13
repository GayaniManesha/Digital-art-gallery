import React from 'react';
import { Hero } from '../components/Hero';
import { Gallery } from '../components/Gallery';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export const Home = () => {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }}>
      <Hero />
      <Gallery />
      <FeaturedArtist />
    </motion.div>;
};
const FeaturedArtist = () => {
  return <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">
          Artist of the <span className="text-amber-400">Month</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="relative" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Elena Virtua" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-amber-400 rounded-lg -z-10"></div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <h3 className="text-amber-400 font-serif text-xl mb-2">
              Elena Virtua
            </h3>
            <h4 className="text-3xl font-serif mb-6">
              Digital Dreams Architect
            </h4>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Elena Virtua blends traditional art techniques with cutting-edge
              digital tools to create mesmerizing pieces that challenge
              perception. Her work explores the intersection of reality and
              digital consciousness, inviting viewers to question the boundaries
              of existence in our increasingly virtual world.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With over 15 years of experience in digital art creation, Elena
              has exhibited her work in major galleries across Europe and North
              America. Her pieces have been featured in prestigious collections
              and digital art festivals worldwide.
            </p>
            <Link to="/learn/digital-painting" className="px-8 py-3 bg-transparent border border-amber-400 text-amber-400 rounded-full hover:bg-amber-400/10 transition-all duration-300 font-light tracking-wider">
              EXPLORE ARTIST'S WORK
            </Link>
          </motion.div>
        </div>
      </div>
    </section>;
};