export const profile = {
  name: "Khdir Ahmed",
  role: "Computer Science Student · Full-Stack Developer",
  roles: ["Full-Stack Developer", "AI Enthusiast", "CS Student @ IIT Sfax", "IEEE CS Webmaster"],
  location: "Sfax, Tunisia",
  email: "khdir.ahmed@iit.ens.tn",
  github: "https://github.com/khdir-ahmed",
  summary:
    "Computer Science student at IIT Sfax with hands-on full-stack experience in C# / ASP.NET Core, Next.js / React, TypeScript and PostgreSQL. I like turning messy real-world processes into clean, fast software — and I'm increasingly drawn to artificial intelligence and data science.",
};

export const stats = [
  { value: "3,400+", label: "interventions managed by the platform I helped build" },
  { value: "99.6%", label: "test accuracy of my handwritten-digit CNN" },
  { value: "7", label: "projects shipped across web, desktop and AI" },
];

export type Category = "AI" | "Web" | "Desktop";

export type Project = {
  title: string;
  year: string;
  category: Category;
  description: string;
  highlights: string[];
  tags: string[];
  image?: string;
  accent: string; // tailwind gradient classes for cards without an image
  icon: "brain" | "spam" | "server" | "utensils" | "dumbbell" | "book" | "users";
  code?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Handwritten Digit Recognizer",
    year: "2026",
    category: "AI",
    description:
      "A convolutional neural network trained in PyTorch that recognizes digits you draw — running entirely in the browser with ONNX Runtime Web.",
    highlights: ["99.59% accuracy on 10,000 unseen images", "Data augmentation for real mouse drawings", "Live demo, no server needed"],
    tags: ["PyTorch", "CNN", "ONNX", "JavaScript", "GitHub Actions"],
    image: "projects/digit.png",
    accent: "from-violet-500/30 to-fuchsia-500/10",
    icon: "brain",
    code: "https://github.com/khdir-ahmed/digit-recognizer",
    demo: "https://khdir-ahmed.github.io/digit-recognizer/",
    featured: true,
  },
  {
    title: "Kompass — Maintenance Platform",
    year: "2026",
    category: "Web",
    description:
      "Medical-equipment maintenance platform built during my internship at Steros: clients, devices, interventions, contracts, stock and invoices, with a back-office and a client portal.",
    highlights: ["60+ clients · 200+ devices · 3,400+ interventions", "Merged two codebases, 72-entity data model", "Dockerized, cloud PostgreSQL (Neon)"],
    tags: ["ASP.NET Core", "EF Core", "Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Docker"],
    accent: "from-sky-500/30 to-cyan-400/10",
    icon: "server",
    code: "https://github.com/khdir-ahmed/kompass",
    featured: true,
  },
  {
    title: "SMS Spam Detector",
    year: "2026",
    category: "AI",
    description:
      "Text classifier that flags spam messages and explains every decision by showing which words pushed it towards spam.",
    highlights: ["99.2% accuracy, 0.996 ROC AUC", "3 models compared with 5-fold cross-validation", "Streamlit app with batch mode"],
    tags: ["Python", "scikit-learn", "NLP", "Streamlit", "pytest"],
    image: "projects/spam.png",
    accent: "from-emerald-500/30 to-teal-400/10",
    icon: "spam",
    code: "https://github.com/khdir-ahmed/spam-classifier",
    featured: true,
  },
  {
    title: "eFastOrder",
    year: "2026",
    category: "Web",
    description: "Restaurant ordering platform with menu browsing, session cart, checkout, order tracking, role-based authentication and an admin dashboard.",
    highlights: ["EF Core + raw ADO.NET CRUD", "ASP.NET Core Identity"],
    tags: ["C#", "ASP.NET Core MVC", "EF Core", "SQLite", "Bootstrap"],
    accent: "from-orange-500/30 to-amber-400/10",
    icon: "utensils",
    code: "https://github.com/khdir-ahmed/eFastOrder",
  },
  {
    title: "IEEE CS Student Branch Website",
    year: "2026 – now",
    category: "Web",
    description: "The website of the IEEE Computer Society student branch: reusable React components and responsive pages for events, members and activities.",
    highlights: ["I'm the branch webmaster", "Responsive, component-based"],
    tags: ["React", "JavaScript", "HTML", "CSS"],
    accent: "from-blue-500/30 to-indigo-400/10",
    icon: "users",
  },
  {
    title: "IronForge — Gym Management",
    year: "2025",
    category: "Web",
    description: "Gym membership system: members, subscriptions, trainers, bookings and payments, with an admin dashboard and revenue charts.",
    highlights: ["Full CRUD admin panel", "Chart.js KPIs"],
    tags: ["PHP", "MySQL", "PDO", "JavaScript", "CSS"],
    accent: "from-rose-500/30 to-red-400/10",
    icon: "dumbbell",
    code: "https://github.com/khdir-ahmed/gym-system",
  },
  {
    title: "Library Reservation System",
    year: "2025",
    category: "Desktop",
    description: "Desktop app to manage books, members, reservations, holds, returns and overdue penalties, with separate member and admin views.",
    highlights: ["Penalty points & blocking", "Holds with expected dates"],
    tags: ["Java", "Swing", "JDBC", "MySQL"],
    accent: "from-yellow-500/25 to-lime-400/10",
    icon: "book",
    code: "https://github.com/khdir-ahmed/libray",
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    company: "Steros",
    detail: "Kompass project · Innovative Smart Solutions",
    period: "Summer 2026",
    points: [
      "Contributed to a medical maintenance platform managing 60+ clients, 200+ devices and 3,400+ interventions.",
      "Merged two versions of an ASP.NET Core MVC application into one codebase, unifying authentication, the interventions module and a 72-entity data model.",
      "Built a new front end with Next.js 16, React 19, TypeScript and Tailwind CSS — dashboards, KPIs, charts and management modules.",
      "Implemented session-based authentication with Admin / Client roles and a client portal to view equipment and submit maintenance requests.",
      "Containerized the app with Docker Compose, migrated the database schema and connected it to cloud PostgreSQL (Neon).",
    ],
    tags: ["C#", "ASP.NET Core", "EF Core", "Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Docker"],
  },
];

