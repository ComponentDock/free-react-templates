/* Content model for the Maverick template — recreated from the ColorLib
   "Clark" preview (https://preview.colorlib.com/theme/clark/). All photos
   are picsum-seeded placeholders (no ColorLib assets); icons are
   lucide-react (brand social icons are inline SVGs in components/icons). */

export const BRAND = 'Maverick'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section', active: true },
  { label: 'About', href: '#about-section' },
  { label: 'Resume', href: '#resume-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Skills', href: '#skills-section' },
  { label: 'Projects', href: '#projects-section' },
  { label: 'My Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const HERO_SLIDES = [
  {
    subheading: 'Hello!',
    headlineBefore: "I'm ",
    headlineHighlight: 'Alex Maverick',
    subline: 'A Freelance Web Designer',
    image: 'https://picsum.photos/seed/maverick-1/600/750',
  },
  {
    subheading: 'Hello!',
    headlineBefore: "I'm a ",
    headlineHighlight: 'web designer',
    subline: 'based in London',
    image: 'https://picsum.photos/seed/maverick-2/600/750',
  },
] as const

export const ABOUT = {
  subheading: 'About',
  heading: 'About Me',
  blurb:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  image: 'https://picsum.photos/seed/maverick-1/500/620',
  info: [
    { label: 'Name', value: 'Alex Maverick' },
    { label: 'Date of birth', value: 'January 01, 1987' },
    { label: 'Address', value: 'San Francisco CA 97987 USA' },
    { label: 'Zip code', value: '1000' },
    { label: 'Email', value: 'maverick.design@gmail.com' },
    { label: 'Phone', value: '+1-2234-5678-9-0' },
  ],
  counterValue: 120,
  counterLabel: 'Project complete',
} as const

export interface ResumeEntry {
  date: string
  title: string
  institution: string
  blurb: string
}

export const RESUME_BLURB =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'

export const EDUCATION: ResumeEntry[] = [
  {
    date: '2014-2015',
    title: 'Master Degree of Design',
    institution: 'Cambridge University',
    blurb: RESUME_BLURB,
  },
  {
    date: '2014-2015',
    title: "Bachelor's Degree of C.A",
    institution: 'Cambridge University',
    blurb: RESUME_BLURB,
  },
  {
    date: '2008-2009',
    title: 'Diploma in Computer',
    institution: 'Cambridge University',
    blurb: RESUME_BLURB,
  },
]

export const EXPERIENCE: ResumeEntry[] = [
  {
    date: '2014-2015',
    title: 'Art & Creative Director',
    institution: 'Cambridge University',
    blurb: RESUME_BLURB,
  },
  {
    date: '2014-2015',
    title: 'Wordpress Developer',
    institution: 'Cambridge University',
    blurb: RESUME_BLURB,
  },
  {
    date: '2008-2009',
    title: 'UI/UX Designer',
    institution: 'Cambridge University',
    blurb: RESUME_BLURB,
  },
]

export type ServiceIcon = 'design' | 'photography' | 'developer' | 'app' | 'branding' | 'strategy'

export interface Service {
  icon: ServiceIcon
  title: string
  blurb: string
}

export const SERVICES_BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

/* The original spells the second card "Phtography" — the recreation uses
   the corrected spelling (noted in docs/templates/maverick/tasks.md). */
export const SERVICES: Service[] = [
  { icon: 'design', title: 'Web Design', blurb: SERVICES_BLURB },
  { icon: 'photography', title: 'Photography', blurb: SERVICES_BLURB },
  { icon: 'developer', title: 'Web Developer', blurb: SERVICES_BLURB },
  { icon: 'app', title: 'App Developing', blurb: SERVICES_BLURB },
  { icon: 'branding', title: 'Branding', blurb: SERVICES_BLURB },
  { icon: 'strategy', title: 'Product Strategy', blurb: SERVICES_BLURB },
]

export interface Skill {
  label: string
  percent: number
}

export const SKILLS: Skill[] = [
  { label: 'Photoshop', percent: 90 },
  { label: 'jQuery', percent: 85 },
  { label: 'HTML5', percent: 95 },
  { label: 'CSS3', percent: 90 },
  { label: 'WordPress', percent: 70 },
  { label: 'SEO', percent: 80 },
]

export interface Project {
  title: string
  category: string
  image: string
}

/* Masonry arrangement: tile 1 spans 4 cols, tile 2 spans 8 cols, then
   two stacked inside an 8-col slot and two stacked inside a 4-col slot. */
export const PROJECTS: [Project, Project, Project, Project, Project, Project] = [
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/maverick-3/600/600',
  },
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/maverick-4/800/600',
  },
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/maverick-5/600/600',
  },
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/maverick-6/600/600',
  },
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/maverick-7/600/600',
  },
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/maverick-8/600/600',
  },
]

export interface BlogPost {
  title: string
  excerpt: string
  date: string
  author: string
  comments: number
  image: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: 'June 21, 2019',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/maverick-9/700/350',
  },
  {
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: 'June 21, 2019',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/maverick-10/700/350',
  },
  {
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: 'June 21, 2019',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/maverick-11/700/350',
  },
]

export interface CounterStat {
  value: number
  label: string
}

export const COUNTER_STATS: CounterStat[] = [
  { value: 15, label: 'Awards' },
  { value: 2500, label: 'Complete Projects' },
  { value: 980, label: 'Happy Customers' },
  { value: 250, label: 'Cups of coffee' },
]

export const HIRE_ME = {
  heading: "I'm Available for freelancing",
  blurb:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  image: 'https://picsum.photos/seed/maverick-12/1920/700',
} as const

export const CONTACT = {
  subheading: 'Contact Me',
  heading: 'Contact Me',
  blurb: SERVICES_BLURB,
  boxes: [
    {
      icon: 'address',
      title: 'Address',
      value: '198 West 21th Street, Suite 721 New York NY 10016',
    },
    { icon: 'phone', title: 'Contact Number', value: '+ 1235 2355 98' },
    { icon: 'email', title: 'Email Address', value: 'info@yoursite.com' },
    { icon: 'website', title: 'Website', value: 'yoursite.com' },
  ],
  image: 'https://picsum.photos/seed/maverick-13/500/620',
} as const

export const FOOTER_ABOUT =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const FOOTER_LINKS = ['Home', 'About', 'Services', 'Projects', 'Contact'] as const

export const FOOTER_SERVICES = [
  'Web Design',
  'Web Development',
  'Business Strategy',
  'Data Analysis',
  'Graphic Design',
] as const

export const FOOTER_QUESTIONS = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
} as const
