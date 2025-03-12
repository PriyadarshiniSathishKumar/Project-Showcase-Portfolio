
import React, { useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate animation delay based on index
  const animationDelay = `${0.1 + index * 0.1}s`;
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    cardRef.current.style.transform = `
      perspective(1000px)
      rotateY(${x * 8}deg)
      rotateX(${y * -8}deg)
      translateZ(10px)
    `;
  };
  
  // Reset transform on mouse leave
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
  };

  return (
    <div 
      ref={cardRef}
      className="opacity-0 animate-scale-in group w-full"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="relative overflow-hidden bg-card rounded-xl border hover-lift h-full">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 z-10",
            isHovered ? "opacity-100" : ""
          )} />
          
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full transform transition-transform duration-500 ease-apple group-hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, i) => (
              <span 
                key={i} 
                className="inline-block px-2 py-1 bg-secondary text-xs rounded-full transition-all duration-300 ease-apple"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <div className="flex items-center space-x-4 mt-auto">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-icon group inline-flex items-center space-x-1"
              >
                <ExternalLink size={16} />
                <span className="sr-only">View Project</span>
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-icon group inline-flex items-center space-x-1"
              >
                <Github size={16} />
                <span className="sr-only">View Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
