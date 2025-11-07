import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { portfolioData } from '../../data/mock';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Title animation - split text effect
    tl.from(titleRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power4.out'
    })
    .from(taglineRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .from(ctaRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.5');

    // Floating arrow animation
    gsap.to('.scroll-indicator', {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f10] to-[#0a0a0a]">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00ffcc] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#00d4ff] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div ref={titleRef}>
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-4 tracking-tight">
            <span className="block">{portfolioData.hero.name.split(' ')[0]}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ffcc]">
              {portfolioData.hero.name.split(' ')[1]}
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-[#00d4ff] font-light tracking-widest uppercase mb-8">
            {portfolioData.hero.title}
          </div>
        </div>

        <p ref={taglineRef} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          {portfolioData.hero.tagline}
        </p>

        <div ref={ctaRef} className="flex gap-4 justify-center items-center flex-wrap">
          <button
            onClick={scrollToContent}
            className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 hover:scale-105"
          >
            Explore My Work
          </button>
          <a
            href={`mailto:${portfolioData.hero.email}`}
            className="px-8 py-4 border-2 border-[#00d4ff] text-[#00d4ff] font-semibold rounded-lg hover:bg-[#00d4ff] hover:bg-opacity-10 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator cursor-pointer" onClick={scrollToContent}>
          <ArrowDown className="w-8 h-8 text-[#00d4ff]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
