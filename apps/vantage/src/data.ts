export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export interface Offer {
  title: string
  description: string
  image: string
}

export const offers: Offer[] = [
  {
    title: 'Financial Consulting',
    description: 'Expert guidance to structure capital, manage risk, and plan for steady growth.',
    image: 'https://picsum.photos/seed/vantage-offer1/600/420',
  },
  {
    title: 'Investment Strategy',
    description:
      'Tailored portfolios and market insight that turn opportunity into long-term value.',
    image: 'https://picsum.photos/seed/vantage-offer2/600/420',
  },
  {
    title: 'Business Analytics',
    description: 'Clear reporting and forecasting so every decision is backed by real numbers.',
    image: 'https://picsum.photos/seed/vantage-offer3/600/420',
  },
]

export interface Feature {
  title: string
  description: string
}

export const features: Feature[] = [
  {
    title: 'Unique Design',
    description: 'A distinct visual identity that sets your business apart from the competition.',
  },
  {
    title: 'Appropriate UX',
    description: 'Interfaces shaped around real user journeys for effortless navigation.',
  },
  {
    title: 'Perfect Visual',
    description: 'Pixel-perfect layouts and imagery that communicate value at a glance.',
  },
  {
    title: 'Different Layout',
    description: 'Flexible compositions that adapt beautifully to any screen size.',
  },
]

export const galleryFilters = [
  'All Categories',
  'Branding',
  'Image Manipulation',
  'Creative Work',
  'Web Design',
  'Print Material',
] as const

export type GalleryCategory = Exclude<(typeof galleryFilters)[number], 'All Categories'>

export interface Project {
  title: string
  category: GalleryCategory
  image: string
}

export const projects: Project[] = [
  {
    title: 'Corporate Identity Suite',
    category: 'Branding',
    image: 'https://picsum.photos/seed/vantage-project1/600/480',
  },
  {
    title: 'Retail Campaign Art',
    category: 'Image Manipulation',
    image: 'https://picsum.photos/seed/vantage-project2/600/480',
  },
  {
    title: 'Launch Film Storyboard',
    category: 'Creative Work',
    image: 'https://picsum.photos/seed/vantage-project3/600/480',
  },
  {
    title: 'E-commerce Interface',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/vantage-project4/600/480',
  },
  {
    title: 'Annual Report Layout',
    category: 'Print Material',
    image: 'https://picsum.photos/seed/vantage-project5/600/480',
  },
  {
    title: 'Product Packaging Mockup',
    category: 'Branding',
    image: 'https://picsum.photos/seed/vantage-project6/600/480',
  },
]

export interface Post {
  title: string
  date: string
  author: string
  excerpt: string
  image: string
}

export const posts: Post[] = [
  {
    title: 'Addiction When Gambling Becomes a Problem',
    date: '25 October, 2017',
    author: 'Mark Wiens',
    excerpt:
      'When does a pastime turn into a risk? We look at the warning signs and the steps that lead back to control.',
    image: 'https://picsum.photos/seed/vantage-post1/600/420',
  },
  {
    title: 'Computer Hardware Desktops and Notebooks',
    date: '18 October, 2017',
    author: 'Mark Wiens',
    excerpt:
      'A practical guide to choosing the right hardware for your team, from everyday desktops to portable workhorses.',
    image: 'https://picsum.photos/seed/vantage-post2/600/420',
  },
  {
    title: 'Make MySpace Your Best Designed Space',
    date: '12 October, 2017',
    author: 'Mark Wiens',
    excerpt:
      'Turn your digital presence into a space worth visiting with these simple design and content habits.',
    image: 'https://picsum.photos/seed/vantage-post3/600/420',
  },
]

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Feature', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#home' },
  { label: 'Pricing', href: '#home' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const instaThumbs = Array.from(
  { length: 8 },
  (_, index) => `https://picsum.photos/seed/vantage-insta${index + 1}/120/120`,
)
