import React from 'react';
import { Code2, Database, Layout, Settings, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux']
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML/CSS']
  },
  {
    title: 'Tools & Technologies',
    icon: Settings,
    skills: ['Git', 'Docker', 'AWS', 'GitHub', 'CI/CD']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-[#cc73f8]/10 border border-[#cc73f8]/20 px-3 py-1 rounded-full text-xs font-semibold text-[#cc73f8] mb-3"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>My Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Skills & Expertise
          </motion.h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#cc73f8] to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-[#cc73f8]/30 shadow-md hover:shadow-xl hover:shadow-[#cc73f8]/5 transition-all duration-300 flex flex-col h-full"
              >
                {/* Header Section */}
                <div className="flex items-center mb-6">
                  <div className="p-2.5 rounded-xl bg-[#cc73f8]/10 border border-[#cc73f8]/20 group-hover:bg-[#cc73f8] group-hover:text-white transition-all duration-300 text-[#cc73f8] mr-3">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#cc73f8] transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Bullet List */}
                <ul className="space-y-3.5 flex-grow">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#cc73f8] rounded-full mr-3 shadow-md shadow-[#cc73f8]/50 group-hover:scale-125 transition-transform"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
