import React, { useEffect, useRef } from 'react';
import ScrollSection from '../ScrollSection';
import { portfolioData } from '../../data/mock';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import gsap from 'gsap';

const ContactSection = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const inputs = formRef.current?.querySelectorAll('input, textarea');
    
    inputs?.forEach((input) => {
      input.addEventListener('focus', (e) => {
        gsap.to(e.target, {
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      input.addEventListener('blur', (e) => {
        gsap.to(e.target, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (mock for now)
    alert('Message sent! (This is a mock - integrate with backend later)');
  };

  return (
    <ScrollSection id="contact" className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#0f0f10] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div data-parallax className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get In <span className="text-[#00d4ff]">Touch</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on something amazing. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-parallax className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-[#00d4ff] bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                <Mail className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <a href={`mailto:${portfolioData.hero.email}`} className="text-gray-400 hover:text-[#00d4ff] transition-colors">
                  {portfolioData.hero.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-[#00ffcc] bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                <Phone className="w-6 h-6 text-[#00ffcc]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Phone</h4>
                <a href={`tel:${portfolioData.hero.phone}`} className="text-gray-400 hover:text-[#00ffcc] transition-colors">
                  {portfolioData.hero.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-[#00d4ff] bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                <a href={portfolioData.hero.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
                  View Profile
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-[#00ffcc] bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                <Github className="w-6 h-6 text-[#00ffcc]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">GitHub</h4>
                <a href={portfolioData.hero.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ffcc] transition-colors">
                  View Repositories
                </a>
              </div>
            </div>

            {/* Decorative 3D element placeholder */}
            <div className="mt-12 p-8 bg-gradient-to-br from-[#00d4ff] to-[#00ffcc] bg-opacity-5 rounded-2xl border border-[#00d4ff] border-opacity-20">
              <p className="text-gray-300 italic">
                "I believe in creating experiences that are not just functional, but emotionally engaging and memorable."
              </p>
              <p className="text-[#00d4ff] mt-4 font-semibold">- Sumaiyya Patel</p>
            </div>
          </div>

          {/* Contact Form */}
          <div data-parallax>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#00d4ff] border-opacity-20 rounded-lg text-white focus:border-opacity-60 focus:outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#00d4ff] border-opacity-20 rounded-lg text-white focus:border-opacity-60 focus:outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#00d4ff] border-opacity-20 rounded-lg text-white focus:border-opacity-60 focus:outline-none transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#00d4ff] border-opacity-20 rounded-lg text-white focus:border-opacity-60 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default ContactSection;
