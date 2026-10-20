export const navItems = [
  { label: 'About', shortLabel: 'About', href: '/about' },
  { label: 'Side quests', shortLabel: 'Quests', href: '/side-quests' },
  { label: 'Wunderkammern', shortLabel: 'Wunder', href: '/wunderkammern' },
];

export const surfaces = [
  { id: 'paper', label: 'Paper', color: '#f4efe4' },
  { id: 'chalk', label: 'Chalk', color: '#f1f1ec' },
  { id: 'night', label: 'Night', color: '#0d2425' },
];

export const experience = [
  {
    index: '01',
    company: 'Yubi',
    role: 'Lead Software Engineer',
    year: '2024 —',
    description:
      'Leading work on YubiOS, with a focus on distributed systems, AI agents, and generative AI applications. Joined as Senior Software Engineer in 2024 and moved into the lead role in July 2026.',
    stack: ['Distributed systems', 'LLMs', 'AI agents'],
    href: 'https://www.go-yubi.com/',
    external: true,
  },
  {
    index: '02',
    company: 'Northern Arc Capital',
    role: 'Senior Associate Technology',
    year: '2021 — 24',
    description:
      'Joined as Technology Consultant on the Treasury reports module, then led the n-POS co-lending platform, automating loan processing from origination to closing. Also a founding engineer on Altifi, building the backend behind investments and investor features.',
    stack: ['Java', 'Microservices', 'Platform design'],
    href: 'https://www.northernarc.com/',
    external: true,
  },
  {
    index: '03',
    company: 'Memorang',
    role: 'Software Engineer',
    year: '2019 — 20',
    description:
      'Started the web redesign of the Edu-Tech application and set up the initial codebase, using Next.js to share code with React Native.',
    stack: ['React', 'Next.js', 'AWS', 'Vercel', 'Material UI'],
    href: 'https://memorang.com/',
    external: true,
  },
  {
    index: '04',
    company: 'Access Healthcare Services',
    role: 'AI Intern',
    year: '2017',
    description:
      'Automated medical code generation from reports using NLP and built an OCR engine that detected characters in hardcopy reports and emitted text files.',
    stack: ['Python', 'NLP', 'OpenCV', 'CNNs'],
  },
];

export const sideQuests = [
  {
    id: 'SQ-006',
    status: 'SHIPPED',
    title: 'Whatsinthebox?',
    year: '2020 —',
    body: 'A small app for the times you cannot decide what to watch. Open the box; let it choose.',
    stack: ['Next.js', 'TypeScript'],
    href: 'https://whatsinthebox.vercel.app',
    external: true,
    last: 'live on Vercel',
    progress: 5,
  },
  {
    id: 'SQ-005',
    status: 'ARCHIVED',
    title: 'Artificial Medical Assistant',
    year: 'College',
    body: 'An Android assistant that tracks medicine intake, reads vitals from Fitbit bands, and connects patients with nearby volunteers in an emergency.',
    stack: ['Android', 'Fitbit'],
    last: 'college archive',
    progress: 4,
  },
  {
    id: 'SQ-004',
    status: 'ARCHIVED',
    title: 'Social Network',
    year: 'College',
    body: 'A PHP social network that connects people by interests, with a friend recommendation system built on social-network analysis.',
    stack: ['PHP', 'MySQL'],
    last: 'college archive',
    progress: 3,
  },
  {
    id: 'SQ-003',
    status: 'ARCHIVED',
    title: 'Facial emotion recognition',
    year: 'College',
    body: 'A deep-learning classifier for 26 complex and compound emotions, trained on the CFEE dataset.',
    stack: ['Python', 'TensorFlow', 'OpenCV'],
    last: 'college archive',
    progress: 4,
  },
  {
    id: 'SQ-002',
    status: 'ARCHIVED',
    title: '3D models from drone images',
    year: '2017',
    body: 'Processed drone photos of construction sites into 3D models, then analysed them for defects using neural nets.',
    stack: ['Python', 'OpenCV', 'Neural nets'],
    last: '2017 archive',
    progress: 4,
  },
  {
    id: 'SQ-001',
    status: 'SHIPPED',
    title: 'This website',
    year: '2026',
    body: 'A personal field-notes site in Next.js and Tailwind, set in Newsreader and IBM Plex.',
    stack: ['Next.js', 'Tailwind'],
    last: 'updated today',
    progress: 5,
  },
];

export const education = [
  {
    title: 'B.E. Computer Science and Engineering',
    detail: 'SSN College of Engineering · 2015—2019',
    status: 'DEGREE',
  },
  {
    title: 'Shree Niketan Matriculation School',
    detail: '2006—2015',
    status: 'SCHOOL',
  },
];

export const recognition = [
  {
    title: 'National Finalist',
    detail: 'Robotryst · IIT Delhi',
    status: 'FINALIST',
  },
  {
    title: 'State Finalist',
    detail: 'Mathematics and Science Olympiads',
    status: 'FINALIST',
  },
  {
    title: 'Best College Team',
    detail: 'Madras Quiz · among 500 teams',
    status: 'WINNER',
  },
  {
    title: 'International Space Camp',
    detail: 'NASA · Commander, Space Flight Simulator · 2010',
    status: 'TRAINEE',
  },
];

export const contactLinks = [
  { label: 'Email', href: 'mailto:chudeep@yahoo.in', external: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chudeep-shankar/', external: true },
];
