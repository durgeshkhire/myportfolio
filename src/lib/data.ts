import {
  Code2,
  Database,
  Globe,
  Layers,
  Server,
  Shield,
  Cloud,
  Container,
  GitBranch,
  Lock,
  Workflow,
  Cpu,
  Braces,
  FileCode,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

// ─── Personal Info ───────────────────────────────────────────────

export const personalInfo = {
  name: "Durgesh Khire",
  title: "Java Full-Stack Developer",
  summary:
    "Java Full-Stack Developer with hands-on proficiency in Spring Boot, Spring Security, and React JS. Built and deployed full-stack projects including a real-time carpooling platform, using JWT, PostgreSQL, and AWS.",
  email: "[EMAIL_ADDRESS]",
  github: "https://github.com/durgeshkhire",
  linkedin: "https://www.linkedin.com/in/durgesh-khire2498/",
  resumeUrl: "https://drive.google.com/file/d/1J9y3xTWBl2yAlxPS_vLqSZ1rjcV4R667/view?usp=sharing",
};

// ─── Navigation ──────────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Skills ──────────────────────────────────────────────────────

export interface Skill {
  name: string;
  icon?: LucideIcon;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    icon: Code2,
    skills: [
      { name: "Java" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    category: "Frameworks",
    icon: Layers,
    skills: [
      { name: "Spring Boot" },
      { name: "Spring MVC" },
      { name: "Spring Security" },
      { name: "Spring Data JPA" },
      { name: "Hibernate" },
      { name: "REST APIs" },
      { name: "Microservices" },
      { name: "WebSockets" },
    ],
  },
  {
    category: "Databases & Cloud",
    icon: Database,
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Oracle" },
      { name: "AWS (EC2, RDS, S3)" },
      { name: "Docker" },
    ],
  },
  {
    category: "Tools & Concepts",
    icon: Braces,
    skills: [
      { name: "OOP" },
      { name: "Multithreading" },
      { name: "DSA" },
      { name: "System Design" },
      { name: "Git" },
      { name: "Postman" },
      { name: "JWT/OAuth2" },
      { name: "CI/CD" },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  status: "live" | "in-development";
  flagship?: boolean;
}

export const projects: Project[] = [
  {
    title: "Saathi Ride",
    description:
      "A real-time carpooling web application with live driver location tracking via WebSocket, JWT-based authentication, and full AWS deployment. Connects riders and drivers for affordable, shared commutes.",
    techStack: [
      "Java 21",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "WebSocket",
      "AWS EC2/RDS",
    ],
    liveUrl: "https://saathiride.vercel.app",
    repoUrl: "https://github.com/durgeshkhire/saathiRide-Project",
    status: "live",
    flagship: true,
  },
  {
    title: "Real Estate ERP (Lead Management)",
    description:
      "A comprehensive property listing and client management system with transaction tracking and role-based access control for agents, managers, and admins.",
    techStack: [
      "Spring Boot",
      "React",
      "MySQL",
      "Role-Based Access",
    ],
    status: "in-development",
  },
  {
    title: "Online Survey Builder",
    description:
      "A survey creation platform featuring polymorphic answer storage using JSONB and UUID-based share-token links for easy survey distribution.",
    techStack: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "JWT",
      "JSONB",
    ],
    status: "in-development",
  },
  {
    title: "Paper Trading Platform",
    description:
      "A fintech simulator providing real NSE and US market data for risk-free paper trading, with Google OAuth2 authentication and real-time data via Twelve Data API.",
    techStack: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Spring Security",
      "Google OAuth2",
      "Twelve Data API",
    ],
    status: "in-development",
  },
];

// ─── Education ───────────────────────────────────────────────────

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  cgpa: string;
}

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "MES IMCC",
    location: "Pune",
    year: "2025",
    cgpa: "7.78 / 10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "MES Senior College",
    location: "Pune",
    year: "2023",
    cgpa: "8.48 / 10",
  },
];

// ─── Certifications ──────────────────────────────────────────────

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  verificationUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Database Management Systems",
    issuer: "Infosys Springboard",
    date: "April 2024",
    verificationUrl: "https://infyspringboard.onwingspan.com/en/app/toc/lex_auth_013863760498999296114_shared/overview",
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM",
    date: "February 2024",
    verificationUrl: "https://www.credly.com/badges/ai-fundamentals",
  },
];
