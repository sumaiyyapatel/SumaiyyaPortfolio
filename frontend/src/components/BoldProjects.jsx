import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/mock';
import { ArrowRight } from 'lucide-react';
import ScrollSection from './ScrollSection';
import ProjectModal from './ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const BoldProjects = () => {
  const contentRef = useRef(null);
  const colors = ['#FF6B35', '#00D4FF', '#9D4EDD', '#06FFA5'];
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const projects = element.querySelectorAll('.project-card');

      projects.forEach((project, index) => {
        gsap.from(project, {
          x: index % 2 === 0 ? -200 : 200,
          opacity: 0,
          rotation: index % 2 === 0 ? -10 : 10,
          scale: 0.9,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection className="min-h-screen bg-gradient-to-b from-[#00D4FF] to-[#9D4EDD] py-24 sm:py-32 px-4 sm:px-8 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-20 right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full border-8 border-white opacity-10 animate-pulse-scale"></div>
      <div
        className="absolute bottom-40 left-20 w-56 sm:w-72 h-56 sm:h-72 rounded-full border-8 border-white opacity-10 animate-pulse-scale"
        style={{ animationDelay: '1s' }}
      ></div>

      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-white font-black mb-20 leading-none text-[3rem] sm:text-[6rem] lg:text-[10rem] xl:text-[12rem]">
          MY <span className="text-transparent title-stroke" style={{WebkitTextStroke: "5px white",textStroke: "3px white", }}>WORK</span>
        </h2>

        <div className="space-y-24 sm:space-y-32">
          {portfolioData.projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-10 md:gap-16`}
              >
                {/* Project Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div
                    className="aspect-video w-full rounded-3xl overflow-hidden border-4 sm:border-8 border-black shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer"
                    style={{ backgroundColor: colors[index % colors.length] }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border-4 sm:border-8 border-black shadow-2xl">
                    <div
                      className="inline-block px-5 py-2 rounded-full text-base sm:text-xl font-bold mb-6"
                      style={{ backgroundColor: colors[index % colors.length] }}
                    >
                      Project #{index + 1}
                    </div>

                    <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight break-words">
                      {project.title}
                    </h3>

                    <p className="text-lg sm:text-2xl font-semibold mb-6 leading-relaxed text-gray-700">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 sm:px-4 py-1 sm:py-2 bg-black text-white text-sm sm:text-lg font-bold rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white text-base sm:text-xl font-black rounded-full hover:scale-110 transition-all duration-300"
                    >
                      VIEW PROJECT
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </ScrollSection>
  );
};

export default BoldProjects;