export interface IProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  images: string[];  // Array of additional project images
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface IExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  logoUrl: string;
  isEducation: boolean;
}

export interface ISkill {
  id: number;
  name: string;
  icon: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    title: "AI-Powered Code Assistant",
    description: "An intelligent code completion and suggestion tool powered by machine learning, supporting multiple programming languages and frameworks.",
    imageUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: ["Python", "TensorFlow", "FastAPI", "React", "TypeScript"],
    githubUrl: "https://github.com/yourusername/ai-code-assistant",
    demoUrl: "https://ai-assistant.example.com"
  },
  {
    id: 2,
    title: "Cross-Platform Desktop App",
    description: "A powerful desktop application built with Electron and React, featuring real-time data visualization and system monitoring.",
    imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: ["Electron", "React", "Node.js", "D3.js", "SQLite"],
    githubUrl: "https://github.com/yourusername/desktop-monitor"
  },
  {
    id: 3,
    title: "Mobile Health Tracker",
    description: "A React Native mobile app for health and fitness tracking, integrating with wearable devices and providing AI-powered insights.",
    imageUrl: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: ["React Native", "TypeScript", "Firebase", "TensorFlow Lite"],
    githubUrl: "https://github.com/yourusername/health-tracker",
    demoUrl: "https://health-tracker.example.com"
  },
  {
    id: 4,
    title: "Neural Network Visualizer",
    description: "An interactive web application for visualizing and understanding neural networks, with real-time training demonstrations.",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8386452/pexels-photo-8386452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8386466/pexels-photo-8386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: ["React", "Three.js", "Python", "WebGL", "FastAPI"],
    githubUrl: "https://github.com/yourusername/nn-visualizer",
    demoUrl: "https://nn-viz.example.com"
  },
  {
    id: 5,
    title: "Smart Home Dashboard",
    description: "A comprehensive IoT dashboard for smart home control, featuring machine learning for automation and energy optimization.",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183162/pexels-photo-3183162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: ["React", "Node.js", "MQTT", "TensorFlow.js", "WebSocket"],
    githubUrl: "https://github.com/yourusername/smart-home"
  },
  {
    id: 6,
    title: "AI Image Generator",
    description: "A web application that generates unique pixel art using machine learning models, with customizable styles and parameters.",
    imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "https://images.pexels.com/photos/8386473/pexels-photo-8386473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8386487/pexels-photo-8386487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8386493/pexels-photo-8386493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: ["React", "Python", "PyTorch", "FastAPI", "WebGL"],
    githubUrl: "https://github.com/yourusername/ai-pixel-art",
    demoUrl: "https://ai-pixel-art.example.com"
  }
];

export const experiences: IExperience[] = [
  {
    id: 1,
    title: "Lead Software Engineer",
    company: "AI Solutions Inc.",
    period: "2023 - Present",
    description: "Leading development of AI-powered applications, managing cross-functional teams, and architecting scalable solutions across web, mobile, and desktop platforms.",
    logoUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isEducation: false
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Tech Innovations Lab",
    period: "2021 - 2023",
    description: "Developed cross-platform applications using React, React Native, and Electron. Implemented machine learning models for predictive analytics.",
    logoUrl: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isEducation: false
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Future Systems",
    period: "2019 - 2021",
    description: "Built and maintained web and mobile applications, integrated AI/ML capabilities, and optimized application performance.",
    logoUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isEducation: false
  },
  {
    id: 4,
    title: "MSc in Artificial Intelligence",
    company: "Tech University",
    period: "2017 - 2019",
    description: "Specialized in Machine Learning and Neural Networks. Research focus on AI applications in software development.",
    logoUrl: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isEducation: true
  },
  {
    id: 5,
    title: "BSc in Computer Science",
    company: "Innovation College",
    period: "2013 - 2017",
    description: "Focus on Software Engineering and AI fundamentals. Led the AI/ML student research group.",
    logoUrl: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isEducation: true
  }
];

export const skills: ISkill[] = [
  { id: 1, name: "React", icon: "⚛️" },
  { id: 2, name: "TypeScript", icon: "🔷" },
  { id: 3, name: "Python", icon: "🐍" },
  { id: 4, name: "TensorFlow", icon: "🧠" },
  { id: 5, name: "React Native", icon: "📱" },
  { id: 6, name: "Node.js", icon: "🟢" },
  { id: 7, name: "Electron", icon: "⚡" },
  { id: 8, name: "PyTorch", icon: "🔥" },
  { id: 9, name: "Docker", icon: "🐳" },
  { id: 10, name: "AWS", icon: "☁️" },
  { id: 11, name: "GraphQL", icon: "📊" },
  { id: 12, name: "FastAPI", icon: "⚡" },
  { id: 13, name: "MongoDB", icon: "🍃" },
  { id: 14, name: "PostgreSQL", icon: "🐘" },
  { id: 15, name: "Git", icon: "📦" }
];

export const aboutMe = {
  name: "Your Name",
  title: "Full-Stack Developer & AI Enthusiast",
  bio: "I'm a passionate software developer specializing in creating innovative solutions across web, mobile, and desktop platforms. With expertise in AI/ML integration, I build intelligent applications that solve real-world problems. My focus is on delivering scalable, cross-platform solutions that leverage cutting-edge technologies.",
  location: "San Francisco, CA",
  email: "hello@yourname.dev",
  resumeUrl: "/resume.pdf"
};