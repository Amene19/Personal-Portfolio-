import React, { useState } from 'react';
import { Send, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend or email service
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-pixel mb-12 scanlines inline-block mx-auto">
          Contact Me
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <div className="pixel-borders p-6">
              <h3 className="text-sm font-pixel mb-4">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-xs font-pixel mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-xs font-pixel pixel-borders bg-transparent focus:outline-none"
                    placeholder="Enter your name..."
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-xs font-pixel mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-xs font-pixel pixel-borders bg-transparent focus:outline-none"
                    placeholder="Enter your email..."
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-pixel mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 text-xs font-pixel pixel-borders bg-transparent focus:outline-none resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="pixel-button w-full py-3 flex items-center justify-center text-xs font-pixel pulse"
                >
                  <Send size={14} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="pixel-borders p-6 mb-6">
              <h3 className="text-sm font-pixel mb-4">Contact Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail size={16} className="mr-3 text-primary-light" />
                  <div>
                    <p className="text-xs font-pixel mb-1">Email</p>
                    <a href={`mailto:${aboutMe.email}`} className="text-xs font-pixel hover:text-primary-light transition-colors">
                      {aboutMe.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={16} className="mr-3 text-primary-light" />
                  <div>
                    <p className="text-xs font-pixel mb-1">Phone</p>
                    <a href="tel:+11234567890" className="text-xs font-pixel hover:text-primary-light transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-lg mr-3 text-primary-light">📍</div>
                  <div>
                    <p className="text-xs font-pixel mb-1">Location</p>
                    <p className="text-xs font-pixel">
                      {aboutMe.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pixel-borders p-6">
              <h3 className="text-sm font-pixel mb-4">Connect With Me</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 pixel-borders hover:bg-primary-light hover:text-white transition-colors jiggle"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 pixel-borders hover:bg-primary-light hover:text-white transition-colors jiggle"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                
                <a 
                  href={`mailto:${aboutMe.email}`}
                  className="p-3 pixel-borders hover:bg-primary-light hover:text-white transition-colors jiggle"
                  aria-label="Email Me"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;