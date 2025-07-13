import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, XCircleIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
type SearchResultsProps = {
  query: string;
};
export const SearchResults = ({
  query
}: SearchResultsProps) => {
  // Simulate search results based on the query
  const getResults = (searchQuery: string) => {
    if (!searchQuery) return {
      artworks: [],
      artists: [],
      exhibitions: []
    };
    const normalizedQuery = searchQuery.toLowerCase();
    // Filter results that match the query
    const matchedArtworks = allArtworks.filter(artwork => artwork.title.toLowerCase().includes(normalizedQuery) || artwork.artist.toLowerCase().includes(normalizedQuery) || artwork.category.toLowerCase().includes(normalizedQuery));
    const matchedArtists = allArtists.filter(artist => artist.name.toLowerCase().includes(normalizedQuery) || artist.specialty.toLowerCase().includes(normalizedQuery));
    const matchedExhibitions = allExhibitions.filter(exhibition => exhibition.title.toLowerCase().includes(normalizedQuery) || exhibition.description.toLowerCase().includes(normalizedQuery));
    return {
      artworks: matchedArtworks,
      artists: matchedArtists,
      exhibitions: matchedExhibitions
    };
  };
  const results = getResults(query);
  const hasResults = results.artworks.length > 0 || results.artists.length > 0 || results.exhibitions.length > 0;
  return <motion.div className="pt-32 min-h-screen px-6 pb-24" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <SearchIcon size={24} className="text-amber-400 mr-3" />
          <h1 className="text-2xl md:text-3xl font-serif">
            Search Results for:{' '}
            <span className="text-amber-400">"{query}"</span>
          </h1>
        </div>
        {!query && <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Please enter a search term to find artworks, artists, or
              exhibitions.
            </p>
          </div>}
        {query && !hasResults && <div className="text-center py-12">
            <XCircleIcon size={48} className="mx-auto text-gray-600 mb-4" />
            <h2 className="text-xl font-serif mb-2">No results found</h2>
            <p className="text-gray-400">
              Try different keywords or browse our collections.
            </p>
          </div>}
        {/* Artworks Results */}
        {results.artworks.length > 0 && <section className="mb-16">
            <h2 className="text-2xl font-serif mb-6 border-b border-gray-800 pb-2">
              Artworks{' '}
              <span className="text-gray-400 text-lg">
                ({results.artworks.length})
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.artworks.map((artwork, index) => <motion.div key={index} className="bg-gray-900 rounded-lg overflow-hidden" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                  <div className="aspect-square overflow-hidden">
                    <img src={artwork.image} alt={artwork.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-xl mb-1">{artwork.title}</h3>
                    <p className="text-amber-400 mb-2">{artwork.artist}</p>
                    <p className="text-sm text-gray-400">{artwork.category}</p>
                  </div>
                </motion.div>)}
            </div>
          </section>}
        {/* Artists Results */}
        {results.artists.length > 0 && <section className="mb-16">
            <h2 className="text-2xl font-serif mb-6 border-b border-gray-800 pb-2">
              Artists{' '}
              <span className="text-gray-400 text-lg">
                ({results.artists.length})
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.artists.map((artist, index) => <motion.div key={index} className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg">{artist.name}</h3>
                    <p className="text-amber-400 text-sm">{artist.specialty}</p>
                  </div>
                </motion.div>)}
            </div>
          </section>}
        {/* Exhibitions Results */}
        {results.exhibitions.length > 0 && <section>
            <h2 className="text-2xl font-serif mb-6 border-b border-gray-800 pb-2">
              Exhibitions{' '}
              <span className="text-gray-400 text-lg">
                ({results.exhibitions.length})
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {results.exhibitions.map((exhibition, index) => <motion.div key={index} className="bg-gray-900 rounded-lg overflow-hidden" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 aspect-video md:aspect-auto">
                      <img src={exhibition.image} alt={exhibition.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 md:w-2/3">
                      <h3 className="font-serif text-xl mb-2">
                        {exhibition.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        {exhibition.date}
                      </p>
                      <p className="text-gray-300 text-sm line-clamp-3">
                        {exhibition.description}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </section>}
        {/* Navigation */}
        <div className="mt-16 flex justify-center">
          <Link to="/" className="px-8 py-3 bg-transparent border border-amber-400 text-amber-400 rounded-full hover:bg-amber-400/10 transition-all duration-300 font-light tracking-wider">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </motion.div>;
};
// Sample data for search
const allArtworks = [{
  id: 1,
  title: 'Neon Dreams',
  artist: 'Elena Virtua',
  image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Digital Painting'
}, {
  id: 2,
  title: 'Quantum Reflections',
  artist: 'Marcus Pixel',
  image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: '3D Art'
}, {
  id: 3,
  title: 'Ethereal Fragments',
  artist: 'Sophia Prism',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Generative'
}, {
  id: 4,
  title: 'Urban Symphony',
  artist: 'James Chroma',
  image: 'https://images.unsplash.com/photo-1614102073832-030967418971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Photography'
}, {
  id: 5,
  title: 'Cyber Awakening',
  artist: 'Liam Vector',
  image: 'https://images.unsplash.com/photo-1633218388467-539651dcf81a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Mixed Media'
}, {
  id: 6,
  title: 'Celestial Harmony',
  artist: 'Aria Digital',
  image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: '3D Art'
}, {
  id: 7,
  title: 'Digital Dystopia',
  artist: 'Noah Glitch',
  image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Generative'
}, {
  id: 8,
  title: 'Fractured Reality',
  artist: 'Maya Render',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'Photography'
}];
const allArtists = [{
  name: 'Elena Virtua',
  image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: 'Digital Painting'
}, {
  name: 'Marcus Pixel',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: '3D Art'
}, {
  name: 'Sophia Prism',
  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: 'Generative'
}, {
  name: 'James Chroma',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: 'Photography'
}, {
  name: 'Liam Vector',
  image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: 'Mixed Media'
}, {
  name: 'Aria Digital',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  specialty: '3D Art'
}];
const allExhibitions = [{
  title: 'Digital Renaissance',
  image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  date: 'Sept 15 - Oct 30, 2023',
  description: 'Explore the rebirth of classical art themes through digital mediums in this groundbreaking exhibition.'
}, {
  title: 'Neon Dreams',
  image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  date: 'Sept 20 - Nov 15, 2023',
  description: 'A vibrant exploration of urban nightlife through digital art, featuring works from 12 contemporary artists.'
}, {
  title: 'Virtual Realities',
  image: 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  date: 'Aug 5 - Oct 10, 2023',
  description: 'An immersive exhibition blurring the lines between physical and digital realms through interactive installations.'
}, {
  title: 'Future Perspectives',
  image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  date: 'Nov 10 - Dec 20, 2023',
  description: 'A forward-looking showcase of digital art exploring themes of technology, humanity, and the environment.'
}, {
  title: 'Digital Expressions',
  image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  date: 'Dec 5, 2023 - Jan 15, 2024',
  description: 'Celebrating diverse voices in digital art with works from international emerging artists.'
}];