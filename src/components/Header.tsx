import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-opacity-90 backdrop-blur-sm py-2' : 'py-4'
    } ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-pixel">
          <span className="text-primary-light">Pixel</span>
          <span className="text-accent-dark">Folio</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="text-xs font-pixel hover:text-primary transition-colors jiggle"
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-md pixel-borders bg-opacity-20 text-xs"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun size={16} className="text-yellow-300" />
            ) : (
              <Moon size={16} className="text-indigo-600" />
            )}
          </button>
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme} 
            className="p-2 mr-2 rounded-md pixel-borders bg-opacity-20"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun size={16} className="text-yellow-300" />
            ) : (
              <Moon size={16} className="text-indigo-600" />
            )}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md pixel-borders"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full py-4 px-2 shadow-lg bg-opacity-95 scanlines transition-all duration-300 pixel-borders border-t-2 border-b-2 border-black" 
          style={{ 
            backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)' 
          }}
        >
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="text-xs font-pixel py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;