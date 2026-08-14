import { Camera, Code, Monitor, type LucideIcon } from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

export interface DropdownGroup {
  label: string
  links: { label: string; href: string }[]
}

export const navDropdowns: DropdownGroup[] = [
  {
    label: 'Blog',
    links: [
      { label: 'Blog Home', href: '#blog' },
      { label: 'Blog Single', href: '#blog' },
    ],
  },
  {
    label: 'Pages',
    links: [
      { label: 'Elements', href: '#portfolio' },
      { label: 'Level 2', href: '#services' },
    ],
  },
] as const

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: 'This is me',
  name: 'Philip Gilbert',
  intro:
    'You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.',
  cta: 'Discover Now',
  portrait: 'https://picsum.photos/seed/solo-hero/520/640',
  alt: 'Portrait of the site owner, arms crossed, framed by a soft square border',
} as const

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  eyebrow: 'About Me',
  heading: 'Personal Details',
  paragraphs: [
    'Here I focus on a range of items and features that we use in life without giving them a second thought, such as Coca Cola, Dolor sit amet, consectetur adipisicing elit.',
    'It is very easy to start smoking but it is an uphill task to quit it. Ask any one of them and they will tell you that it is extremely difficult to quit smoking.',
  ],
  cta: 'View Full Details',
  image: 'https://picsum.photos/seed/solo-about/480/560',
  alt: 'Portrait photo of the site owner in the about section',
} as const

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Web Design',
    description:
      'It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.',
    icon: Monitor,
  },
  {
    title: 'Web Development',
    description:
      'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions change.',
    icon: Code,
  },
  {
    title: 'Photography',
    description:
      'Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the more you grow.',
    icon: Camera,
  },
] as const

/* ------------------------------------------------------------------ */
/* Facts (counters)                                                    */
/* ------------------------------------------------------------------ */

export interface Fact {
  value: number
  label: string
}

export const facts: Fact[] = [
  { value: 2536, label: 'Projects Completed' },
  { value: 6784, label: 'Happy Clients' },
  { value: 2239, label: 'Cups of Coffee' },
  { value: 435, label: 'Real Professionals' },
] as const

/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export const portfolioFilters = ['All', 'Vector', 'Raster', 'UI/UX', 'Printing'] as const
export type PortfolioFilter = (typeof portfolioFilters)[number]

export interface PortfolioItem {
  title: string
  category: Exclude<PortfolioFilter, 'All'>
  image: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: '2D Vinyl Design',
    category: 'Vector',
    image: 'https://picsum.photos/seed/solo-p1/600/480',
  },
  {
    title: 'Creative Poster Design',
    category: 'Vector',
    image: 'https://picsum.photos/seed/solo-p2/600/480',
  },
  {
    title: 'Embosed Logo Design',
    category: 'Printing',
    image: 'https://picsum.photos/seed/solo-p3/600/480',
  },
  {
    title: '3D Helmet Design',
    category: 'Raster',
    image: 'https://picsum.photos/seed/solo-p4/600/480',
  },
  {
    title: 'Agency Brand Kit',
    category: 'UI/UX',
    image: 'https://picsum.photos/seed/solo-p5/600/480',
  },
  {
    title: 'Portal Wireframes',
    category: 'UI/UX',
    image: 'https://picsum.photos/seed/solo-p6/600/480',
  },
] as const

export const portfolioIntro = {
  heading: 'Our Latest Featured Projects',
  lead: 'Who are in extremely love with eco friendly system.',
  cta: 'View More',
} as const

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult. Accessories here you can find.',
    name: 'Harriet Maxwell',
    role: 'CEO at Google',
    avatar: 'https://picsum.photos/seed/solo-user1/80/80',
  },
  {
    quote:
      'When someone does something that they know that they should not do, did they actually do something wrong? Accessories here you can find.',
    name: 'Carolyn Craig',
    role: 'CEO at Facebook',
    avatar: 'https://picsum.photos/seed/solo-user2/80/80',
  },
] as const

export const testimonialsIntro = {
  heading: "Client's Feedback About Me",
  lead: 'It is very easy to start smoking but it is an uphill task to quit it.',
} as const

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

export interface PricingPlan {
  number: string
  name: string
  features: string[]
  price: string
}

export const pricingPlans: PricingPlan[] = [
  {
    number: '01',
    name: 'Economy',
    features: [
      'Secure Online Transfer',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
    ],
    price: '£199.00',
  },
  {
    number: '02',
    name: 'Business',
    features: [
      'Secure Online Transfer',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
    ],
    price: '£299.00',
  },
  {
    number: '03',
    name: 'Premium',
    features: [
      'Secure Online Transfer',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
    ],
    price: '£399.00',
  },
] as const

export const pricingIntro = {
  heading: 'Choose Your Plan',
  lead: 'When someone does something that they know that they should not do, did they actually do something wrong?',
  cta: 'Buy Now',
} as const

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export interface BlogPost {
  title: string
  excerpt: string
  image: string
  author: string
  meta: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Break Through Self Doubt And Fear',
    excerpt:
      'Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff.',
    image: 'https://picsum.photos/seed/solo-b1/600/360',
    author: 'Mark Wiens',
    meta: '13th Dec, 15 likes, 04 comments',
  },
  {
    title: 'Portable Fashion for young women',
    excerpt:
      'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions change.',
    image: 'https://picsum.photos/seed/solo-b2/600/360',
    author: 'Mark Wiens',
    meta: '13th Dec, 15 likes, 04 comments',
  },
  {
    title: 'Do Dreams Serve As A Premonition',
    excerpt:
      'It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.',
    image: 'https://picsum.photos/seed/solo-b3/600/360',
    author: 'Mark Wiens',
    meta: '13th Dec, 15 likes, 04 comments',
  },
] as const

export const blogIntro = {
  heading: 'Latest posts from our blog',
  lead: 'You may be a skillful, effective employer but if you have to hire one of your workers to do what you do, you are not a good leader.',
  cta: 'View More',
} as const

/* ------------------------------------------------------------------ */
/* Brands                                                              */
/* ------------------------------------------------------------------ */

export const brands = ['Vantage', 'Pixelary', 'Nimbus', 'Craftline', 'Orbital', 'Sundial'] as const

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  aboutHeading: 'About Me',
  aboutText:
    'Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the more you grow.',
  newsletterHeading: 'Newsletter',
  newsletterText: 'Stay updated with our latest trends',
  newsletterPlaceholder: 'Enter Email Address',
  newsletterButton: 'Send',
  followHeading: 'Follow Me',
  followText: 'Let us be social',
  socials: [
    { name: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
    { name: 'twitter', label: 'Twitter', href: 'https://twitter.com/' },
    { name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
    { name: 'linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/' },
  ] as const,
} as const