export const skills = [
  { group: "Languages", items: ["C#", "Python", "TypeScript", "JavaScript", "Java", "C", "PHP", "SQL", "PL/SQL", "MATLAB"] },
  { group: "Web", items: ["ASP.NET Core MVC", "Next.js", "React", "Tailwind CSS", "REST APIs", "HTML", "CSS"] },
  { group: "AI & Data", items: ["PyTorch", "scikit-learn", "pandas", "ONNX", "Streamlit", "Deep Learning", "LLMs"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Entity Framework Core"] },
  { group: "Tools & DevOps", items: ["Git", "GitHub Actions", "Docker", "Docker Compose", "Neon", "Linux", "Unity", "Cisco Packet Tracer"] },
  { group: "Testing", items: ["ISTQB Foundation", "Test case design", "Manual testing", "Bug reporting", "pytest"] },
];

export const activities = [
  { title: "Webmaster — IEEE Computer Society Student Branch", period: "2026 – Present", text: "Build and maintain the branch website and event content." },
  { title: "IEEEXtreme 18.0, 18.1 & 2026", period: "Competitive programming", text: "24-hour international programming contest." },
  { title: "CSTAM & ATIC — AfroTech Intelligence Congress", period: "Oct – Nov 2026", text: "Contributor to the second edition of both events." },
  { title: "Pyrobots Hackathon", period: "May 2025", text: "Member of the organizing team." },
  { title: "Crack Code Hackathon", period: "Feb 2025", text: "Participant." },
];

export const certifications = [
  "ISTQB Certified Tester — Foundation Level",
  "Evaluating and Customizing LLMs",
  "Fundamentals of Deep Learning",
  "Quantum Computing — IBM Quantum / QWorld",
  "Python Programming — ITS",
];

export const education = [
  { title: "Bachelor's Degree in Computer Science", place: "International Institute of Technology (IIT), Sfax", period: "2024 – Present" },
  { title: "Baccalaureate in Mathematics", place: "Tunisia", period: "2024" },
];

export const languages = [
  { name: "Arabic", level: "Native", value: 100 },
  { name: "English", level: "Fluent", value: 90 },
  { name: "French", level: "Intermediate", value: 65 },
  { name: "German", level: "Basic", value: 30 },
];
