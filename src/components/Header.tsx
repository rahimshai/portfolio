import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 px-6 pt-6 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav 
          className={`flex justify-between items-center rounded-full py-3.5 px-6 shadow-xl border transition-all duration-300 ${
            isScrolled 
              ? 'glass-nav bg-[#0b0f19]/75 border-[#cc73f8]/20 shadow-[#cc73f8]/5' 
              : 'glass-panel bg-slate-950/40 border-white/5'
          }`}
        >
          <div className="text-xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-[#cc73f8] bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
            Rahim Shaikh
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            <a href="#about" className="text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all duration-300 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium">
              About
            </a>
            <a href="#experience" className="text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all duration-300 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium">
              Experience
            </a>
            <a href="#services" className="text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all duration-300 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium">
              Services
            </a>
            <a href="#projects" className="text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all duration-300 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium">
              Projects
            </a>
            <a href="#skills" className="text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all duration-300 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium">
              Skills
            </a>
            <a href="#contact" className="text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all duration-300 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="https://github.com/rahimshai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#cc73f8] hover:scale-110 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/rahim-shaikh-02b343194/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#cc73f8] hover:scale-110 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:shaikhrahim882@gmail.com" className="text-gray-400 hover:text-[#cc73f8] hover:scale-110 transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Hamburger Button for Mobile */}
          <button className="md:hidden text-white hover:text-[#cc73f8] transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-transparent -z-10 md:hidden" 
            onClick={() => setIsMenuOpen(false)} 
          />
          <div className="relative md:hidden mt-3 px-4 py-4 space-y-2 flex flex-col items-center rounded-2xl glass-card bg-[#0b0f19]/90 border-[#cc73f8]/10 animate-fade-in shadow-2xl">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all py-2 rounded-xl font-medium">
            About
          </a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all py-2 rounded-xl font-medium">
            Experience
          </a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all py-2 rounded-xl font-medium">
            Services
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all py-2 rounded-xl font-medium">
            Projects
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all py-2 rounded-xl font-medium">
            Skills
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-gray-300 hover:text-[#cc73f8] hover:bg-[#cc73f8]/10 transition-all py-2 rounded-xl font-medium">
            Contact
          </a>
          <div className="flex space-x-6 pt-2 border-t border-white/5 w-full justify-center">
            <a href="https://github.com/rahimshai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#cc73f8]">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/rahim-shaikh-02b343194/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#cc73f8]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:shaikhrahim882@gmail.com" className="text-gray-400 hover:text-[#cc73f8]">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        </>
      )}
    </header>
  );
}
