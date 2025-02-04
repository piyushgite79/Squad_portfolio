import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { developerJokes } from '../data';
import { Code2, Users, Rocket } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [currentJoke, setCurrentJoke] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJoke((prev) => (prev + 1) % developerJokes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
        
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#9333EA', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            <path d="M0,50 Q25,30 50,50 T100,50" stroke="url(#grad)" fill="none" strokeWidth="0.5">
              <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M0,50 Q25,30 50,50 T100,50;
                        M0,50 Q25,70 50,50 T100,50;
                        M0,50 Q25,30 50,50 T100,50" />
            </path>
          </svg>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          >
            Welcome to Kalvium Squad Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-gray-300"
          >
            Where Developers Learn, Build, and Thrive
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/squads')}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
            >
              Our Squads
            </button>
            <button
              onClick={() => navigate('/mentors')}
              className="px-8 py-3 bg-transparent hover:bg-white/10 rounded-lg font-semibold border border-white/20 transition-colors"
            >
              Our Mentors
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            About Kalvium
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-12"
          >
            Kalvium is an innovative program designed to nurture the next generation of developers.
            Through hands-on learning and mentorship, students master the MERN stack and build real-world projects.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Code2 size={32} />, title: "Learn", description: "Master modern web technologies" },
              { icon: <Users size={32} />, title: "Collaborate", description: "Work in agile teams" },
              { icon: <Rocket size={32} />, title: "Build", description: "Create real-world projects" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-gray-900/50 rounded-xl border border-white/10"
              >
                <div className="mb-4 text-purple-400">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Jokes Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Developer Humor
          </motion.h2>

          <motion.div
            key={currentJoke}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xl italic text-gray-300"
          >
            {developerJokes[currentJoke]}
          </motion.div>
        </div>
      </section>
    </div>
  );
}