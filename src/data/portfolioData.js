/**
 * Portfolio content parsed from resume. Central source for all sections.
 */

export const personal = {
  name: 'Saurabh Kumar',
  title: 'Java Backend Engineer',
  tagline: 'I build backend systems meant for real production load',
  email: 'kumarsaurabhsingh475@gmail.com',
  phone: '+91 79922 12983',
  location: 'Noida, India',
  linkedin: 'https://www.linkedin.com/in/saurabh-kumar-62767a191/',
  github: 'https://github.com/kumarsaurabhsingh475-cloud',
  /** Google Drive resume (direct download) */
  resumeDownloadUrl:
    'https://drive.google.com/uc?export=download&id=1FmHc3wIDWCocm6wSJnWk__bx1ldPNkg5',
  /** Google Drive resume (view in browser) */
  resumeViewUrl:
    'https://drive.google.com/file/d/1FmHc3wIDWCocm6wSJnWk__bx1ldPNkg5/view?usp=sharing',
  profileImage: '/profile.png',
  typingRoles: [
    'Spring Boot Microservices',
    'Scalable Backend Systems',
    'High-Performance APIs',
    'GraphQL & REST APIs',
    'RBAC & OAuth Security',
    'SaaS Platform Development',
  ],
};

export const about = {
  summary: `I build SaaS backends with Java, Spring Boot, REST and GraphQL APIs, and PostgreSQL. In production I've used AWS (S3, SES, RDS) for file storage, transactional email, and managed databases.`,
  specialization: [
    'SQL tuning: indexing, join fixes, and clearing N+1s (often 80–90% faster on hot paths)',
    'AWS S3, SES, and RDS for files, email, and relational data in live apps',
    'OAuth 2.0 and Google sign-in with Spring Security',
    'Microservices and APIs documented with Swagger/OpenAPI',
    'Multithreading when throughput actually needs it',
    'RBAC, Firebase integrations, and steady Agile delivery on SaaS products',
  ],
  /** Topic chips in About (not shown as skill bars) */
  expertiseTopics: [
    { name: 'Query optimization', featured: true },
    { name: 'Multithreading', featured: false },
    { name: 'Swagger / OpenAPI', featured: false },
    { name: 'OAuth 2.0', featured: false },
    { name: 'Google Sign-In', featured: false },
    { name: 'Firebase', featured: false },
    { name: 'AWS S3 · SES · RDS', featured: false },
  ],
  passion: `Most of what I enjoy is the unglamorous side of backend work: profiling slow queries, tuning execution plans, and keeping APIs quick under load. That shows up in workflow engines, live dashboards, and multi-wallet systems alike.`,
  highlights: [
    { label: 'Experience', value: '2.5 Years' },
    { label: 'Projects Delivered', value: '4+' },
    { label: 'API Performance', value: 'Up to 90%' },
    { label: 'Client Recognition', value: '2×' },
  ],
};

/** AWS services highlighted in the Skills section */
export const awsServices = [
  {
    id: 's3',
    name: 'Amazon S3',
    role: 'Object storage & static assets',
    detail: 'Buckets, uploads, and file flows we run in production',
  },
  {
    id: 'ses',
    name: 'Amazon SES',
    role: 'Transactional email',
    detail: 'Campaign and notification mail with deliverability in mind',
  },
  {
    id: 'rds',
    name: 'Amazon RDS',
    role: 'Managed relational databases',
    detail: 'MySQL and PostgreSQL workloads we operate day to day',
  },
];

/** Skill categories (badge chips, no percentages) */
export const skillCategories = {
  backend: {
    label: 'Backend Engineering',
    tagline: 'Java, APIs, and the core platform layer',
    items: [
      'Java 8 / 11 / 21',
      'Spring Boot',
      'Spring Security',
      'REST APIs',
      'GraphQL',
      'JUnit & Mockito',
      'Multithreading',
      'Swagger / OpenAPI',
    ],
  },
  database: {
    label: 'Data & Persistence',
    tagline: 'SQL, caching, and search',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Query Optimization'],
  },
  cloud: {
    label: 'Cloud & Architecture',
    tagline: 'AWS and distributed design',
    items: ['AWS S3', 'AWS SES', 'AWS RDS', 'Microservices', 'DynamoDB', 'OAuth 2.0'],
  },
  frontend: {
    label: 'Frontend (supporting)',
    tagline: 'Enough front-end to ship with the team',
    items: ['JavaScript', 'Angular', 'React', 'HTML / CSS'],
  },
  tools: {
    label: 'Engineering Toolkit',
    tagline: 'How we build and coordinate delivery',
    items: [
      'Git / GitHub',
      'Bitbucket',
      'Jira',
      'Maven / Gradle',
      'Postman',
      'IntelliJ IDEA',
      'Firebase',
    ],
  },
};

