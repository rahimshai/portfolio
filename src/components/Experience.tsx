import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    period: 'Jul 2024 - 2026',
    description: 'Specializing in building modern, scalable, and secure web applications for business clients.',
    achievements: [
      'Developed modern client websites from scratch using React.js and Tailwind CSS.',
      'Managed end-to-end deployment, hosting, and CI/CD pipelines.',
      'Configured custom domains, SSL certificates, and DNS mappings.',
      'Integrated Firebase and Sanity CMS for dynamic client content management.',
      'Delivered highly scalable responsive applications with perfect Lighthouse scores.'
    ]
  },
  {
    role: 'DevOps & Cloud Architect (Freelance)',
    company: 'Various Clients',
    period: 'Jul 2024 - 2026',
    description: 'Providing robust infrastructure setups and automated deployment pipelines for growing startups.',
    achievements: [
      'Automated containerized application deployments using Docker and Kubernetes.',
      'Orchestrated continuous delivery pipelines with Argo CD and GitHub Actions.',
      'Provisioned and optimized AWS EC2 instances for high availability.',
      'Monitored application health and metrics to ensure zero downtime.',
    ]
  },
  {
    role: 'Jr Java Intern',
    company: 'Rigel Software Solutions',
    period: 'Jul 2023 - Jun 2024',
    description: 'Worked on backend enterprise solutions and honed foundational software engineering practices.',
    achievements: [
      'Developed and maintained backend services using Java and Spring.',
      'Assisted in the optimization of database queries and API endpoints.',
      'Collaborated with senior developers to implement new features and resolve bugs.',
      'Participated in code reviews and agile development workflows.'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-[#cc73f8]/10 border border-[#cc73f8]/20 px-3 py-1 rounded-full text-xs font-semibold text-[#cc73f8] mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>My Journey</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Professional Experience
          </motion.h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#cc73f8] to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-[#cc73f8]/20" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#cc73f8] shadow-[0_0_15px_rgba(204,115,248,0.6)] z-10" />

              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-xl hover:border-[#cc73f8]/30 transition-colors duration-300">
                  <span className="inline-block py-1 px-3 rounded-full bg-[#cc73f8]/10 text-[#cc73f8] text-sm font-semibold mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-gray-400 font-medium mb-4">{exp.company}</h4>
                  
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`flex items-start text-sm text-gray-400 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                        {index % 2 === 0 || window.innerWidth < 768 ? (
                           <CheckCircle2 className="w-4 h-4 text-[#cc73f8] mr-3 mt-0.5 shrink-0" />
                        ) : null}
                        <span className={index % 2 !== 0 ? 'md:text-right' : ''}>{achievement}</span>
                        {index % 2 !== 0 && window.innerWidth >= 768 ? (
                           <CheckCircle2 className="w-4 h-4 text-[#cc73f8] ml-3 mt-0.5 shrink-0" />
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
