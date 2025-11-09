useEffect(() => {
    const container = heroRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 15,
          y: e.clientY - 15,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      // Parallax effect on shapes based on mouse position
      shapesRef.current.forEach((shape, i) => {
        if (!shape) return;
        const speed = (i + 1) * 0.02;
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;
        
        gsap.to(shape, {
          x: x,
          y: y,
          duration: 1,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Parallax scroll effect
      gsap.to(container, {
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 150,
        opacity: 0.3
      });

      // Animate title characters individually
      const firstNameChars = titleRef.current?.children[0]?.children || [];
      const lastNameChars = titleRef.current?.children[1]?.children || [];
      const allChars = [...Array.from(firstNameChars), ...Array.from(lastNameChars)];
      
      tl.from(allChars, {
        y: 150,
        opacity: 0,
        scale: 0.3,
        rotationX: -90,
        rotationZ: (i) => (i % 2 === 0 ? -45 : 45),
        duration: 1.2,
        stagger: 0.08,
        ease: 'power4.out'
      });

      // Float and rotate shapes
      shapesRef.current.forEach((shape, i) => {
        if (!shape) return;

        gsap.to(shape, {
          y: i % 2 === 0 ? '+=100' : '-=80',
          x: i % 3 === 0 ? '+=60' : '-=50',
          duration: 4 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });

        gsap.to(shape, {
          rotation: i % 2 === 0 ? '+=360' : '-=360',
          duration: 12 + i * 3,
          repeat: -1,
          ease: 'none'
        });

        gsap.to(shape, {
          scale: 1.2,
          duration: 2.5 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      });
    }, container);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);