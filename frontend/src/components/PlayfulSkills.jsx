import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/mock';
import ScrollSection from './ScrollSection';

gsap.registerPlugin(ScrollTrigger);

const PlayfulSkills = () => {
  const contentRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('animation');

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;
    
    const ctx = gsap.context(() => {
      gsap.from(element.querySelectorAll('.skill-item'), {
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }, element);

    return () => ctx.revert();
  }, []);

  const categories = {
    animation: { name: 'ANIMATION', color: '#FF6B35', skills: portfolioData.skills.animation },
    frontend: { name: 'FRONTEND', color: '#00D4FF', skills: portfolioData.skills.frontend },
    design: { name: 'DESIGN', color: '#9D4EDD', skills: portfolioData.skills.design },
    tools: { name: 'TOOLS', color: '#06FFA5', skills: portfolioData.skills.tools }
  };

  return (
    <ScrollSection className="min-h-screen bg-[#FFD23F] py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-[#FF6B35] opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-[#00D4FF] opacity-30 blur-3xl"></div>

      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black text-center mb-8 sm:mb-12 md:mb-20 leading-none">
          SKILLS
        </h2>

        {/* Category selector */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-8 sm:mb-12 md:mb-16">
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className="w-[calc(50%-0.5rem)] sm:w-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 text-lg sm:text-2xl md:text-3xl font-black rounded-full border-2 sm:border-3 md:border-4 border-black transition-all duration-300"
              style={{
                backgroundColor: activeCategory === key ? cat.color : '#fff',
                transform: activeCategory === key ? 'scale(1.05) rotate(-1deg)' : 'scale(1)',
                color: '#000'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {categories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item"
            >
              <div 
                className="aspect-square rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center border-2 sm:border-3 md:border-4 border-black shadow-xl hover:scale-105 sm:hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: categories[activeCategory].color }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-3 md:mb-4">
                  {skill.level}
                  <span className="text-2xl sm:text-3xl md:text-4xl">%</span>
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-black">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun stat */}
        <div className="mt-8 sm:mt-12 md:mt-20 text-center px-4">
          <div className="inline-block bg-black text-white px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 rounded-2xl sm:rounded-3xl transform -rotate-1 sm:-rotate-2">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black">Made 100+ animations that make people say "WOW!" ✨</p>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default PlayfulSkills;
