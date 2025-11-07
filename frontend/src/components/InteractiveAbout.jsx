import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/mock';
import { Sparkles, Zap, Code2, Palette } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InteractiveAbout = () => {
  const sectionRef = useRef(null);
  const [hoverCard, setHoverCard] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.from(section.querySelectorAll('.animate-in'), {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  const cards = [
    {
      id: 1,
      icon: <Sparkles className="w-16 h-16" />,
      title: "GSAP Master",
      color: "#FFD23F",
      description: "Scroll-triggered magic"
    },
    {
      id: 2,
      icon: <Code2 className="w-16 h-16" />,
      title: "React Wizard",
      color: "#00D4FF",
      description: "Component mastery"
    },
    {
      id: 3,
      icon: <Zap className="w-16 h-16" />,
      title: "3D Explorer",
      color: "#FF6B35",
      description: "Three.js experiences"
    },
    {
      id: 4,
      icon: <Palette className="w-16 h-16" />,
      title: "Design Lover",
      color: "#9D4EDD",
      description: "Pixel-perfect UI"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-white py-32 px-6 relative overflow-hidden">
      {/* Big background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-gray-100 opacity-30 select-none whitespace-nowrap">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="animate-in mb-20">
          <h2 className="text-8xl md:text-[10rem] font-black leading-none mb-8">
            WHO IS
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '4px #000' }}>SUMAIYYA?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="animate-in">
            <div className="bg-gradient-to-br from-[#FFD23F] to-[#FF6B35] p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-3xl md:text-4xl font-bold leading-relaxed text-black">
                {portfolioData.about.description}
              </p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <span className="bg-black text-white px-6 py-3 text-xl font-bold rounded-full">GSAP</span>
                <span className="bg-white text-black px-6 py-3 text-xl font-bold rounded-full">React</span>
                <span className="bg-black text-white px-6 py-3 text-xl font-bold rounded-full">Three.js</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-in">
            {cards.map((card, index) => (
              <div
                key={card.id}
                onMouseEnter={() => setHoverCard(card.id)}
                onMouseLeave={() => setHoverCard(null)}
                className="aspect-square rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 border-4 border-black"
                style={{
                  backgroundColor: hoverCard === card.id ? card.color : '#fff',
                  transform: hoverCard === card.id ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                }}
              >
                <div className="text-black mb-4">{card.icon}</div>
                <h3 className="text-2xl font-black text-black mb-2">{card.title}</h3>
                <p className="text-lg font-semibold text-black">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAbout;
