import React from 'react';
import { Heart } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t-2 border-primary-light relative scanlines">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex justify-center space-x-4">
          <a href="#home" className="text-xs font-pixel hover:text-primary-light transition-colors">
            Home
          </a>
          <a href="#about" className="text-xs font-pixel hover:text-primary-light transition-colors">
            About
          </a>
          <a href="#projects" className="text-xs font-pixel hover:text-primary-light transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-xs font-pixel hover:text-primary-light transition-colors">
            Contact
          </a>
        </div>
        
        <p className="text-xs font-pixel flex items-center justify-center">
          &copy; {currentYear} {aboutMe.name}
          <span className="inline-block mx-2">
            <Heart size={12} className="text-error animate-bounce" />
          </span>
          Made with pixel love
        </p>
      </div>
    </footer>
  );
};

export default Footer;