
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the container
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Apply subtle rotation based on mouse position
      containerRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 2}deg)
        rotateX(${y * -2}deg)
      `;
    };
    
    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      
      // Reset position when mouse leaves
      containerRef.current.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
      `;
    };
    
    const container = containerRef.current;
    
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 pointer-events-none" />
      
      <div 
        ref={containerRef}
        className="container mx-auto px-4 relative z-10 transition-transform duration-200 ease-apple"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-6 opacity-0 animate-fade-in">
              Portfolio Showcase
            </span>
          </div>
          
          <h1 className="opacity-0 animate-fade-in reveal-delay-1">
            Crafting Digital Experiences with Precision
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in reveal-delay-2">
            A collection of projects that showcase my passion for design and development
          </p>
          
          <div className="flex justify-center pt-8 opacity-0 animate-fade-in reveal-delay-3">
            <button 
              onClick={scrollToProjects}
              className="group relative overflow-hidden rounded-full bg-primary px-6 py-3 transition-all duration-300 ease-apple hover:bg-primary/90 hover:shadow-xl hover:translate-y-[-3px] active:translate-y-[0px]"
            >
              <span className="relative z-10 text-primary-foreground font-medium flex items-center">
                View Projects
                <ArrowDown className="ml-2 transition-transform duration-300 group-hover:translate-y-1" size={18} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in"></span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="opacity-50" size={24} />
      </div>
    </section>
  );
};

export default Hero;
