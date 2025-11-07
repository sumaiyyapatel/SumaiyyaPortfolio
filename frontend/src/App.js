import React, { useEffect, useState } from 'react';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import FibonacciMenu from './components/FibonacciMenu';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import WorkSection from './components/sections/WorkSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll setup
    const lenisScript = document.createElement('script');
    lenisScript.innerHTML = `
      // Smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth';
    `;
    document.body.appendChild(lenisScript);

    // Loading animation
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 0 },
        ease: 'power3.inOut'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-[#00d4ff] border-opacity-20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[#00d4ff] rounded-full animate-spin"></div>
          </div>
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ffcc]">
            Loading Experience...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App bg-[#0a0a0a] overflow-x-hidden">
      {/* Fibonacci Menu */}
      <FibonacciMenu onNavigate={handleNavigate} />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ExperienceSection />
      <GallerySection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#0f0f10] border-t border-[#00d4ff] border-opacity-20 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Sumaiyya Patel. Crafted with <span className="text-[#00d4ff]">GSAP</span>, <span className="text-[#00ffcc]">Three.js</span> & <span className="text-white">React</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed & Developed with passion for interactive experiences
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
