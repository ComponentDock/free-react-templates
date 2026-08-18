import { Briefcase, Coffee, Palette, PenTool, Smile, Code2, type LucideIcon } from 'lucide-react'

// ---- Navigation ---------------------------------------------------------

type NavLink = { label: string; href: string }

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contactme' },
]

// ---- Hero ---------------------------------------------------------------

export const heroPersona = 'Kendall Marsh'
export const heroGreeting = 'Hi There!'
export const heroLead =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const typewritePhrases = [
  'A Web Designer',
  'A Developer',
  'I Love Design.',
  'I Love to Develop.',
] as const

// ---- About --------------------------------------------------------------

export const aboutTabs = ['About Me', 'Skills', 'Experience'] as const
export type AboutTab = (typeof aboutTabs)[number]

export const aboutStory = {
  heading: 'My Story',
  paragraphs: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  ],
  emphasized: 'I Do Web Design & Development since I was 18 Years Old',
}

type Skill = { name: string; percent: number }

export const skills: Skill[] = [
  { name: 'Adobe Photoshop', percent: 80 },
  { name: 'HTML / CSS', percent: 95 },
  { name: 'Javascript', percent: 88 },
  { name: 'WordPress', percent: 89 },
]

type ExperienceEntry = { role: string; years: string; company: string; blurb: string }

export const experience: ExperienceEntry[] = [
  {
    role: 'Art & Creative Director',
    years: '2028-2029',
    company: 'Pixelworks Studio',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    role: 'Wordpress Developer',
    years: '2029-2031',
    company: 'Brightline Agency',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    role: 'UI/UX Designer',
    years: '2031-2032',
    company: 'Northwind Labs',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

// ---- Services -----------------------------------------------------------

type Service = { title: string; blurb: string; icon: LucideIcon }

export const services: Service[] = [
  {
    title: 'UI & UX Design',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: Palette,
  },
  {
    title: 'Web Development',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: Code2,
  },
  {
    title: 'Graphic Design',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: PenTool,
  },
]

export const servicesCta = {
  line: 'Have any works you want to done by me?',
  link: 'Contact Me',
}

// ---- Counter band -------------------------------------------------------

type CounterStat = { value: number; label: string; icon: LucideIcon }

export const counterStats: CounterStat[] = [
  { value: 3000, label: 'Happy Customer', icon: Smile },
  { value: 320, label: 'Project Completed', icon: Briefcase },
  { value: 1000, label: 'Cups of Coffee', icon: Coffee },
]

export const counterBackground = 'https://picsum.photos/id/1015/1920/1080'

// ---- Portfolio ----------------------------------------------------------

type PortfolioItem = { title: string; category: string; src: string }

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Branding & Illustration Design',
    category: 'Web Design',
    src: 'https://picsum.photos/id/60/800/600',
  },
  {
    title: 'E-Commerce Interface Redesign',
    category: 'Web Design',
    src: 'https://picsum.photos/id/8/800/600',
  },
  {
    title: 'Mobile App Visual Identity',
    category: 'Web Design',
    src: 'https://picsum.photos/id/0/800/600',
  },
  {
    title: 'Editorial Layout System',
    category: 'Web Design',
    src: 'https://picsum.photos/id/180/800/600',
  },
  {
    title: 'Product Landing Concept',
    category: 'Web Design',
    src: 'https://picsum.photos/id/26/800/600',
  },
  {
    title: 'Design System & Tokens',
    category: 'Web Design',
    src: 'https://picsum.photos/id/48/800/600',
  },
]

// ---- Testimonials -------------------------------------------------------

type Testimonial = { name: string; role: string; quote: string; initials: string }

export const testimonials: Testimonial[] = [
  {
    name: 'Roger Scott',
    role: 'Marketing Manager',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    initials: 'RS',
  },
  {
    name: 'Amanda Lee',
    role: 'Product Lead',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    initials: 'AL',
  },
  {
    name: 'David Osei',
    role: 'Startup Founder',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    initials: 'DO',
  },
  {
    name: 'Priya Sharma',
    role: 'Art Director',
    quote:
      'Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    initials: 'PS',
  },
  {
    name: 'Tom Becker',
    role: 'Frontend Engineer',
    quote:
      'The copy warned the little blind text, that where it came from it would have been rewritten a thousand times.',
    initials: 'TB',
  },
]

