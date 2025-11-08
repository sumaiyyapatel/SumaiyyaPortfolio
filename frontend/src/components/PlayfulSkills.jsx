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
    <ScrollSection className="min-h-screen bg-[#FFD23F] py-32 px-6 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#FF6B35] opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#00D4FF] opacity-30 blur-3xl"></div>

      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-8xl md:text-[12rem] font-black text-center mb-20 leading-none">
          SKILLS
        </h2>

        {/* Category selector */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className="px-10 py-5 text-3xl font-black rounded-full border-4 border-black transition-all duration-300"
              style={{
                backgroundColor: activeCategory === key ? cat.color : '#fff',
                transform: activeCategory === key ? 'scale(1.1) rotate(-2deg)' : 'scale(1)',
                color: '#000'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item"
            >
              <div 
                className="aspect-square rounded-3xl p-8 flex flex-col items-center justify-center text-center border-4 border-black shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: categories[activeCategory].color }}
              >
                <div className="text-7xl font-black mb-4">
                  {skill.level}
                  <span className="text-4xl">%</span>
                </div>
                <div className="text-2xl font-black">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun stat */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-black text-white px-12 py-8 rounded-3xl transform -rotate-2">
            <p className="text-4xl font-black">Made 100+ animations that make people say "WOW!" ✨</p>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default PlayfulSkills;
