import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Exhibitions = () => {
  const [activeTab, setActiveTab] = useState('current');
  return <motion.div className="pt-24 min-h-screen" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }}>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20">
            {/* Abstract shapes */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/20 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl"></div>
          </div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Exhibitions
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light">
            Discover our curated collection of digital art exhibitions,
            showcasing the finest works from established and emerging artists.
          </p>
        </div>
      </section>
      {/* Tabs */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-900 rounded-full">
              <button onClick={() => setActiveTab('current')} className={`px-6 py-2 rounded-full text-sm transition-all ${activeTab === 'current' ? 'bg-amber-400 text-black font-medium' : 'text-gray-300'}`}>
                Current
              </button>
              <button onClick={() => setActiveTab('upcoming')} className={`px-6 py-2 rounded-full text-sm transition-all ${activeTab === 'upcoming' ? 'bg-amber-400 text-black font-medium' : 'text-gray-300'}`}>
                Upcoming
              </button>
              <button onClick={() => setActiveTab('past')} className={`px-6 py-2 rounded-full text-sm transition-all ${activeTab === 'past' ? 'bg-amber-400 text-black font-medium' : 'text-gray-300'}`}>
                Past
              </button>
            </div>
          </div>
          {/* Exhibition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitions[activeTab].map((exhibition, index) => <ExhibitionCard key={index} exhibition={exhibition} index={index} />)}
          </div>
        </div>
      </section>
    </motion.div>;
};
type Exhibition = {
  title: string;
  image: string;
  date: string;
  location: string;
  time: string;
  description: string;
  featured?: boolean;
  link: string;
};
const ExhibitionCard = ({
  exhibition,
  index
}: {
  exhibition: Exhibition;
  index: number;
}) => {
  return <motion.div className={`bg-gray-900 rounded-lg overflow-hidden ${exhibition.featured ? 'md:col-span-2' : ''}`} initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }}>
      <div className="aspect-video overflow-hidden">
        <img src={exhibition.image} alt={exhibition.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl mb-3">{exhibition.title}</h3>
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-gray-400">
            <CalendarIcon size={16} className="mr-2 text-amber-400" />
            <span>{exhibition.date}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPinIcon size={16} className="mr-2 text-amber-400" />
            <span>{exhibition.location}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <ClockIcon size={16} className="mr-2 text-amber-400" />
            <span>{exhibition.time}</span>
          </div>
        </div>
        <p className="text-gray-300 mb-6">{exhibition.description}</p>
        <Link to={exhibition.link} className="px-6 py-2 bg-transparent border border-amber-400 text-amber-400 rounded-full hover:bg-amber-400/10 transition-all duration-300 font-light tracking-wider text-sm">
          VIEW DETAILS
        </Link>
      </div>
    </motion.div>;
};
const exhibitions = {
  current: [{
    title: 'Digital Renaissance',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'Sept 15 - Oct 30, 2023',
    location: 'Main Gallery, Floor 2',
    time: '10:00 AM - 8:00 PM',
    description: 'Explore the rebirth of classical art themes through digital mediums in this groundbreaking exhibition.',
    featured: true,
    link: '/exhibition/digital-renaissance'
  }, {
    title: 'Neon Dreams',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'Sept 20 - Nov 15, 2023',
    location: 'East Wing Gallery',
    time: '11:00 AM - 7:00 PM',
    description: 'A vibrant exploration of urban nightlife through digital art, featuring works from 12 contemporary artists.',
    link: '/exhibition/neon-dreams'
  }, {
    title: 'Virtual Realities',
    image: 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'Aug 5 - Oct 10, 2023',
    location: 'Interactive Space, Floor 3',
    time: '12:00 PM - 9:00 PM',
    description: 'An immersive exhibition blurring the lines between physical and digital realms through interactive installations.',
    link: '/exhibition/virtual-realities'
  }],
  upcoming: [{
    title: 'Future Perspectives',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'Nov 10 - Dec 20, 2023',
    location: 'West Gallery',
    time: '10:00 AM - 6:00 PM',
    description: 'A forward-looking showcase of digital art exploring themes of technology, humanity, and the environment.',
    link: '/exhibition/future-perspectives'
  }, {
    title: 'Digital Expressions',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'Dec 5, 2023 - Jan 15, 2024',
    location: 'Main Gallery, Floor 1',
    time: '11:00 AM - 8:00 PM',
    description: 'Celebrating diverse voices in digital art with works from international emerging artists.',
    featured: true,
    link: '/exhibition/digital-expressions'
  }, {
    title: 'Algorithmic Beauty',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'Jan 20 - Mar 5, 2024',
    location: 'Technology Wing',
    time: '10:00 AM - 7:00 PM',
    description: 'Exploring the intersection of mathematics, algorithms, and art in the digital age.',
    link: '/exhibition/algorithmic-beauty'
  }],
  past: [{
    title: 'Digital Pioneers',
    image: 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'May 5 - July 15, 2023',
    location: 'Historic Gallery',
    time: '9:00 AM - 5:00 PM',
    description: 'A retrospective of early digital art from the 1980s and 1990s, featuring influential works that shaped the medium.',
    featured: true,
    link: '/exhibition/digital-pioneers'
  }, {
    title: 'Abstract Digitalism',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'Mar 10 - Apr 30, 2023',
    location: 'Modern Wing',
    time: '10:00 AM - 6:00 PM',
    description: 'Exploring non-representational forms and expressions in digital art mediums.',
    link: '/exhibition/abstract-digitalism'
  }, {
    title: 'Pixel Perfect',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'Jan 15 - Mar 1, 2023',
    location: 'Retro Gallery, Floor 3',
    time: '11:00 AM - 7:00 PM',
    description: 'A celebration of pixel art and its influence on modern digital aesthetics and gaming culture.',
    link: '/exhibition/pixel-perfect'
  }]
};