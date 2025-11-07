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
      {/* Menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 w-20 h-20 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 border-4 border-white shadow-2xl"
      >
        {isOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
      </button>

      {/* Menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-95 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8 p-12">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="aspect-square rounded-3xl flex items-center justify-center text-5xl md:text-7xl font-black border-8 border-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-2xl"
                style={{ 
                  backgroundColor: item.color,
                  animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0) rotate(180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </>
  );
};

export default PlayfulMenu;
