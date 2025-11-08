import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EducationCertificates = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.edu-card');
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        rotation: index % 2 === 0 ? -5 : 5,
        scale: 0.8,
        duration: 0.8,
        ease: 'elastic.out(1, 0.6)',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
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
    <div ref={sectionRef} className="min-h-screen bg-white py-32 px-6 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#FFD23F] rounded-full opacity-20 blur-3xl animate-pulse-scale"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#00D4FF] rounded-full opacity-20 blur-3xl animate-pulse-scale" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-8xl md:text-[12rem] font-black text-center mb-8 leading-none">
          <span className="text-transparent [-webkit-text-stroke:4px_#000]">
            LEARNING
          </span>
        </h2>
        <p className="text-center text-2xl font-bold mb-16 text-gray-700">
          Never stop <span className="bg-[#FFD23F] px-4 py-2 inline-block -rotate-2">GROWING</span>!
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-6 mb-16">
          <button
            onClick={() => setActiveTab('education')}
            className="px-12 py-6 text-3xl font-black rounded-full border-4 border-black transition-all duration-300"
            style={{
              backgroundColor: activeTab === 'education' ? '#00D4FF' : '#fff',
              transform: activeTab === 'education' ? 'scale(1.1) rotate(-2deg)' : 'scale(1)'
            }}
          >
            🎓 EDUCATION
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className="px-12 py-6 text-3xl font-black rounded-full border-4 border-black transition-all duration-300"
            style={{
              backgroundColor: activeTab === 'certificates' ? '#FF6B35' : '#fff',
              transform: activeTab === 'certificates' ? 'scale(1.1) rotate(2deg)' : 'scale(1)'
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
                  className="rounded-3xl p-12 border-8 border-black shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: edu.color }}
                >
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-10 rounded-bl-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-white rounded-full p-6 border-4 border-black">
                        <GraduationCap className="w-12 h-12" />
                      </div>
                      <div className="text-right">
                        <div className="bg-black text-white px-6 py-3 rounded-full text-xl font-bold inline-flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          {edu.year}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                      {edu.degree}
                    </h3>

                    <div className="flex flex-col md:flex-row gap-4 text-2xl font-bold">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2 md:ml-auto">
                        <MapPin className="w-6 h-6" />
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
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="edu-card"
              >
                <div 
                  className="aspect-square rounded-3xl p-8 border-8 border-black shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group hover:scale-105 hover:rotate-3 transition-all duration-300"
                  style={{ backgroundColor: cert.color }}
                >
                  {/* Award icon */}
                  <div className="bg-white rounded-full p-8 border-4 border-black mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-16 h-16" />
                  </div>

                  <h3 className="text-3xl font-black mb-4 leading-tight">
                    {cert.name}
                  </h3>

                  <div className="bg-black text-white px-6 py-3 rounded-full text-lg font-bold mb-2">
                    {cert.issuer}
                  </div>

                  <div className="text-2xl font-black">
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
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD] p-1 rounded-3xl transform -rotate-1">
            <div className="bg-white px-12 py-8 rounded-3xl">
              <p className="text-4xl font-black">
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