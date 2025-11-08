import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/mock';
import { Sparkles, Zap, Code2, Palette } from 'lucide-react';
import ScrollSection from './ScrollSection';

gsap.registerPlugin(ScrollTrigger);

const InteractiveAbout = () => {
  const contentRef = useRef(null);
  const [hoverCard, setHoverCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.from(element.querySelectorAll('.animate-in'), {
        y: 80,
        scale: 0.9,
        opacity: 0,
        rotation: -5,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }, element);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
      title: "GSAP Master",
      color: "#FFD23F",
      description: "Scroll-triggered magic"
    },
    {
      id: 2,
      icon: <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
      title: "React Wizard",
      color: "#00D4FF",
      description: "Component mastery"
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
      title: "3D Explorer",
      color: "#FF6B35",
      description: "Three.js experiences"
    },
    {
      id: 4,
      icon: <Palette className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
      title: "Design Lover",
      color: "#9D4EDD",
      description: "Pixel-perfect UI"
    }
  ];

  return (
    <ScrollSection className="min-h-screen bg-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Big background text - FIXED: was text-[20rem], now responsive */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-gray-100 opacity-30 select-none whitespace-nowrap pointer-events-none">
        ABOUT
      </div>

      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        <div className="animate-in mb-12 sm:mb-16 md:mb-20">
          {/* FIXED: was text-8xl md:text-[10rem] - no mobile sizing! */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black leading-none mb-4 sm:mb-6 md:mb-8">
            WHO IS
            <br />
            <span className="text-transparent [-webkit-text-stroke:2px_#000] sm:[-webkit-text-stroke:3px_#000] md:[-webkit-text-stroke:4px_#000]">
              SUMAIYYA?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <div className="animate-in">
            <div className="bg-gradient-to-br from-[#FFD23F] to-[#FF6B35] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              {/* FIXED: was text-3xl md:text-4xl - too big for mobile */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-relaxed text-black">
                {portfolioData.about.description}
              </p>
              <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
                <span className="bg-black text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full">GSAP</span>
                <span className="bg-white text-black px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full">React</span>
                <span className="bg-black text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full">Three.js</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 animate-in">
            {cards.map((card, index) => (
              <div
                key={card.id}
                onMouseEnter={() => setHoverCard(card.id)}
                onMouseLeave={() => setHoverCard(null)}
                className={`aspect-square rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 border-2 sm:border-4 border-black ${!isMobile ? 'cursor-pointer' : ''}`}
                style={{
                  backgroundColor: isMobile ? card.color : (hoverCard === card.id ? card.color : '#fff'),
                  transform: !isMobile ? (hoverCard === card.id ? 'scale(1.05) rotate(5deg)' : 'scale(1) rotate(0deg)') : 'none'
                }}
              >
                <div className="text-black mb-2 sm:mb-3 md:mb-4">{card.icon}</div>
                {/* FIXED: was text-2xl - too big for small cards on mobile */}
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black text-black mb-1 sm:mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-black">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default InteractiveAbout;