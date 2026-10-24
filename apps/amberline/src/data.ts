import {
  Building2,
  Compass,
  HardHat,
  DraftingCompass,
  Cog,
  Ruler,
  Truck,
  Users,
  Coffee,
  CheckCircle2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const brand = 'Amberline'

export const contact = {
  phone: '+1 234 456 78910',
  email: 'hello@amberline.example',
  address: '1420 Foundry Row, Brooklyn, NY 11201',
}

export const nav = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about', active: false },
  { label: 'Services', href: '#services', active: false },
  { label: 'Projects', href: '#projects', active: false },
  { label: 'Pricing', href: '#pricing', active: false },
  { label: 'Blog', href: '#blog', active: false },
  { label: 'Contact', href: '#contact', active: false },
] as const

export type Social = { label: string; href: string }

export const socials: readonly Social[] = [
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'Facebook', href: 'https://facebook.com/' },
  { label: 'Instagram', href: 'https://instagram.com/' },
]

export type MiniService = { title: string; body: string; icon: LucideIcon }

export const miniServices: readonly MiniService[] = [
  {
    title: 'Construction',
    body: 'Ground-up builds run by one crew from the first footing to the final handover.',
    icon: HardHat,
  },
  {
    title: 'Architecture',
    body: 'Drawings and 3D studies that keep the structure honest and the budget visible.',
    icon: DraftingCompass,
  },
  {
    title: 'Consulting',
    body: 'Site surveys, permits and cost plans before a single machine arrives.',
    icon: Compass,
  },
  {
    title: 'Mechanical',
    body: 'Ventilation, plumbing and plant rooms commissioned and pressure-tested in house.',
    icon: Cog,
  },
]

export const wordmarks: readonly string[] = [
  'Northgate',
  'Stratus',
  'Ironline',
  'Meridian',
  'Bellwether',
  'Cobalt',
]

export type ServiceVariant = 'ink' | 'brand' | 'plain'
export type ServiceCard = {
  title: string
  body: string
  icon: LucideIcon
  variant: ServiceVariant
}

export const services: readonly ServiceCard[] = [
  {
    title: 'Construction services',
    body: 'Full structural delivery for commercial shells, warehouses and mid-rise housing.',
    icon: Building2,
    variant: 'ink',
  },
  {
    title: 'Infrastructure services',
    body: 'Roads, drainage and utility corridors handed over with as-built documentation.',
    icon: Truck,
    variant: 'brand',
  },
  {
    title: 'Architecture services',
    body: 'Concept to permit drawings, detailed on site by the same studio that drew them.',
    icon: Ruler,
    variant: 'plain',
  },
]

export const videoChecks: readonly string[] = [
  'Licensed crews on every site',
  'Fixed-price contracts, no surprise variations',
  'Weekly photo reports from the foreman',
  'Twelve-month workmanship guarantee',
]

export type Stat = { value: number; caption: string; icon: LucideIcon }

export const stats: readonly Stat[] = [
  { value: 3000, caption: 'Completed projects', icon: Building2 },
  { value: 320, caption: 'Happy clients', icon: Users },
  { value: 1000, caption: 'Cup of coffee', icon: Coffee },
  { value: 587, caption: 'Engineers & staff', icon: HardHat },
]

export type TeamMember = { name: string; role: string; seed: string }

export const team: readonly TeamMember[] = [
  { name: 'Lionel Wurtchbach', role: 'Site Director', seed: 'amberline-team-1' },
  { name: 'Mike Nintido', role: 'Lead Engineer', seed: 'amberline-team-2' },
  { name: 'Bea Alam', role: 'Project Architect', seed: 'amberline-team-3' },
  { name: 'John Buffer', role: 'Quantity Surveyor', seed: 'amberline-team-4' },
]

export type Project = { title: string; category: string; seed: string }

export const projects: readonly Project[] = [
  { title: 'High Tower Works', category: 'Commercial', seed: 'amberline-project-1' },
  { title: 'Cedar Row Housing', category: 'Residential', seed: 'amberline-project-2' },
  { title: 'Northgate Depot', category: 'Industrial', seed: 'amberline-project-3' },
  { title: 'Foundry Lofts', category: 'Renovation', seed: 'amberline-project-4' },
  { title: 'Marine Parade', category: 'Infrastructure', seed: 'amberline-project-5' },
  { title: 'Kiln Yard Offices', category: 'Commercial', seed: 'amberline-project-6' },
]

export type PlanFeature = { label: string; included: boolean }
export type Plan = {
  name: string
  price: string
  suffix?: string
  blurb: string
  featured: boolean
  features: readonly PlanFeature[]
}

