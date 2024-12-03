import React, { useState } from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 px-6">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center rounded-full bg-gray-900/60 backdrop-blur-lg py-3 px-6 shadow-lg border border-gray-800">
          <div className="text-xl font-bold text-white">Rahim Shaikh</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-[#cc73f8] transition-colors px-4 py-2 rounded-full hover:bg-gray-800">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-[#cc73f8] transition-colors px-4 py-2 rounded-full hover:bg-gray-800">
              Projects
            </a>
            <a href="#skills" className="text-gray-300 hover:text-[#cc73f8] transition-colors px-4 py-2 rounded-full hover:bg-gray-800">
              Skills
            </a>
            <a href="#contact" className="text-gray-300 hover:text-[#cc73f8] transition-colors px-4 py-2 rounded-full hover:bg-gray-800">
              Contact
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/rahimshai" className="text-gray-300 hover:text-[#cc73f8] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="linkedin.com/in/rahim-shaikh-02b343194" className="text-gray-300 hover:text-[#cc73f8] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="shaikhrahim882@gmail.com" className="text-gray-300 hover:text-[#cc73f8] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Hamburger Button for Mobile */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu - Side by Side Layout */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/60 backdrop-blur-lg py-2 space-x-4 flex justify-between items-center rounded-full">
          <a href="#about" className="text-gray-300 hover:text-[#cc73f8] transition-colors px-4 py-2 rounded-full hover:bg-gray-800">
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-[#cc73f8] transition-colors px-4 py-2 rounded-full hover:bg-gray-800">
            Projects
          </a>
          <a href="#skills" className="text-gray-300 hover:text-[#cc73f8] transition-colors px-4 py-2 rounded-full hover:bg-gray-800">
            Skills
          </a>
          <a href="#contact" className="text-gray-300 hover:text-[#cc73f8] transition-colors px-4 py-2 rounded-full hover:bg-gray-800">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
