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
    title: "QHSE Tracking System with MERN Stack",
    description: "Developed a web application for managing Quality, Health, Safety, and Environment (QHSE) processes using the MERN stack. The system enables efficient tracking of incidents, audits, and reports, with features like user role management and automated reporting to enhance compliance and operational safety.",
    imageUrl: "../public/QHSE/Screenshot 2025-05-29 183906.png",
    images: [
      "QHSE/Screenshot 2025-05-29 183906.png",
      "QHSE/Screenshot 2025-05-29 183950.png",
      "QHSE/Screenshot 2025-05-29 184047.png",
      "QHSE/Screenshot 2025-05-29 184309.png"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Amene19/QHSE-Project.git",
    
  },
  {
    id: 2,
    title: "Passport Management and Processing System",
    description: "A cross-platform system designed for the Embassy of Spain to streamline passport categorization and requirement tracking. It includes a React.js web app for workers and an Electron.js desktop dashboard for admins, all connected to a Node.js + Express backend with a MySQL database. Features include passport scanning, requirement assignment, automatic PDF generation, real-time statistics, and a fully automated setup process for easy deployment.",
    imageUrl: "../public/passport/Screenshot 2025-05-29 183446.png",
    images: [
      "passport/Screenshot 2025-05-29 183446.png",
      "passport/Screenshot 2025-05-29 183505.png",
      "passport/Screenshot 2025-05-29 183521.png",
      "passport/Screenshot 2025-05-29 183550.png",
      "passport/Screenshot 2025-05-29 183620.png"
      
    ],
    techStack: ["Electron", "React", "Node.js", "PostgreSQL", "Express	"],
    githubUrl: "https://github.com/Amene19/Manage-Passport.git"
  },
  {
    id: 3,
    title: "Business Portfolio and Reservation Management System",
    description: "Developed a full-stack web application using React, Express, and MySQL, showcasing a company’s business portfolio and enabling users to make reservations for offered services. The system features dynamic content management, user-friendly interfaces, and a seamless booking workflow tailored for client engagement.",
    imageUrl: "../public/machro3i/Screenshot 2025-06-01 001938.png",
    images: [
      "machro3i/Screenshot 2025-06-01 001938.png",
      "machro3i/Screenshot 2025-06-01 002044.png",
      "machro3i/Screenshot 2025-06-01 002126.png",
      "machro3i/Screenshot 2025-06-01 002212.png"
    ],
    techStack: ["React", "Node.js", "MySql", "Express	"],
    githubUrl: "https://github.com/Amene19/Machrou3i-Fi-Bledi.git"
  },
  {
    id: 4,
    title: "Personal Finance Management application",
    description: "Developed a Personal Finance Management application using JavaFX, enabling users to track income, expenses, and budgets. Implemented an intuitive UI with interactive charts, data persistence, and smooth navigation for an enhanced user experience.",
    imageUrl: "../public/pfin/Screenshot 2025-06-01 002735.png",
    images: [
      "pfin/Screenshot 2025-06-01 002735.png",
      "pfin/Screenshot 2025-06-01 002804.png",
      "pfin/Screenshot 2025-06-01 002834.png"
    ],
    techStack: ["javaFX", "Java", "PostgreSQL"],
    githubUrl: "https://github.com/Amene19/Personal-Finance-app.git",
  },
  {
    id: 5,
    title: "Camping Reservation System",
    description: "Developed a web application for camping reservations using the MERN stack . The platform allows users to browse campsites, check availability, and make bookings. ",
    imageUrl: "../public/camping/Image 1 juin 2025, 01_03_15.png",
    images: [
      "camping/Image 1 juin 2025, 01_03_15.png",
      "camping/Image 1 juin 2025, 01_06_17.png"
    ],
    techStack: ["React", "Node.js", "Express", "NextJs", "MySql"],
    githubUrl: "https://github.com/yourusername/smart-home"
  },
  {
    id: 6,
    title: "PixelCrafted Web Portfolio",
    description: "A unique pixel art–themed web portfolio built with React, blending retro aesthetics with modern development. Showcases personal projects, skills, and experiences through an interactive, game-inspired interface that reflects both creativity and technical expertise.",
    imageUrl: "../public/port/Screenshot 2025-06-01 011146.png",
    images: [
      "port/Screenshot 2025-06-01 011146.png",
      "port/Screenshot 2025-06-01 011217.png"
    ],
    techStack: ["React", "JavaScript"],
    githubUrl: "https://github.com/Amene19/Personal-Portfolio-.git",
  
  }
];

export const experiences: IExperience[] = [
  
  {
    id: 1,
    title: "Full-Stack Web Developer Intern",
    company: "China Study Company",
    period: "03-2025 - 05-2025",
    description: "",
    logoUrl: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isEducation: false
  },
  {
    id: 2,
    title: "Engineering Student (Night Classes)",
    company: "iTeam University",
    period: "2024 - Present",
    description: "",
    logoUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isEducation: true
  },
  {
    id: 3,
    title: "Research Master's Degree in Computer Science (AI)",
    company: "Higher Institute of Computer Science (ISI)",
    period: "2023 - 2025",
    description: "",
    logoUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isEducation: true
  },
  {
    id: 4,
    title: "Final-Year Project Intern",
    company: "Consulting Firm AFIn",
    period: "02-2023 - 06-2023",
    description: "QHSE Tracking System with MERN Stack",
    logoUrl: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isEducation: false
  },
  {
    id: 5,
    title: "Bachelor's degree in Computer Science",
    company: "Faculty of Sciences of Tunis (FST)",
    period: "2020 - 2023",
    description: "",
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
  name: "Amene Allah Harhira",
  title: "Full-Stack Developer",
  bio: "I'm a Full-Stack Web Developer with a strong focus on the MERN stack and modern web technologies. Skilled in both front-end and back-end development, I build responsive, efficient, and maintainable applications. With a background in computer science and AI research, I bring a problem-solving mindset and a passion for continuous learning to every challenge.",
  location: "Tunis, Tunisia",
  email: "ameneallahharhira@gmail.com",
  resumeUrl: "../public/ameneCV5.pdf"
};