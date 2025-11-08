import React from 'react';
import ScrollSection from '../ScrollSection';
import { portfolioData } from '../../data/mock';
import { Sparkles, Code, Palette } from 'lucide-react';

const AboutSection = () => {
  return (
    <ScrollSection id="about" className="min-h-screen bg-[#0a0a0a] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div data-parallax>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
            About <span className="text-[#00d4ff]">Me</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] mb-8 sm:mb-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <div data-parallax>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-300"></div>
              <div className="relative bg-[#1a1a1a] p-6 sm:p-8 rounded-2xl border border-[#00d4ff] border-opacity-20">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  {portfolioData.about.description}
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {portfolioData.about.focus}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6" data-parallax>
            <div className="bg-gradient-to-br from-[#00d4ff] to-[#00ffcc] bg-opacity-10 p-4 sm:p-6 rounded-xl border border-[#00d4ff] border-opacity-30 hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-[#00d4ff] bg-opacity-20 rounded-lg">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Motion-Driven Design</h3>
                  <p className="text-sm sm:text-base text-gray-400">Creating fluid, engaging animations with GSAP that bring interfaces to life</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00ffcc] to-[#00d4ff] bg-opacity-10 p-4 sm:p-6 rounded-xl border border-[#00ffcc] border-opacity-30 hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-[#00ffcc] bg-opacity-20 rounded-lg">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ffcc]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">3D Web Experiences</h3>
                  <p className="text-sm sm:text-base text-gray-400">Building immersive 3D environments with Three.js and React Three Fiber</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00d4ff] to-[#00ffcc] bg-opacity-10 p-4 sm:p-6 rounded-xl border border-[#00d4ff] border-opacity-30 hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-[#00d4ff] bg-opacity-20 rounded-lg">
                  <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Creative Development</h3>
                  <p className="text-sm sm:text-base text-gray-400">Blending design thinking with technical expertise for unique solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default AboutSection;
