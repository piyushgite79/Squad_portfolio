import React from "react";
import { motion } from "framer-motion";
import FlipCard from "../components/FlipCard";

// Sample Mentor Data with Images
const mentors = [
  { 
    id: 1, 
    name: "Alex Thompson", 
    role: "Technical Mentor", 
    image: "https://images.unsplash.com/photo-1601233745996-555055d27b8f", 
    bio: "Expert in AI/ML.", 
    qualifications: ["PhD in AI", "10+ years in research"] 
  },
  { 
    id: 2, 
    name: "Sophia Lee", 
    role: "Technical Mentor", 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2", 
    bio: "Web development specialist.", 
    qualifications: ["Full Stack Developer", "Worked at Google"] 
  },
  { 
    id: 3, 
    name: "David Brown", 
    role: "Program Manager", 
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4", 
    bio: "Lead strategist and planner.", 
    qualifications: ["MBA, Project Management"] 
  },
  { 
    id: 4, 
    name: "Emily Johnson", 
    role: "Program Manager", 
    image: "https://images.unsplash.com/photo-1601233746319-7e19016d8919", 
    bio: "Experienced team leader.", 
    qualifications: ["10+ years in tech management"] 
  }
];

export default function Mentors() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Mentors</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our mentors are the backbone of our success. They guide us, inspire
            us, and help shape a better future for everyone.
          </p>
        </motion.div>

        {/* Program Managers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Program Managers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mentors
              .filter((mentor) => mentor.role === "Program Manager")
              .map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
          </div>
        </div>

        {/* Technical Mentors */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">
            Technical Mentors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mentors
              .filter((mentor) => mentor.role === "Technical Mentor")
              .map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Mentor Card Component
function MentorCard({ mentor }: { mentor: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <FlipCard
        front={
          <div className="h-full flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl shadow-lg">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
            <p className="text-purple-400">{mentor.role}</p>
          </div>
        }
        back={
          <div className="h-full flex flex-col justify-between p-6 bg-gray-900 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{mentor.name}</h3>
            <p className="text-gray-300 mb-4">{mentor.bio}</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Qualifications:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {(mentor.qualifications || []).map((qual: string, index: number) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>
            </div>
          </div>
        }
      />
    </motion.div>
  );
}
