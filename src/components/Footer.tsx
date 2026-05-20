import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold text-white bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Rahim Shaikh</h3>
            <p className="text-gray-500 text-sm font-medium mt-1">Full-Stack Developer & DevOps Engineer</p>
          </div>
          
          <div className="flex space-x-6">
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
        </div>
        <div className="mt-8 text-center text-gray-600 text-xs tracking-wider border-t border-white/5 pt-8">
          © {new Date().getFullYear()} Rahim Shaikh. Crafted with React & Tailwind.
        </div>
      </div>
    </footer>
  );
}