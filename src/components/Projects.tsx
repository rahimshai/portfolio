import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Kara-Messenger',
    description: 'A full-featured chatting application build with React and Node.js',
    image: 'https://static.vecteezy.com/system/resources/previews/006/113/471/non_2x/chat-app-speech-bubble-logo-design-illustration-free-vector.jpg?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Node.js', 'chat engine', 'Tailwind CSS'],
    github: 'https://github.com/rahimshai',
    live: 'https://github.com/rahimshai',
  },
  {
    title: 'Insta reel downloader',
    description: 'A website to download Instagram reels',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15TLXkCJVMJlC-SGTOT0pLyQbwV2f8-JdVA&s?auto=format&fit=crop&q=80&w=800',
    technologies: ['TypeScript', 'React', 'Rapid-Api', 'Node.js'],
    github: 'https://github.com/rahimshai',
    live: 'https://github.com/rahimshai',
  },
  {
    title: 'A DevOps project',
    description: 'Automated Deployment of Scalable Applications on AWS EC2 with Kubernetes and Argo CD with advanced monitoring',
    image: 'https://i.pinimg.com/736x/c9/72/3b/c9723bae931c20d9aa69848f46066e4c.jpg?auto=format&fit=crop&q=80&w=800',
    technologies: ['Python', '.NET', 'Node.js', 'ArgoCD', 'Kubernetes', 'Grafana'],
    github: 'https://github.com/rahimshai',
    live: 'https://github.com/rahimshai',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-2xl hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#cc73f8]/10 text-[#cc73f8] text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-[#cc73f8]"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-400 hover:text-[#cc73f8]"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
