import React from 'react';
import { FileDown } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-pixel mb-12 scanlines inline-block mx-auto">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Pixel Art Portrait */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 pixel-borders overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Developer Portrait" 
                className="w-full h-full object-cover pixel-art"
              />
            </div>
          </div>
          
          {/* Bio */}
          <div className="md:col-span-2">
            <div className="pixel-borders p-6 bg-opacity-30 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary-light pixel-borders"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-accent pixel-borders"></div>
              
              <p className="text-xs leading-relaxed mb-4 font-pixel">
                {aboutMe.bio}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
                <div>
                  <p className="text-xs mb-1 font-pixel">
                    <span className="text-primary-light">Location:</span> {aboutMe.location}
                  </p>
                  <p className="text-xs font-pixel">
                    <span className="text-primary-light">Email:</span> {aboutMe.email}
                  </p>
                </div>
                
                <a 
                  href={aboutMe.resumeUrl}
                  className="pixel-button text-xs font-pixel flex items-center"
                >
                  <FileDown size={14} className="mr-2" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;