export const contact = {
  phone: '+880 1234 654 953',
  email: 'support@uplink.example',
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const pagesDropdown = ['Blog', 'Blog Details', 'Elements'] as const

export const plans = [
  {
    name: 'Basic',
    audience: 'Individuals/Freelancers',
    price: '£39',
    specs: ['1 GB RAM', '1 Core CPU', '20 GB SSD Storage', '1 TB Transfer', '40 GB Network In'],
  },
  {
    name: 'Starter',
    audience: 'Small Companies',
    price: '£59',
    specs: ['2 GB RAM', '2 Core CPU', '40 GB SSD Storage', '1.5 TB Transfer', '60 GB Network In'],
  },
  {
    name: 'Business',
    audience: 'Medium Companies',
    price: '£79',
    specs: ['4 GB RAM', '4 Core CPU', '60 GB SSD Storage', '2 TB Transfer', '80 GB Network In'],
  },
  {
    name: 'Enterprise',
    audience: 'Large Companies',
    price: '£99',
    specs: ['8 GB RAM', '8 Core CPU', '100 GB SSD Storage', '2.5 TB Transfer', '100 GB Network In'],
  },
] as const

export const testimonials = [
  {
    author: 'Nellie Vega',
    role: 'Head of Marketing, Acme Corp',
    quote:
      'Migrating to Uplink cut our page load times in half and the support team has been fantastic at every step.',
  },
  {
    author: 'Estelle Andrews',
    role: 'Founder, Brightlane Studio',
    quote:
      'The panel is simple, the servers are rock solid, and uptime has been flawless for over a year now.',
  },
] as const

export const posts = [
  {
    date: '10 April, 2026',
    title: 'Cloud Hosting Trends to Watch in 2026',
    excerpt:
      'Edge computing, green data centers, and AI-driven ops are reshaping how hosting is delivered this year.',
  },
  {
    date: '22 March, 2026',
    title: 'A Practical Guide to Securing Your Data Center',
    excerpt:
      'From physical access control to zero-trust networks — the checklist every host should run.',
  },
  {
    date: '05 March, 2026',
    title: 'Shared Hosting or VPS: How to Choose',
    excerpt:
      'Budget, traffic, and control needs decide the right fit. Here is a simple framework to pick.',
  },
] as const

export const clientLogos = ['Nexora', 'Vertex', 'Cloudio', 'Skyline', 'DataForge'] as const

export const topProducts = [
  'Managed Website',
  'Manage Reputation',
  'Power Tools',
  'Marketing Service',
] as const

export const instagramSeeds = [
  'uplink-ig-1',
  'uplink-ig-2',
  'uplink-ig-3',
  'uplink-ig-4',
  'uplink-ig-5',
  'uplink-ig-6',
  'uplink-ig-7',
  'uplink-ig-8',
] as const
