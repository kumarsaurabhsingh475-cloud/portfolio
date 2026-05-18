/**
 * Portfolio content parsed from resume — single source of truth for all sections.
 */

export const personal = {
  name: 'Saurabh Kumar',
  title: 'Java Backend Engineer',
  tagline: 'Building scalable, production-grade backend systems',
  email: 'kumarsaurabhsingh475@gmail.com',
  phone: '+91 79922 12983',
  location: 'Noida, India',
  linkedin: 'https://www.linkedin.com/in/saurabh-kumar-62767a191/',
  github: 'https://github.com/kumarsaurabhsingh475-cloud',
  /** Google Drive resume — direct download */
  resumeDownloadUrl:
    'https://drive.google.com/uc?export=download&id=1FmHc3wIDWCocm6wSJnWk__bx1ldPNkg5',
  /** Google Drive resume — view in browser */
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
  summary: `Building scalable SaaS backends using Java, Spring Boot, REST APIs, GraphQL, and PostgreSQL — with hands-on AWS integration (S3, SES, RDS) for storage, email delivery, and managed relational data in production.`,
  specialization: [
    'SQL query optimization — indexing, joins, and N+1 fixes (up to 80–90% faster responses)',
    'AWS S3, SES & RDS for cloud-native file storage, email, and database workloads',
    'OAuth 2.0 & Google login with Spring Security',
    'Microservices architecture & Swagger/OpenAPI-first API design',
    'Multithreading & concurrent processing for high-throughput backends',
    'RBAC, Firebase services, and Agile delivery of production SaaS',
  ],
  /** Shown as topic chips in About — not in skill bar cards */
  expertiseTopics: [
    { name: 'Query optimization', featured: true },
    { name: 'Multithreading', featured: false },
    { name: 'Swagger / OpenAPI', featured: false },
    { name: 'OAuth 2.0', featured: false },
    { name: 'Google Sign-In', featured: false },
    { name: 'Firebase', featured: false },
    { name: 'AWS S3 · SES · RDS', featured: false },
  ],
  passion: `I thrive on solving complex backend challenges — profiling slow queries, tuning execution plans, and delivering APIs that stay fast under load — from workflow engines and real-time dashboards to multi-wallet architectures.`,
  highlights: [
    { label: 'Experience', value: '2.5 Years' },
    { label: 'Projects Delivered', value: '4+' },
    { label: 'API Performance', value: 'Up to 90%' },
    { label: 'Client Recognition', value: '2×' },
  ],
};

/** AWS services — featured strip in Skills section */
export const awsServices = [
  {
    id: 's3',
    name: 'Amazon S3',
    role: 'Object storage & static assets',
    detail: 'Buckets, uploads, and production file workflows',
  },
  {
    id: 'ses',
    name: 'Amazon SES',
    role: 'Transactional email',
    detail: 'Campaigns, notifications, and deliverability at scale',
  },
  {
    id: 'rds',
    name: 'Amazon RDS',
    role: 'Managed relational databases',
    detail: 'MySQL / PostgreSQL workloads with operational reliability',
  },
];

/** Skill categories — badge chips only (no percentages) */
export const skillCategories = {
  backend: {
    label: 'Backend Engineering',
    tagline: 'JVM, APIs & platform core',
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
    tagline: 'SQL, caching & search',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Query Optimization'],
  },
  cloud: {
    label: 'Cloud & Architecture',
    tagline: 'AWS & distributed systems',
    items: ['AWS S3', 'AWS SES', 'AWS RDS', 'Microservices', 'DynamoDB', 'OAuth 2.0'],
  },
  frontend: {
    label: 'Frontend (supporting)',
    tagline: 'Integration & UI collaboration',
    items: ['JavaScript', 'Angular', 'React', 'HTML / CSS'],
  },
  tools: {
    label: 'Engineering Toolkit',
    tagline: 'Delivery & collaboration',
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
      'Designing and delivering enterprise SaaS backends across EdTech, solar EPC, and smart society platforms — with a focus on query optimization, OAuth/Google login, Swagger-documented APIs, and multithreaded processing where it matters.',
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
          'Developed Classroom module features including attendance tracking, grade marking, and badge awarding end-to-end.',
          'Designed user registration and onboarding using RESTful APIs, improving flexibility across modules.',
          'Delivered a unique student transfer feature between groups and program events, customized for client workflows.',
          'Resolved critical bugs and optimized database queries, improving landing page performance by 80%.',
        ],
      },
      {
        name: 'Zep 360 | Solar & EPC OS',
        period: 'Feb 2025 – Present',
        stack: 'Java 17 & React',
        bullets: [
          'Engineered and optimized RESTful APIs, improving response time by up to 90%.',
          'Built a comprehensive Service Module with work orders, assignments, and quotation workflows.',
        ],
      },
      {
        name: 'WorkED Operations Hub',
        period: 'Feb 2025 – Present',
        stack: 'Java 21 & Angular 19',
        bullets: [
          'Developed the portal end-to-end to automate internal operations and reduce manual support.',
          'Built a Workflow engine with Quartz-Scheduler for email and Twilio SMS campaigns.',
          'Designed dynamic dashboards using GraphQL and REST APIs for real-time operations.',
          'Implemented RBAC to manage permissions across user types and operational levels.',
        ],
      },
      {
        name: 'Inn4Smart | Smart Society SaaS',
        period: 'Jan 2024 – Jul 2024',
        stack: 'Java 17, React & React Native',
        bullets: [
          'Designed multi-wallet architecture for electricity and society management services.',
          'Developed cron jobs for low-balance alerts via SMS and email.',
          'Integrated QR and OTP-based gate pass system for secure visitor entry.',
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
      'Classroom and workforce innovation platform with attendance, grading, badges, and cross-program student transfers.',
    tech: ['Java 11', 'Spring Boot', 'REST', 'Angular', 'MySQL'],
    appUrl: 'https://app.worked.com',
    gradient: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    id: 'zep360',
    title: 'Zep 360',
    subtitle: 'All-in-One OS for Solar & EPC',
    description:
      'High-performance service operations platform with optimized APIs, work orders, and quotation workflows.',
    tech: ['Java 17', 'Spring Boot', 'REST', 'React', 'PostgreSQL'],
    appUrl: 'https://login.zep360.com',
    gradient: 'from-violet-500/20 to-purple-600/20',
  },
  {
    id: 'operations-hub',
    title: 'WorkED Operations Hub',
    subtitle: 'Support & Workflow Automation',
    description:
      'Centralized operations portal with custom workflow engine, scheduled campaigns, GraphQL dashboards, and RBAC.',
    tech: ['Java 21', 'Quartz', 'GraphQL', 'Twilio', 'Angular 19'],
    appUrl: 'https://ops.worked.com',
    gradient: 'from-emerald-500/20 to-teal-600/20',
  },
  {
    id: 'inn4smart',
    title: 'Inn4Smart',
    subtitle: 'Smart Society & Energy Management',
    description:
      'SaaS platform with multi-wallet billing, automated alerts, and secure QR/OTP gate access for societies.',
    tech: ['Java 17', 'Spring Boot', 'React Native', 'Cron', 'SMS/Email'],
    appUrl: 'https://ems.inn4smart.com/auth/login',
    gradient: 'from-amber-500/20 to-orange-600/20',
  },
];

export const achievements = [
  'Recognized twice by the client for high-quality features in WorkED Operations Hub.',
  'Appreciated by senior leadership for streamlining backend workflows and reducing issue resolution time.',
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
