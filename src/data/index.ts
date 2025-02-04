import { Mentor, Student, Project, Squad } from '../types';

export const squads: Squad[] = [
  {
    id: 72,
    name: "Squad 72",
    tagline: "Innovators of the Future",
    description: "A team of passionate developers pushing the boundaries of web development."
  },
  {
    id: 73,
    name: "Squad 73",
    tagline: "Crafting Digital Excellence",
    description: "Dedicated to creating exceptional web experiences through innovation and collaboration."
  }
];

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Alex Thompson",
    role: "Technical Mentor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "10+ years of experience in full-stack development and mentoring.",
    qualifications: ["MSc Computer Science", "AWS Certified Developer"],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  // Add more mentors...
];

export const students: Student[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Passionate about creating beautiful user interfaces",
    squad: 72,
    isRepresentative: true,
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    projects: ["1", "2"]
  },
  // Add more students...
];

export const projects: Project[] = [
  {
    id: "1",
    name: "EcoTracker",
    description: "A sustainable living tracking application",
    techStack: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    liveDemo: "https://example.com",
    github: "https://github.com",
    squad: 72,
    students: ["1", "2"]
  },
  // Add more projects...
];

export const developerJokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Why did the developer go broke? Because he lost all his elements in the DOM.",
  "What's a programmer's favorite hangout spot? The Foo Bar.",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!"
];