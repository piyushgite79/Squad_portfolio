import React from 'react';
import { motion } from 'framer-motion';
import FlipCard from '../components/FlipCard';
import { students } from '../data';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Students() {
  const [selectedSquad, setSelectedSquad] = React.useState<number | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredStudents = students.filter((student) => {
    const matchesSquad = selectedSquad ? student.squad === selectedSquad : true;
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSquad && matchesSearch;
  });

  const representatives = filteredStudents.filter(student => student.isRepresentative);
  const regularStudents = filteredStudents.filter(student => !student.isRepresentative);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Students</h1>
          <p className="text-xl text-gray-400">The Future of Web Development</p>
        </motion.div>

        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Search by name, role, or tech stack..."
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

        {representatives.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Squad Representative</h2>
            <div className="max-w-md mx-auto">
              {representatives.map((student) => (
                <motion.div
                  key={student.id}
                  className="transform scale-110"
                >
                  <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-1 rounded-xl">
                    <StudentCard student={student} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StudentCard({ student }: { student: typeof students[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <FlipCard
        front={
          <div className="h-full flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
            <p className="text-purple-400">{student.role}</p>
          </div>
        }
        back={
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
              <p className="text-gray-300 mb-4">{student.bio}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {student.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-900/50 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              {student.socialLinks.github && (
                <a
                  href={student.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
              {student.socialLinks.linkedin && (
                <a
                  href={student.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {student.socialLinks.twitter && (
                <a
                  href={student.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
            </div>
          </div>
        }
      />
    </motion.div>
  );
}