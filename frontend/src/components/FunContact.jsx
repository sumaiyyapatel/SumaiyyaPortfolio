import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data/mock';
import { Mail, Linkedin, Github, Send, Sparkles } from 'lucide-react';

const FunContact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! Message sent! 🎉`);
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <a 
              href={`mailto:${portfolioData.hero.email}`}
              className="block bg-white rounded-3xl p-8 border-4 border-black transform hover:scale-105 hover:rotate-2 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black mb-1">EMAIL ME</div>
                  <div className="text-2xl font-bold text-gray-600">{portfolioData.hero.email}</div>
                </div>
              </div>
            </a>

            <a 
              href={portfolioData.hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-3xl p-8 border-4 border-black transform hover:scale-105 hover:-rotate-2 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#00D4FF] rounded-full flex items-center justify-center">
                  <Linkedin className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black mb-1">LINKEDIN</div>
                  <div className="text-2xl font-bold text-gray-600">Connect with me</div>
                </div>
              </div>
            </a>

            <a 
              href={portfolioData.hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-3xl p-8 border-4 border-black transform hover:scale-105 hover:rotate-2 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  <Github className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black mb-1">GITHUB</div>
                  <div className="text-2xl font-bold text-gray-600">Check my code</div>
                </div>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-3xl p-12 border-4 border-black">
            <h3 className="text-4xl font-black mb-8 flex items-center gap-3">
              <Sparkles className="w-10 h-10 text-[#FFD23F]" />
              Quick Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 text-xl font-bold border-4 border-black rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#FFD23F] transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 text-xl font-bold border-4 border-black rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#FFD23F] transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell me about your awesome project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-6 py-4 text-xl font-bold border-4 border-black rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#FFD23F] transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-6 bg-black text-white text-2xl font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300"
              >
                SEND IT!
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunContact;
