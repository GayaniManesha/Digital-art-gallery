import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Exhibitions } from './pages/Exhibitions';
import { Artists } from './pages/Artists';
import { About } from './pages/About';
import { SearchResults } from './pages/SearchResults';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './components/ui/Toast';
export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <div className="bg-black min-h-screen text-white overflow-x-hidden">
            <Navbar onSearch={handleSearch} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exhibitions" element={<Exhibitions />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<SearchResults query={searchQuery} />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>;
}