export const plans: readonly Plan[] = [
  {
    name: 'Basic',
    price: '49K',
    blurb: 'Single-storey extensions and small refits.',
    featured: false,
    features: [
      { label: 'Site survey', included: true },
      { label: 'Permit drawings', included: true },
      { label: 'Dedicated foreman', included: true },
      { label: 'Weekly photo report', included: true },
      { label: '3D walkthrough', included: false },
      { label: '12-month guarantee', included: false },
    ],
  },
  {
    name: 'Standard',
    price: '79K',
    blurb: 'Two-storey builds with a full interior fit-out.',
    featured: false,
    features: [
      { label: 'Site survey', included: true },
      { label: 'Permit drawings', included: true },
      { label: 'Dedicated foreman', included: true },
      { label: 'Weekly photo report', included: true },
      { label: '3D walkthrough', included: true },
      { label: '12-month guarantee', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '109K',
    blurb: 'Commercial shells delivered on a fixed price.',
    featured: true,
    features: [
      { label: 'Site survey', included: true },
      { label: 'Permit drawings', included: true },
      { label: 'Dedicated foreman', included: true },
      { label: 'Weekly photo report', included: true },
      { label: '3D walkthrough', included: true },
      { label: '12-month guarantee', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: '149K',
    suffix: '+',
    blurb: 'Multi-phase sites with a resident engineer.',
    featured: false,
    features: [
      { label: 'Site survey', included: true },
      { label: 'Permit drawings', included: true },
      { label: 'Dedicated foreman', included: true },
      { label: 'Weekly photo report', included: true },
      { label: '3D walkthrough', included: true },
      { label: '12-month guarantee', included: true },
    ],
  },
]

export type Testimonial = { name: string; role: string; quote: string; seed: string }

export const testimonials: readonly Testimonial[] = [
  {
    name: 'Marta Ellison',
    role: 'Developer',
    quote:
      'They took a stalled shell and closed it out in fourteen weeks. The weekly report meant I never had to chase anyone.',
    seed: 'amberline-client-1',
  },
  {
    name: 'Denis Rohal',
    role: 'Facilities Lead',
    quote:
      'The mechanical package was commissioned without a single rework. That almost never happens on a retrofit.',
    seed: 'amberline-client-2',
  },
  {
    name: 'Priya Nandan',
    role: 'Homeowner',
    quote:
      'Fixed price, fixed date, and the foreman walked me through every trade before they started.',
    seed: 'amberline-client-3',
  },
  {
    name: 'Owen Marsh',
    role: 'Retail Owner',
    quote:
      'We traded through the whole fit-out. They worked nights so the shop never closed.',
    seed: 'amberline-client-4',
  },
  {
    name: 'Ingrid Soll',
    role: 'Architect',
    quote:
      'Drawings came back with buildability notes attached. The site matched the model at handover.',
    seed: 'amberline-client-5',
  },
]

export type Post = { title: string; excerpt: string; author: string; comments: number; day: string; month: string; seed: string }

export const posts: readonly Post[] = [
  {
    title: 'Biggest construction in New York, USA',
    excerpt:
      'What a 42-storey pour looks like from the hoist, and why the concrete schedule drives everything else.',
    author: 'Bea Alam',
    comments: 12,
    day: '12',
    month: 'Oct',
    seed: 'amberline-post-1',
  },
  {
    title: 'Sequencing a retrofit without closing the doors',
    excerpt:
      'Night shifts, temporary services and a phased handover keep a live retail floor trading.',
    author: 'Mike Nintido',
    comments: 8,
    day: '04',
    month: 'Nov',
    seed: 'amberline-post-2',
  },
  {
    title: 'Reading a structural drawing on site',
    excerpt:
      'The five callouts a foreman checks before the first delivery lands on the slab.',
    author: 'John Buffer',
    comments: 5,
    day: '27',
    month: 'Aug',
    seed: 'amberline-post-3',
  },
]

export type FaqItem = { question: string; answer: string }

export const faq: readonly FaqItem[] = [
  {
    question: 'How do you price a project?',
    answer:
      'We survey the site, measure the drawings and hand back a fixed price with a line for every trade.',
  },
  {
    question: 'Do you handle permits?',
    answer:
      'Yes. Our consulting team files the drawings and tracks approvals from submission to sign-off.',
  },
  {
    question: 'What guarantee comes with the work?',
    answer:
      'Every build carries a twelve-month workmanship guarantee, with a named engineer on call.',
  },
]

export const subjects: readonly string[] = [
  'New build',
  'Renovation',
  'Infrastructure',
  'Consulting',
  'Maintenance',
  'Something else',
]

export const footerMenu: readonly string[] = [
  'About us',
  'Our services',
  'Recent projects',
  'Our team',
  'Pricing',
  'Contact',
]

export const recentPosts: readonly { title: string; seed: string }[] = [
  { title: 'Biggest construction in New York', seed: 'amberline-foot-1' },
  { title: 'Sequencing a live retrofit', seed: 'amberline-foot-2' },
  { title: 'Reading a structural drawing', seed: 'amberline-foot-3' },
]

export const checkIcon = CheckCircle2
