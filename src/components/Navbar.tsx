import React, { useEffect, useState } from 'react';
import { SearchIcon, MenuIcon, XIcon, UserIcon, LogOutIcon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthModal } from './auth/AuthModal';
import { useAuth } from '../context/AuthContext';
import { useToast } from './ui/Toast';
type NavbarProps = {
  onSearch: (query: string) => void;
};
export const Navbar = ({
  onSearch
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<'login' | 'signup'>('login');
  const navigate = useNavigate();
  const location = useLocation();
  const {
    user,
    isAuthenticated,
    logout
  } = useAuth();
  const {
    showToast
  } = useToast();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
      navigate('/search');
      setSearchOpen(false);
    }
  };
  const openLoginModal = () => {
    setAuthModalView('login');
    setAuthModalOpen(true);
  };
  const openSignupModal = () => {
    setAuthModalView('signup');
    setAuthModalOpen(true);
  };
  const handleLogout = () => {
    logout();
    showToast('Successfully logged out', 'success');
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <motion.h1 className="text-2xl font-serif tracking-wider text-white" whileHover={{
            scale: 1.05
          }} transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10
          }}>
              <span className="text-amber-400">ART</span>ISTRY
            </motion.h1>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="HOME" />
          <NavLink to="/exhibitions" label="EXHIBITIONS" />
          <NavLink to="/artists" label="ARTISTS" />
          <NavLink to="/about" label="ABOUT" />
          <button className="ml-4 text-white hover:text-amber-400 transition-colors" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
            <SearchIcon size={20} />
          </button>
          {isAuthenticated ? <div className="relative group">
              <button className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors">
                <UserIcon size={20} />
                <span>{user?.name}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-amber-400 rounded-md transition-colors">
                    <LogOutIcon size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div> : <div className="flex items-center space-x-4">
              <button onClick={openLoginModal} className="text-white hover:text-amber-400 transition-colors">
                Log In
              </button>
              <button onClick={openSignupModal} className="px-4 py-1 bg-amber-400 text-black rounded-full hover:bg-amber-500 transition-colors">
                Sign Up
              </button>
            </div>}
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-white hover:text-amber-400 transition-colors" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
            <SearchIcon size={20} />
          </button>
          {isAuthenticated ? <button className="text-white hover:text-amber-400 transition-colors" aria-label="User menu">
              <UserIcon size={20} />
            </button> : <button onClick={openLoginModal} className="text-white hover:text-amber-400 transition-colors" aria-label="Login">
              <UserIcon size={20} />
            </button>}
          <button className="text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Search Overlay */}
      {searchOpen && <motion.div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg p-4 border-t border-gray-800" initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} transition={{
      duration: 0.2
    }}>
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto relative">
            <input type="text" placeholder="Search for artists, exhibitions, or artworks..." value={searchValue} onChange={e => setSearchValue(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded-full py-3 px-6 pr-12 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" autoFocus />
            <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400" aria-label="Submit search">
              <SearchIcon size={20} />
            </button>
          </form>
        </motion.div>}
      {/* Mobile Menu */}
      {mobileMenuOpen && <motion.div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 p-5 border-t border-gray-800" initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} transition={{
      duration: 0.3
    }}>
          <nav className="flex flex-col space-y-4">
            <MobileNavLink to="/" label="HOME" />
            <MobileNavLink to="/exhibitions" label="EXHIBITIONS" />
            <MobileNavLink to="/artists" label="ARTISTS" />
            <MobileNavLink to="/about" label="ABOUT" />
            {isAuthenticated ? <button onClick={handleLogout} className="flex items-center gap-2 text-lg font-light tracking-wider text-white hover:text-amber-400 transition-colors">
                <LogOutIcon size={18} />
                <span>LOGOUT</span>
              </button> : <div className="flex flex-col space-y-4 pt-4 border-t border-gray-800">
                <button onClick={openLoginModal} className="text-lg font-light tracking-wider text-white hover:text-amber-400 transition-colors">
                  LOG IN
                </button>
                <button onClick={openSignupModal} className="px-6 py-2 bg-amber-400 text-black rounded-full hover:bg-amber-500 transition-colors text-center">
                  SIGN UP
                </button>
              </div>}
          </nav>
        </motion.div>}
      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} initialView={authModalView} />
    </header>;
};
const NavLink = ({
  to,
  label
}: {
  to: string;
  label: string;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return <Link to={to} className="relative group">
      <span className={`tracking-wider font-light ${isActive ? 'text-amber-400' : 'text-white'} group-hover:text-amber-400 transition-colors`}>
        {label}
      </span>
      <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400 origin-left" initial={{
      scaleX: isActive ? 1 : 0
    }} animate={{
      scaleX: isActive ? 1 : 0
    }} whileHover={{
      scaleX: 1
    }} transition={{
      duration: 0.3
    }} />
    </Link>;
};
const MobileNavLink = ({
  to,
  label
}: {
  to: string;
  label: string;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return <Link to={to} className={`text-lg font-light tracking-wider ${isActive ? 'text-amber-400' : 'text-white'} hover:text-amber-400 transition-colors`}>
      {label}
    </Link>;
};