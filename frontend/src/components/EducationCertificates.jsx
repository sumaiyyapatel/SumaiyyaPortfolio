import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import '../styles/TextEffects.css';

gsap.registerPlugin(ScrollTrigger);

const EducationCertificates = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll('.edu-card');
      
      // Clear any existing animations when tab changes
      gsap.killTweensOf(cards);
      
      gsap.fromTo(cards, 
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: gsap.utils.wrap([-5, 5])
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.15,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Applications",
      institution: "Symbiosis Institute",
      location: "Pune, MH",
      year: "2024-2026",
      color: "#FF6B35"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "Dr. Ambedkar College",
      location: "Nagpur, MH",
      year: "2021-2024",
      color: "#00D4FF"
    }
  ];

  const certificates = [
    {
      id: 1,
      name: "Advanced GSAP Animation",
      issuer: "GreenSock",
      year: "2024",
      color: "#9D4EDD"
    },
    {
      id: 2,
      name: "Three.js & WebGL",
      issuer: "Three.js Academy",
      year: "2024",
      color: "#06FFA5"
    },
    {
      id: 3,
      name: "React Advanced Patterns",
      issuer: "Frontend Masters",
      year: "2023",
      color: "#FFD23F"
    },
    {
      id: 4,
      name: "Unity Game Development",
      issuer: "Unity Learn",
      year: "2024",
      color: "#FF6B35"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-20 right-5 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#FFD23F] rounded-full opacity-20 blur-3xl transition-transform duration-700 hover:scale-110" style={{ animation: 'pulse-scale 8s ease-in-out infinite' }}></div>
      <div className="absolute bottom-20 left-5 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-[#00D4FF] rounded-full opacity-20 blur-3xl transition-transform duration-700 hover:scale-110" style={{ animation: 'pulse-scale 8s ease-in-out infinite', animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black text-center mb-4 sm:mb-6 md:mb-8 leading-none">
          <span className="text-transparent title-stroke">
            LEARNING
          </span>
        </h2>
        <p className="text-center text-lg sm:text-xl md:text-2xl font-bold mb-8 sm:mb-12 md:mb-16 text-gray-700">
          Never stop <span className="bg-[#FFD23F] px-3 sm:px-4 py-1 sm:py-2 inline-block -rotate-2">GROWING</span>!
        </p>

        {/* Tab Switcher */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          <button
            onClick={() => setActiveTab('education')}
            className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-xl sm:text-2xl md:text-3xl font-black rounded-full border-4 border-black transition-all duration-300"
            style={{
              backgroundColor: activeTab === 'education' ? '#00D4FF' : '#fff',
              transform: activeTab === 'education' ? 'scale(1.05) rotate(-2deg)' : 'scale(1)'
            }}
          >
            🎓 EDUCATION
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-xl sm:text-2xl md:text-3xl font-black rounded-full border-4 border-black transition-all duration-300"
            style={{
              backgroundColor: activeTab === 'certificates' ? '#FF6B35' : '#fff',
              transform: activeTab === 'certificates' ? 'scale(1.05) rotate(2deg)' : 'scale(1)'
            }}
          >
            🏆 CERTIFICATES
          </button>
        </div>

        {/* Education Cards */}
        {activeTab === 'education' && (
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="edu-card"
              >
                <div 
                  className="rounded-3xl p-6 sm:p-8 md:p-12 border-4 sm:border-6 md:border-8 border-black shadow-2xl relative overflow-hidden group hover:scale-[1.02] hover:rotate-1 transition-all duration-500 ease-out"
                  style={{ backgroundColor: edu.color }}
                >
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-black opacity-10 rounded-bl-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="bg-white rounded-full p-3 sm:p-4 md:p-6 border-2 sm:border-3 md:border-4 border-black">
                        <GraduationCap className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />
                      </div>
                      <div className="text-right">
                        <div className="bg-black text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg md:text-xl font-bold inline-flex items-center gap-1 sm:gap-2">
                          <Calendar className="w-4 sm:w-5 h-4 sm:h-5" />
                          {edu.year}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 leading-tight">
                      {edu.degree}
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-base sm:text-xl md:text-2xl font-bold">
                      <div className="flex items-center gap-2">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-black rounded-full"></div>
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2 sm:ml-auto">
                        <MapPin className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificate Cards */}
        {activeTab === 'certificates' && (
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="edu-card"
              >
                <div 
                  className="aspect-square rounded-3xl p-4 sm:p-6 md:p-8 border-4 sm:border-6 md:border-8 border-black shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group hover:scale-[1.02] hover:rotate-2 transition-all duration-500 ease-out"
                  style={{ backgroundColor: cert.color }}
                >
                  {/* Award icon */}
                  <div className="bg-white rounded-full p-4 sm:p-6 md:p-8 border-2 sm:border-3 md:border-4 border-black mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16" />
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 leading-tight">
                    {cert.name}
                  </h3>

                  <div className="bg-black text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-bold mb-2">
                    {cert.issuer}
                  </div>

                  <div className="text-lg sm:text-xl md:text-2xl font-black">
                    {cert.year}
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Fun CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD] p-1 rounded-2xl sm:rounded-3xl transform -rotate-1">
            <div className="bg-white px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 rounded-2xl sm:rounded-3xl">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black">
                Always learning, always building! 💪✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCertificates;