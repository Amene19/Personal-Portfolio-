import React from 'react';
import { skills } from '../data/portfolioData';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-opacity-30 relative scanlines">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-pixel mb-12">
          Technical Skills
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.id}
                className="group"
              >
                <div className="aspect-square flex flex-col items-center justify-center p-4 pixel-borders hover:bg-opacity-80 transform transition-all group-hover:translate-y-[-5px] duration-300">
                  <div className="text-3xl mb-2 group-hover:animate-blink">
                    {skill.icon}
                  </div>
                  <p className="text-xs font-pixel text-center">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;