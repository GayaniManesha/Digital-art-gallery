import React, { useState, Fragment } from 'react';
import { ArtworkCard } from './ArtworkCard';
import { Link } from 'react-router-dom';
export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Digital Painting', '3D Art', 'Generative', 'Photography', 'Mixed Media'];
  const artworks = [{
    id: 1,
    title: 'Neon Dreams',
    artist: 'Elena Virtua',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Digital Painting',
    link: '/artwork/neon-dreams'
  }, {
    id: 2,
    title: 'Quantum Reflections',
    artist: 'Marcus Pixel',
    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: '3D Art',
    link: '/artwork/quantum-reflections'
  }, {
    id: 3,
    title: 'Ethereal Fragments',
    artist: 'Sophia Prism',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Generative',
    link: '/artwork/ethereal-fragments'
  }, {
    id: 4,
    title: 'Urban Symphony',
    artist: 'James Chroma',
    image: 'https://images.unsplash.com/photo-1614102073832-030967418971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Photography',
    link: '/artwork/urban-symphony'
  }, {
    id: 5,
    title: 'Cyber Awakening',
    artist: 'Liam Vector',
    image: 'https://images.unsplash.com/photo-1633218388467-539651dcf81a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Mixed Media',
    link: '/artwork/cyber-awakening'
  }, {
    id: 6,
    title: 'Celestial Harmony',
    artist: 'Aria Digital',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: '3D Art',
    link: '/artwork/celestial-harmony'
  }];
  const filteredArtworks = activeFilter === 'All' ? artworks : artworks.filter(artwork => artwork.category === activeFilter);
  return <section className="bg-black py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
          Featured <span className="text-amber-400">Exhibitions</span>
        </h2>
        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-5 py-2 rounded-full text-sm transition-all ${activeFilter === filter ? 'bg-amber-400 text-black font-medium' : 'bg-gray-900 text-gray-300 hover:bg-gray-800'}`}>
              {filter}
            </button>)}
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map(artwork => <ArtworkCard key={artwork.id} artwork={artwork} />)}
        </div>
        {/* More button */}
        <div className="mt-16 text-center">
          <Link to="/exhibitions" className="px-8 py-3 bg-transparent border border-amber-400 text-amber-400 rounded-full hover:bg-amber-400/10 transition-all duration-300 font-light tracking-wider">
            VIEW MORE ARTWORKS
          </Link>
        </div>
      </div>
    </section>;
};