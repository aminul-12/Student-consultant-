import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, Globe, Users, BrainCircuit } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Universities', path: '/universities' },
    { name: 'Scholarships', path: '/scholarships' },
  ];

  const countries = [
    { name: 'Canada', path: '/study/canada', flag: '🇨🇦' },
    { name: 'USA', path: '/study/usa', flag: '🇺🇸' },
    { name: 'Germany', path: '/study/germany', flag: '🇩🇪' },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary-600 text-white p-2 rounded-lg shadow-md">
              <Globe size={24} />
            </div>
            <div className="flex flex-col">
               <span className="font-bold text-lg text-gray-900 leading-none tracking-tight">GlobalStudy</span>
               <span className="text-[10px] text-primary-600 font-semibold tracking-wider uppercase">Consultancy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  isActive(link.path) ? 'text-primary-600' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Country Dropdown / Links */}
            <div className="flex gap-4 border-l border-gray-200 pl-4">
              {countries.map(c => (
                <Link key={c.name} to={c.path} className="text-xl hover:scale-110 transition-transform" title={`Study in ${c.name}`}>
                  {c.flag}
                </Link>
              ))}
            </div>

            <Link to="/ai-tools" className="flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full ml-2">
               <BrainCircuit size={16} /> AI Tools
            </Link>

            <Link to="/team" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-primary-600 ml-2">
               <Users size={16} /> Team
            </Link>

            <Link to="/contact">
              <Button size="sm" variant="primary">Free Consultation</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path) 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <div className="px-3 py-2">
               <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Destinations</div>
               <div className="flex gap-4">
                 {countries.map(c => (
                  <Link key={c.name} to={c.path} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 w-full justify-center">
                    <span className="text-xl">{c.flag}</span>
                    <span className="text-sm font-medium text-gray-700">{c.name}</span>
                  </Link>
                 ))}
               </div>
             </div>
             <Link to="/ai-tools" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-purple-600 bg-purple-50 mb-2">
               <div className="flex items-center gap-2">
                 <BrainCircuit size={18} /> AI Tools
               </div>
             </Link>
             <Link to="/team" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
               Project Team
             </Link>
             <div className="pt-4 px-3">
               <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button fullWidth>Free Consultation</Button>
               </Link>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};