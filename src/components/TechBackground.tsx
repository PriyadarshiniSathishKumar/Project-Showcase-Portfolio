
import React, { useEffect, useRef } from 'react';

// List of tech-related symbols, brackets, and keywords to display in the background
const techSymbols = [
  '{', '}', '()', '=>', '[]', '<>', ';', 'const', 'let', 'function', 'return', 
  'import', 'export', 'class', 'interface', 'type', 'async', 'await', 'promise', 
  'component', 'useState', 'useEffect', 'props', 'render', 'map', 'filter', 'reduce',
  '&&', '||', '===', '!==', 'null', 'undefined', 'true', 'false', '<div>', '</div>',
  '<React.Fragment>', '</React.Fragment>', '<app>', '</app>', '<html>', '</html>'
];

const TechBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear any existing symbols
    container.innerHTML = '';
    
    // Create randomly positioned code symbols
    for (let i = 0; i < 60; i++) {
      const symbol = document.createElement('div');
      const randomSymbol = techSymbols[Math.floor(Math.random() * techSymbols.length)];
      
      // Calculate random positions and animation properties
      const xPos = Math.random() * containerWidth;
      const size = Math.random() * 1.5 + 0.5; // Size between 0.5 and 2em
      const opacity = Math.random() * 0.35 + 0.1; // Opacity between 0.1 and 0.45
      const animationDuration = Math.random() * 25 + 15; // Duration between 15 and 40s
      const animationDelay = Math.random() * 5; // Delay between 0 and 5s
      
      // Apply styles
      symbol.textContent = randomSymbol;
      symbol.className = 'absolute text-primary/30 whitespace-nowrap animate-code-rain';
      symbol.style.left = `${xPos}px`;
      symbol.style.top = '-20px';
      symbol.style.fontSize = `${size}em`;
      symbol.style.opacity = `${opacity}`;
      symbol.style.animationDuration = `${animationDuration}s`;
      symbol.style.animationDelay = `${animationDelay}s`;
      
      container.appendChild(symbol);
    }
    
    // Add floating orbs
    for (let i = 0; i < 6; i++) {
      const orb = document.createElement('div');
      const size = Math.random() * 150 + 50; // Size between 50 and 200px
      const xPos = Math.random() * containerWidth;
      const yPos = Math.random() * containerHeight;
      const animationDuration = Math.random() * 10 + 10; // Duration between 10 and 20s
      
      orb.className = 'absolute rounded-full animate-pulse-glow';
      orb.style.width = `${size}px`;
      orb.style.height = `${size}px`;
      orb.style.left = `${xPos}px`;
      orb.style.top = `${yPos}px`;
      orb.style.background = 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.05) 70%, rgba(99,102,241,0) 100%)';
      orb.style.animationDuration = `${animationDuration}s`;
      
      container.appendChild(orb);
    }
    
    // Add orbiting nodes
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    
    for (let i = 0; i < 3; i++) {
      const orbit = document.createElement('div');
      const radius = Math.random() * 100 + 100; // Radius between 100 and 200px
      const animationDuration = Math.random() * 10 + 20; // Duration between 20 and 30s
      
      orbit.className = 'absolute rounded-full w-2 h-2 bg-primary/50 animate-orbit';
      orbit.style.left = `${centerX}px`;
      orbit.style.top = `${centerY}px`;
      orbit.style.transform = `translateX(${radius}px)`;
      orbit.style.animationDuration = `${animationDuration}s`;
      
      container.appendChild(orbit);
    }
    
    // Clean up on component unmount
    return () => {
      container.innerHTML = '';
    };
  }, []);
  
  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden z-[-1] opacity-60">
      {/* Content will be generated dynamically via JavaScript */}
    </div>
  );
};

export default TechBackground;
