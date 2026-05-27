export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  screenshots?: string[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  dates: string;
  description: string;
  url?: string;
  current?: boolean;
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  graduated: string;
  minors: string[];
}

// ── Projects ────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "flux-survivor",
    title: "Flux Survivor",
    description:
      "Production Flutter mobile game published on Google Play. Built with Flutter & Flame engine, showcasing real-time gameplay, polished animations, performance optimisation, and full Play Store release lifecycle.",
    longDescription:
      "A live production game demonstrating mobile performance tuning, game loop architecture, UI/UX polish under 60 fps constraints, and end-to-end Play Store deployment.",
    tech: ["Flutter", "Dart", "Flame Engine", "Google Play"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.thepetrichor.fluxsurvivor",
    badge: "Live on Play Store",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    accentColor: "from-cyan-500/20 to-sky-600/10",
    screenshots: ["/project-screenshots/FS1.png", "/project-screenshots/FS2.png", "/project-screenshots/FS3.png"],
  },
  {
    id: "steamer",
    title: "STEAMER",
    description:
      "Production Flutter app on Google Play for Steam users to track achievements, profile progress, games, and personal goals. Highlights RESTful API integration, mobile UI/UX, and live user-focused product design.",
    longDescription:
      "A live app pulling data from the Steam Web API, with goal-tracking, achievement progress, and a polished mobile-first UI — shipped and maintained on Google Play.",
    tech: ["Flutter", "Dart", "Steam API", "REST APIs", "Google Play"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.thepetrichor.steamer&hl=en_US",
    badge: "Live on Play Store",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    accentColor: "from-indigo-500/20 to-violet-600/10",
    screenshots: ["/project-screenshots/S1.png", "/project-screenshots/S2.png", "/project-screenshots/S3.png"],
  },
  {
    id: "foleys-one-stop",
    title: "Foley's One Stop",
    description:
      "Production Flutter Web website built for a real small-business client. Demonstrates responsive design, Flutter Web deployment, client-focused product delivery, and a polished live web presence.",
    longDescription:
      "A live client website built with Flutter Web — fully responsive, deployed, and actively serving a real small business. Showcases real-world client delivery.",
    tech: ["Flutter", "Dart", "Flutter Web", "Responsive Design"],
    liveUrl: "https://foleysonestop.com/",
    badge: "Live Production Site",
    badgeColor: "bg-sky-500/15 text-sky-400 border-sky-500/25",
    accentColor: "from-sky-500/20 to-cyan-600/10",
    screenshots: ["/project-screenshots/FOS.jpg", "/project-screenshots/FOS2.jpg", "/project-screenshots/FOS3.jpg"],
  },
  {
    id: "foley-web-systems",
    title: "Foley Web Systems",
    description:
      "Production website for my self-employed web development business — built with HTML, CSS, and JavaScript. Shows business branding, service presentation, responsive design, and Cloudflare + GitHub Pages deployment.",
    longDescription:
      "A live business site demonstrating frontend fundamentals, clean copywriting, responsive layout, and professional deployment via Cloudflare and GitHub Pages.",
    tech: ["HTML", "CSS", "JavaScript", "Cloudflare", "GitHub Pages"],
    liveUrl: "https://www.foleywebsystems.com/",
    badge: "Live Production Site",
    badgeColor: "bg-sky-500/15 text-sky-400 border-sky-500/25",
    accentColor: "from-violet-500/20 to-indigo-600/10",
    screenshots: ["/project-screenshots/FWS1.jpg", "/project-screenshots/FWS2.jpg", "/project-screenshots/FSW3.jpg"],
  },
];

// ── Skills ───────────────────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    category: "Mobile & Frontend",
    icon: "smartphone",
    skills: ["Flutter", "Dart", "React", "TypeScript", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "State Management",
    icon: "layers",
    skills: ["BLoC", "Riverpod", "GetX"],
  },
  {
    category: "Backend & Cloud",
    icon: "database",
    skills: ["Firebase", "Cloudflare", "RESTful APIs", "Python", "SQL"],
  },
  {
    category: "Workflow & Collaboration",
    icon: "git-merge",
    skills: ["Git / GitHub", "Figma to Code", "SCRUM / Agile"],
  },
];

// ── Experience ────────────────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: "vsbl",
    company: "VSBL App",
    title: "Flutter Mobile Developer",
    dates: "Feb. 2022 – Jan. 2024",
    description:
      "Developed and maintained Flutter mobile features for a production app. Collaborated in an Agile team, worked across state management solutions, and shipped incremental updates to live users.",
  },
  {
    id: "usda",
    company: "USDA-FSIS",
    title: "IT Software Dart / Flutter Developer",
    dates: "Apr. 2024 – Apr. 2025",
    description:
      "Built and maintained Dart/Flutter tooling and internal software for a federal agency. Worked on large-scale codebases, contributed to technical specifications, and delivered reliable government-grade software.",
  },
  {
    id: "progyny",
    company: "Progyny Inc.",
    title: "Flutter / Dart Developer",
    dates: "May 2025 – Jan. 2026",
    description:
      "Developed Flutter/Dart features for a healthcare benefits platform. Focused on mobile UI polish, state management, and delivering high-quality code in a professional product environment.",
  },
  {
    id: "foley-web",
    company: "Foley Web Systems",
    title: "Founder / Website Developer",
    url: "https://www.foleywebsystems.com/",
    dates: "May 2026 – Present",
    description:
      "Founded Foley Web Systems to build small business websites and provide local tech help while actively seeking Flutter, frontend, backend, and full-stack developer opportunities. Building client-facing websites from design to deployment and staying sharp across the full web stack.",
    current: true,
  },
];

// ── Education ─────────────────────────────────────────────────────────────────
export const education: Education = {
  school: "Texas State University",
  location: "San Marcos, Texas",
  degree: "Bachelor of Science in Computer Science",
  graduated: "December 2021",
  minors: ["Communication Studies", "Applied Mathematics"],
};

// ── Personal / Contact ────────────────────────────────────────────────────────
export const personal = {
  name: "Noah Foley",
  email: "noahfoley6@gmail.com",
  github: "https://github.com/noahfoe",
  linkedin: "https://www.linkedin.com/in/noahfoe/",
  resumeUrl: "/MyResume2026.pdf", // Place your PDF at public/MyResume2026.pdf
  headline: "Flutter · Frontend · Full-Stack Developer",
  tagline: "5+ years building production apps and websites.",
  seeking:
    "Actively seeking Flutter, Frontend, Backend, or Full-Stack Developer roles.",
};