export const experience = [
  {
    company: 'Drabito Technologies Pvt. Ltd.',
    role: 'Software Developer',
    location: 'Noida, India',
    duration: 'Jan 2024 – Present',
    description:
      'I design and ship enterprise SaaS backends for EdTech, solar EPC, and smart society products. Day to day that means query tuning, OAuth/Google login, Swagger-documented APIs, and multithreading when the workload needs it.',
    tech: [
      'Java 11/17/21',
      'Spring Boot',
      'AWS S3 · SES · RDS',
      'OAuth / Google',
      'Swagger',
      'Firebase',
      'PostgreSQL',
    ],
    projects: [
      {
        name: 'WorkED | Cradle-to-Career EdTech',
        period: 'Aug 2024 – Present',
        stack: 'Java 11 & Angular 8',
        bullets: [
          'Built Classroom features end to end: attendance, grades, and badge awards.',
          'Shipped registration and onboarding APIs that other modules could plug into.',
          'Added student transfers between groups and program events to match client workflows.',
          'Fixed critical bugs and tuned queries until the landing page load improved by about 80%.',
        ],
      },
      {
        name: 'Zep 360 | Solar & EPC OS',
        period: 'Feb 2025 – Present',
        stack: 'Java 17 & React',
        bullets: [
          'Improved REST APIs and cut response times by up to 90% on key endpoints.',
          'Delivered a Service module covering work orders, assignments, and quotation flows.',
        ],
      },
      {
        name: 'WorkED Operations Hub',
        period: 'Feb 2025 – Present',
        stack: 'Java 21 & Angular 19',
        bullets: [
          'Built the internal ops portal to cut manual support work.',
          'Added a workflow engine with Quartz for email and Twilio SMS campaigns.',
          'Shipped live dashboards with GraphQL and REST for operations teams.',
          'Rolled out RBAC across user types and permission levels.',
        ],
      },
      {
        name: 'Inn4Smart | Smart Society SaaS',
        period: 'Jan 2024 – Jul 2024',
        stack: 'Java 17, React & React Native',
        bullets: [
          'Designed a multi-wallet setup for electricity and society billing.',
          'Wrote cron jobs for low-balance SMS and email alerts.',
          'Integrated QR and OTP gate passes for visitor entry.',
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: 'worked',
    title: 'WorkED',
    subtitle: 'Cradle-to-Career EdTech Platform',
    description:
      'Classroom and workforce platform with attendance, grading, badges, and student moves across programs.',
    tech: ['Java 11', 'Spring Boot', 'REST', 'Angular', 'MySQL'],
    appUrl: 'https://app.worked.com',
    bannerImage: '/WorkED.svg',
    bannerFit: 'contain',
    bannerLogoProfile: 'brand-wide',
    gradient: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    id: 'zep360',
    title: 'Zep 360',
    subtitle: 'All-in-One OS for Solar & EPC',
    description:
      'Service operations for solar/EPC teams: tuned APIs, work orders, and quotation workflows.',
    tech: ['Java 17', 'Spring Boot', 'REST', 'React', 'PostgreSQL'],
    appUrl: 'https://login.zep360.com',
    bannerImage: '/zep360.svg',
    bannerFit: 'contain',
    bannerLogoProfile: 'compact',
    gradient: 'from-violet-500/20 to-purple-600/20',
  },
  {
    id: 'operations-hub',
    title: 'WorkED Operations Hub',
    subtitle: 'Support & Workflow Automation',
    description:
      'Internal hub with a custom workflow engine, scheduled campaigns, GraphQL dashboards, and RBAC.',
    tech: ['Java 21', 'Quartz', 'GraphQL', 'Twilio', 'Angular 19'],
    appUrl: 'https://ops.worked.com',
    bannerImage: '/operations-hub.png',
    bannerSources: [
      '/operations-hub.png',
      '/operations.png',
      '/ops.png',
      '/WorkED-ops.png',
      '/operation.png',
      '/Operation.png',
    ],
    bannerFallback: '/WorkED-ops.svg',
    bannerFit: 'contain',
    bannerLogoProfile: 'brand-wide',
    gradient: 'from-emerald-500/20 to-teal-600/20',
  },
  {
    id: 'inn4smart',
    title: 'Inn4Smart',
    subtitle: 'Smart Society & Energy Management',
    description:
      'Society SaaS with multi-wallet billing, balance alerts, and QR/OTP gate access.',
    tech: ['Java 17', 'Spring Boot', 'React Native', 'Cron', 'SMS/Email'],
    appUrl: 'https://ems.inn4smart.com/auth/login',
    bannerImage: '/inn4smart.png',
    bannerSources: ['/inn4smart.png', '/inn4smart.jpg'],
    bannerFit: 'contain',
    bannerLogoProfile: 'emblem',
    gradient: 'from-amber-500/20 to-orange-600/20',
  },
];

export const achievements = [
  'Client called out my WorkED Operations Hub work twice for quality and reliability.',
  'Senior leadership noted faster backend turnaround and fewer recurring support issues.',
];

export const education = {
  degree: 'Master of Computer Applications',
  institution: 'Noida Institute of Engineering and Technologies',
  period: '2018 – 2021',
  score: '6.7 CGPA',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];
