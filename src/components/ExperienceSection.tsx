import React from 'react';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative scanlines">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-pixel mb-12">
          Experience & Education
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary-light transform -translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((item, index) => (
            <div 
              key={item.id}
              className={`mb-12 md:mb-16 relative ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              {/* Timeline marker */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary pixel-borders z-10 hidden md:block"></div>
              
              <div 
                className={`pixel-dust relative md:w-[calc(50%-20px)] ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className="pixel-borders p-4 relative">
                  <div className="flex items-start mb-3">
                    <div className="w-12 h-12 mr-3 pixel-borders overflow-hidden bg-accent-light flex items-center justify-center">
                      {item.isEducation ? (
                        <GraduationCap size={20} />
                      ) : (
                        <Briefcase size={20} />
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-pixel mb-1">{item.title}</h3>
                      <p className="text-xs font-pixel text-primary-light">{item.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Calendar size={12} className="mr-2" />
                    <span className="text-xs font-pixel">{item.period}</span>
                  </div>
                  
                  <p className="text-xs font-pixel leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;