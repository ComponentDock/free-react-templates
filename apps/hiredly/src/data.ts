import {
  BadgeCheck,
  Briefcase,
  Clock,
  Headset,
  Rocket,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'

// ---- Navigation ---------------------------------------------------------

export type NavLink = { label: string; href: string; dropdown?: string[] }

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Job', href: '#jobs' },
  { label: 'Blog', href: '#blog', dropdown: ['Blog', 'Blog Details', 'Elements'] },
  { label: 'Contact', href: '#contact' },
]

// ---- Hero ---------------------------------------------------------------

export const defaultLocation = 'Location BD'
export const heroLocations = ['Location BD', 'Location PK', 'Location US', 'Location UK']

export const heroHeadline = 'Searching for a job? Find the best startup job that fit you'

// ---- Jobs -----------------------------------------------------------------

export type TagColor = 'orange' | 'blue' | 'green' | 'indigo' | 'pink'

/** Literal union of every category key with a job entry — keeps the
 *  tag-color lookup statically total (no runtime fallback branch). */
export type JobCategoryKey =
  'creative' | 'programming' | 'corporate' | 'finance' | 'medical' | 'marketing'

export type Job = {
  title: string
  category: string
  categoryKey: JobCategoryKey
  location: string
  type: string
  company: string
  time: string
}

export type JobCategory = { label: string; key: string }

export const jobCategories: JobCategory[] = [
  { label: 'All Categories', key: 'all' },
  { label: 'Creative & Art', key: 'creative' },
  { label: 'Programming & IT', key: 'programming' },
  { label: 'Corporate', key: 'corporate' },
  { label: 'Finance & Accounting', key: 'finance' },
  { label: 'Medical', key: 'medical' },
  { label: 'Marketing', key: 'marketing' },
]

export const tagByCategoryKey: Record<JobCategoryKey, TagColor> = {
  creative: 'orange',
  programming: 'indigo',
  corporate: 'pink',
  finance: 'blue',
  medical: 'green',
  marketing: 'orange',
}

export const jobs: Job[] = [
  // Creative & Art
  {
    title: 'User Experience Designer — Employee Solutions',
    category: 'Creative & Art',
    categoryKey: 'creative',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Globe Solution Ltd.',
    time: '2h ago',
  },
  {
    title: 'Brand Illustrator',
    category: 'Creative & Art',
    categoryKey: 'creative',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Pixelworks Studio',
    time: '5h ago',
  },
  {
    title: 'Motion Graphics Artist',
    category: 'Creative & Art',
    categoryKey: 'creative',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Framehouse Media',
    time: '1d ago',
  },
  // Programming & IT
  {
    title: 'Frontend Engineer',
    category: 'Programming & IT',
    categoryKey: 'programming',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Cloudline Systems',
    time: '2h ago',
  },
  {
    title: 'Backend Developer',
    category: 'Programming & IT',
    categoryKey: 'programming',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Dataforge Labs',
    time: '6h ago',
  },
  {
    title: 'DevOps Specialist',
    category: 'Programming & IT',
    categoryKey: 'programming',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Nodebyte',
    time: '1d ago',
  },
  // Corporate
  {
    title: 'Operations Coordinator',
    category: 'Corporate',
    categoryKey: 'corporate',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Meridian Group',
    time: '3h ago',
  },
  {
    title: 'Executive Assistant',
    category: 'Corporate',
    categoryKey: 'corporate',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Harbor & Co.',
    time: '8h ago',
  },
  {
    title: 'Compliance Analyst',
    category: 'Corporate',
    categoryKey: 'corporate',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Sterling Partners',
    time: '1d ago',
  },
  // Finance & Accounting
  {
    title: 'Foreign Language Research Analyst (Chinese)',
    category: 'Finance & Accounting',
    categoryKey: 'finance',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Atlas Finance',
    time: '2h ago',
  },
  {
    title: 'Junior Accountant',
    category: 'Finance & Accounting',
    categoryKey: 'finance',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Ledgerworks',
    time: '4h ago',
  },
  {
    title: 'Financial Analyst',
    category: 'Finance & Accounting',
    categoryKey: 'finance',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Northwind Capital',
    time: '2d ago',
  },
  // Medical
  {
    title: 'Medical Assistant',
    category: 'Medical',
    categoryKey: 'medical',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'East Valley Primary Care',
    time: '2h ago',
  },
  {
    title: 'Registered Nurse',
    category: 'Medical',
    categoryKey: 'medical',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Cedar Grove Clinic',
    time: '7h ago',
  },
  {
    title: 'Lab Technician',
    category: 'Medical',
    categoryKey: 'medical',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'BioCore Diagnostics',
    time: '1d ago',
  },
  // Marketing
  {
    title: 'Content Marketing Manager',
    category: 'Marketing',
    categoryKey: 'marketing',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Brightwave Agency',
    time: '2h ago',
  },
  {
    title: 'SEO Specialist',
    category: 'Marketing',
    categoryKey: 'marketing',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Rankline Digital',
    time: '9h ago',
  },
  {
    title: 'Social Media Strategist',
    category: 'Marketing',
    categoryKey: 'marketing',
    location: 'New York, USA',
    type: 'Full Time',
    company: 'Pulse & Co.',
    time: '1d ago',
  },
]

