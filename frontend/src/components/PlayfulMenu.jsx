import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Add keyframe animation for menu items
const menuAnimation = `
@keyframes menuFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

// Add the animation to the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = menuAnimation;
  document.head.appendChild(style);
}

const PlayfulMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "ABOUT", color: "#FFD23F" },
    { id: "work", label: "WORK", color: "#00D4FF" },
    { id: "skills", label: "SKILLS", color: "#FF6B35" },
    { id: "education", label: "EDUCATION", color: "#06FFA5" },
    { id: "contact", label: "CONTACT", color: "#9D4EDD" },
  ];

  const handleItemClick = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn(`Section with id "${id}" not found`);
      }
    }, 300);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 
        bg-black text-white rounded-full flex items-center justify-center 
        shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Fullscreen menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center overflow-hidden">
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="w-full flex-1 flex items-center justify-center font-extrabold uppercase tracking-tight text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
              style={{
                backgroundColor: item.color,
                color: item.id === 'contact' ? "white" : "black",
                fontSize: item.id === 'education' ? "clamp(1.5rem, 5vw, 3.5rem)" : "clamp(2rem, 6vw, 4rem)",
                lineHeight: 1.1,
                animation: `menuFade 0.3s ease-out ${i * 0.1}s both`
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default PlayfulMenu;
