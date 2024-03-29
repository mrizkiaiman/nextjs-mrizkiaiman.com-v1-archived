export const SEO_CONTENT_LANDING = {
  title: 'M. Rizki Aiman - Software Engineer',
  description: `Muhammad Rizki Aiman's main website. It contains my works, portfolio, and resume.`,
  keywords: `Muhamamd Rizki Aiman, M. Rizki Aiman, Rizki, Aiman, mrizkiaiman, Iki, Nezo Ravizen, Ashirogi, freelance, web, mobile, notion, product, digital, service, portfolio, works`,
}

export const LINKED_IN = 'https://www.linkedin.com/in/mrizkiaiman/'
export const BLOG = 'https://mrizkiaiman.medium.com/'
export const GITHUB = 'https://github.com/mrizkiaiman'
export const TWITTER = 'https://twitter.com/mrizkiaiman'
export const INSTAGRAM = 'https://www.instagram.com/mrizkiaiman/'
export const STORE = 'https://store.mrizkiaiman.com/'

export const AVATAR = '/images/avatar-full.svg'
export const AVATAR_WITH_LAPTOP = '/images/avatar-full-laptop.svg'

//LANDING
export const FIRST_TITLE = 'Software Engineer'
export const SECOND_TITLE = 'Notion Creator'
export const SLOGAN = `Improving the business and productivity by building a web, mobile application, and Notion system.`

//ABOUT
export const WORK = `Rizki is a full-stack developer and a Notion creator based in Jakarta with a passion building digital products.
                    He has different tooling-skills for solving real-life problems, like with code, Notion templates, CMS, etc. Outside of his
                    profession, he loves spending time with his kindle, playing games, hangout with family and friends, and study about human behavior, health, and self-growth.
                    Currently, he is a full time employee as a Front-End Developer at start-up called Arvis.`

export const BIO = [
  {
    year: '1996',
    description: 'Born in Palembang, Indonesia',
  },
  {
    year: '2016',
    description: 'Student Exchange - Universiti Teknologi Malaysia',
  },
  {
    year: '2019',
    description: 'Bachelor Degree - Universitas Sriwijaya',
  },
  {
    year: '2019',
    description: 'Fullstack JavaScript Bootcamp - Hacktiv8',
  },
  {
    year: '2020',
    description: 'Front-End Developer - RestoDepot',
  },
  {
    year: '2021 - Present',
    description: 'Front-End Developer - Arvis',
  },
]

export const INTERESTS = [
  {
    description: `Tech - Apple Ecosystem`,
  },
  {
    description: 'Notion, TickTick, and Raycast (my holy trinity system!)',
  },
  {
    description: `Reading books (mostly non-fiction)`,
  },
  {
    description: `Anime and manga`,
  },
  {
    description: 'Games (currently playing: Mobile Legends & YGO Master Duel)',
  },
  {
    description: 'Writing',
  },
]

//TOOLS
export const TOOLS = [
  {
    label: 'React',
    img: '/images/tools/react.webp',
    whiteBorder: false,
  },
  {
    label: 'TypeScript',
    img: '/images/tools/typescript.webp',
  },
  {
    label: 'NextJS',
    img: '/images/tools/nextjs.webp',
    whiteBorder: true,
  },
  {
    label: 'Expo',
    img: '/images/tools/expo.webp',
    whiteBorder: true,
  },
  {
    label: 'Notion',
    img: '/images/tools/notion.webp',
    whiteBorder: false,
  },
]

//PROJECTS
export const PROJECTS_WEB = [
  {
    type: 'web',
    title: 'AimanCorp - Business Site',
    description: `Professional Business Site. Inspired by devaslife and margelo.io design.`,
    tags: ['ReactJS', 'NextJS', 'TypeScript', 'TailwindCSS'],
    url: 'https://aimancorp.mrizkiaiman.com/',
    image: '/images/projects/web-aimancorp.webp',
    year: 2022,
  },
  {
    type: 'web',
    title: 'Coca-cola VR',
    description: `VR app which can display Nutrition Fact by pointing the Coca Cola 3D object. Made with WebXR (react-xr).`,
    tags: ['ReactJS', 'TypeScript', '@react-three/drei', '@react-three/xr'],
    url: 'https://webvr.mrizkiaiman.com/',
    image: '/images/projects/web-vr.webp',
    year: 2022,
  },
  {
    type: 'web',
    title: 'Coca-cola AR',
    description: `AR app which can display Nutrition Fact by pointing the Coca Cola real object to your camera's device. Made with JavaScript.`,
    tags: ['JavaScript'],
    url: 'https://webar.mrizkiaiman.com/',
    image: '/images/projects/web-ar.webp',
    year: 2022,
  },
]

export const PROJECTS_MOBILE_APP = [
  {
    type: 'mobile-app',
    title: 'Yarukoto',
    description: 'Animated to-do list, inspired by devaslife.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Native Base', 'Moti', 'Re-animated'],
    url: 'https://github.com/mrizkiaiman/react-native-yarukoto',
    image: '/images/projects/mobile-yarukoto.webp',
    year: 2022,
  },
  {
    type: 'mobile-app',
    title: 'Aria - Drone Pilot',
    description: 'A support app of main Aria Tani platform for Drone Pilot. Similar to driver app at Gojek/Grab.',
    tags: ['React Native', 'TypeScript', '@tanstack/query'],
    url: 'https://play.google.com/store/apps/details?id=ariatani.dronepilot.android',
    image: '/images/projects/mobile-aria-drone-pilot.webp',
    year: 2022,
  },
  {
    type: 'mobile-app',
    title: 'Arvis - CRM',
    description: 'Custom Relationship Management app with rich features.',
    tags: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Branch.io'],
    url: 'https://play.google.com/store/apps/details?id=arvis.app.android',
    image: '/images/projects/mobile-crm.webp',
    year: 2021,
  },
  {
    type: 'mobile-app',
    title: 'RestoDepot',
    description: 'B2B E-Commerce for F&B Business.',
    tags: ['React Native', 'Redux', 'Firebase', 'Branch.io'],
    url: '',
    image: '/images/projects/mobile-restodepot.webp',
    year: 2020,
  },
]

export const PROJECTS_NOTION = [
  {
    type: 'notion',
    title: 'Blog',
    description: 'Built with the dashboard that can control your blog post.',
    tags: ['Notion'],
    url: 'https://mrizkiaiman.gumroad.com/l/erryc',
    image: '/images/projects/notion-blog.webp',
    year: 2022,
  },
  {
    type: 'notion',
    title: 'Expense Tracker',
    description: 'Keep track of your finance.',
    tags: ['Notion'],
    url: 'https://mrizkiaiman.gumroad.com/l/BkWAh',
    image: '/images/projects/notion-expense-tracker.webp',
    year: 2021,
  },
  {
    type: 'notion',
    title: 'Weekly Habit Tracker',
    description: 'Take control back of your life with a more organized habits.',
    tags: ['Notion'],
    url: 'https://mrizkiaiman.gumroad.com/l/bwKrD',
    image: '/images/projects/notion-habits-tracker.webp',
    year: 2021,
  },
]
