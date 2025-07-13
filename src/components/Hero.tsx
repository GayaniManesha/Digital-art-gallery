import React from 'react';
import { Link } from 'react-router-dom';
export const Hero = () => {
  return <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-30">
          {/* Abstract shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-blue-700/20 blur-3xl animate-pulse" style={{
          animationDelay: '3.5s'
        }}></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
          Discover Timeless
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            Digital Masterpieces
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-xl md:text-2xl font-light mb-10">
          Where creativity meets technology in an immersive gallery experience
        </p>
        <Link to="/exhibitions" className="px-8 py-3 bg-transparent border border-amber-400 text-amber-400 rounded-full hover:bg-amber-400/10 transition-all duration-300 font-light tracking-wider">
          EXPLORE GALLERY
        </Link>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">SCROLL</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-amber-400 to-transparent"></div>
      </div>
    </section>;
};