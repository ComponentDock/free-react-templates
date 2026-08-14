/* Vocare — job board template. Single-page recreation: transparent navbar
   → gradient hero (stats + tabbed search) → overlapping category strip →
   top categories → services band → featured jobs → testimonials → latest
   candidates → blog → newsletter → white footer. Brand palette: blue
   #206dfb, gradient #207dff → #a16ae8, orange #fdab44, peach #ffefdb,
   cream #fffaf5, light band #f8f9fa; Source Sans Pro type. */

export const BRAND = 'Vocare'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Browse Jobs', href: '#' },
  { label: 'Candidates', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

export interface Stat {
  value: string
  label: string
  icon: 'globe' | 'building' | 'file'
}

export const STATS: Stat[] = [
  { value: '46', label: 'Countries', icon: 'globe' },
  { value: '450', label: 'Companies', icon: 'building' },
  { value: '80000', label: 'Active Employees', icon: 'file' },
]

export const JOB_TYPES = [
  'Category',
  'Full Time',
  'Part Time',
  'Freelance',
  'Internship',
  'Temporary',
]

export interface SearchTab {
  id: 'job' | 'candidate'
  label: string
}

export const SEARCH_TABS: SearchTab[] = [
  { id: 'job', label: 'Find a Job' },
  { id: 'candidate', label: 'Find a Candidate' },
]

export interface TopCategory {
  name: string
  icon: 'code' | 'graduation' | 'palette' | 'calculator' | 'utensils' | 'heart-pulse'
  active?: boolean
  openPositions: number
}

export const TOP_CATEGORIES: TopCategory[] = [
  { name: 'Website & Software', icon: 'code', openPositions: 143 },
  { name: 'Education & Training', icon: 'graduation', active: true, openPositions: 143 },
  { name: 'Graphic & UI/UX Design', icon: 'palette', openPositions: 143 },
  { name: 'Accounting & Finance', icon: 'calculator', openPositions: 143 },
  { name: 'Restaurant & Food', icon: 'utensils', openPositions: 143 },
  { name: 'Health & Hospital', icon: 'heart-pulse', openPositions: 143 },
]

export interface JobCategory {
  name: string
  count: number
}

export const JOB_CATEGORIES: JobCategory[] = [
  { name: 'Web Development', count: 354 },
  { name: 'Graphic Designer', count: 143 },
  { name: 'Multimedia', count: 100 },
  { name: 'Advertising', count: 90 },
  { name: 'Education & Training', count: 100 },
  { name: 'English', count: 200 },
  { name: 'Social Media', count: 300 },
  { name: 'Writing', count: 150 },
  { name: 'PHP Programming', count: 400 },
  { name: 'Project Management', count: 100 },
  { name: 'Finance Management', count: 222 },
  { name: 'Office & Admin', count: 123 },
  { name: 'Web Designer', count: 324 },
  { name: 'Customer Service', count: 564 },
  { name: 'Marketing & Sales', count: 234 },
  { name: 'Software Development', count: 425 },
]

export interface Service {
  title: string
  copy: string
  icon: 'search' | 'briefcase' | 'trophy' | 'users'
}

export const SERVICES: Service[] = [
  {
    title: 'Search Millions of Jobs',
    copy: 'A small river named Duden flows by their place and supplies.',
    icon: 'search',
  },
  {
    title: 'Easy To Manage Jobs',
    copy: 'A small river named Duden flows by their place and supplies.',
    icon: 'briefcase',
  },
  {
    title: 'Top Careers',
    copy: 'A small river named Duden flows by their place and supplies.',
    icon: 'trophy',
  },
  {
    title: 'Search Expert Candidates',
    copy: 'A small river named Duden flows by their place and supplies.',
    icon: 'users',
  },
]

export interface JobPost {
  id: number
  title: string
  badge: string
  company: string
}

export const JOBS: JobPost[] = [
  { id: 1, title: 'Frontend Development', badge: 'Partime', company: 'Facebook, Inc.' },
  { id: 2, title: 'Full Stack Developer', badge: 'Fulltime', company: 'Google, Inc.' },
  {
    id: 3,
    title: 'Open Source Interactive Developer',
    badge: 'Freelance',
    company: 'New York Times',
  },
  { id: 4, title: 'Frontend Development', badge: 'Partime', company: 'Facebook, Inc.' },
  {
    id: 5,
    title: 'Open Source Interactive Developer',
    badge: 'Temporary',
    company: 'New York Times',
  },
  { id: 6, title: 'Full Stack Developer', badge: 'Fulltime', company: 'Google, Inc.' },
  {
    id: 7,
    title: 'Open Source Interactive Developer',
    badge: 'Freelance',
    company: 'New York Times',
  },
  { id: 8, title: 'Frontend Development', badge: 'Internship', company: 'Facebook, Inc.' },
  {
    id: 9,
    title: 'Open Source Interactive Developer',
    badge: 'Temporary',
    company: 'New York Times',
  },
]

export const JOB_LOCATION = 'Western City, UK'

export interface Testimonial {
  quote: string
  name: string
  position: string
  seed: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    seed: 'vocare-client-1',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    seed: 'vocare-client-2',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    seed: 'vocare-client-3',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    seed: 'vocare-client-4',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    seed: 'vocare-client-5',
  },
]

export interface Candidate {
  name: string
  seed: string
}

export const CANDIDATES: Candidate[] = [
  { name: 'Danica Lewis', seed: 'vocare-candidate-1' },
  { name: 'Nicole Simon', seed: 'vocare-candidate-2' },
  { name: 'Cloe Meyer', seed: 'vocare-candidate-3' },
  { name: 'Rachel Clinton', seed: 'vocare-candidate-4' },
  { name: 'Dave Buff', seed: 'vocare-candidate-5' },
  { name: 'Dave Buff', seed: 'vocare-candidate-6' },
]

export interface BlogPost {
  date: string
  author: string
  comments: number
  title: string
  seed: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    date: 'August 28, 2019',
    author: 'Admin',
    comments: 3,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    seed: 'vocare-blog-1',
  },
  {
    date: 'August 28, 2019',
    author: 'Admin',
    comments: 3,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    seed: 'vocare-blog-2',
  },
  {
    date: 'August 28, 2019',
    author: 'Admin',
    comments: 3,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    seed: 'vocare-blog-3',
  },
  {
    date: 'August 28, 2019',
    author: 'Admin',
    comments: 3,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    seed: 'vocare-blog-4',
  },
]

export interface FooterColumn {
  heading: string
  links: string[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Employers',
    links: [
      'Browse Candidates',
      'Post a Job',
      'Employer Listing',
      'Resume Page',
      'Dashboard',
      'Job Packages',
    ],
  },
  {
    heading: 'Candidate',
    links: [
      'Browse Jobs',
      'Submit Resume',
      'Dashboard',
      'Browse Categories',
      'My Bookmarks',
      'Candidate Listing',
    ],
  },
  {
    heading: 'Account',
    links: ['My Account', 'Sign In', 'Create Account', 'Checkout'],
  },
]

export const FOOTER_ABOUT =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const CONTACT_DETAILS = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
}

export type SocialKey = 'twitter' | 'facebook' | 'instagram'

export const SOCIAL_LINKS: { key: SocialKey; label: string; href: string }[] = [
  { key: 'twitter', label: 'Twitter', href: '#' },
  { key: 'facebook', label: 'Facebook', href: '#' },
  { key: 'instagram', label: 'Instagram', href: '#' },
]
