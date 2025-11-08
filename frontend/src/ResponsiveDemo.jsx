import React, { useState } from 'react';
import { Menu, X, Sparkles, Zap, Code2, Palette } from 'lucide-react';

// Fixed PlayfulMenu Component
const PlayfulMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'about', label: 'ABOUT', color: '#FFD23F' },
    { id: 'work', label: 'WORK', color: '#00D4FF' },
    { id: 'skills', label: 'SKILLS', color: '#FF6B35' },
    { id: 'contact', label: 'CONTACT', color: '#9D4EDD' }
  ];

  const handleItemClick = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      {/* Menu button - Responsive sizing */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 sm:border-4 border-white shadow-2xl"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        ) : (
          <Menu className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        )}
      </button>

      {/* Menu overlay - Responsive grid */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-95 flex items-center justify-center p-4 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="aspect-square rounded-2xl sm:rounded-3xl flex items-center justify-center text-3xl sm:text-5xl md:text-7xl font-black border-4 sm:border-6 md:border-8 border-white hover:scale-105 sm:hover:scale-110 hover:rotate-3 sm:hover:rotate-6 transition-all duration-300 shadow-2xl"
                style={{ 
                  backgroundColor: item.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// Fixed InteractiveAbout Component
const InteractiveAbout = () => {
  const [hoverCard, setHoverCard] = useState(null);

  const cards = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
      title: "GSAP Master",
      color: "#FFD23F",
      description: "Scroll-triggered magic"
    },
    {
      id: 2,
      icon: <Code2 className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
      title: "React Wizard",
      color: "#00D4FF",
      description: "Component mastery"
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
      title: "3D Explorer",
      color: "#FF6B35",
      description: "Three.js experiences"
    },
    {
      id: 4,
      icon: <Palette className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
      title: "Design Lover",
      color: "#9D4EDD",
      description: "Pixel-perfect UI"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>
      
      {/* Big background text - Responsive sizing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-gray-100 opacity-30 select-none whitespace-nowrap">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title - Responsive sizing */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black leading-none mb-4 sm:mb-6 md:mb-8">
            WHO IS
            <br />
            <span className="text-transparent" style={{WebkitTextStroke: '2px #000'}}>
              SUMAIYYA?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          {/* Description card - Responsive padding and text */}
          <div>
            <div className="bg-gradient-to-br from-[#FFD23F] to-[#FF6B35] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-black">
                I'm a creative frontend developer who loves making websites come alive with animations and interactions!
              </p>
              <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
                <span className="bg-black text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-lg md:text-xl font-bold rounded-full">GSAP</span>
                <span className="bg-white text-black px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-lg md:text-xl font-bold rounded-full">React</span>
                <span className="bg-black text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-lg md:text-xl font-bold rounded-full">Three.js</span>
              </div>
            </div>
          </div>

          {/* Cards grid - Responsive sizing */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                onMouseEnter={() => setHoverCard(card.id)}
                onMouseLeave={() => setHoverCard(null)}
                className="aspect-square rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 border-2 sm:border-4 border-black"
                style={{
                  backgroundColor: hoverCard === card.id ? card.color : '#fff',
                  transform: hoverCard === card.id ? 'scale(1.05) rotate(3deg)' : 'scale(1) rotate(0deg)'
                }}
              >
                <div className="text-black mb-2 sm:mb-3 md:mb-4">{card.icon}</div>
                <h3 className="text-base sm:text-xl md:text-2xl font-black text-black mb-1 sm:mb-2">{card.title}</h3>
                <p className="text-xs sm:text-base md:text-lg font-semibold text-black">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo App
export default function ResponsiveDemo() {
  return (
    <div className="min-h-screen bg-white">
      <PlayfulMenu />
      
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFD23F] to-[#FF6B35]">
        <div className="text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4">
            PORTFOLIO
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black font-bold">
            Scroll down to see responsive sections
          </p>
        </div>
      </section>

      <section id="about">
        <InteractiveAbout />
      </section>

      <section id="work" className="min-h-screen bg-gradient-to-b from-[#00D4FF] to-[#9D4EDD] py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[12rem] font-black text-white mb-12 sm:mb-16 md:mb-20 leading-none text-center">
            MY WORK
          </h2>
          
          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {[1, 2].map((project) => (
              <div key={project} className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                {/* Image */}
                <div className={`order-2 ${project % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div 
                    className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border-4 sm:border-6 md:border-8 border-black shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-300"
                    style={{ backgroundColor: '#FF6B35' }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-white font-black text-2xl sm:text-4xl md:text-6xl">
                      PROJECT {project}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`order-1 ${project % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-4 sm:border-6 md:border-8 border-black shadow-2xl">
                    <div className="inline-block px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6 bg-[#FFD23F]">
                      Project #{project}
                    </div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                      Amazing Project Title
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 leading-relaxed text-gray-700">
                      This is a description of an amazing project with responsive text sizing.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {['React', 'GSAP', 'Three.js'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 sm:px-4 py-1 sm:py-2 bg-black text-white text-sm sm:text-base md:text-lg font-bold rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-black text-white text-base sm:text-lg md:text-xl font-black rounded-full hover:scale-105 sm:hover:scale-110 transition-all duration-300">
                      VIEW PROJECT →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen bg-[#FFD23F] py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8">SKILLS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {['GSAP', 'React', 'Three.js', 'Blender', 'CSS', 'JavaScript', 'Unity', 'Figma'].map((skill) => (
              <div
                key={skill}
                className="aspect-square bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center border-2 sm:border-4 border-black hover:scale-105 sm:hover:scale-110 transition-all"
              >
                <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-gradient-to-br from-[#9D4EDD] to-[#00D4FF] py-16 sm:py-24 md:py-32 px-4 sm:px-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8">
            LET'S CHAT!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-8 sm:mb-12">
            Ready to create something amazing?
          </p>
          <button className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-white text-black text-base sm:text-lg md:text-2xl font-black rounded-full hover:scale-105 sm:hover:scale-110 transition-all">
            GET IN TOUCH
          </button>
        </div>
      </section>
    </div>
  );
}