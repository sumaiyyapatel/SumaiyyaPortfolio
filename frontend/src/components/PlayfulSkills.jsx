import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mock data
const portfolioData = {
  skills: {
    languages: [
      { name: "JavaScript", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Python", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
    frontend: [
      { name: "React.js", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Bootstrap", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
      { name: "Tailwind", logoURL: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    ],
    animation: [
      { name: "GSAP", logoURL: "https://svgstack.com/media/img/gsap-logo-dNe6788698.webp" },
      { name: "Three.js", logoURL: "https://icon.icepanel.io/Technology/png-shadow-512/Three.js.png" },
      { name: "Blender", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
      { name: "Unity", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
    ],
    tools: [
      { name: "Firebase", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Git", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Vite", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
      { name: "Figma", logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  }
};

const PlayfulSkills = () => {
  const contentRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("languages");

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.from(element.querySelectorAll(".skill-item"), {
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, element);

    return () => ctx.revert();
  }, [activeCategory]);

  const categories = {
    languages: {
      name: "LANGUAGES",
      color: "#8FC93A",
      emoji: "🔤",
      skills: portfolioData.skills.languages,
    },
    frontend: {
      name: "FRONTEND",
      color: "#FF6B35",
      emoji: "🎨",
      skills: portfolioData.skills.frontend,
    },
    animation: {
      name: "3D & ANIMATION",
      color: "#00D4FF",
      emoji: "✨",
      skills: portfolioData.skills.animation,
    },
    tools: {
      name: "TOOLS & MORE",
      color: "#9D4EDD",
      emoji: "🛠️",
      skills: portfolioData.skills.tools,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3CA40]  to-[#FF6B35] py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black text-center mb-6 sm:mb-8 leading-none">
          <span className="text-white">MY</span> <span className="text-transparent title-stroke" style={{WebkitTextStroke: "5px white",textStroke: "1px white", }}>SKILLS</span>

        </h2>
        <p className="text-center text-lg sm:text-xl md:text-2xl font-bold mb-12 sm:mb-16 text-white">
          The tools I use to build <span className="bg-black text-[#FFD23F] px-2 py-1 inline-block -rotate-1">AMAZING</span> things!
        </p>

        {/* Category selector */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className="px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-black rounded-full border-3 border-black transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: activeCategory === key ? cat.color : "#fff",
                transform: activeCategory === key ? "scale(1.05)" : "scale(1)",
              }}
            >
              <span className="mr-2">{cat.emoji}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid - Cards with category color */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
            {categories[activeCategory].skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-item w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <div
            className="group relative aspect-square rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center overflow-hidden border-4 border-black shadow-xl transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-3"
            style={{ 
              backgroundColor: categories[activeCategory].color,
              animationDelay: `${index * 0.1}s`
            }}
                >
            {/* Logo (no white circle) */}
            <img
              src={skill.logoURL}
              alt={skill.name}
              className="relative z-10 mb-2 sm:mb-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            />

            {/* Skill name in white pill */}
                <div className="relative z-10 bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-full border-2 border-black shadow-sm">
                  <div className="text-xs sm:text-sm md:text-base font-black text-black uppercase">
                    {skill.name}
                  </div>
                </div>

                  </div>
            </div>
          ))}
        </div>
      </div>

       {/* Fun CTA */}
      <div className="mt-20 text-center relative z-10">
        <div className="inline-block bg-white text-black px-10 py-6 rounded-2xl border-black border-4 shadow-xl transform -rotate-1">
          <p className="text-xl md:text-2xl font-black">
            Animations that make people say "WOW!" ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayfulSkills;