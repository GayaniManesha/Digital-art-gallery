import React, { useState } from 'react';
import { EyeIcon, HeartIcon, ShareIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
type Artwork = {
  id: number;
  title: string;
  artist: string;
  image: string;
  category: string;
  link: string;
};
type ArtworkCardProps = {
  artwork: Artwork;
};
export const ArtworkCard = ({
  artwork
}: ArtworkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className="group relative rounded-lg overflow-hidden transition-all duration-500" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Artwork Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img src={artwork.image} alt={artwork.title} className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} />
      </div>
      {/* Glassmorphism overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 backdrop-blur-sm`}>
        <h3 className="font-serif text-2xl mb-1">{artwork.title}</h3>
        <p className="text-amber-400 mb-4">{artwork.artist}</p>
        {/* Action buttons */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-400">{artwork.category}</span>
          <div className="flex space-x-3">
            <Link to={artwork.link} className="text-white hover:text-amber-400 transition-colors">
              <EyeIcon size={18} />
            </Link>
            <button className="text-white hover:text-amber-400 transition-colors">
              <HeartIcon size={18} />
            </button>
            <button className="text-white hover:text-amber-400 transition-colors">
              <ShareIcon size={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Card glow effect on hover */}
      <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={{
      boxShadow: '0 0 30px rgba(245, 158, 11, 0.2)'
    }}></div>
    </div>;
};