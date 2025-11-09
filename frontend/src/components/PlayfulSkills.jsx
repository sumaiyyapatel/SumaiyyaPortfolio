import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../data/mock";
import ScrollSection from "./ScrollSection";

gsap.registerPlugin(ScrollTrigger);

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
      skills: portfolioData.skills.languages,
    },
    frontend: {
      name: "FRONTEND",
      color: "#FF6B35",
      skills: portfolioData.skills.frontend,
    },
    animation: {
      name: "3D & ANIMATION",
      color: "#00D4FF",
      skills: portfolioData.skills.animation,
    },
    tools: {
      name: "TOOLS & MORE",
      color: "#9D4EDD",
      skills: portfolioData.skills.tools,
    },
  };

  return (
    <ScrollSection className="min-h-screen bg-yellow-300 py-20 px-6 relative overflow-hidden">
      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 leading-none">
          SKILLS
        </h2>

        {/* Category selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className="px-8 py-4 text-lg md:text-xl font-black rounded-2xl shadow-md transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: activeCategory === key ? cat.color : "#fff",
                transform:
                  activeCategory === key ? "scale(1.05) rotate(-1deg)" : "scale(1)",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Fixed grid: 4 columns on desktop, 3 on tablet, 2 on mobile */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
          {categories[activeCategory].skills.map((skill) => (
            <div key={skill.name} className="skill-item w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]">
              <div
                className="group relative aspect-square rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                style={{ backgroundColor: categories[activeCategory].color }}
              >
                <img
                  src={
                    skill.logoURL.startsWith("/assets")
                      ? process.env.PUBLIC_URL + skill.logoURL
                      : skill.logoURL
                  }
                  alt={skill.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = process.env.PUBLIC_URL + "/assets/default-logo.svg";
                  }}
                />
                <div className="text-sm sm:text-base md:text-lg font-black text-black">
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center relative z-10">
        <div className="inline-block bg-black text-white px-10 py-6 rounded-2xl transform -rotate-1">
          <p className="text-xl md:text-2xl font-black">
            Animations that make people say "WOW!" ✨
          </p>
        </div>
      </div>
    </ScrollSection>
  );
};

export default PlayfulSkills;