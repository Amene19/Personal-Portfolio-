import React from 'react';
import { ArrowDown, Mail, Github } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: "url('/il_fullxfull.4807685781_4li2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        imageRendering: 'pixelated'
      }}
    >
      {/* Magical Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-accent-dark/20"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-primary-light/90 rounded-lg pixel-borders overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/50 to-primary-light/50 opacity-75"></div>
          <div className="relative w-full h-full bg-accent-dark/90 flex items-center justify-center">
            <div className="w-16 h-16 relative group-hover:animate-spin-slow">
              {/* Developer icon */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">
                {/* Terminal window */}
                <div className="col-span-4 row-span-1 bg-accent flex items-center px-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                {/* Code lines */}
                <div className="col-span-4 row-span-3 flex flex-col justify-between p-1">
                  <div className="w-3/4 h-1 bg-accent"></div>
                  <div className="w-1/2 h-1 bg-accent"></div>
                  <div className="w-2/3 h-1 bg-accent"></div>
                  <div className="w-1/4 h-1 bg-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-xl md:text-3xl font-pixel text-white mb-4 relative">
          <span className="text-accent">{'<'}</span>
          {aboutMe.name}
          <span className="text-accent">{'/>'}</span>
        </h1>
        
        <p className="text-xs md:text-sm font-pixel text-accent-light mb-2 max-w-lg mx-auto">
          {aboutMe.title}
        </p>
        
        <p className="text-xs md:text-sm font-pixel text-accent mb-8 max-w-lg mx-auto animate-pulse">
          Available for new opportunities
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <a 
            href="#projects" 
            className="pixel-button jiggle bg-accent/90 hover:bg-accent text-black text-xs font-pixel flex items-center backdrop-blur-sm"
          >
            <span>View My Work</span>
            <ArrowDown size={14} className="ml-2" />
          </a>
          
          <a 
            href="#contact" 
            className="pixel-button jiggle bg-primary-light/90 hover:bg-primary-light text-black text-xs font-pixel flex items-center backdrop-blur-sm"
          >
            <span>Contact Me</span>
            <Mail size={14} className="ml-2" />
          </a>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a 
            href="#about" 
            className="bounce text-white border-2 border-accent/80 p-2 rounded-full backdrop-blur-sm"
            aria-label="Scroll down"
          >
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;