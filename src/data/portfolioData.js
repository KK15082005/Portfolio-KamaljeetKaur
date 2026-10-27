/**
 * =====================================================================
 * KAMALJEET KAUR - PORTFOLIO DATA HUB
 * =====================================================================
 * To update your portfolio content, simply edit this file!
 * Everything automatically renders dynamically across the website.
 */

export const personalInfo = {
  name: "Kamaljeet Kaur",
  headline: "Full Stack Developer & SDE Candidate",
  tagline: "Building scalable full-stack web applications, architecting intelligent AI systems, and solving complex algorithmic challenges.",
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
    { name: "Java", level: "Intermediate", icon: "Coffee" },
    { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code2" },
    { name: "Python", level: "Intermediate", icon: "Terminal" },
    { name: "C++", level: "Basic", icon: "Cpu" },
    { name: "SQL", level: "Intermediate", icon: "Database" }
  ],
  "Frontend": [
    { name: "React.js", level: "Advanced", icon: "Atom" },
    { name: "Next.js", level: "Intermediate", icon: "Globe" },
    { name: "HTML5 & Semantic UI", level: "Expert", icon: "Layout" },
    { name: "CSS3 & Glassmorphism", level: "Expert", icon: "Palette" },
    { name: "Tailwind CSS", level: "Intermediate", icon: "Sparkles" },
    { name: "Bootstrap", level: "Intermediate", icon: "Layers" }
  ],
  "Backend & Architecture": [
    { name: "Node.js", level: "Intermediate", icon: "Server" },
    { name: "Express.js", level: "Intermediate", icon: "Network" },
    { name: "REST APIs & Microservices", level: "Intermediate", icon: "Share2" },
    { name: "JWT & Bcrypt Security", level: "Intermediate", icon: "ShieldCheck" },
    { name: "API Development", level: "Intermediate", icon: "Cpu" }
  ],
  "Databases": [
    { name: "MongoDB", level: "Intermediate", icon: "Database" },
    { name: "Mongoose ODM", level: "Intermediate", icon: "Boxes" },
    { name: "MySQL / SQL", level: "Intermediate", icon: "HardDrive" }
  ],
  "AI & Cloud Tools": [
    { name: "Gemini API", level: "Intermediate", icon: "Bot" },
    { name: "Azure OpenAI", level: "Intermediate", icon: "Cloud" },
    { name: "Azure App Services", level: "Intermediate", icon: "CloudLightning" },
    { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
    { name: "Netlify & Vercel", level: "Advanced", icon: "Zap" },
    { name: "VS Code", level: "Advanced", icon: "FileCode" }
  ],
  "CS Fundamentals": [
    { name: "Data Structures & Algorithms", level: "DSA Specialist", icon: "Binary" },
    { name: "Object-Oriented Programming (OOP)", level: "Core Strength", icon: "Box" },
    { name: "Database Management Systems (DBMS)", level: "Proficient", icon: "Database" },
    { name: "Computer Networks", level: "Proficient", icon: "Wifi" }
  ]
};

export const experiencesData = [
  {
    id: "venuebook",
    role: "Full Stack Developer Intern – Founding Engineering Team",
    company: "VenueBook Hospitality & Events Pvt. Ltd.",
    period: "Aug 2026 – Present",
    type: "Internship",
    badge: "Current Role",
    color: "#6366f1",
    highlights: [
      "Contributed as part of the founding engineering team, owning features end-to-end across frontend, backend, and database layers with direct involvement in product decisions.",
      "Built 5+ responsive, reusable UI components using React.js, JavaScript, and modern styling, replacing static pages across the platform's core booking flow.",
      "Spearheaded API Development and integrated Microservices using Node.js, Express.js, and PHP, powering 5+ core product workflows.",
      "Optimized MongoDB and SQL data access patterns, reducing redundant queries by 25% through schema analysis.",
      "Applied advanced debugging to resolve 10+ production bugs and maintained comprehensive software documentation."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "PHP", "Microservices"]
  },
  {
    id: "stealth-ta",
    role: "Teaching Assistant – Data Structures & Algorithms (Java)",
    company: "Stealth Startup",
    period: "Aug 2026 – Present",
    type: "Teaching & Mentorship",
    badge: "Mentorship",
    color: "#06b6d4",
    highlights: [
      "Guided over 100+ students through Java Data Structure and Algorithm curriculum.",
      "Conducted 250+ one-on-one doubt-resolution sessions, boosting average student test scores by 15 points.",
      "Conducted 150+ code reviews and interview-oriented mock sessions, helping students strengthen Problem Solving, Logical Thinking, and Debugging skills."
    ],
    tech: ["Java", "Data Structures", "Algorithms", "Code Review", "Mentorship"]
  },
  {
    id: "nexturn",
    role: "Head of Corporate Relations",
    company: "Nexturn Placement Cell (IITM)",
    period: "2024 – Present",
    type: "Leadership",
    badge: "Leadership",
    color: "#10b981",
    highlights: [
      "Lead a team of 10+ members to build strong industry collaborations and campus partnerships.",
      "Managed industry outreach, recruiter relationships, and placement & internship initiatives.",
      "Fostered professional growth, soft skills development, and department alignment."
    ],
    tech: ["Corporate Relations", "Team Leadership", "Strategic Outreach", "Event Management"]
  },
  {
    id: "simran-faculty",
    role: "Coaching Faculty",
    company: "Simran Coaching Center",
    period: "April 2025 – Present",
    type: "Academic Mentorship",
    badge: "Tutoring",
    color: "#f59e0b",
    highlights: [
      "Guided 19+ students from grades 6–10 in Mathematics & Science.",
      "Focused on conceptual clarity, logical thinking, problem-solving skills, and student self-confidence through personalized mentoring."
    ],
    tech: ["STEM Education", "Conceptual Logic", "Mentoring"]
  },
  {
    id: "winzera",
    role: "Business Developer",
    company: "Winzera Pvt. Ltd.",
    period: "Oct 2023 – Jan 2025",
    type: "Business Strategy",
    badge: "Prior Experience",
    color: "#ec4899",
    highlights: [
      "Handled business outreach, client acquisition, and client relationship management.",
      "Gained key insights into cross-functional business execution and customer communication."
    ],
    tech: ["Business Strategy", "Client Relations", "Market Research"]
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
    description: "Consistent problem solver across core topics: Arrays, LinkedLists, Stacks, Queues, Trees, Recursion, and Dynamic Programming.",
    icon: "Code"
  },
  {
    title: "Microsoft Imagine Cup '26 Participant",
    organization: "Microsoft Global Innovation Contest",
    description: "Evaluated on innovation, technical scalability, feasibility, and real-world student impact with flagship AI mentorship project PrepPilot-AI.",
    icon: "Award"
  },
  {
    title: "HackerRank Orchestrate Participant",
    organization: "HackerRank Global",
    description: "Competed in high-intensity competitive programming and algorithmic problem-solving sprints.",
    icon: "Terminal"
  },
  {
    title: "Google 'Fund My Crazy' Challenge",
    organization: "Google Student Community",
    description: "Selected participant for high-creativity student innovation pitch focusing on AI-empowered education.",
    icon: "Sparkles"
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
    title: "PrepPilot-AI",
    category: "AI & Full-Stack",
    tagline: "AI-Powered Personalized Mock-Interview & Mentorship Platform",
    period: "July 2026",
    featured: true,
    image: "/preppilot-ai.png",
    demoUrl: "https://deft-centaur-5d366c.netlify.app/",
    githubUrl: "https://github.com",
    metrics: "35% Higher Task Completion",
    description: "A comprehensive full-stack AI platform that autonomously designs and conducts personalized technical and HR interview rounds tailored to user target roles and skill gaps.",
    highlights: [
      "Built end-to-end full-stack platform using MongoDB, Express.js, React.js, Node.js, and Google Gemini API.",
      "Implemented secure JWT authentication with bcrypt password hashing and protected REST API endpoints.",
      "Engineered real-time voice and conversational interview flows, giving candidates realistic pressure-testing.",
      "Designed dynamic React frontend with Axios integrations, error handling, and protected dashboard routing across 5+ views.",
      "Presented as a Microsoft Imagine Cup project evaluated against innovation, feasibility, and student impact."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "JWT", "Axios", "Azure App Services"]
  },
  {
    id: "tradepulse",
    title: "TradePulse",
    category: "Full-Stack",
    tagline: "Zerodha-Inspired Real-Time Stock Trading & Portfolio Platform",
    period: "June 2026",
    featured: true,
    image: "/project1.png",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    metrics: "20+ Simulated Live Holdings",
    description: "An interactive, high-performance financial web app providing real-time market data visualizers, customizable watchlists, and comprehensive portfolio tracking for simulated stock holdings.",
    highlights: [
      "Developed robust backend REST APIs using Node.js and Express.js with JWT-based authorization and session controls.",
      "Engineered responsive React.js trading dashboard with interactive charts, order placement simulation, and live P&L calculations.",
      "Optimized MongoDB queries to retrieve transaction history and user watchlists with sub-100ms response times.",
      "Implemented modular data models ensuring separation of market tickers, user accounts, and virtual trade ledgers."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Bootstrap", "Chart.js"]
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio v1",
    category: "Frontend",
    tagline: "Custom Responsive Portfolio with Google Apps Script Webhook",
    period: "2024",
    featured: false,
    image: "/portfolio.png",
    demoUrl: "https://jade-ganache-49939d.netlify.app/",
    githubUrl: "https://github.com",
    metrics: "100% Cross-Device Responsive",
    description: "The first iteration of my personal portfolio featuring smooth tabbed navigation, custom CSS layouts, and asynchronous contact form submission wired to Google Apps Script.",
    highlights: [
      "Created modern layout and interactive tabbed interface using Vanilla JavaScript, HTML5, and CSS3.",
      "Wired dynamic contact form to automated Google Sheets webhook to capture recruiter inquiries without a dedicated backend server.",
      "Engineered flexible CSS media queries and optimized layout shift."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Google Apps Script", "Netlify"]
  },
  {
    id: "google-clone",
    title: "Google Search UI Replicate",
    category: "Frontend",
    tagline: "Pixel-Perfect Google Homepage & Search Layout Recreation",
    period: "2024",
    featured: false,
    image: "/project2.png",
    demoUrl: "https://loquacious-dodol-2147c3.netlify.app/",
    githubUrl: "https://github.com",
    metrics: "Pixel-Perfect Alignment",
    description: "A faithful recreation of Google's flagship search homepage, focusing on strict layout adherence, minimalist aesthetics, and responsive micro-interactions.",
    highlights: [
      "Implemented responsive search input with custom box-shadow focus states and interactive action buttons.",
      "Accurately positioned header navigation icons, Google Apps tray mockups, and localized footer sections.",
      "Built strictly adhering to CSS Flexbox standards."
    ],
    tech: ["HTML5", "CSS3", "Responsive UI", "Flexbox"]
  },
  {
    id: "digital-card",
    title: "Interactive Digital Animated Experience",
    category: "Frontend",
    tagline: "3D CSS Keyframe Animation & Interactive Card Experience",
    period: "2024",
    featured: false,
    image: "/project3.png",
    demoUrl: "https://wonderful-queijadas-cc82f3.netlify.app/",
    githubUrl: "https://github.com",
    metrics: "Custom CSS Keyframes",
    description: "An engaging, interactive web card built with pure CSS keyframes, 3D hover transforms, and creative micro-animations that respond to user mouse interactions.",
    highlights: [
      "Crafted multi-stage CSS keyframe animations for smooth folding and unfolding card states.",
      "Employed transform-style: preserve-3d and perspective CSS rules for realistic depth.",
      "Added dynamic greeting triggers and audio-visual feedback."
    ],
    tech: ["CSS3 Keyframes", "3D Transforms", "JavaScript", "Netlify"]
  },
  {
    id: "nexturn-portal",
    title: "Corporate Relations Placement Tracker",
    category: "Leadership & Web",
    tagline: "Student-Recruiter Outreach Management System Concept",
    period: "2025",
    featured: false,
    image: "/project4.png",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    metrics: "10+ Member Team Management",
    description: "A centralized platform concept designed for the Nexturn Internship Cell to streamline recruiter communications, student resumes, and company drive schedules.",
    highlights: [
      "Organized industry outreach records and structured communication logs for corporate partners.",
      "Facilitated transparent tracking of active student applications across hiring partners.",
      "Formulated operational workflows adopted by the 10+ member placement cell team."
    ],
    tech: ["Product Workflow", "Corporate Operations", "Web UI Concept"]
  }
];
