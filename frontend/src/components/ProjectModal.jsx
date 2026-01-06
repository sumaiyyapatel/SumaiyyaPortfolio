import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Github, Calendar, Users, Award } from 'lucide-react';
import gsap from 'gsap';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape' && isOpen) onClose(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // GSAP animation
  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={onClose}>
      <div
        ref={modalRef}
        className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl max-h-[calc(100vh-2rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-[#FFD23F] to-[#FF6B35] overflow-hidden">
          <img
            src={project.screenshots?.[activeScreenshot] || project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          {project.category && (
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <span className="px-4 py-2 bg-black text-[#FFD23F] text-xs sm:text-sm font-black rounded-full">
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 1 && (
          <div className="flex gap-2 px-4 sm:px-6 md:px-8 -mt-12 relative z-10">
            {project.screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setActiveScreenshot(index)}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-4 transition-all duration-300 ${
                  activeScreenshot === index
                    ? 'border-[#00D4FF] scale-110'
                    : 'border-white opacity-60 hover:opacity-100'
                }`}
              >
                <img src={screenshot} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">{project.title}</h2>

          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base">
            {project.date && (
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">{project.date}</span>
              </div>
            )}
            {project.team && (
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">{project.team}</span>
              </div>
            )}
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">{project.longDescription || project.description}</p>

          {/* Technologies */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-black mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-[#00D4FF] to-[#9D4EDD] text-white text-sm sm:text-base font-bold rounded-full hover:scale-105 transition-transform duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl font-black mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#06FFA5] rounded-full"></span>
                Key Highlights
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD23F] flex-shrink-0 mt-1" />
                    <span className="text-base sm:text-lg text-gray-700 font-semibold">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD23F] text-black text-lg font-black rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <ExternalLink className="w-5 h-5" /> View Live Project
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white text-lg font-black rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 border-4 border-black">
                <Github className="w-5 h-5" /> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
