
import React from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import TechBackground from '@/components/TechBackground';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <TechBackground />
      <Navbar />
      <main className="pb-24">
        <header className="min-h-[50vh] flex flex-col justify-center items-center py-28 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50 mb-6">
            Project Showcase
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl text-white/70 mb-8">
            A collection of innovative digital solutions crafted with modern technologies
          </p>
        </header>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
