import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = ({ children, className = '', id }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 95%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
            once: true,
          },
        },
      );

      Array.from(element.querySelectorAll('[data-parallax]')).forEach(
        (el, index) => {
          gsap.fromTo(
            el,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              delay: index * 0.05,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: true,
              },
            },
          );
        },
      );
    }, element);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={className} id={id}>
      {children}
    </section>
  );
};

export default ScrollSection;
