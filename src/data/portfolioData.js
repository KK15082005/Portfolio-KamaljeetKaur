/**
 * =====================================================================
 * KAMALJEET KAUR - PORTFOLIO DATA HUB
 * =====================================================================
 * To update your portfolio content, simply edit this file!
 * Everything automatically renders dynamically across the website.
 */

export const personalInfo = {
  name: "Kamaljeet Kaur",
  headline: "I build web products that solve real problems.",
  tagline: "I'm Kamaljeet Kaur, a Computer Science Engineering student and Full Stack Developer Intern at VenueBook. I work across frontend interfaces, backend APIs and databases, and I'm interested in building reliable software and AI-powered applications that solve practical problems.",
  location: "New Delhi, India",
  email: "kaur.kamaljeet1505@gmail.com",
  phone: "+91 9811529947",
  status: "Open to SDE & Full Stack Roles",
  bio: "Full Stack Developer with hands-on experience building and shipping production features across the MERN stack. Currently contributing as part of the founding engineering team at VenueBook. Proven track record building an AI-powered mock interview platform (PrepPilot AI) and a real-time stock trading platform (TradePulse). Passionate about Data Structures & Algorithms, Clean Architecture, and AI-driven innovations.",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile_photo.jpg",
  aboutImage: "/about.jpg",
  socials: {
    linkedin: "https://www.linkedin.com/in/kamaljeet-kaur-98248a2b9",
    github: "https://github.com",
    discord: "https://discord.gg/zPQXSg9J",
    instagram: "https://www.instagram.com/kamaljeet_kaur2005?igsh=MTZweHhhcGhoZmQ4Yg=="
  },
  stats: [
    { label: "DSA Problems Solved", value: "100+", sub: "LeetCode, GFG, Code360" },
    { label: "Students Mentored", value: "100+", sub: "Java & Algorithms" },
    { label: "Production Features", value: "5+", sub: "VenueBook Platform" },
    { label: "Redundant Queries Cut", value: "25%", sub: "MongoDB & SQL Optimization" }
  ],
  googleSheetWebhook: "https://script.google.com/macros/s/AKfycbwVCN3XnTVGMf-4tepizhDsG7By7RQzye1xmFt2MAyCkN0-xQgr5Qn8jQjBG9JzF42G2w/exec"
};

export const skillsData = {
  "Languages": [
    { name: "Java", focus: "OOP & Data Structures", icon: "Coffee" },
    { name: "JavaScript (ES6+)", focus: "Modern Web & Async", icon: "Code2" },
    { name: "Python", focus: "Scripting & Automation", icon: "Terminal" },
    { name: "C++", focus: "Problem Solving & Systems", icon: "Cpu" },
    { name: "SQL", focus: "Relational Queries", icon: "Database" }
  ],
  "Frontend": [
    { name: "React.js", focus: "Hooks & Component Architecture", icon: "Atom" },
    { name: "Next.js", focus: "SSR & Static Generation", icon: "Globe" },
    { name: "HTML5", focus: "Semantic Structure & Accessibility", icon: "Layout" },
    { name: "CSS3", focus: "Responsive & Modern Design", icon: "Palette" },
    { name: "Tailwind CSS", focus: "Utility-First Responsive Styling", icon: "Sparkles" },
    { name: "Bootstrap", focus: "Component Layout Systems", icon: "Layers" }
  ],
  "Backend and APIs": [
    { name: "Node.js", focus: "Asynchronous Event-Driven Runtime", icon: "Server" },
    { name: "Express.js", focus: "RESTful API Design & Middleware", icon: "Network" },
    { name: "REST APIs", focus: "Client-Server Architecture", icon: "Share2" },
    { name: "Microservices", focus: "Modular Service Decomposition", icon: "Cpu" },
    { name: "JWT & Security", focus: "Authentication & Protected Routes", icon: "ShieldCheck" }
  ],
  "Databases": [
    { name: "MongoDB", focus: "NoSQL Document Modeling", icon: "Database" },
    { name: "Mongoose ODM", focus: "Schema Design & Validation", icon: "Boxes" },
    { name: "MySQL / Relational SQL", focus: "Relational Schema & Indexing", icon: "HardDrive" }
  ],
  "Tools": [
    { name: "Git & GitHub", focus: "Version Control & Code Review", icon: "GitBranch" },
    { name: "Postman", focus: "API Testing & Endpoint Debugging", icon: "Send" },
    { name: "VS Code", focus: "IDE & Tooling Ecosystem", icon: "FileCode" },
    { name: "Netlify", focus: "Frontend Hosting & CI/CD", icon: "Zap" },
    { name: "Linux / Terminal", focus: "Shell & Environment", icon: "Terminal" }
  ],
  "AI Integrations": [
    { name: "Google Gemini API", focus: "LLM Integration & Prompting", icon: "Bot" },
    { name: "Azure OpenAI", focus: "Enterprise AI Services", icon: "Cloud" },
    { name: "Prompt Engineering", focus: "Structured Outputs & Evaluation", icon: "Sparkles" },
    { name: "AI Workflows", focus: "End-to-End Generative Features", icon: "Cpu" }
  ]
};

