import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data/mock';
import { ArrowDown, Sparkles, Zap, Star, Code2, Palette } from 'lucide-react';
import ScrollSection from './ScrollSection';
import '../styles/TextEffects.css';

const PlayfulHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const shapesRef = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const container = heroRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 15,
          y: e.clientY - 15,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      gsap.to(container, {
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 100,
        opacity: 0.5
      });

      const titleChars = titleRef.current ? Array.from(titleRef.current.children) : [];

      tl.from(titleChars, {
        y: 100,
        opacity: 0,
        scale: 0.5,
        rotation: -10,
        duration: 1,
        stagger: 0.05,
        ease: 'elastic.out(1, 0.5)'
      });

      shapesRef.current.forEach((shape, i) => {
        if (!shape) return;

        gsap.to(shape, {
          y: '+=80',
          x: i % 2 === 0 ? '+=40' : '-=40',
          duration: 3 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });

        gsap.to(shape, {
          rotation: i % 2 === 0 ? '+=360' : '-=360',
          duration: 10 + i * 2,
          repeat: -1,
          ease: 'none'
        });

        gsap.to(shape, {
          scale: 1.15,
          duration: 2 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      });
    }, container);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollSection className="min-h-screen">
      <div ref={heroRef} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFE5B4] via-[#FFD23F] to-[#FF6B35] flex items-center justify-center">
        {/* Custom cursor */}
        <div 
          ref={cursorRef}
          className="fixed w-8 h-8 rounded-full border-4 border-black pointer-events-none z-50 mix-blend-difference"
          style={{ opacity: 0.5 }}
        />

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 animate-grid" 
            style={{
              backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        {/* Playful floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large shapes */}
          <div ref={el => shapesRef.current[0] = el} className="absolute top-20 left-10 w-40 h-40 bg-[#00D4FF] rounded-full opacity-70 blur-sm"></div>
          <div ref={el => shapesRef.current[1] = el} className="absolute top-40 right-20 w-32 h-32 bg-[#FF6B35] rotate-45 opacity-80"></div>
          <div ref={el => shapesRef.current[2] = el} className="absolute bottom-32 left-1/4 w-48 h-48 border-8 border-[#9D4EDD] rounded-full opacity-60"></div>
          <div ref={el => shapesRef.current[3] = el} className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#06FFA5] rounded-lg rotate-12 opacity-70"></div>
          <div ref={el => shapesRef.current[4] = el} className="absolute bottom-20 right-10 w-44 h-44 border-8 border-[#FFD23F] rotate-45 opacity-60"></div>
          
          {/* Small accent shapes */}
          <div ref={el => shapesRef.current[5] = el} className="absolute top-60 left-1/2 w-16 h-16 bg-white rounded-full opacity-50"></div>
          <div ref={el => shapesRef.current[6] = el} className="absolute bottom-40 left-20 w-20 h-20 bg-black rounded-lg rotate-12 opacity-30"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 max-w-6xl">
          {/* Icon badges */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
            <div className="p-2 sm:p-3 md:p-4 bg-white rounded-full shadow-2xl animate-wiggle">
              <Sparkles className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-[#FF6B35]" />
            </div>
            <div className="p-3 sm:p-4 md:p-5 bg-white rounded-full shadow-2xl animate-pulse-scale">
              <Code2 className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-[#00D4FF]" />
            </div>
            <div className="p-2 sm:p-3 md:p-4 bg-white rounded-full shadow-2xl animate-wiggle" style={{ animationDelay: '0.5s' }}>
              <Palette className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-[#9D4EDD]" />
            </div>
          </div>

          {/* Title with split text effect */}
          <div ref={titleRef} className="mb-4 sm:mb-6 md:mb-8">
            <div className="flex justify-center gap-1 sm:gap-2 mb-2 sm:mb-4 flex-wrap">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-white title-shadow">S</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-white title-shadow">U</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-white title-shadow">M</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-white title-shadow">A</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-white title-shadow">I</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-white title-shadow">Y</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-white title-shadow">Y</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-white title-shadow">A</span>
            </div>
            <div className="flex justify-center gap-1 sm:gap-2 flex-wrap">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-transparent title-stroke">P</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-transparent title-stroke">A</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-transparent title-stroke">T</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-transparent title-stroke">E</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none text-transparent title-stroke">L</span>
            </div>
          </div>

          {/* Subtitle badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-4 sm:mb-6 md:mb-8">
            <div className="inline-block bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-black transform -rotate-2 shadow-2xl hover:rotate-0 hover:scale-110 transition-all duration-300">
              CREATIVE
            </div>
            <div className="inline-block bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-black transform rotate-2 shadow-2xl hover:rotate-0 hover:scale-110 transition-all duration-300 border-2 sm:border-3 md:border-4 border-black">
              FRONTEND
            </div>
            <div className="inline-block bg-[#00D4FF] text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-black transform -rotate-1 shadow-2xl hover:rotate-0 hover:scale-110 transition-all duration-300">
              DEVELOPER
            </div>
          </div>

          {/* Description with animated background */}
          <div className="relative inline-block mb-8 sm:mb-10 md:mb-12">
            <div className="absolute inset-0 bg-white opacity-20 blur-xl"></div>
            <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black max-w-3xl mx-auto leading-relaxed px-3 sm:px-4 md:px-6">
              Making the web <span className="bg-white px-2 sm:px-3 py-0.5 sm:py-1 inline-block rotate-1 shadow-lg">MOVE</span> with 
              <span className="bg-[#00D4FF] px-2 sm:px-3 py-0.5 sm:py-1 inline-block -rotate-1 ml-1 sm:ml-2 shadow-lg">GSAP</span> + 
              <span className="bg-[#FF6B35] text-white px-2 sm:px-3 py-0.5 sm:py-1 inline-block rotate-2 ml-1 sm:ml-2 shadow-lg">Three.js</span> + 
              <span className="bg-[#9D4EDD] text-white px-2 sm:px-3 py-0.5 sm:py-1 inline-block -rotate-1 ml-1 sm:ml-2 shadow-lg">React</span>
            </p>
          </div>

          
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center flex-wrap">
                <button 
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-black text-white text-lg sm:text-xl md:text-2xl font-black rounded-full hover:scale-105 sm:hover:scale-110 hover:rotate-2 sm:hover:rotate-3 transition-all duration-300 shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10">SEE MY WORK</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                </button>
                <a
                  href={`mailto:${portfolioData.hero.email}`}
                  className="group w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white text-black text-lg sm:text-xl md:text-2xl font-black rounded-full border-2 sm:border-3 md:border-4 border-black hover:scale-105 sm:hover:scale-110 hover:-rotate-2 sm:hover:-rotate-3 transition-all duration-300 shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10">LET'S TALK</span>
                  <div className="absolute inset-0 bg-[#FFD23F] transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                </a>
                </div>

                {/* Animated scroll indicator */}
          <div className="mt-24 cursor-pointer" onClick={scrollToAbout}>
            <div className="inline-flex flex-col items-center gap-2 animate-bounce">
              <div className="text-black font-bold text-lg">SCROLL</div>
              <ArrowDown className="w-12 h-12 text-black" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#fff" fillOpacity="0.3" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>


      </div>
    </ScrollSection>
  );
};

export default PlayfulHero;