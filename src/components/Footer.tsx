
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black/50 backdrop-blur-md border-t border-white/10 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="button-icon mb-6 group bg-white/10 hover:bg-white/20 border border-white/20"
          >
            <ChevronUp size={20} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
          
          <div className="text-center">
            <p className="text-sm text-white/50">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
