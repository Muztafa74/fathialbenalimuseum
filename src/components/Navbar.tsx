import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <Landmark className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">متحف فتحي البنعلي</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active font-bold' : ''}`}>
              الرئيسية
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active font-bold' : ''}`}>
              عن المتحف
            </NavLink>
            <NavLink to="/collections" className={({ isActive }) => `nav-link ${isActive ? 'active font-bold' : ''}`}>
              المقتنيات
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active font-bold' : ''}`}>
              اتصل بنا
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-2 mt-2 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                عن المتحف
              </NavLink>
              <NavLink 
                to="/collections" 
                className={({ isActive }) => `nav-link ${isActive ? 'active font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                المقتنيات
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;