export interface Mentor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  qualifications: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
  };
}

export interface Student {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  squad: number;
  isRepresentative?: boolean;
  techStack: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  projects: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  liveDemo: string;
  github: string;
  squad: number;
  students: string[];
}

export interface Squad {
  id: number;
  name: string;
  tagline: string;
  description: string;
}