import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data/mock';
import { Mail, Linkedin, Github, Phone, MapPin, Copy, CheckCircle } from 'lucide-react';

const FunContact = () => {
  const sectionRef = useRef(null);
  const [copiedStates, setCopiedStates] = React.useState({});

  useEffect(() => {
    const shapes = sectionRef.current.querySelectorAll('.float-shape');
    shapes.forEach((shape, i) => {
      gsap.to(shape, {
        y: '+=50',
        rotation: '+=20',
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });
  }, []);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    });
  };

  const openEmail = () => {
    window.location.href = `mailto:${portfolioData.hero.email}`;
  };

  const openPhone = () => {
    window.location.href = `tel:${portfolioData.hero.phone}`;
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-[#9D4EDD] to-[#00D4FF] py-32 px-6 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="float-shape absolute top-20 left-10 w-32 h-32 bg-[#FFD23F] rounded-full opacity-60"></div>
      <div className="float-shape absolute top-40 right-20 w-24 h-24 bg-[#FF6B35] rotate-45 opacity-70"></div>
      <div className="float-shape absolute bottom-32 left-1/4 w-40 h-40 border-8 border-white rounded-full opacity-50"></div>
      <div className="float-shape absolute bottom-20 right-10 w-36 h-36 bg-[#06FFA5] rounded-lg rotate-12 opacity-60"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-8xl md:text-[12rem] font-black text-white mb-8 leading-none">
            LET'S CHAT!
          </h2>
          <p className="text-4xl font-bold text-white">
            Got a cool project? Let's make it <span className="bg-[#FFD23F] text-black px-4 py-2 inline-block -rotate-2">AMAZING</span>!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="bg-white rounded-3xl p-8 border-4 border-black transform hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black mb-2">EMAIL ME</div>
                  <div className="text-lg font-bold text-gray-600 break-all">
                    {portfolioData.hero.email}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={openEmail}
                className="flex-1 px-6 py-3 bg-black text-white text-lg font-black rounded-full hover:scale-105 transition-all duration-300"
              >
                SEND EMAIL
              </button>
              <button
                onClick={() => copyToClipboard(portfolioData.hero.email, 'email')}
                className="px-6 py-3 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition-all duration-300"
                title="Copy email"
              >
                {copiedStates.email ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-8 border-4 border-black transform hover:scale-105 hover:-rotate-2 transition-all duration-300 shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#00D4FF] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black mb-2">CALL ME</div>
                  <div className="text-lg font-bold text-gray-600">
                    {portfolioData.hero.phone}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={openPhone}
                className="flex-1 px-6 py-3 bg-black text-white text-lg font-black rounded-full hover:scale-105 transition-all duration-300"
              >
                CALL NOW
              </button>
              <button
                onClick={() => copyToClipboard(portfolioData.hero.phone, 'phone')}
                className="px-6 py-3 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition-all duration-300"
                title="Copy phone"
              >
                {copiedStates.phone ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white rounded-3xl p-8 border-4 border-black transform hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#0077B5] rounded-full flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black mb-2">LINKEDIN</div>
                  <div className="text-lg font-bold text-gray-600">
                    Connect with me
                  </div>
                </div>
              </div>
            </div>
            <a
              href={portfolioData.hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-black text-white text-lg font-black rounded-full hover:scale-105 transition-all duration-300 text-center"
            >
              VIEW PROFILE
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bg-white rounded-3xl p-8 border-4 border-black transform hover:scale-105 hover:-rotate-2 transition-all duration-300 shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Github className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black mb-2">GITHUB</div>
                  <div className="text-lg font-bold text-gray-600">
                    Check my code
                  </div>
                </div>
              </div>
            </div>
            <a
              href={portfolioData.hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-black text-white text-lg font-black rounded-full hover:scale-105 transition-all duration-300 text-center"
            >
              VIEW REPOS
            </a>
          </div>
        </div>

        {/* Location Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-6 rounded-3xl border-4 border-black shadow-2xl">
            <MapPin className="w-8 h-8 text-[#FF6B35]" />
            <div className="text-left">
              <div className="text-sm font-bold text-gray-600">BASED IN</div>
              <div className="text-2xl font-black">Nagpur, Maharashtra, India</div>
            </div>
          </div>
        </div>

        {/* Fun Quote */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-black text-white px-12 py-8 rounded-3xl transform -rotate-2 shadow-2xl max-w-2xl">
            <p className="text-3xl md:text-4xl font-black leading-tight">
              "I believe in creating experiences that are not just functional, but emotionally engaging and memorable." ✨
            </p>
            <p className="text-[#FFD23F] mt-6 text-2xl font-bold">- Sumaiyya Patel</p>
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="mt-16 flex justify-center gap-6 flex-wrap">
          <a
            href={portfolioData.hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-[#0077B5] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-xl"
            title="LinkedIn"
          >
            <Linkedin className="w-8 h-8 text-white" />
          </a>
          <a
            href={portfolioData.hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-xl"
            title="GitHub"
          >
            <Github className="w-8 h-8 text-white" />
          </a>
          <button
            onClick={openEmail}
            className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-xl"
            title="Email"
          >
            <Mail className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={openPhone}
            className="w-16 h-16 bg-[#00D4FF] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-xl"
            title="Phone"
          >
            <Phone className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Download Resume CTA: use anchor to reliably open in new tab */}
        <div className="mt-16 text-center">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-6 bg-[#FFD23F] text-black text-2xl font-black rounded-full border-4 border-black hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-2xl"
          >
            📄 DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default FunContact;