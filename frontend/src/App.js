import React, { useEffect, useState } from 'react';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PlayfulMenu from './components/PlayfulMenu';
import PlayfulHero from './components/PlayfulHero';
import InteractiveAbout from './components/InteractiveAbout';
import BoldProjects from './components/BoldProjects';
import PlayfulSkills from './components/PlayfulSkills';
import FunContact from './components/FunContact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#FFD23F] via-[#FF6B35] to-[#00D4FF] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-8xl font-black text-white mb-8 animate-bounce">
            🚀
          </div>
          <div className="text-5xl font-black text-white">
            LOADING AWESOMENESS...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <PlayfulMenu />
      
      <PlayfulHero />
      
      <div id="about">
        <InteractiveAbout />
      </div>
      
      <div id="work">
        <BoldProjects />
      </div>
      
      <div id="skills">
        <PlayfulSkills />
      </div>
      
      <div id="contact">
        <FunContact />
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-3xl font-black mb-4">
            Made with ❤️, GSAP & lots of ☕
          </p>
          <p className="text-xl font-bold text-gray-400">
            © 2025 SUMAIYYA PATEL - Let's create something AMAZING together!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
