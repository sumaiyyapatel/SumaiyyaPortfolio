import React, { useRef } from 'react';
import ScrollSection from '../ScrollSection';
import { portfolioData } from '../../data/mock';
import { ExternalLink, Code } from 'lucide-react';
import gsap from 'gsap';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: 'power2.out',
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <div
      ref={cardRef}
      data-parallax
      className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#00d4ff] border-opacity-20 hover:border-opacity-60 transition-all duration-500"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 relative" style={{ transform: 'translateZ(50px)' }}>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#00d4ff] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-[#00d4ff] bg-opacity-10 text-[#00d4ff] rounded-full border border-[#00d4ff] border-opacity-30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-2 mb-4">
          {project.highlights.map((highlight, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-[#00ffcc] rounded-full"></div>
              {highlight}
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-[#00d4ff] bg-opacity-10 text-[#00d4ff] rounded-lg hover:bg-opacity-20 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            View Project
          </button>
          <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-[#00d4ff] border-opacity-30 text-[#00d4ff] rounded-lg hover:bg-[#00d4ff] hover:bg-opacity-10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
            <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Code
          </button>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] to-[#00ffcc] opacity-5"></div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  return (
    <ScrollSection id="work" className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#0f0f10] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div data-parallax>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Featured <span className="text-[#00d4ff]">Work</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] mb-4"></div>
          <p className="text-gray-400 text-lg mb-16 max-w-3xl">
            A showcase of projects that blend creative design with technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default WorkSection;
