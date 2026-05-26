import React, { useState } from 'react';
import { ExternalLink, Github, Folder, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import protectLifeSciences from "../assets/protectlifesciences.jpeg";
import Prote from "../assets/Protect LLC Logo (1).png";
import pleux from "../assets/Pleux.jpeg";
type Project = {
  title: string;
  description: string;
  image: string;
  
  technologies: string[];
  github: string;
  live: string;
};

const projects = [
 
  {
    title: 'Pleux Business Ecommerce Website',
    description:
      'Developed and deployed a modern ecommerce business platform with a scalable React frontend and Firebase-powered backend services. Focused on responsive UI/UX, optimized website performance, secure authentication workflows, and seamless custom domain deployment for production-ready business operations.',
    image:
      pleux,
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Firebase',
      'Vercel',
      'Responsive Design',
      'Authentication',
      'GoDaddy',
    ],
    github: '',
    live: 'https://www.pleux.in/',
  },

  {
    title: 'Protect Life Sciences India',
    description:
      'Designed and developed a professional healthcare and pharmaceutical company website focused on responsive performance, modern branding, SEO optimization, and scalable frontend architecture. Integrated production deployment workflows and optimized the platform for cross-device accessibility.',
    image: protectLifeSciences,
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Firebase',
      'Vercel',
      'SEO Optimization',
      'Responsive Design',
    ],
    github: '',
    live: 'https://protectlifesciences.in/',
  },

  {
    title: 'Poona Enterprises Business Website',
    description:
      'Built a dynamic business website with Sanity CMS integration, enabling seamless content management and real-time client-side updates. Developed a clean and professional UI with scalable frontend architecture and optimized content delivery workflows.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    technologies: [
      'React.js',
      'Sanity CMS',
      'Tailwind CSS',
      'Dynamic Routing',
      'Vercel',
      'CMS Integration',
    ],
    github: '',
    live: 'https://poonaenterprises.in',
  },

  {
    title: 'BingeFlix – Streaming Platform',
    description:
      'Engineered a modern movie streaming platform inspired by Netflix with secure authentication, protected routes, responsive layouts, and optimized frontend performance. Implemented user-focused UI/UX with scalable architecture and seamless Firebase authentication workflows.',
    image:
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800',
    technologies: [
      'React.js',
      'Firebase Authentication',
      'Tailwind CSS',
      'Node.js',
      'Responsive UI',
      'Protected Routes',
    ],
    github: 'https://github.com/rahimshai/BingeFlix',
    live: '',
  },

  {
    title: 'Kubernetes & Argo CD DevOps Deployment',
    description:
      'Implemented a scalable DevOps infrastructure using Kubernetes, Docker, AWS EC2, and Argo CD to automate application deployment workflows. Configured CI/CD pipelines, container orchestration, infrastructure scalability, and production-grade deployment automation.',
    image:
      'https://i.pinimg.com/736x/c9/72/3b/c9723bae931c20d9aa69848f46066e4c.jpg?auto=format&fit=crop&q=80&w=800',
    technologies: [
      'AWS EC2',
      'Docker',
      'Kubernetes',
      'Argo CD',
      'CI/CD',
      'DevOps',
      'Containerization',
    ],
    github: 'https://github.com/rahimshai',
    live: '',
  },

  {
    title: 'Protect Life Sciences LLC UAE',
    description:
      'Designed and developed a premium pharmaceutical and healthcare business website for a UAE-based company with a strong focus on modern UI/UX, responsive performance, SEO optimization, and scalable frontend architecture. Implemented dynamic product showcase sections, WhatsApp integration, fast-loading pages, and production-grade deployment with custom domain configuration.',
    image: Prote,
    technologies: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'JavaScript',
      'Responsive Design',
      'SEO Optimization',
      'Vercel',
      'GitHub',
    ],
    live: 'https://protectlifesciencesllc.ae',
    github:
      'https://github.com/protectllcuae-gif/protectlifesciencescuae',
  },

  {
    title: 'Safa Cyber Point – Digital Services Platform',
    description:
      'Created a modern digital services platform delivering government and private online services through a responsive and mobile-first interface. Integrated WhatsApp support workflows and optimized accessibility for seamless user interaction across devices.',
    image:
      'https://img.freepik.com/free-vector/digital-services-abstract-concept_335657-3120.jpg?auto=format&fit=crop&q=80&w=800',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'WhatsApp API',
      'Responsive Design',
      'Modern UI/UX',
    ],
    github: 'https://github.com/rahimshai/Safa-cafe',
    live: 'https://safa-cafe.vercel.app/',
  },

  {
    title: 'Kara Messenger – Real-Time Chat Application',
    description:
      'Developed a full-featured real-time messaging platform with modern chat functionality, responsive UI, and scalable frontend architecture. Implemented seamless communication workflows with optimized user experience and clean interface design.',
    image:
      'https://static.vecteezy.com/system/resources/previews/006/113/471/non_2x/chat-app-speech-bubble-logo-design-illustration-free-vector.jpg?auto=format&fit=crop&q=80&w=800',
    technologies: [
      'React',
      'Node.js',
      'Chat Engine',
      'Tailwind CSS',
      'Real-Time Messaging',
      'Responsive UI',
    ],
    github: 'https://github.com/rahimshai',
    live: 'https://github.com/rahimshai',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-slate-900/40 relative border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-[#cc73f8]/10 border border-[#cc73f8]/20 px-3 py-1 rounded-full text-xs font-semibold text-[#cc73f8] mb-3"
          >
            <Folder className="w-3.5 h-3.5" />
            <span>My Works</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#cc73f8] to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Staggered Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group bg-slate-950/70 rounded-2xl overflow-hidden border border-white/5 hover:border-[#cc73f8]/30 shadow-lg hover:shadow-2xl hover:shadow-[#cc73f8]/5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image Cover */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-[#0b0f19]/30 z-10 group-hover:bg-transparent transition-colors duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#cc73f8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#cc73f8]/10 text-[#cc73f8] text-xs font-semibold px-2.5 py-1 rounded-md border border-[#cc73f8]/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="flex space-x-6 border-t border-white/5 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center text-sm font-semibold text-gray-400 hover:text-[#cc73f8] transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center text-sm font-semibold text-gray-400 hover:text-[#cc73f8] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col"
            >
              {/* Modal Image Cover */}
              <div className="relative h-64 sm:h-80 w-full shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-[#cc73f8] text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  {selectedProject.title}
                </h3>
                
                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#cc73f8]/10 text-[#cc73f8] text-sm font-semibold px-3 py-1 rounded-md border border-[#cc73f8]/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 whitespace-pre-wrap">
                  {selectedProject.description}
                </div>

                {/* Footer buttons */}
                <div className="flex space-x-6 border-t border-white/10 pt-6">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-semibold text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-[#cc73f8] hover:bg-purple-500 rounded-lg text-sm font-semibold text-white transition-colors shadow-lg shadow-[#cc73f8]/20"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
