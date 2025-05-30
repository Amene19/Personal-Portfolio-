import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, IProject } from '../data/portfolioData';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-pixel mb-12 scanlines inline-block mx-auto">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="pixel-borders overflow-hidden group cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover pixel-art transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-xs font-pixel">Click to view details</p>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-sm font-pixel mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-secondary-light text-black text-[8px] px-2 py-1 font-pixel"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="bg-secondary-light text-black text-[8px] px-2 py-1 font-pixel">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="absolute inset-0 bg-black bg-opacity-80"
            onClick={() => {
              setSelectedProject(null);
              setCurrentImageIndex(0);
            }}
          ></div>
          
          <div className="relative bg-white dark:bg-gray-800 w-full max-w-4xl pixel-borders p-1 overflow-hidden">
            <button 
              className="absolute top-2 right-2 p-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(null);
                setCurrentImageIndex(0);
              }}
            >
              <X size={20} />
            </button>
            
            <div className="p-4 md:p-6">
              <div className="mb-6">
                <div className="relative aspect-video overflow-hidden pixel-borders">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover pixel-art"
                  />
                  
                  {/* Image Navigation */}
                  <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-4 bg-black bg-opacity-50">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} className="text-white" />
                    </button>
                    
                    <span className="text-white text-xs font-pixel">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </span>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-pixel mb-4">{selectedProject.title}</h3>
                
                <p className="text-xs mb-4 leading-relaxed font-pixel">
                  {selectedProject.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs font-pixel mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-secondary-light text-black text-[8px] px-2 py-1 font-pixel"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-button flex items-center text-[10px]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={12} className="mr-1" />
                    GitHub
                  </a>
                  
                  {selectedProject.demoUrl && (
                    <a 
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-button bg-accent flex items-center text-[10px]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;