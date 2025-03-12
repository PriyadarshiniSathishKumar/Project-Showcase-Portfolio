
import React, { useState, useEffect, useRef } from 'react';

// Project data structure - you can easily add more projects here in the future
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
  },
  // You can add more projects here in the future by following the same format
  // Example template for adding a new project:
  /*
  {
    title: 'Project Title',
    description: 'Short description of your project',
    image: 'URL to your project image',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    liveUrl: 'https://your-live-url.com',
    githubUrl: 'https://github.com/your-username/your-repo'
  },
  */
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Set up intersection observer to detect when projects are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Set up refs for each project
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projectsData.length);
  }, []);
  
  // Function to scroll to a specific project
  const scrollToProject = (index: number) => {
    setActiveProject(index);
    projectRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <section id="projects" className="relative z-10 py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Project Navigation Dots - only visible if there are more than 1 project */}
        {projectsData.length > 1 && (
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col space-y-4">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-primary scale-150' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Projects Display */}
        <div className="space-y-32 md:space-y-64">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="min-h-[60vh] flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12"
              data-animate="true"
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative overflow-hidden rounded-xl border border-white/10">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-[300px] md:h-[400px] object-cover transform transition-transform duration-700 ease-apple group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                  <p className="text-lg text-white/70">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-primary/90 hover:bg-primary rounded-full transition-colors duration-300"
                      >
                        View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
