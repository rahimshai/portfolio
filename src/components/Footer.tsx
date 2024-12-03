import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white">Rahim Shaikh</h3>
            <p className="text-gray-400">A programmer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/rahimshai" className="text-gray-400 hover:text-[#cc73f8] transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="linkedin.com/in/rahim-shaikh-02b343194" className="text-gray-400 hover:text-[#cc73f8] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="shaikhrahim882@gmail.com" className="text-gray-400 hover:text-[#cc73f8] transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Rahim Shaikh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}