import React from 'react';
import ScrollSection from '../ScrollSection';
import { portfolioData } from '../../data/mock';
import { Calendar, Building2, CheckCircle2 } from 'lucide-react';

const ExperienceCard = ({ experience, index }) => {
  return (
    <div data-parallax className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      {index !== portfolioData.experience.length - 1 && (
        <div className="absolute left-[11px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] to-transparent"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-6 h-6 bg-[#00d4ff] rounded-full border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(0,212,255,0.5)]"></div>

      <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-[#00d4ff] border-opacity-20 hover:border-opacity-50 transition-all duration-300 group hover:transform hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-[#00ffcc] mt-2">
              <Building2 className="w-4 h-4" />
              <span className="font-semibold">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 bg-[#0a0a0a] px-4 py-2 rounded-lg">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{experience.period}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {experience.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-[#00ffcc] flex-shrink-0 mt-0.5" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const EducationCard = ({ edu }) => {
  return (
    <div data-parallax className="bg-[#1a1a1a] p-6 rounded-2xl border border-[#00ffcc] border-opacity-20 hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
          <p className="text-[#00ffcc] font-semibold mb-1">{edu.institution}</p>
          <p className="text-gray-400 text-sm">{edu.location}</p>
        </div>
        <span className="text-[#00d4ff] font-mono bg-[#00d4ff] bg-opacity-10 px-3 py-1 rounded-lg">
          {edu.year}
        </span>
      </div>
    </div>
  );
};

const CertificationCard = ({ cert }) => {
  return (
    <div data-parallax className="bg-gradient-to-br from-[#00d4ff] to-[#00ffcc] bg-opacity-5 p-5 rounded-xl border border-[#00d4ff] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
          <p className="text-gray-400 text-sm">{cert.issuer}</p>
        </div>
        <span className="text-[#00ffcc] text-sm font-mono bg-[#00ffcc] bg-opacity-10 px-2 py-1 rounded">
          {cert.year}
        </span>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <ScrollSection id="experience" className="min-h-screen bg-gradient-to-b from-[#0f0f10] to-[#0a0a0a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div data-parallax>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Experience & <span className="text-[#00d4ff]">Education</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] mb-16"></div>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h3 data-parallax className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-3 h-3 bg-[#00d4ff] rounded-full"></span>
            Professional Experience
          </h3>
          <div>
            {portfolioData.experience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h3 data-parallax className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-3 h-3 bg-[#00ffcc] rounded-full"></span>
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.education.map((edu) => (
              <EducationCard key={edu.id} edu={edu} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 data-parallax className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-3 h-3 bg-[#00d4ff] rounded-full"></span>
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {portfolioData.certifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default ExperienceSection;
