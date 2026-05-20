import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle, RefreshCw, FileText, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import logo from './profil.png';
import Resume from './Resumep.pdf';
import './Hero.css';

export function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section
      id="about"
      className="hero-section"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/736x/08/70/c0/0870c06d6a0b9fe7eff0894ae02d9f46.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>

      {/* Main Content */}
      <div className="hero-content grid lg:grid-cols-12 gap-12 w-full max-w-6xl relative z-10 px-6">
        
        {/* Left Column: Bio Text */}
        <motion.div 
          className="text-section lg:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Accent Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-[#cc73f8]/15 border border-[#cc73f8]/30 px-4 py-1.5 rounded-full text-xs font-semibold text-[#cc73f8] w-fit mb-6 shadow-sm shadow-[#cc73f8]/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            <span>Available for Opportunities</span>
          </motion.div>

          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-6">
            Hi, It's <span className="bg-gradient-to-r from-[#cc73f8] via-purple-400 to-pink-500 bg-clip-text text-transparent">Rahim Shaikh</span>
            <span className="block text-2xl sm:text-3xl font-medium text-slate-300 mt-2">
              Full-Stack Developer & DevOps Engineer
            </span>
          </h1>

          <p className="hero-description text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            I build scalable, modern, and production-ready web applications for businesses and startups.
          </p>

          {/* Button Group */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-[#cc73f8] to-purple-600 text-white px-6 py-3.5 rounded-xl flex items-center justify-center font-semibold hover:shadow-lg hover:shadow-[#cc73f8]/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Hire Me
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#projects"
              className="border border-white/10 bg-white/5 backdrop-blur-sm text-gray-200 px-6 py-3.5 rounded-xl flex items-center justify-center font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href={Resume}
              download="Resume"
              className="border border-[#cc73f8]/30 bg-[#cc73f8]/5 text-[#cc73f8] px-6 py-3.5 rounded-xl flex items-center justify-center font-semibold hover:bg-[#cc73f8]/10 hover:border-[#cc73f8]/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FileText className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5 items-center">
             <a href="https://github.com/rahimshai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#cc73f8] hover:scale-110 transition-all duration-300">
               <Github className="w-6 h-6" />
             </a>
             <a href="https://www.linkedin.com/in/rahim-shaikh-02b343194/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#cc73f8] hover:scale-110 transition-all duration-300">
               <Linkedin className="w-6 h-6" />
             </a>
             <a href="mailto:shaikhrahim882@gmail.com" className="text-gray-400 hover:text-[#cc73f8] hover:scale-110 transition-all duration-300">
               <Mail className="w-6 h-6" />
             </a>
             <a href="https://wa.me/918623082784" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#cc73f8] hover:scale-110 transition-all duration-300">
               <MessageCircle className="w-6 h-6" />
             </a>
          </div>
        </motion.div>

        {/* Right Column: Flipping Interactive Card */}
        <motion.div 
          className="card-container-wrapper lg:col-span-5 flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="card-container relative group">
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
              
              {/* Front Side */}
              <div className="card-front overflow-hidden border border-white/10 rounded-2xl shadow-2xl bg-slate-900/90 backdrop-blur-md">
                <img
                  src={logo}
                  alt="profile"
                  className="card-image w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Visual Glass Indicator Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-white text-2xl font-bold">Rahim Shaikh</span>
                  <span className="text-[#cc73f8] text-sm font-semibold">Double Click or Tap Flip to read Bio</span>
                </div>
              </div>

              {/* Back Side */}
              <div className="card-back overflow-hidden border border-[#cc73f8]/30 rounded-2xl shadow-2xl bg-[#0d0a1b]/95 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3 mb-4 flex items-center">
                    <HelpCircle className="w-5 h-5 text-[#cc73f8] mr-2" /> About Me
                  </h3>
                  <p className="card-description text-gray-300 text-sm leading-relaxed">
                    Results-driven Computer Applications graduate with strong skills in software development and web technologies.
                  </p>
                  <p className="card-description text-gray-300 text-sm leading-relaxed mt-3">
                    Proficient in languages like Java, Python, JavaScript, C#, and C++, and experienced with frameworks like React.js, Angular, and Node.js. Familiar with Agile, CI/CD, and Docker to optimize system performance.
                  </p>
                  <p className="card-description text-gray-300 text-sm leading-relaxed mt-3">
                    Passionate about problem-solving and delivering innovative solutions. Seeking to contribute to a dynamic organization and grow as a technical professional.
                  </p>
                </div>
                
                <span className="text-xs text-[#cc73f8]/60 italic text-right mt-4">
                  Double Click or click trigger to return
                </span>
              </div>

            </div>
          </div>

          {/* Interactive Flip trigger Button */}
          <button 
            onClick={toggleFlip}
            className="mt-6 flex items-center space-x-2 bg-slate-900/60 hover:bg-[#cc73f8]/10 text-gray-300 hover:text-[#cc73f8] border border-white/5 hover:border-[#cc73f8]/30 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md font-medium text-sm"
          >
            <RefreshCw className="w-4 h-4 animate-spin-slow" />
            <span>{isFlipped ? "View Photo" : "Read Profile Bio"}</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