export const codingProfiles = [
  {
    platform: "LeetCode",
    name: "LeetCode Profile",
    url: "https://leetcode.com",
    metric: "100+ Problems Solved",
    badge: "DSA & Algorithms",
    icon: "Code"
  },
  {
    platform: "GeeksforGeeks",
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org",
    metric: "Practice & Contests",
    badge: "Problem Solving",
    icon: "Terminal"
  },
  {
    platform: "Code360",
    name: "Code360 (Coding Ninjas)",
    url: "https://www.naukri.com/code360",
    metric: "Curated DSA Paths",
    badge: "Guided Practice",
    icon: "Cpu"
  },
  {
    platform: "GitHub",
    name: "GitHub Codebases",
    url: "https://github.com",
    metric: "Full-Stack Repositories",
    badge: "Version Control",
    icon: "GitBranch"
  }
];

export const experiencesData = [
  {
    id: "venuebook",
    role: "Full Stack Developer Intern",
    company: "VenueBook Hospitality & Events Pvt. Ltd.",
    period: "Aug 2026 – Present",
    type: "Internship",
    badge: "Current Role",
    color: "#38bdf8",
    highlights: [
      "Contributing as part of the founding engineering team, building and maintaining full-stack product features using React.js, Node.js, and MongoDB.",
      "Developing responsive, modular UI components that modernize core venue booking workflows.",
      "Building and integrating RESTful APIs and backend services using Express.js and Node.js to power core business workflows.",
      "Optimizing MongoDB queries and data access patterns to improve application response times and reduce redundant database hits.",
      "Debugging technical issues, performing code maintenance, and writing clear technical documentation."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Microservices"]
  },
  {
    id: "stealth-ta",
    role: "Teaching Assistant – Data Structures & Algorithms (Java)",
    company: "Stealth Startup",
    period: "Aug 2026 – Present",
    type: "Teaching & Mentorship",
    badge: "Mentorship",
    color: "#38bdf8",
    highlights: [
      "Mentored 100+ engineering students in Java Data Structures and Algorithms, covering core conceptual foundations and problem-solving techniques.",
      "Conducted one-on-one doubt-resolution sessions focusing on recursion, arrays, strings, trees, and algorithmic optimization.",
      "Performed detailed code reviews and problem-solving walkthroughs to help students write clean, efficient, and edge-case-resilient code."
    ],
    tech: ["Java", "Data Structures", "Algorithms", "Code Review", "Problem Solving"]
  },
  {
    id: "nexturn",
    role: "Head of Corporate Relations",
    company: "Nexturn Placement Cell",
    period: "2024 – Present",
    type: "Leadership",
    badge: "Leadership",
    color: "#10b981",
    highlights: [
      "Led student coordinator teams in managing corporate outreach, recruiter communication, and campus engagement drives.",
      "Coordinated industry partnership initiatives, placement drives, and career guidance workshops for students.",
      "Fostered structured communication channels between hiring managers and campus departments."
    ],
    tech: ["Team Leadership", "Corporate Outreach", "Event Coordination", "Stakeholder Relations"]
  },
  {
    id: "simran-faculty",
    role: "STEM Faculty & Tutor",
    company: "Simran Coaching Center",
    period: "April 2024 – Present",
    type: "Academic Mentorship",
    badge: "Tutoring",
    color: "#f59e0b",
    highlights: [
      "Instructed secondary school students in Mathematics and Science, strengthening fundamental logical reasoning and problem solving.",
      "Designed tailored practice sets and conducted periodic assessments to build student competence and confidence."
    ],
    tech: ["Mathematics", "Logical Reasoning", "Curriculum Design", "Mentoring"]
  },
  {
    id: "winzera",
    role: "Business Development Associate",
    company: "Winzera Pvt. Ltd.",
    period: "Oct 2023 – Jan 2025",
    type: "Professional Experience",
    badge: "Prior Experience",
    color: "#64748b",
    highlights: [
      "Managed business outreach, prospective partner acquisition, and professional communication.",
      "Collaborated across teams to understand product execution, client onboarding, and market requirements."
    ],
    tech: ["Business Outreach", "Client Communication", "Market Research"]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Delhi Institute of Technology and Management (MDU Rohtak)",
    period: "2023 – 2027",
    score: "Consistently Ranked in Top 10 of the Class",
    highlights: [
      "Focusing on Data Structures & Algorithms, Object-Oriented Systems, DBMS, and Web Architecture.",
      "Active participant in technical hackathons, coding contests, and campus innovation cells."
    ]
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    institution: "Guru Harkrishan Public School, Karol Bagh",
    period: "2022 – 2023",
    score: "Secured 2nd Position (87%)",
    highlights: [
      "Academic excellence in Mathematics, Physics, and Computer Science streams."
    ]
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "St. Michael's Sr. Sec. School, Karol Bagh",
    period: "2020 – 2021",
    score: "First Division",
    highlights: [
      "Strong foundation in logical reasoning, science, and extracurricular leadership."
    ]
  }
];

export const achievementsData = [
  {
    title: "100+ DSA Problems Solved",
    organization: "LeetCode, GeeksforGeeks & Code360",
    badge: "DSA Mastery",
    description: "Consistent problem solver in Java across core algorithmic topics: Arrays, Strings, LinkedLists, Stacks, Queues, Trees, Recursion, and Dynamic Programming.",
    icon: "Code",
    link: "https://leetcode.com",
    linkText: "Coding Profiles"
  },
  {
    title: "Microsoft Imagine Cup '26 Participant",
    organization: "Microsoft Global Innovation Contest",
    badge: "Global Innovation",
    description: "Evaluated on technical innovation, cloud scalability, feasibility, and real-world student impact with flagship AI mentorship project PrepPilot-AI.",
    icon: "Award",
    link: "https://deft-centaur-5d366c.netlify.app/",
    linkText: "View Imagine Cup Project"
  },
  {
    title: "HackerRank Orchestrate Participant",
    organization: "HackerRank Global",
    badge: "Competitive Coding",
    description: "Competed in high-intensity competitive programming, algorithmic puzzles, and timed technical problem-solving sprints.",
    icon: "Terminal",
    link: "https://www.hackerrank.com",
    linkText: "HackerRank Platform"
  },
  {
    title: "Google 'Fund My Crazy' Challenge",
    organization: "Google Student Community",
    badge: "Innovation Pitch",
    description: "Selected participant for high-creativity student innovation pitch focusing on AI-empowered education and intelligent mentorship tools.",
    icon: "Sparkles",
    link: "https://developers.google.com/community",
    linkText: "Google Community"
  }
];

export const servicesData = [
  {
    title: "Full-Stack Web Development",
    icon: "Layout",
    description: "End-to-end web applications with modern React frontends, robust Node/Express microservices, and optimized MongoDB/SQL databases.",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"]
  },
  {
    title: "Java & Algorithmic Problem Solving",
    icon: "Coffee",
    description: "High-performance logic building, clean OOP design, and algorithmic problem-solving with a proven track record across LeetCode & GFG.",
    tags: ["Java", "DSA", "System Logic", "Optimization"]
  },
  {
    title: "AI Integration & Workflows",
    icon: "Bot",
    description: "Integrating modern LLMs like Google Gemini API and Azure OpenAI to deliver conversational bots, automated evaluations, and intelligent tools.",
    tags: ["Gemini API", "Azure OpenAI", "Voice AI", "Prompt Engineering"]
  },
  {
    title: "Technical Mentorship & Code Reviews",
    icon: "GraduationCap",
    description: "Empowering fellow engineers through structured DSA roadmaps, personalized code reviews, and mock technical interview simulations.",
    tags: ["1-on-1 Guidance", "Mock Interviews", "Code Reviews"]
  }
];

/**
 * =====================================================================
 * PROJECTS LIST - EASY TO EXTEND!
 * =====================================================================
 * To add a new project, simply copy any object below and paste it into
 * the array.
 */
export const initialProjectsData = [
  {
    id: "preppilot-ai",
    title: "PrepPilot AI",
    category: "AI & Full-Stack",
    tagline: "AI-Powered Technical & HR Interview Preparation Platform",
    period: "2024 – 2026",
    featured: true,
    image: "/preppilot-ai.png",
    demoUrl: "https://deft-centaur-5d366c.netlify.app/",
    githubUrl: "https://github.com",
    metrics: "Microsoft Imagine Cup '26 Entry",
    problem: "Engineering students and candidates often lack realistic, objective interview practice and actionable technical feedback before crucial hiring rounds.",
    description: "PrepPilot AI is an interview preparation platform designed to help students practise technical and HR interviews through personalised questions and AI-assisted feedback. I'm developing the application with a focus on authentication, interview configuration, question generation and evaluation workflows.",
    contribution: "Architected the full-stack MERN platform: developed secure JWT authentication with bcrypt, created interview session orchestration routes, built the responsive React user interface, and integrated Google Gemini API for intelligent question generation and structured evaluations.",
    technicalDecisions: "Decoupled LLM prompt orchestration into dedicated backend service modules to enable resilient error handling and graceful fallbacks. Used MongoDB for flexible interview transcripts and evaluation telemetry.",
    highlights: [
      "AI-driven question generation and feedback pipeline powered by Google Gemini API.",
      "Secure JWT authentication with bcrypt password hashing and protected API middleware.",
      "Dynamic interview simulator supporting real-time candidate evaluations and scoring rubrics.",
      "Multi-view React dashboard delivering detailed strengths, gaps, and performance analytics.",
      "Evaluated as a Microsoft Imagine Cup project based on innovation, feasibility, and technical execution."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "JWT", "Axios", "REST APIs"]
  },
  {
    id: "venuebook-platform",
    title: "VenueBook Platform Contributions",
    category: "Full-Stack",
    tagline: "Full-Stack Internship Contributions for Venue Booking Workflows",
    period: "Aug 2026 – Present",
    featured: true,
    image: "/project4.png",
    demoUrl: "",
    githubUrl: "",
    metrics: "Internship Contributions",
    problem: "Modernizing core venue booking workflows, optimizing backend API response latency, and reducing redundant database queries across customer-facing event scheduling features.",
    description: "Engineering contributions as a Full Stack Developer Intern at VenueBook. Developed modular React UI components, built and integrated RESTful Express microservices, and optimized MongoDB query patterns to enhance application performance across key customer booking flows.",
    contribution: "Built reusable frontend UI components in React, integrated backend REST endpoints, optimized MongoDB queries to cut down unnecessary database hits, and assisted in production debugging and technical documentation.",
    technicalDecisions: "Implemented indexed query filters in MongoDB to optimize read latency for booking searches. Decoupled UI state management to reduce unnecessary re-renders in dynamic booking calendars.",
    highlights: [
      "Built and deployed modular React.js UI components improving core user booking journeys.",
      "Integrated secure RESTful APIs with Node.js and Express to streamline reservation workflows.",
      "Optimized MongoDB query performance and schema access patterns for faster response times.",
      "Identified and resolved production bugs, enhancing overall system stability."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript"]
  },
  {
    id: "kanban-board",
    title: "Interactive Kanban Board",
    category: "Full-Stack",
    tagline: "Interactive Task & Workflow Management Application",
    period: "2026",
    featured: true,
    image: "/KB.png",
    demoUrl: "https://fancy-tiramisu-85ef54.netlify.app/",
    githubUrl: "https://github.com/KK15082005/KanabanBoard",
    metrics: "Production Web App",
    problem: "Teams and developers need a clean, zero-friction interface to visualize task progression, organize deliverables across stages, and maintain sprint momentum.",
    description: "A task management board that helps users organise work across different stages. The project focuses on interactive task management, drag-and-drop functionality and a clean, responsive interface.",
    contribution: "Built the drag-and-drop state management system in React, implemented persistent board state, and crafted responsive, accessible UI layouts.",
    technicalDecisions: "Structured component state to ensure fluid drag-and-drop interactions with zero layout shifts and instant visual reordering across columns.",
    highlights: [
      "Fluid drag-and-drop task movement between configurable workflow columns.",
      "Real-time task creation, editing, status updating, and deletion.",
      "Clean, modern, and responsive user interface across desktop and mobile screens."
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Netlify"]
  },
  {
    id: "tradepulse",
    title: "TradePulse",
    category: "Full-Stack",
    tagline: "Real-Time Stock Market Tracking & Portfolio Platform",
    period: "2024",
    featured: false,
    image: "/project1.png",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    metrics: "Full-Stack Simulation",
    problem: "Aspiring investors need a risk-free, responsive platform to track real-time market trends, test portfolio strategies, and observe virtual order executions without capital risk.",
    description: "A financial analytics and portfolio tracking web application featuring interactive price charts, customizable watchlists, and virtual holdings calculation.",
    contribution: "Developed backend REST APIs using Node.js and Express for trade logging and watchlist management; built the interactive frontend trading dashboard with React and Chart.js.",
    technicalDecisions: "Structured MongoDB schemas to segregate market tickers, user accounts, and virtual trade ledgers. Optimized queries with indexed user IDs.",
    highlights: [
      "Responsive React trading dashboard with real-time Chart.js market visualizations.",
      "RESTful API backend handling virtual order placement and watchlist syncing.",
      "JWT-based session authentication with protected user transaction history."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "REST APIs", "JWT", "Bootstrap"]
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio v1",
    category: "Frontend",
    tagline: "Responsive Developer Portfolio with Google Apps Script Integration",
    period: "2024",
    featured: false,
    image: "/portfolio.png",
    demoUrl: "https://jade-ganache-49939d.netlify.app/",
    githubUrl: "https://github.com",
    metrics: "Live Production Site",
    problem: "Showcasing technical projects and internship achievements in an accessible, mobile-first design with a functional recruiter inquiry channel without requiring a dedicated server.",
    description: "A responsive portfolio website featuring tabbed navigation, smooth CSS animations, and asynchronous contact form submission wired to Google Apps Script.",
    contribution: "Designed and built the full layout using HTML5, modern CSS3, and JavaScript, and connected the contact form to a Google Sheets webhook for automated lead collection.",
    technicalDecisions: "Leveraged Google Apps Script as a serverless backend to process contact inquiries asynchronously without recurring cloud hosting costs.",
    highlights: [
      "Custom responsive layout built from scratch with semantic HTML5 and modern CSS3.",
      "Asynchronous contact form submission integrating with Google Sheets webhook API.",
      "Mobile-friendly navigation with fluid typography and minimal layout shift."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Google Apps Script", "Netlify"]
  },
  {
    id: "google-clone",
    title: "Google Search UI Replica",
    category: "Frontend",
    tagline: "Pixel-Perfect Search Layout & Interaction Recreation",
    period: "2024",
    featured: false,
    image: "/project2.png",
    demoUrl: "https://loquacious-dodol-2147c3.netlify.app/",
    githubUrl: "https://github.com",
    metrics: "Pixel-Perfect Layout",
    problem: "Achieving exact visual fidelity, cross-browser compatibility, and subtle micro-interaction replication of one of the world's most widely used web interfaces.",
    description: "A precision recreation of Google's search homepage, focusing on strict layout adherence, minimalist aesthetics, and responsive micro-interactions.",
    contribution: "Implemented the full user interface using clean HTML and CSS, focusing on exact search input focus states, header navigation menus, and localized footer sections.",
    technicalDecisions: "Used pure CSS Flexbox and custom CSS variables to guarantee exact alignment across desktop, tablet, and mobile without relying on third-party frameworks.",
    highlights: [
      "Pixel-accurate search bar with custom box-shadow focus animations and interactive action buttons.",
      "Responsive header tray with modal-style menu triggers and localized footer layout.",
      "Clean, modular CSS architecture using native Flexbox."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Responsive Design"]
  },
  {
    id: "digital-card",
    title: "3D Animated Interactive Card",
    category: "Frontend",
    tagline: "Hardware-Accelerated 3D CSS Keyframe Animation Experience",
    period: "2024",
    featured: false,
    image: "/project3.png",
    demoUrl: "https://wonderful-queijadas-cc82f3.netlify.app/",
    githubUrl: "https://github.com",
    metrics: "60fps CSS 3D Transforms",
    problem: "Delivering immersive 3D folding and unfolding card animations using pure CSS without the overhead of heavy third-party 3D canvas libraries.",
    description: "An engaging interactive card web application built with multi-stage CSS keyframes, 3D hover transformations, and dynamic mouse interaction states.",
    contribution: "Crafted complex multi-stage CSS animation timelines and integrated user interaction event listeners in JavaScript.",
    technicalDecisions: "Used transform-style: preserve-3d and GPU-accelerated CSS properties to ensure fluid 60fps rendering across devices.",
    highlights: [
      "Multi-stage 3D card folding and unfolding states driven by pure CSS keyframes.",
      "Hardware-accelerated perspective calculations for realistic spatial depth.",
      "Interactive audio-visual greeting triggers responsive to user cursor movement."
    ],
    tech: ["CSS3 Keyframes", "3D Transforms", "JavaScript", "Netlify"]
  }
];
