import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import '../styles/FibonacciMenu.css';

const FibonacciMenu = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const tilesRef = useRef([]);

  const menuItems = [
    { id: 'about', label: 'ABOUT', labelAlt: 'परिचय' },
    { id: 'work', label: 'WORK', labelAlt: 'कार्य' },
    { id: 'skills', label: 'SKILLS', labelAlt: 'कौशल' },
    { id: 'experience', label: 'EXPERIENCE', labelAlt: 'अनुभव' },
    { id: 'gallery', label: 'GALLERY', labelAlt: 'गैलरी' },
    { id: 'contact', label: 'CONTACT', labelAlt: 'संपर्क' }
  ];

  useEffect(() => {
    if (isOpen) {
      animateOpen();
    } else {
      animateClose();
    }
  }, [isOpen]);

  const animateOpen = () => {
    const tiles = tilesRef.current;
    
    // Responsive Fibonacci positioning
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    
    const positions = isMobile ? [
      // Mobile layout - stacked 2x3
      { x: 0.25, y: 0.2, size: 0.45 },
      { x: 0.75, y: 0.2, size: 0.45 },
      { x: 0.25, y: 0.5, size: 0.45 },
      { x: 0.75, y: 0.5, size: 0.45 },
      { x: 0.25, y: 0.8, size: 0.45 },
      { x: 0.75, y: 0.8, size: 0.45 }
    ] : isTablet ? [
      // Tablet layout - balanced 3x2
      { x: 0.2, y: 0.25, size: 0.3 },
      { x: 0.5, y: 0.25, size: 0.3 },
      { x: 0.8, y: 0.25, size: 0.3 },
      { x: 0.2, y: 0.75, size: 0.3 },
      { x: 0.5, y: 0.75, size: 0.3 },
      { x: 0.8, y: 0.75, size: 0.3 }
    ] : [
      // Desktop layout - Fibonacci spiral
      { x: 0.15, y: 0.15, size: 0.25 },
      { x: 0.65, y: 0.15, size: 0.25 },
      { x: 0.15, y: 0.6, size: 0.25 },
      { x: 0.65, y: 0.6, size: 0.25 },
      { x: 0.4, y: 0.375, size: 0.2 },
      { x: 0.4, y: 0.375, size: 0.15 }
    ];

    gsap.fromTo(
      tiles,
      {
        scale: 0,
        rotation: 180,
        opacity: 0
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
        onStart: () => {
          tiles.forEach((tile, i) => {
            if (tile) {
              const pos = positions[i];
              tile.style.left = `${pos.x * 100}%`;
              tile.style.top = `${pos.y * 100}%`;
              tile.style.width = `${pos.size * 100}%`;
              tile.style.height = `${pos.size * 100}%`;
              tile.style.transform = 'translate(-50%, -50%)';
            }
          });
        }
      }
    );
  };

  const animateClose = () => {
    gsap.to(tilesRef.current, {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'back.in(1.7)'
    });
  };

  const handleTileClick = (sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      onNavigate(sectionId);
    }, 600);
  };

  return (
    <>
      <button 
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <div 
        ref={menuRef}
        className={`fibonacci-menu-container ${isOpen ? 'active' : ''} ${!isOpen && tilesRef.current.length > 0 ? 'closing' : ''}`}
      >
        <div className="fibonacci-grid">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (tilesRef.current[index] = el)}
              className="grid-tile"
              onClick={() => handleTileClick(item.id)}
              style={{ opacity: 0 }}
            >
              <div className="tile-lines"></div>
              <div className="tile-content">
                <div className="tile-text">{item.label}</div>
                <div className="tile-text devanagari">{item.labelAlt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FibonacciMenu;
