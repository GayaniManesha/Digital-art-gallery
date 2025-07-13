import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, BookOpenIcon, InfoIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Artists = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Digital Painting', '3D Art', 'Generative', 'Photography', 'Mixed Media'];
  const filteredArtists = filter === 'All' ? artists : artists.filter(artist => artist.specialty === filter);
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
            <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl"></div>
          </div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Digital Art Pioneers
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light">
            Learn about influential digital artists who have shaped this
            evolving medium
          </p>
        </div>
      </section>

      {/* Educational Disclaimer */}
      <section className="py-6 px-6 bg-gray-900/60">
        <div className="container mx-auto">
          <div className="flex items-start gap-4 bg-amber-400/10 border border-amber-400/30 rounded-lg p-4">
            <InfoIcon className="text-amber-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-amber-400 mb-1">
                Educational Resource
              </h3>
              <p className="text-gray-300 text-sm">
                This page features example profiles of digital artists for
                educational purposes. These profiles represent different styles
                and approaches in digital art, but are not meant to portray real
                individuals. Explore these examples to learn about various
                digital art techniques and specialties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center">
            Explore by <span className="text-amber-400">Technique</span>
          </h2>
          <div className="flex flex-wrap justify-center mb-16 gap-2">
            {categories.map(category => <button key={category} onClick={() => setFilter(category)} className={`px-5 py-2 rounded-full text-sm transition-all ${filter === category ? 'bg-amber-400 text-black font-medium' : 'bg-gray-900 text-gray-300 hover:bg-gray-800'}`}>
                {category}
              </button>)}
          </div>
          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredArtists.map((artist, index) => <ArtistCard key={index} artist={artist} index={index} />)}
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="py-16 px-6 bg-black">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center">
            Learn More About <span className="text-amber-400">Digital Art</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResourceCard title="History of Digital Art" description="Explore the evolution of digital art from the 1960s to present day, and how technology has shaped artistic expression." icon={<BookOpenIcon size={24} className="text-amber-400" />} link="/digital-art-history" />
            <ResourceCard title="Techniques & Tools" description="Discover the various software, hardware, and techniques used by digital artists to create stunning visual experiences." icon={<BookOpenIcon size={24} className="text-amber-400" />} link="/digital-art-techniques" />
            <ResourceCard title="Digital Art Communities" description="Connect with online communities where digital artists share their work, techniques, and inspiration." icon={<BookOpenIcon size={24} className="text-amber-400" />} link="/digital-art-communities" />
          </div>
        </div>
      </section>
    </motion.div>;
};
type Artist = {
  name: string;
  image: string;
  specialty: string;
  bio: string;
  technique: string;
  influence: string;
  link: string;
};
const ArtistCard = ({
  artist,
  index
}: {
  artist: Artist;
  index: number;
}) => {
  return <motion.div className="group" initial={{
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
      <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4]">
        <img src={artist.image} alt={`Example of ${artist.specialty} style`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex justify-between items-center">
              <span className="text-amber-400 font-light">
                {artist.specialty}
              </span>
              <Link to={artist.link} className="text-white hover:text-amber-400 transition-colors">
                <ExternalLinkIcon size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h3 className="font-serif text-2xl mb-2">{artist.name}</h3>
      <p className="text-gray-400 mb-4">{artist.specialty}</p>
      <p className="text-gray-300 mb-4">{artist.bio}</p>
      <div className="space-y-3 mt-4">
        <div>
          <span className="text-amber-400 text-sm">Technique: </span>
          <span className="text-gray-300 text-sm">{artist.technique}</span>
        </div>
        <div>
          <span className="text-amber-400 text-sm">Influence: </span>
          <span className="text-gray-300 text-sm">{artist.influence}</span>
        </div>
      </div>
      <Link to={artist.link} className="inline-block mt-6 px-6 py-2 bg-transparent border border-amber-400 text-amber-400 rounded-full hover:bg-amber-400/10 transition-all duration-300 font-light tracking-wider text-sm">
        LEARN MORE
      </Link>
    </motion.div>;
};
const ResourceCard = ({
  title,
  description,
  icon,
  link
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}) => {
  return <motion.div className="bg-gray-900 rounded-lg p-6 h-full flex flex-col" whileHover={{
    y: -5,
    transition: {
      duration: 0.2
    }
  }}>
      <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{description}</p>
      <Link to={link} className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors">
        Explore Resource <ExternalLinkIcon size={16} className="ml-2" />
      </Link>
    </motion.div>;
};
const artists = [{
  name: 'Digital Painting Showcase',
  image: 'https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: 'Digital Painting',
  bio: 'Digital painting combines traditional painting techniques with digital tools, creating artwork that simulates the appearance of traditional media.',
  technique: 'Uses digital brushes that mimic traditional media like oils, watercolors, and acrylics',
  influence: 'Traditional fine art painting techniques applied to digital canvas',
  link: '/learn/digital-painting'
}, {
  name: '3D Modeling & Rendering',
  image: 'https://images.unsplash.com/photo-1633259584604-afdc243122ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: '3D Art',
  bio: '3D digital art involves creating three-dimensional models and rendering them into 2D images or animations, often used in film, games, and visualization.',
  technique: 'Modeling, texturing, lighting, and rendering using specialized 3D software',
  influence: 'Sculpture, architecture, and cinema visual effects',
  link: '/learn/3d-art'
}, {
  name: 'Generative Art Systems',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: 'Generative',
  bio: 'Generative art uses algorithms, mathematical formulas, or autonomous systems to create artwork that evolves according to programmed parameters.',
  technique: 'Coding, algorithms, and sometimes AI to create artwork that can evolve or respond to inputs',
  influence: 'Mathematics, computer science, and systems theory',
  link: '/learn/generative-art'
}, {
  name: 'Digital Photography & Manipulation',
  image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: 'Photography',
  bio: 'Digital photography art combines traditional photography with digital manipulation techniques to create images that go beyond documentary representation.',
  technique: 'Digital cameras combined with photo manipulation software to enhance or transform images',
  influence: 'Traditional photography, surrealism, and collage techniques',
  link: '/learn/digital-photography'
}, {
  name: 'Mixed Media Digital Compositions',
  image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: 'Mixed Media',
  bio: 'Mixed media digital art combines multiple digital techniques and sometimes traditional media that has been digitized to create complex, layered compositions.',
  technique: 'Combining various digital tools with scanned traditional media elements',
  influence: 'Collage, assemblage, and experimental art forms',
  link: '/learn/mixed-media-digital'
}, {
  name: 'Architectural Visualization',
  image: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: '3D Art',
  bio: 'Architectural visualization uses 3D modeling and rendering to create photorealistic or stylized representations of architectural designs and spaces.',
  technique: 'Specialized architectural modeling software combined with rendering engines',
  influence: 'Architecture, interior design, and urban planning',
  link: '/learn/architectural-visualization'
}, {
  name: 'Pixel Art & Game Design',
  image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: 'Digital Painting',
  bio: 'Pixel art is a form of digital art created through the precise placement of pixels, often associated with retro gaming aesthetics but also used in contemporary design.',
  technique: 'Placing individual pixels to create images with limited color palettes',
  influence: 'Early video games, minimalism, and mosaic art',
  link: '/learn/pixel-art'
}, {
  name: 'Data Visualization Art',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: 'Generative',
  bio: 'Data visualization art transforms complex data sets into visual representations that are both informative and aesthetically compelling.',
  technique: 'Programming languages and data processing tools to visualize information in artistic ways',
  influence: 'Information design, statistics, and abstract art',
  link: '/learn/data-visualization-art'
}];