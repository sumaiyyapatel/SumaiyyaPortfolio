// Mock data for portfolio
export const portfolioData = {
  hero: {
    name: "Sumaiyya Patel",
    title: "Creative Frontend Developer",
    tagline: "Crafting interactive digital experiences with GSAP, Three.js & React",
    email: "smahinn1@gmail.com",
    phone: "+91-7888000365",
    linkedin: "https://linkedin.com/in/sumaiyya-patel",
    github: "https://github.com/sumaiyya-patel",
    portfolio: "https://sumaiyya-portfolio.com"
  },

  about: {
    description: "Creative frontend developer with a passion for designing interactive, visually engaging digital experiences. I specialize in blending design and technology through React, GSAP, and Three.js to create smooth, animated, and responsive interfaces.",
    focus: "My strong foundation in frontend engineering and focus on motion-driven design allows me to develop projects ranging from 3D mobile games to dynamic business websites. I aim to build web experiences that are functional, expressive, and alive with intentional interactions."
  },

  education: [
    {
      id: 1,
      degree: "Master of Science in Computer Applications",
      institution: "Symbiosis Institute of Computer Studies and Research",
      location: "Pune, MH",
      year: "2024-2026"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "Dr. Ambedkar College",
      location: "Nagpur, MH",
      year: "2021-2024"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Advanced GSAP Animation Techniques",
      issuer: "GreenSock",
      year: "2024"
    },
    {
      id: 2,
      name: "Three.js & WebGL Fundamentals",
      issuer: "Three.js Academy",
      year: "2024"
    },
    {
      id: 3,
      name: "React Advanced Patterns",
      issuer: "Frontend Masters",
      year: "2023"
    },
    {
      id: 4,
      name: "Unity Game Development",
      issuer: "Unity Learn",
      year: "2024"
    }
  ],

  experience: [
    {
      id: 1,
      role: "Freelance Creative Developer",
      company: "Abid Refrigeration & Engineering Pvt. Ltd.",
      period: "Sept 2025 – Oct 2025",
      responsibilities: [
        "Built a 5-page React website with GSAP scroll effects, 3D testimonial carousel, and glass morphism UI",
        "Designed a custom Firebase CMS for dynamic content management with real-time updates",
        "Created a multilingual interface with smooth animations and mobile-optimized interactions"
      ]
    },
    {
      id: 2,
      role: "3D Design & Frontend Intern",
      company: "Inficom Solutions Pvt. Ltd.",
      period: "Dec 2024 – May 2025",
      responsibilities: [
        "Developed 'SkyRoute,' a 3D mobile game in Unity with custom-modelled city environment (50+ assets)",
        "Designed complete UI/UX system across 6 game screens, focusing on intuitive mobile-first interactions",
        "Optimized 3D assets in Blender, reducing load times by 40% while maintaining visual quality"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "3D Interactive Portfolio",
      description: "Built an immersive portfolio as an explorable 3D room where each object reveals different sections. Implemented smooth camera transitions, hover effects with glow animations, and bloom post-processing for a premium feel.",
      technologies: ["Three.js", "React Three Fiber", "WebGL", "GSAP"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      highlights: ["60fps performance", "Interactive 3D objects", "Bloom post-processing"]
    },
    {
      id: 2,
      title: "TrackItAll Dashboard",
      description: "Developed a comprehensive dashboard for tracking student performance with real-time data visualization. Implemented interactive charts using Chart.js for attendance and performance analytics.",
      technologies: ["HTML/CSS", "JavaScript", "Bootstrap", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      highlights: ["Real-time analytics", "Interactive charts", "User-centric design"]
    },
    {
      id: 3,
      title: "Abid Refrigeration Website",
      description: "Transformed online presence with bold animations and modern UI. Features GSAP scroll effects, 3D testimonial carousel, glass morphism design, and multilingual support.",
      technologies: ["React", "GSAP", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      highlights: ["GSAP animations", "3D carousel", "Multilingual"]
    },
    {
      id: 4,
      title: "SkyRoute - 3D Mobile Game",
      description: "A 3D mobile game featuring custom-modelled city environment with 50+ assets and animated drone mechanics. Complete UI/UX system optimized for mobile-first interactions.",
      technologies: ["Unity", "Blender", "C#", "Mobile UI"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      highlights: ["50+ 3D assets", "40% faster load times", "Mobile optimized"]
    }
  ],

  skills: {
    animation: [
      { name: "GSAP", level: 95 },
      { name: "Three.js", level: 90 },
      { name: "React Three Fiber", level: 85 },
      { name: "WebGL", level: 80 }
    ],
    frontend: [
      { name: "React.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Tailwind CSS", level: 90 }
    ],
    design: [
      { name: "Blender", level: 85 },
      { name: "Unity", level: 80 },
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 85 }
    ],
    tools: [
      { name: "Firebase", level: 80 },
      { name: "Git", level: 85 },
      { name: "Vite", level: 85 },
      { name: "Django", level: 70 }
    ]
  },

  gallery: [
    {
      id: 1,
      title: "3D Character Model",
      type: "3d",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
      description: "Low-poly character design for mobile game"
    },
    {
      id: 2,
      title: "Abstract Digital Art",
      type: "art",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop",
      description: "Procedural abstract composition"
    },
    {
      id: 3,
      title: "City Environment",
      type: "3d",
      image: "https://images.unsplash.com/photo-1619641805634-4c3b7ddf23e8?w=800&h=600&fit=crop",
      description: "Modular city assets for game development"
    },
    {
      id: 4,
      title: "Geometric Patterns",
      type: "art",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=600&fit=crop",
      description: "Generative art using code"
    },
    {
      id: 5,
      title: "Animated Logo Concept",
      type: "art",
      image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&h=600&fit=crop",
      description: "Motion graphics design"
    },
    {
      id: 6,
      title: "3D Product Mockup",
      type: "3d",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      description: "Product visualization"
    }
  ]
};
