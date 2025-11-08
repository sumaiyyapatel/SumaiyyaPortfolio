import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const PlayfulMenu = ({ onNavigate }) => {
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
                className="aspect-square rounded-2xl sm:rounded-3xl flex items-center justify-center text-3xl sm:text-5xl md:text-7xl font-black border-4 sm:border-6 md:border-8 border-white hover:scale-105 sm:hover:scale-110 hover:rotate-3 sm:hover:rotate-6 transition-all duration-300 shadow-2xl animate-fade-in-scale"
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

export default PlayfulMenu;