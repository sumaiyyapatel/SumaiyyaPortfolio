import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const PlayfulMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "ABOUT", color: "#FFD23F" },
    { id: "work", label: "WORK", color: "#00D4FF" },
    { id: "skills", label: "SKILLS", color: "#FF6B35" },
    { id: "contact", label: "CONTACT", color: "#9D4EDD" },
  ];

  const handleItemClick = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 sm:top-6 md:top-8 right-5 sm:right-6 md:right-8 
        z-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
        bg-black text-white rounded-full flex items-center justify-center 
        border border-white/70 shadow-xl hover:scale-110 active:scale-95 
        transition-all duration-300"
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Fullscreen bento grid */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black text-black flex flex-wrap overflow-hidden"
        >
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`flex-1 flex items-center justify-center 
              min-w-[50%] sm:min-w-[50%] lg:min-w-[25%] min-h-[50vh] 
              text-3xl sm:text-5xl md:text-6xl font-extrabold 
              hover:brightness-110 active:scale-[0.98] transition-all duration-200`}
              style={{
                backgroundColor: item.color,
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
