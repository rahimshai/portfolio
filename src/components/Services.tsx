import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Layout, Server, CloudCog, Globe, Database, PenTool } from 'lucide-react';

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end development of scalable, secure, and performant web applications customized to your business needs.',
    icon: Code2,
  },
  {
    title: 'Business Website Development',
    description: 'Professional, SEO-optimized business websites designed to attract clients and establish a strong online presence.',
    icon: MonitorPlay,
  },
  {
    title: 'React.js Frontend Development',
    description: 'Creating highly interactive and fluid user interfaces using modern React architecture and Tailwind CSS.',
    icon: Layout,
  },
  {
    title: 'Backend & API Development',
    description: 'Building robust, scalable server-side systems and RESTful APIs using Node.js and Express.',
    icon: Server,
  },
  {
    title: 'DevOps & CI/CD Setup',
    description: 'Automating deployment pipelines with GitHub Actions, Docker, and Kubernetes for zero-downtime releases.',
    icon: CloudCog,
  },
  {
    title: 'Deployment & Hosting',
    description: 'Configuring custom domains and managing production environments on AWS, Vercel, and Netlify.',
    icon: Globe,
  },
  {
    title: 'Firebase & MongoDB Integration',
    description: 'Implementing real-time databases, scalable cloud storage, and secure user authentication systems.',
    icon: Database,
  },
  {
    title: 'CMS Integration',
    description: 'Integrating Sanity CMS or Firebase to give you full control over your website content without writing code.',
    icon: PenTool,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900/50 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-[#cc73f8]/10 border border-[#cc73f8]/20 px-3 py-1 rounded-full text-xs font-semibold text-[#cc73f8] mb-3"
          >
            <MonitorPlay className="w-3.5 h-3.5" />
            <span>What I Do</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Professional Services
          </motion.h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#cc73f8] to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="group relative p-6 bg-slate-950/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-[#cc73f8]/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#cc73f8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#cc73f8]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#cc73f8]/20 transition-all duration-500">
                    <Icon className="w-6 h-6 text-[#cc73f8]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#cc73f8] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
