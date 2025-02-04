import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { squads } from '../data';
import { Users, FolderGit2 } from 'lucide-react';

export default function Squads() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Squads</h1>
          <p className="text-xl text-gray-400">Two Amazing Teams, One Shared Goal</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {squads.map((squad) => (
            <motion.div
              key={squad.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-xl border border-white/10 p-8 hover:border-purple-500/50 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-2">{squad.name}</h2>
              <p className="text-purple-400 mb-4">{squad.tagline}</p>
              <p className="text-gray-300 mb-8">{squad.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => navigate('/students')}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  <Users size={20} />
                  Squad Members
                </button>
                <button
                  onClick={() => navigate('/projects')}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent hover:bg-white/10 rounded-lg font-semibold border border-white/20 transition-colors"
                >
                  <FolderGit2 size={20} />
                  Projects
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}