/**
 * Job cards shown under the "All Categories" pane — one per category,
 * matching the source design's six-card all-categories grid.
 */
export const allCategoryJobs: Job[] = jobCategories
  .filter((c) => c.key !== 'all')
  .map((c) => jobs.find((j) => j.categoryKey === c.key))
  .filter((j): j is Job => j !== undefined)

// ---- Services --------------------------------------------------------------

export type Service = { icon: LucideIcon; title: string; blurb: string }

export const services: Service[] = [
  {
    icon: Briefcase,
    title: 'Talent Sourcing',
    blurb: 'Access a hand-picked pool of qualified candidates matched to your role and industry.',
  },
  {
    icon: Users,
    title: 'Team Building',
    blurb: 'Build complete squads fast with vetted profiles from every seniority level.',
  },
  {
    icon: Rocket,
    title: 'Fast Hiring',
    blurb: 'Shorten your time-to-hire with instant applications and direct recruiter contact.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Employers',
    blurb: 'Every company is reviewed so talent always applies to trusted businesses.',
  },
]

// ---- Pricing ---------------------------------------------------------------

export type Plan = {
  name: string
  price: string
  blurb: string
  featured?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Starter Plan',
    price: 'Free',
    blurb: 'Post up to 3 jobs and browse candidate profiles with basic search filters.',
  },
  {
    name: 'Business Plan',
    price: '$39.00',
    blurb: 'Unlimited job posts, priority listings, and analytics for growing teams.',
    featured: true,
  },
  {
    name: 'Premium Plan',
    price: '$59.00',
    blurb: 'Everything in Business plus a dedicated hiring manager and API access.',
  },
]

// ---- Why we are different --------------------------------------------------

export type Feature = { icon: LucideIcon; title: string; text: string }

export const features: Feature[] = [
  {
    icon: Clock,
    title: 'Save Time',
    text: 'Skip the manual screening and reach qualified candidates within hours.',
  },
  {
    icon: Headset,
    title: '24/7 Support',
    text: 'Keep your cool — get on-demand help from our hiring specialists any time.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Companies',
    text: 'Every employer is vetted, so you can apply with total confidence.',
  },
]

// ---- Footer ----------------------------------------------------------------

export type FooterColumn = { heading: string; links: string[] }

export const footerColumns: FooterColumn[] = [
  { heading: 'Quick Links', links: ['Work', 'Services', 'Products', 'Tips & Tricks'] },
  {
    heading: 'For Employers',
    links: ['Air freight', 'Ocean freight', 'Large projects', 'Job Packages'],
  },
  {
    heading: 'For Candidates',
    links: ['Browse Jobs', 'Ocean freight', 'Candidate Dashboard', 'Large projects', 'Job Alerts'],
  },
]

export const componentDockUrl = 'https://www.componentdock.com/'
