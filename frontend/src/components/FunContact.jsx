import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  FileText,
  MessageCircle,
} from "lucide-react";

const FunContact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const shapes = gsap.utils.toArray(".float-shape");
      shapes.forEach((shape) => {
        const randomY = gsap.utils.random(40, 90);
        const randomRotation = gsap.utils.random(10, 25);
        const randomDuration = gsap.utils.random(5, 8);
        const randomDelay = gsap.utils.random(0, 2);

        gsap.to(shape, {
          y: `+=${randomY}`,
          rotation: `+=${randomRotation}`,
          duration: randomDuration,
          delay: randomDelay,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#9D4EDD] to-[#00D4FF] px-6 py-32 relative overflow-hidden text-center"
    >
      {/* Floating background shapes */}
      <div className="float-shape absolute top-20 left-10 w-40 h-40 bg-[#FFD23F] rounded-full opacity-50"></div>
      <div className="float-shape absolute bottom-20 right-10 w-48 h-48 bg-[#FF6B35] rounded-full opacity-40"></div>
      <div className="float-shape absolute top-1/3 right-1/4 w-32 h-32 bg-[#06FFA5] rounded-lg rotate-12 opacity-60"></div>

      {/* Heading */}
      <h2 className="text-6xl sm:text-8xl md:text-[10rem] font-black text-white leading-none mb-10">
        LET’S CHAT!
      </h2>
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-16 max-w-3xl">
        Got a cool project? Let’s make it{" "}
        <span className="bg-[#FFD23F] text-black px-4 py-2 inline-block -rotate-2">
          AMAZING
        </span>
        !
      </p>

      {/* Contact Icons */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-14 relative z-10">
        {/* WhatsApp */}
        <a
          href="https://wa.me/917888000365?text=Hey%20Sumaiyya!%20Loved%20your%20portfolio%20and%20wanted%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-24 h-24 md:w-28 md:h-28 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-2xl"
          title="WhatsApp"
        >
          <MessageCircle className="w-12 h-12 text-white" />
        </a>

        {/* Email */}
        <a
          href="mailto:smahinn1@gmail.com"
          className="w-24 h-24 md:w-28 md:h-28 bg-[#FF6B35] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-2xl group"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:smahinn1@gmail.com?subject=Portfolio Inquiry";
          }}
          title="Send me an email"
        >
          <Mail className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
        </a>

        {/* Phone */}
        <a
          href="tel:+917888000365"
          className="w-24 h-24 md:w-28 md:h-28 bg-[#00D4FF] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-2xl"
          title="Call"
        >
          <Phone className="w-12 h-12 text-white" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/sumaiyyapatel"
          target="_blank"
          rel="noopener noreferrer"
          className="w-24 h-24 md:w-28 md:h-28 bg-[#0077B5] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-2xl"
          title="LinkedIn"
        >
          <Linkedin className="w-12 h-12 text-white" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sumaiyyapatel"
          target="_blank"
          rel="noopener noreferrer"
          className="w-24 h-24 md:w-28 md:h-28 bg-black rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-2xl"
          title="GitHub"
        >
          <Github className="w-12 h-12 text-white" />
        </a>

        {/* Resume */}
        <a
          href={process.env.PUBLIC_URL + '/resume.pdf'}
          download="Sumaiyya_Patel_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-24 h-24 md:w-28 md:h-28 bg-[#FFD23F] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-2xl group"
          title="Download Resume"
        >
          <FileText className="w-12 h-12 text-black group-hover:scale-110 transition-transform" />
        </a>

      </div>

      {/* Quote */}
      <div className="mt-20 inline-block bg-black text-white px-10 py-8 rounded-3xl transform -rotate-2 shadow-2xl max-w-2xl">
        <p className="text-2xl md:text-3xl font-black leading-tight">
          "Design isn’t just how it looks — it’s how it makes people feel." ✨
        </p>
        <p className="text-[#FFD23F] mt-4 text-xl font-bold">- Sumaiyya Patel</p>
      </div>
    </div>
  );
};

export default FunContact;
