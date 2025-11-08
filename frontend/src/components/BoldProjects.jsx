import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/mock';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ScrollSection from './ScrollSection';

gsap.registerPlugin(ScrollTrigger);

const BoldProjects = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const projects = element.querySelectorAll('.project-card');

      projects.forEach((project, index) => {
        gsap.from(project, {
          x: index % 2 === 0 ? -200 : 200,
          opacity: 0,
          rotation: index % 2 === 0 ? -15 : 15,
          scale: 0.8,
          duration: 1,
          ease: 'elastic.out(1, 0.6)',
          scrollTrigger: {
            trigger: project,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    }, element);

    return () => ctx.revert();
  }, []);

  const colors = ['#FF6B35', '#00D4FF', '#9D4EDD', '#06FFA5'];

  return (
    <ScrollSection className="min-h-screen bg-gradient-to-b from-[#00D4FF] to-[#9D4EDD] py-32 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full border-8 border-white opacity-10 animate-pulse-scale"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full border-8 border-white opacity-10 animate-pulse-scale" style={{animationDelay: '1s'}}></div>
      
      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-8xl md:text-[12rem] font-black text-white mb-20 leading-none text-center">
          MY WORK
        </h2>

        <div className="space-y-24">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div 
                    className="aspect-video rounded-3xl overflow-hidden border-8 border-black shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-300"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-white rounded-3xl p-12 border-8 border-black shadow-2xl">
                    <div className="inline-block px-6 py-2 rounded-full text-xl font-bold mb-6" style={{ backgroundColor: colors[index % colors.length] }}>
                      Project #{index + 1}
                    </div>
                    <h3 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-2xl font-semibold mb-6 leading-relaxed text-gray-700">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-black text-white text-lg font-bold rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center gap-3 px-8 py-4 bg-black text-white text-xl font-black rounded-full hover:scale-110 transition-all duration-300">
                      VIEW PROJECT
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default BoldProjects;
