import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data/mock';
import { ArrowDown, Sparkles, Zap, Star } from 'lucide-react';

const PlayfulHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Animate title with bouncy effect
    tl.from(titleRef.current.children, {
      y: 60,
      opacity: 0,
      scale: 0.7,
      rotation: -5,
      duration: 0.7,
      stagger: 0.08,
      ease: 'elastic.out(1, 0.6)'
    });

    // Animate shapes
    shapesRef.current.forEach((shape, i) => {
      gsap.to(shape, {
        y: '+=30',
        rotation: i % 2 === 0 ? '+=15' : '-=15',
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFE5B4] via-[#FFD23F] to-[#FF6B35] flex items-center justify-center">
      {/* Playful floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={el => shapesRef.current[0] = el} className="absolute top-20 left-10 w-32 h-32 bg-[#00D4FF] rounded-full opacity-60"></div>
        <div ref={el => shapesRef.current[1] = el} className="absolute top-40 right-20 w-24 h-24 bg-[#FF6B35] rotate-45 opacity-70"></div>
        <div ref={el => shapesRef.current[2] = el} className="absolute bottom-32 left-1/4 w-40 h-40 border-8 border-[#9D4EDD] rounded-full opacity-50"></div>
        <div ref={el => shapesRef.current[3] = el} className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#06FFA5] rounded-lg rotate-12 opacity-60"></div>
        <div ref={el => shapesRef.current[4] = el} className="absolute bottom-20 right-10 w-36 h-36 border-8 border-[#FFD23F] rotate-45 opacity-50"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <div ref={titleRef} className="space-y-4 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-12 h-12 text-[#FF6B35]" />
            <Zap className="w-16 h-16 text-[#00D4FF]" />
            <Star className="w-12 h-12 text-[#9D4EDD]" />
          </div>
          
          <h1 className="text-8xl md:text-[12rem] font-black leading-none text-white drop-shadow-2xl">
            SUMAIYYA
          </h1>
          <h1 className="text-8xl md:text-[12rem] font-black leading-none" style={{ 
            WebkitTextStroke: '4px #000',
            WebkitTextFillColor: 'transparent'
          }}>
            PATEL
          </h1>
          
          <div className="mt-8">
            <div className="inline-block bg-black text-white px-12 py-6 text-3xl md:text-5xl font-bold transform -rotate-2 shadow-2xl">
              CREATIVE FRONTEND DEV
            </div>
          </div>
        </div>

        <p className="text-2xl md:text-3xl font-bold text-black mb-12 max-w-3xl mx-auto leading-relaxed">
          Making the web <span className="bg-white px-3 py-1 inline-block rotate-1">MOVE</span> with 
          <span className="bg-[#00D4FF] px-3 py-1 inline-block -rotate-1 ml-2">GSAP</span> + 
          <span className="bg-[#FF6B35] text-white px-3 py-1 inline-block rotate-2 ml-2">Three.js</span>
        </p>

        <div className="flex gap-6 justify-center items-center flex-wrap">
          <button className="px-12 py-6 bg-black text-white text-2xl font-black rounded-full hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-2xl">
            SEE MY WORK
          </button>
          <button className="px-12 py-6 bg-white text-black text-2xl font-black rounded-full border-4 border-black hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-2xl">
            LET'S TALK
          </button>
        </div>

        <div className="mt-24 animate-bounce">
          <ArrowDown className="w-16 h-16 mx-auto text-black" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default PlayfulHero;
