import React from 'react';
import { Code2, Database, Layout, Settings } from 'lucide-react';

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
    skills: ['Git', 'Docker', 'AWS', 'Jest', 'CI/CD']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-[#cc73f8] mr-2" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-[#cc73f8] rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}