
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-sm">DA</span>
            </div>
            <span className="text-white font-bold text-xl">DevAccuracy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors duration-200 hover:glow">
              Home
            </Link>
            <Link to="/product" className="text-slate-300 hover:text-white transition-colors duration-200 hover:glow">
              Product
            </Link>
            <Link to="/pricing" className="text-slate-300 hover:text-white transition-colors duration-200 hover:glow">
              Pricing
            </Link>
            <Link to="/documentation" className="text-slate-300 hover:text-white transition-colors duration-200 hover:glow">
              Docs
            </Link>
            <Link to="/blog" className="text-slate-300 hover:text-white transition-colors duration-200 hover:glow">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link to="/product" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors duration-200">
              Product
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors duration-200">
              Pricing
            </Link>
            <Link to="/documentation" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors duration-200">
              Docs
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-slate-300 hover:text-white transition-colors duration-200">
              Blog
            </Link>
            <div className="px-3 py-2">
              <button className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
