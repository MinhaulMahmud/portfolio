export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  location: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: 'Web Development' | 'ML/AI' | 'Frameworks' | 'Tools';
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Research {
  id: number;
  title: string;
  type: 'publication' | 'paid';
  venue?: string;
  doi?: string;
  link?: string;
  focus: string;
  year: string;
}

export interface Award {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Volunteer {
  id: number;
  organization: string;
  role: string;
  period: string;
  description: string;
}

export interface Interest {
  id: number;
  title: string;
  description: string;
  icon: string;
}