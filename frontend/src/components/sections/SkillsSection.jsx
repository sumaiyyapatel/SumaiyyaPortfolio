import React, { useEffect, useRef } from 'react';
import ScrollSection from '../ScrollSection';
import { portfolioData } from '../../data/mock';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillBar = ({ skill, index }) => {
  const barRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    const percent = percentRef.current;

    gsap.fromTo(
      bar,
      { width: '0%' },
      {
        width: `${skill.level}%`,
        duration: 1.5,
        ease: 'power3.out',
        delay: index * 0.1,
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      percent,
      { innerText: 0 },
      {
        innerText: skill.level,
        duration: 1.5,
        delay: index * 0.1,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        onUpdate: function() {
          percent.innerText = Math.ceil(this.targets()[0].innerText) + '%';
        }
      }
    );
  }, [skill.level, index]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold">{skill.name}</span>
        <span ref={percentRef} className="text-[#00d4ff] font-mono font-semibold">0%</span>
      </div>
      <div className="h-3 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#00d4ff] border-opacity-20">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] rounded-full relative"
          style={{ width: '0%' }}
        >
          <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, icon }) => {
  return (
    <div data-parallax className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#00d4ff] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-[#00d4ff] bg-opacity-10 rounded-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div>
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <ScrollSection id="skills" className="min-h-screen bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div data-parallax>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Technical <span className="text-[#00d4ff]">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] mb-16"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory
            title="Animation & 3D"
            skills={portfolioData.skills.animation}
            icon={
              <svg className="w-6 h-6 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            }
          />

          <SkillCategory
            title="Frontend Development"
            skills={portfolioData.skills.frontend}
            icon={
              <svg className="w-6 h-6 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />

          <SkillCategory
            title="Design & 3D Tools"
            skills={portfolioData.skills.design}
            icon={
              <svg className="w-6 h-6 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            }
          />

          <SkillCategory
            title="Backend & Tools"
            skills={portfolioData.skills.tools}
            icon={
              <svg className="w-6 h-6 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            }
          />
        </div>
      </div>
    </ScrollSection>
  );
};

export default SkillsSection;