// ---- Blog ---------------------------------------------------------------

type BlogPost = { title: string; date: string; comments: number; src: string }

export const blogPosts: BlogPost[] = [
  {
    title: 'Tips About Creating A New Web Design',
    date: 'Jul. 12, 2026',
    comments: 3,
    src: 'https://picsum.photos/id/1036/800/500',
  },
  {
    title: 'Color Psychology in Modern Interfaces',
    date: 'Jun. 28, 2026',
    comments: 7,
    src: 'https://picsum.photos/id/1055/800/500',
  },
  {
    title: 'Building Design Systems That Scale',
    date: 'Jun. 10, 2026',
    comments: 4,
    src: 'https://picsum.photos/id/1039/800/500',
  },
  {
    title: 'The 2026 Guide to Responsive Layouts',
    date: 'May 23, 2026',
    comments: 9,
    src: 'https://picsum.photos/id/1041/800/500',
  },
  {
    title: 'From Wireframe to Prototype in 5 Days',
    date: 'May 05, 2026',
    comments: 2,
    src: 'https://picsum.photos/id/1018/800/500',
  },
  {
    title: 'Typography: Making Words Work Harder',
    date: 'Apr. 17, 2026',
    comments: 6,
    src: 'https://picsum.photos/id/20/800/500',
  },
]

// ---- Pricing ------------------------------------------------------------

type Feature = { label: string; included: boolean }

type Plan = {
  name: string
  price: string
  highlighted: boolean
  features: Feature[]
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '499',
    highlighted: false,
    features: [
      { label: 'Single page design', included: true },
      { label: 'Mobile responsive', included: true },
      { label: '2 revision rounds', included: true },
      { label: 'Source files included', included: true },
      { label: 'Custom animations', included: false },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '999',
    highlighted: true,
    features: [
      { label: 'Multi-page website', included: true },
      { label: 'Mobile responsive', included: true },
      { label: '5 revision rounds', included: true },
      { label: 'Source files included', included: true },
      { label: 'Custom animations', included: true },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: '2,499',
    highlighted: false,
    features: [
      { label: 'Full web application', included: true },
      { label: 'Mobile responsive', included: true },
      { label: 'Unlimited revisions', included: true },
      { label: 'Source files included', included: true },
      { label: 'Custom animations', included: true },
      { label: 'Priority support', included: true },
    ],
  },
]

// ---- Contact ------------------------------------------------------------

export const contactInfo = {
  heading: 'Contact us',
  subtitle: "We're open for any suggestion or just to have a chat",
  address: '198 West 21th Street, Suite 721 New York NY 10016',
  email: 'info@yoursite.com',
  phone: '+ 1235 2355 98',
  followHeading: 'Follow me here',
  followLinks: ['Facebook', 'Twitter', 'Instagram', 'Dribbble'],
}

export const aboutImage = 'https://picsum.photos/id/1027/640/800'

// ---- CTA strip ----------------------------------------------------------

export const ctaStrip = {
  heading: 'Have any works you want to done by me?',
  subtext: 'Far far away, behind the word mountains',
  cta: 'Contact Me',
}

// ---- Footer -------------------------------------------------------------

export const footer = {
  brand: 'Swatch',
  blurb:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  servicesHeading: 'Services',
  services: ['Web Design', 'Web Development', 'Graphic Design', 'UI/UX Design'],
  questionsHeading: 'Have a Questions?',
  questions: {
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    phone: '+2 392 3929 210',
    email: 'info@yourdomain.com',
  },
  copyright: '© 2026 Swatch — Personal Portfolio · All rights reserved',
  dockLabel: 'Made with Component Dock',
}

export const componentDockUrl = 'https://www.componentdock.com/'
