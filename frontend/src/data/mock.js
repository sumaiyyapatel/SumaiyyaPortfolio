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
      degree: "Master of Science in Computer Applications (MSc CA)",
      institution: "Symbiosis Institute of Computer Studies and Research",
      location: "Pune, MH",
      year: "2023-2025"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "Dr. Ambedkar College",
      location: "Nagpur, MH",
      year: "2020-2023"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "HTML",
      issuer: "Codecademy",
      year: "2023"
    },
    {
      id: 2,
      name: "CSS",
      issuer: "Codecademy",
      year: "2023"
    },
    {
      id: 3,
      name: "JavaScript",
      issuer: "Codecademy",
      year: "2023"
    },
    {
      id: 4,
      name: "Java",
      issuer: "Codecademy",
      year: "2023"
    },
    {
      id: 5,
      name: "Bootstrap",
      issuer: "Codecademy",
      year: "2023"
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
        "Designed custom Firebase CMS for dynamic content management with real-time updates and image handling",
        "Created multilingual interface with smooth animations and mobile-optimized interactions"
      ]
    },
    {
      id: 2,
      role: "3D Design & Frontend Intern",
      company: "Inficom Solutions Pvt. Ltd.",
      period: "Dec 2024 – May 2025",
      responsibilities: [
        "Developed SkyRoute, a 3D mobile game in Unity with custom-modeled city environment of 50+ assets and animated drone mechanics",
        "Designed complete UI/UX system across 6 game screens focusing on intuitive mobile-first interactions",
        "Optimized 3D assets in Blender, reducing load times by 40% while maintaining visual quality"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "3D Interactive Portfolio",
      description: "Built immersive 3D explorable portfolio with smooth camera transitions, hover glow animations, and bloom post-processing, optimized for 60fps.",
      technologies: ["Three.js", "React Three Fiber", "WebGL", "GSAP"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      highlights: ["60fps performance", "Interactive 3D environment", "Advanced post-processing"]
    },
    {
      id: 2,
      title: "TrackItAll: Student Performance Dashboard",
      description: "Developed comprehensive dashboard with real-time data visualization and interactive charts for attendance and performance analytics. Collaborated on user-centric wireframes and enhanced UX through iterative feedback.",
      technologies: ["React.js", "Chart.js", "Django", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      highlights: ["Real-time analytics", "Interactive charts", "User-centric design", "Performance tracking"]
    },
    {
      id: 3,
      title: "Tech-Store: E-commerce Platform",
      description: "Built a fully responsive e-commerce website optimized for user experience including product filtering, cart management, and checkout flow. Developed accessible web interfaces following modern design principles and FAQ system.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      highlights: ["Responsive design", "Cart management", "Accessible interfaces", "Modern UI/UX"]
    }
  ],

  skills: {
    languages: [
      { name: "JavaScript (ES6+)", level: 95, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", level: 90, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", level: 90, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Python", level: 85, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", level: 80, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", level: 80, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ],
    frontend: [
      { name: "React.js", level: 90, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", level: 85, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Bootstrap", level: 90, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
      { name: "Tailwind CSS", level: 85, logoURL: "https://www.svgrepo.com/show/374118/tailwind.svg" }
    ],
    animation: [
      { name: "GSAP", level: 90, logoURL: "https://svgstack.com/media/img/gsap-logo-dNe6788698.webp" },
      { name: "Three.js", level: 85, logoURL: "https://icon.icepanel.io/Technology/png-shadow-512/Three.js.png" },
      { name: "React Three Fiber", level: 85, logoURL: "https://www.svgrepo.com/show/374034/reacttemplate.svg" },
      { name: "WebGL", level: 80, logoURL: "https://www.svgrepo.com/show/306956/webgl.svg" },
      { name: "Blender", level: 80, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
      { name: "Unity", level: 80, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" }
    ],
    tools: [
      { name: "Firebase", level: 85, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Git & GitHub", level: 90, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Vite", level: 85, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
      { name: "Figma", level: 85, logoURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
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
