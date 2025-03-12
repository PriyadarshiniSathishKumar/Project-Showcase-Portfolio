
import React, { useEffect, useRef } from 'react';
import { Code, Brush, Globe, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="opacity-0 animate-scale-in bg-card rounded-xl border p-6 hover-lift"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col h-full">
        <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
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
    
    const titleElement = document.querySelector('.about-title');
    const descElement = document.querySelector('.about-description');
    
    if (titleElement) observer.observe(titleElement);
    if (descElement) observer.observe(descElement);
    
    return () => {
      if (titleElement) observer.unobserve(titleElement);
      if (descElement) observer.unobserve(descElement);
    };
  }, []);

  const skills = [
    {
      icon: <Code size={24} className="text-primary" />,
      title: 'Development',
      description: 'Building responsive and accessible web applications with modern frameworks and best practices.',
      delay: 0.1
    },
    {
      icon: <Brush size={24} className="text-primary" />,
      title: 'Design',
      description: 'Creating beautiful, intuitive user interfaces with attention to detail and user experience.',
      delay: 0.2
    },
    {
      icon: <Globe size={24} className="text-primary" />,
      title: 'Deployment',
      description: 'Setting up CI/CD pipelines and deploying applications to cloud platforms for optimal performance.',
      delay: 0.3
    },
    {
      icon: <Zap size={24} className="text-primary" />,
      title: 'Optimization',
      description: 'Enhancing application performance, accessibility, and search engine optimization.',
      delay: 0.4
    }
  ];

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="about-title opacity-0 mb-6">About Me</h2>
            <div className="space-y-4">
              <p className="about-description opacity-0 text-lg">
                I'm a passionate developer focused on creating elegant, functional digital experiences.
                With a blend of technical expertise and design sensibility, I craft solutions that are both beautiful and performant.
              </p>
              <p className="about-description opacity-0 text-lg" style={{ animationDelay: '0.1s' }}>
                My approach is centered on simplicity and user experience, ensuring that every project
                I work on is intuitive, accessible, and delightful to use.
              </p>
              <p className="about-description opacity-0 text-lg" style={{ animationDelay: '0.2s' }}>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-card rounded-xl border overflow-hidden aspect-ratio-6/4">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Developer workspace"
                className="w-full h-full object-cover transition-transform duration-500 ease-apple hover:scale-105"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-center mb-12">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decorative element */}
      <div className="absolute top-1/2 left-1/2 w-full h-full max-w-4xl max-h-4xl -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full filter blur-3xl -z-10 animate-float"></div>
    </section>
  );
};

export default About;
