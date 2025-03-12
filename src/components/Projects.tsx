
import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

// Sample project data
const projectsData = [
  {
    title: 'E-commerce Dashboard',
    description: 'A modern, responsive dashboard for managing online store inventory and analytics.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Travel Companion App',
    description: 'An application to discover, plan and share travel experiences with friends and family.',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'GraphQL', 'Prisma'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Fitness Tracker',
    description: 'A cross-platform application to track workouts, nutrition, and fitness progress.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    technologies: ['React Native', 'Redux', 'Firebase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Smart Home Control Panel',
    description: 'A beautiful interface for controlling smart home devices with voice commands and automation.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Vue.js', 'Node.js', 'MQTT'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    const titleElement = document.querySelector('.projects-title');
    const descElement = document.querySelector('.projects-description');
    
    if (titleElement) observer.observe(titleElement);
    if (descElement) observer.observe(descElement);
    
    return () => {
      if (titleElement) observer.unobserve(titleElement);
      if (descElement) observer.unobserve(descElement);
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="projects-title opacity-0 mb-4">Featured Projects</h2>
          <p className="projects-description opacity-0 text-lg text-muted-foreground">
            A selection of my most recent and impactful work, showcasing a range of skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-full filter blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent rounded-full filter blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default Projects;
