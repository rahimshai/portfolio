import React from 'react';
import { motion } from 'framer-motion';
import { Server, Terminal, Cloud, ShieldCheck, Cpu } from 'lucide-react';

const devopsSkills = [
  { name: 'Docker', icon: Terminal, color: 'text-blue-400' },
  { name: 'Kubernetes', icon: Cpu, color: 'text-blue-500' },
  { name: 'AWS EC2', icon: Cloud, color: 'text-orange-400' },
  { name: 'CI/CD Pipelines', icon: Server, color: 'text-green-400' },
  { name: 'GitHub Actions', icon: ShieldCheck, color: 'text-gray-300' },
];

export function DevOps() {
  return (
    <section id="devops" className="py-24 bg-slate-900/40 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-[#cc73f8]/10 border border-[#cc73f8]/20 px-3 py-1 rounded-full text-xs font-semibold text-[#cc73f8] mb-3"
          >
            <Server className="w-3.5 h-3.5" />
            <span>Infrastructure</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            DevOps & Deployment
          </motion.h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#cc73f8] to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Scalable Cloud Architecture</h3>
            <p className="text-gray-400 leading-relaxed">
              I specialize in designing and maintaining robust deployment pipelines that ensure zero-downtime releases and high availability. By containerizing applications and leveraging cloud orchestration, I build systems that scale automatically with business needs.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              {devopsSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex flex-col items-center justify-center p-4 bg-slate-900/60 border border-white/5 rounded-xl hover:border-[#cc73f8]/30 transition-all group">
                    <Icon className={`w-8 h-8 mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs font-semibold text-gray-300 text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Mock Dashboard UI */}
            <div className="bg-slate-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-white/5 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs font-mono text-gray-500">terminal ~ deploy.sh</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-green-400 mb-2">$ docker build -t myapp:latest .</div>
                <div className="text-gray-400 mb-4">Successfully built 8d7c4a1b9e2f...</div>
                
                <div className="text-blue-400 mb-2">$ kubectl apply -f deployment.yaml</div>
                <div className="text-gray-400 mb-4">deployment.apps/myapp-deployment created</div>
                
                <div className="text-[#cc73f8] mb-2">$ wait-for-rollout</div>
                <div className="flex items-center space-x-2 text-gray-300">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span>All pods are running optimally.</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-[#cc73f8]/20 blur-2xl -z-10 rounded-full opacity-50 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
