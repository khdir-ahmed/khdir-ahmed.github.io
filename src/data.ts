export const profile = {
  name: "Ahmed Khdir",
  role: "Computer Science Student · Full-Stack Developer · Applied AI",
  roles: ["Full-Stack Developer", "Applied AI", "CS Student @ IIT Sfax", "IEEE CS Webmaster"],
  location: "Sfax, Tunisia",
  email: "khdir.ahmed@iit.ens.tn",
  github: "https://github.com/khdir-ahmed",
  cv: "Ahmed_Khdir_CV.pdf",
  summary:
    "Computer Science student at IIT Sfax with hands-on full-stack experience from a software engineering internship at Steros. I build web applications with C# / ASP.NET Core, React, Next.js, TypeScript and PostgreSQL, alongside applied AI projects in multi-agent workflows, retrieval-augmented generation, NLP and deep learning. Looking for software engineering, full-stack, AI or data-focused internships.",
};

export const stats = [
  { value: "3,400+", label: "interventions managed by the platform I helped build" },
  { value: "99.6%", label: "test accuracy of my handwritten-digit CNN" },
  { value: "9", label: "projects shipped across web, desktop and AI" },
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
    title: "UniPath — AI University Application Assistant",
    year: "2026",
    category: "AI",
    description:
      "Multi-agent platform that helps international students find Master's programs, check their eligibility against official admission requirements, track applications and draft letters and emails.",
    highlights: [
      "6 LangGraph agents: research, requirements, eligibility, documents, email, coordinator",
      "Every requirement traced to its source page, unverified claims flagged",
      "Explainable 0–100 eligibility score with German grade conversion",
    ],
    tags: ["LangGraph", "Claude API", "Multi-agent", "FastAPI", "React", "TypeScript", "Recharts"],
    accent: "from-indigo-500/30 to-sky-500/10",
    icon: "brain",
    code: "https://github.com/khdir-ahmed/uni-application-assistant",
    featured: true,
  },
  {
    title: "DocChat — Chat with your PDFs",
    year: "2026",
    category: "AI",
    description:
      "Retrieval-augmented generation (RAG) app: upload PDFs, ask questions, get answers that cite the exact page. Search runs fully in the browser.",
    highlights: ["Hybrid search: MiniLM embeddings + BM25, fused with RRF", "Embedding model runs on-device in a Web Worker", "Streaming Gemini answers with clickable citations"],
    tags: ["RAG", "LLM", "Transformers.js", "React", "TypeScript", "Gemini API"],
    image: "projects/docchat.png",
    accent: "from-violet-500/30 to-fuchsia-500/10",
    icon: "brain",
    code: "https://github.com/khdir-ahmed/doc-chat",
    demo: "https://khdir-ahmed.github.io/doc-chat/",
    featured: true,
  },
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
      "Developed the front end with Next.js 16, React 19, TypeScript and Tailwind CSS — dashboards, KPIs, charts and management modules.",
      "Implemented session-based authentication with Admin / Client roles and a client portal to view equipment and submit maintenance requests.",
      "Containerized the application with Docker Compose and integrated Neon-hosted PostgreSQL.",
    ],
    tags: ["C#", "ASP.NET Core", "EF Core", "Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Docker"],
  },
];

export const skills = [
  { group: "Languages", items: ["C#", "C", "Python", "Java", "JavaScript", "TypeScript", "PHP", "SQL", "PL/SQL", "MATLAB"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Backend", items: ["ASP.NET Core MVC", "REST APIs", "Entity Framework Core", "FastAPI"] },
  { group: "AI / ML", items: ["PyTorch", "scikit-learn", "CNNs", "NLP", "Embeddings", "RAG", "LangGraph", "ONNX Runtime Web"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "SQLite"] },
  { group: "Tools & DevOps", items: ["Git", "GitHub", "GitHub Actions", "Docker", "Docker Compose", "Neon", "Linux", "Windows"] },
];

export const activities = [
  { title: "Webmaster — IEEE Computer Society Student Branch", period: "2026 – Present", text: "Build and maintain the branch website: responsive pages, reusable React components, event, member and activity content." },
  { title: "IEEEXtreme 18.0, 18.1 & 19.0", period: "Competitive programming", text: "24-hour international programming contest." },
  { title: "CSTAM", period: "Nov 2026", text: "Participant." },
  { title: "ATIC — AfroTech Intelligence Congress", period: "Oct 2026", text: "Participant." },
  { title: "Pyrobots Hackathon", period: "May 2025", text: "Member of the organizing team." },
  { title: "Crack Code Hackathon", period: "Feb 2025", text: "Participant." },
];

export const certifications = [
  "QBronze — Quantum Computing & Programming using Qiskit, QWorld (Oct 2025)",
  "IEEEXtreme 19.0 — Certificate of Participation (Oct 2025)",
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
