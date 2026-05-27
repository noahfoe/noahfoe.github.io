export const site = {
  name: 'Noah Foley',
  title: 'Flutter · Frontend · Full-Stack Developer',
  email: 'noahfoley6@gmail.com',
  github: 'https://github.com/noahfoe',
  linkedin: 'https://linkedin.com/in/noahfoe',
};

export type ProjectKind = 'mobile' | 'web';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  kind: ProjectKind;
  tech: string[];
  images: string[];
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'flux-survivor',
    title: 'Flux Survivor',
    tagline: 'Live on Google Play',
    description:
      'A production Flutter game built with the Flame engine. Demonstrates real-time gameplay architecture, polished animations, 60fps performance optimization, and end-to-end Play Store release management.',
    kind: 'mobile',
    tech: ['Flutter', 'Dart', 'Flame Engine', 'Google Play'],
    images: [
      '/project-screenshots/FS1.png',
      '/project-screenshots/FS2.png',
      '/project-screenshots/FS3.png',
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.thepetrichor.fluxsurvivor',
  },
  {
    id: 'steamer',
    title: 'STEAMER',
    tagline: 'Live on Google Play',
    description:
      'A Flutter app for Steam users to track achievements and gaming progress. Pulls data from the Steam Web API, ships achievement visualization and goal-tracking, and is actively maintained on Google Play.',
    kind: 'mobile',
    tech: ['Flutter', 'Dart', 'Steam Web API', 'REST APIs', 'Google Play'],
    images: [
      '/project-screenshots/S1.png',
      '/project-screenshots/S2.png',
      '/project-screenshots/S3.png',
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.thepetrichor.steamer&hl=en_US',
  },
  {
    id: 'foleys-one-stop',
    title: "Foley's One Stop",
    tagline: 'Live client website',
    description:
      'A live Flutter Web site built for a real small-business client. Fully responsive, deployed to production, and actively serving real customers. Shows end-to-end client delivery using Flutter Web.',
    kind: 'web',
    tech: ['Flutter', 'Dart', 'Flutter Web', 'Responsive Design'],
    images: [
      '/project-screenshots/FOS.jpg',
      '/project-screenshots/FOS2.jpg',
      '/project-screenshots/FOS3.jpg',
    ],
    liveUrl: 'https://foleysonestop.com/',
  },
  {
    id: 'foley-web-systems',
    title: 'Foley Web Systems',
    tagline: 'Live business website',
    description:
      'Production website for my self-employed web development agency. Built with HTML, CSS, and JavaScript. Responsive layout, clear copywriting, and deployed via Cloudflare and GitHub Pages.',
    kind: 'web',
    tech: ['HTML', 'CSS', 'JavaScript', 'Cloudflare', 'GitHub Pages'],
    images: [
      '/project-screenshots/FWS1.jpg',
      '/project-screenshots/FWS2.jpg',
      '/project-screenshots/FSW3.jpg',
    ],
    liveUrl: 'https://www.foleywebsystems.com/',
  },
];

export interface Experience {
  id: string;
  title: string;
  company: string;
  url?: string;
  period: string;
  description: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'foley-web',
    title: 'Founder / Website Developer',
    company: 'Foley Web Systems',
    url: 'https://www.foleywebsystems.com/',
    period: 'May 2026 – Present',
    description:
      'Founded Foley Web Systems to build small business websites and provide local tech support, while actively seeking Flutter, frontend, backend, and full-stack developer roles. Building sites from design to deployment and staying current across the full web stack.',
    current: true,
  },
  {
    id: 'progyny',
    title: 'Flutter / Dart Developer',
    company: 'Progyny Inc.',
    period: 'May 2025 – Jan 2026',
    description:
      'Developed Flutter/Dart features for a healthcare benefits platform. Focused on mobile UI polish, state management architecture, and delivering high-quality code in a professional product environment.',
  },
  {
    id: 'usda',
    title: 'IT Software Dart / Flutter Developer',
    company: 'USDA-FSIS',
    period: 'Apr 2024 – Apr 2025',
    description:
      'Built and maintained Dart/Flutter tooling and internal software for a federal agency. Contributed to large-scale codebases, participated in technical specification reviews, and delivered reliable government-grade software.',
  },
  {
    id: 'vsbl',
    title: 'Flutter Mobile Developer',
    company: 'VSBL App',
    period: 'Feb 2022 – Jan 2024',
    description:
      'Developed and maintained Flutter mobile features for a production app. Collaborated in an Agile team, worked across multiple state management solutions, and shipped incremental updates to live users.',
  },
];

export const education = {
  school: 'Texas State University',
  location: 'San Marcos, Texas',
  degree: 'Bachelor of Science in Computer Science',
  graduated: 'December 2021',
  minors: ['Communication Studies', 'Applied Mathematics'],
};

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Mobile & Frontend',
    skills: ['Flutter', 'Dart', 'React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'State Management',
    skills: ['BLoC', 'Riverpod', 'GetX'],
  },
  {
    category: 'Backend & Cloud',
    skills: ['Firebase', 'Cloudflare', 'GitHub Pages', 'RESTful APIs', 'Python', 'SQL'],
  },
  {
    category: 'Tooling & Workflow',
    skills: ['Git / GitHub', 'Vite', 'Framer Motion', 'Figma to Code', 'SCRUM / Agile'],
  },
];
