import {
  LineChart,
  MonitorSmartphone,
  Rocket,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  UserRound,
  type LucideIcon,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

interface DropdownLink {
  label: string
  href: string
  nested?: { label: string; href: string }[]
}

export interface NavLink {
  label: string
  href: string
  dropdown?: DropdownLink[]
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home-section' },
  {
    label: 'About Us',
    href: '#about-section',
    dropdown: [
      { label: 'Team', href: '#team-section' },
      { label: 'Pricing', href: '#pricing-section' },
      { label: 'FAQ', href: '#faq-section' },
      {
        label: 'More Links',
        href: '#',
        nested: [
          { label: 'Menu One', href: '#' },
          { label: 'Menu Two', href: '#' },
          { label: 'Menu Three', href: '#' },
        ],
      },
    ],
  },
  { label: 'Portfolio', href: '#portfolio-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Testimonials', href: '#testimonials-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const heroImage = 'https://picsum.photos/id/180/1600/900'
export const heroHeadline = 'Unison — Creative One Page Template'

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const aboutImage = 'https://picsum.photos/seed/unison-about/800/600'
export const aboutHeading = 'For the next great business'
export const aboutText =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
export const aboutChecks = [
  'A small river named Duden flows by their place',
  'It is a paradisematic country, in which roasted parts',
  'Separated they live in Bookmarksgrove',
  'A large language ocean at the coast',
]

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

export interface TeamMember {
  name: string
  role: string
  photo: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Kaiara Spencer',
    role: 'Product Manager',
    photo: 'https://picsum.photos/seed/unison-team-1/400/400',
  },
  {
    name: 'Dave Simpson',
    role: 'Product Designer',
    photo: 'https://picsum.photos/seed/unison-team-2/400/400',
  },
  {
    name: 'Ben Thompson',
    role: 'Marketing Manager',
    photo: 'https://picsum.photos/seed/unison-team-3/400/400',
  },
  {
    name: 'Kyla Stewart',
    role: 'Web Designer',
    photo: 'https://picsum.photos/seed/unison-team-4/400/400',
  },
  {
    name: 'Chris Stewart',
    role: 'Software Engineer',
    photo: 'https://picsum.photos/seed/unison-team-5/400/400',
  },
  {
    name: 'Rachel Gomez',
    role: 'Sales Lead',
    photo: 'https://picsum.photos/seed/unison-team-6/400/400',
  },
  {
    name: 'Marcus Reed',
    role: 'UX Researcher',
    photo: 'https://picsum.photos/seed/unison-team-7/400/400',
  },
  {
    name: 'Olivia Chen',
    role: 'Content Strategist',
    photo: 'https://picsum.photos/seed/unison-team-8/400/400',
  },
]

/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export const portfolioCategories = ['All', 'Web', 'Design', 'Brand'] as const
export type PortfolioCategory = (typeof portfolioCategories)[number]
/** Lowercase key used as the data attribute value on each item. */
export type PortfolioFilter = 'web' | 'design' | 'brand'

export interface PortfolioItem {
  label: string
  category: PortfolioFilter
  photo: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    label: 'Meridian Finance — corporate site',
    category: 'web',
    photo: 'https://picsum.photos/seed/unison-portfolio-1/600/450',
  },
  {
    label: 'Lumen Studio — brand identity',
    category: 'brand',
    photo: 'https://picsum.photos/seed/unison-portfolio-2/600/450',
  },
  {
    label: 'Atlas Travel — booking portal',
    category: 'web',
    photo: 'https://picsum.photos/seed/unison-portfolio-3/600/450',
  },
  {
    label: 'Cinder & Co — packaging design',
    category: 'design',
    photo: 'https://picsum.photos/seed/unison-portfolio-4/600/450',
  },
  {
    label: 'Vertex Health — product page',
    category: 'web',
    photo: 'https://picsum.photos/seed/unison-portfolio-5/600/450',
  },
  {
    label: 'Northwind — app design',
    category: 'design',
    photo: 'https://picsum.photos/seed/unison-portfolio-6/600/450',
  },
  {
    label: 'Harbor & Oak — brand refresh',
    category: 'brand',
    photo: 'https://picsum.photos/seed/unison-portfolio-7/600/450',
  },
  {
    label: 'Pulse Fitness — marketing site',
    category: 'web',
    photo: 'https://picsum.photos/seed/unison-portfolio-8/600/450',
  },
]

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export interface Service {
  title: string
  text: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Business Consulting',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: Rocket,
  },
  {
    title: 'Market Analysis',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: LineChart,
  },
  {
    title: 'User Monitoring',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Insurance Consulting',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: ShieldCheck,
  },
  {
    title: 'Financial Investment',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: TrendingUp,
  },
  {
    title: 'Financial Management',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    icon: Settings,
  },
]

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string
  name: string
  photo: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    name: 'John Smith',
    photo: 'https://picsum.photos/seed/unison-testimonial-1/120/120',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Christine Aguilar',
    photo: 'https://picsum.photos/seed/unison-testimonial-2/120/120',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
    name: 'Robert Spears',
    photo: 'https://picsum.photos/seed/unison-testimonial-3/120/120',
  },
  {
    quote:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text did not listen.',
    name: 'Bruce Rogers',
    photo: 'https://picsum.photos/seed/unison-testimonial-4/120/120',
  },
]

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  name: string
  price: string
  features: PricingFeature[]
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$47',
    features: [
      { text: 'Core consulting sessions', included: true },
      { text: 'Quarterly market review', included: true },
      { text: 'Email support', included: true },
      { text: 'Standard reporting', included: true },
      { text: 'Community access', included: true },
    ],
  },
  {
    name: 'Premium',
    price: '$200',
    features: [
      { text: 'Everything in Basic', included: true },
      { text: 'Advanced analytics dashboard', included: true },
      { text: 'Priority phone support', included: false },
      { text: 'Custom integrations', included: false },
      { text: 'On-site workshops', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '$750',
    features: [
      { text: 'Everything in Premium', included: true },
      { text: 'Unlimited consulting hours', included: true },
      { text: 'Dedicated strategy team', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Legacy platform migration', included: false },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export interface Faq {
  question: string
  answer: string
}

const faqAnswer =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.'

export const faqs: Faq[] = [
  { question: 'Can I accept both Paypal and Stripe?', answer: faqAnswer },
  { question: 'What available is refund period?', answer: faqAnswer },
  { question: 'Where are you from?', answer: faqAnswer },
  { question: 'What is your opening time?', answer: faqAnswer },
  { question: 'Can I accept both Paypal and Stripe?', answer: faqAnswer },
  { question: 'What available is refund period?', answer: faqAnswer },
  { question: 'Where are you from?', answer: faqAnswer },
  { question: 'What is your opening time?', answer: faqAnswer },
]

/* ------------------------------------------------------------------ */
/* Feature split (second about block)                                  */
/* ------------------------------------------------------------------ */

export interface FeatureBox {
  title: string
  text: string
  icon: LucideIcon
}

export const featureBoxes: FeatureBox[] = [
  {
    title: 'Web & Mobile Specialties',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: UserRound,
  },
  {
    title: 'Intuitive Thinkers',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: Smartphone,
  },
]

export const featureImage = 'https://picsum.photos/seed/unison-feature/800/600'

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export interface BlogPost {
  title: string
  author: string
  date: string
  category: string
  excerpt: string
  photo: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Repudiandae Quisquam Eaque Dolore',
    author: 'Ham Brook',
    date: 'Jan 18, 2019',
    category: 'News',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    photo: 'https://picsum.photos/seed/unison-blog-1/800/500',
  },
  {
    title: 'Magnam Aliquam Quaerat Pariatur',
    author: 'James Phelps',
    date: 'Jan 18, 2019',
    category: 'News',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    photo: 'https://picsum.photos/seed/unison-blog-2/800/500',
  },
  {
    title: 'Doloremque Laudantium Maiores',
    author: 'James West',
    date: 'Jan 18, 2019',
    category: 'News',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    photo: 'https://picsum.photos/seed/unison-blog-3/800/500',
  },
]

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contactInfo = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+1 232 3235 324',
  email: 'youremail@domain.com',
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const quickLinks = [
  { label: 'About Us', href: '#about-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Testimonials', href: '#testimonials-section' },
  { label: 'Contact Us', href: '#contact-section' },
]

export const footerAbout =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
