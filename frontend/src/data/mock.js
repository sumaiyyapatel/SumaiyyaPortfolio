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
    technologies: ["Three.js", "React Three Fiber", "WebGL", "GSAP", "Vite"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1619641805634-4c3b7ddf23e8?w=800&h=600&fit=crop"
    ],
    highlights: [
      "60fps performance optimization across all devices",
      "Interactive 3D environment with physics-based interactions",
      "Advanced post-processing effects including bloom and depth of field",
      "Mobile-responsive touch controls",
      "Custom shader materials for unique visual effects"
    ],
    liveUrl: "https://sumaiyyapatel.github.io",
    githubUrl: "https://github.com/sumaiyyapatel/3d-portfolio",
    date: "October 2024",
    team: "Solo Project",
    category: "3D Web Experience",
    longDescription: "This project pushes the boundaries of web-based 3D experiences by creating a fully interactive portfolio environment. Built with Three.js and React Three Fiber, it features smooth camera transitions, dynamic lighting, and advanced post-processing effects including bloom and depth of field. The entire experience is optimized to maintain 60fps even on mobile devices through careful asset management and efficient rendering techniques."
  },
  {
    id: 2,
    title: "TrackItAll: Student Performance Dashboard",
    description: "Developed comprehensive dashboard with real-time data visualization and interactive charts for attendance and performance analytics.",
    technologies: ["React.js", "Chart.js", "Django", "Bootstrap", "REST API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop"
    ],
    highlights: [
      "Real-time analytics with live data updates",
      "Interactive charts and data visualization using Chart.js",
      "User-centric design based on iterative feedback",
      "Performance tracking across multiple metrics",
      "Responsive dashboard layout for all devices"
    ],
    liveUrl: "https://sumaiyyapatel.github.io/TrackitAll-Student/",
    githubUrl: "https://github.com/sumaiyyapatel/trackitall",
    date: "August 2024",
    team: "3-Person Team",
    category: "Web Application",
    longDescription: "TrackItAll is a comprehensive student performance management system that provides real-time insights into attendance patterns and academic performance. The dashboard features interactive data visualizations built with Chart.js, allowing educators to quickly identify trends and areas needing attention. Collaborated closely with stakeholders to develop user-centric wireframes and continuously enhanced the UX through iterative feedback cycles. The system handles large datasets efficiently while maintaining a smooth, responsive interface."
  },
  {
    id: 3,
    title: "Abid Refrigeration & Engineering Pvt. Ltd. Website",
    disabled: true,
    description: "Built an animated 5-page React website with GSAP scroll effects, 3D testimonial carousel, and glass morphism UI — transforming their online presence from basic to bold.",
    technologies: ["React.js", "GSAP", "Firebase", "Framer Motion", "Multi-language support"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    ],
    highlights: [
      "GSAP scroll triggered animations enhancing UX",
      "3D testimonial carousel creating dynamic user engagement",
      "Glassmorphism design providing modern UI aesthetic",
      "Custom Firebase CMS with real-time content updates and multilingual support",
      "Mobile and tablet friendly responsive design"
    ],
    liveUrl: "https://abid-refrigeration.com",
    githubUrl: "https://github.com/sumaiyyapatel/abid-refrigeration-website",
    date: "Sept 2025 - Oct 2025",
    team: "Solo Project",
    category: "Business Website",
    longDescription: "This project involved developing a visually striking and highly interactive React website for Abid Refrigeration & Engineering Pvt. Ltd. Utilizing GSAP for smooth scroll animations and Framer Motion for engaging transitions, the site features a 3D testimonial carousel and modern glassmorphism UI design. Real-time content management was enabled through a custom Firebase CMS, supporting multilingual content. The site is fully responsive across devices, transforming the client’s web presence from simple to bold."
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