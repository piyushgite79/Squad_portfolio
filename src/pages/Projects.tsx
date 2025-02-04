import React from 'react';
import { motion } from 'framer-motion';
import { projects, students } from '../data';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [selectedSquad, setSelectedSquad] = React.useState<number | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesSquad = selectedSquad ? project.squad === selectedSquad : true;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSquad && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-400">Showcasing Our Technical Excellence</p>
        </motion.div>

        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Search by name, description, or tech stack..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 bg-gray-900/50 rounded-lg border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors"
          />
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedSquad(selectedSquad === 72 ? null : 72)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedSquad === 72
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-transparent hover:bg-white/10 border border-white/20'
              }`}
            >
              Squad 72
            </button>
            <button
              onClick={() => setSelectedSquad(selectedSquad === 73 ? null : 73)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedSquad === 73
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-transparent hover:bg-white/10 border border-white/20'
              }`}
            >
              Squad 73
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all hover:scale-105"
            >
              <div className="aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-900/50 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Contributors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.students.map((studentId) => {
                      const student = students.find(s => s.id === studentId);
                      return student ? (
                        <span
                          key={studentId}
                          className="px-2 py-1 bg-gray-800 rounded-md text-sm"
                        >
                          {student.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/10 rounded-lg font-semibold border border-white/20 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}