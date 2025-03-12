
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="button-icon mb-8 group"
          >
            <ChevronUp size={20} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
          
          <div className="text-center">
            <div className="text-xl font-semibold mb-2">Portfolio</div>
            <p className="text-muted-foreground text-sm">
              Crafting meaningful digital experiences
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border w-full max-w-md text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
