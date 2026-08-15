export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export interface HeroSlide {
  image: string
  alt: string
}

export const heroSlides: HeroSlide[] = [
  {
    image: 'https://picsum.photos/seed/amplify-laptop/640/440',
    alt: 'Laptop mockup showing a marketing analytics dashboard',
  },
  {
    image: 'https://picsum.photos/seed/amplify-vr/640/440',
    alt: 'Virtual reality headset resting on a desk',
  },
  {
    image: 'https://picsum.photos/seed/amplify-phone/640/440',
    alt: 'Smartphone mockup showing a campaign report',
  },
]

export const heroHeadlineLead = 'Amplify makes your biz'
export const heroHeadlineAccent = 'greater'
export const heroSubline = 'We love to create "cool" things on Digital Platforms'

export const aboutParagraphs = [
  'Our team partners with ambitious brands to turn complex challenges into clear digital strategies — from research and positioning to launch and growth.',
  'We blend data, design, and technology so every campaign earns attention and every dollar of your budget works harder toward measurable results.',
]

export type ServiceIcon = 'strategy' | 'analytics' | 'social'

export interface Service {
  title: string
  blurb: string
  icon: ServiceIcon
}

export const services: Service[] = [
  {
    title: 'Business Strategy',
    blurb:
      'We shape positioning, audience, and roadmap so every channel you invest in pulls toward one clear, measurable business goal.',
    icon: 'strategy',
  },
  {
    title: 'Market Analytics',
    blurb:
      'Dashboards and deep-dive reports turn raw campaign data into the decisions that keep your growth on track and your spend efficient.',
    icon: 'analytics',
  },
  {
    title: 'Marketing Social',
    blurb:
      'Always-on social campaigns that build community and conversation around your brand, planned and optimized by our in-house team.',
    icon: 'social',
  },
]

export interface PortfolioSlide {
  image: string
  alt: string
  title: string
  blurb: string
}

export const portfolioSlides: PortfolioSlide[] = [
  {
    image: 'https://picsum.photos/seed/amplify-portfolio-1/640/480',
    alt: 'Brand campaign mood board for a fashion label',
    title: 'Digital Marketing',
    blurb: 'Full-funnel campaign that lifted qualified leads by 62% in one quarter.',
  },
  {
    image: 'https://picsum.photos/seed/amplify-portfolio-2/640/480',
    alt: 'E-commerce storefront redesign on a tablet',
    title: 'E-commerce Growth',
    blurb: 'Storefront redesign and paid social that doubled average order value.',
  },
  {
    image: 'https://picsum.photos/seed/amplify-portfolio-3/640/480',
    alt: 'Content calendar and analytics workspace',
    title: 'Content Engine',
    blurb: 'A monthly editorial system that grew organic traffic four months running.',
  },
  {
    image: 'https://picsum.photos/seed/amplify-portfolio-4/640/480',
    alt: 'Team workshop sketching campaign ideas on a whiteboard',
    title: 'Brand Positioning',
    blurb: 'Messaging architecture and identity work for a Series-A fintech.',
  },
  {
    image: 'https://picsum.photos/seed/amplify-portfolio-5/640/480',
    alt: 'Mobile app onboarding screens',
    title: 'Product Marketing',
    blurb: 'Launch playbook for a mobile app that hit the top of its category charts.',
  },
  {
    image: 'https://picsum.photos/seed/amplify-portfolio-6/640/480',
    alt: 'Video editing timeline on a studio monitor',
    title: 'Video Campaigns',
    blurb: 'A 12-video brand series that became the account\u2019s best-performing content.',
  },
]

export interface Testimonial {
  photo: string
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    photo: 'https://picsum.photos/seed/amplify-client-1/160/160',
    quote:
      'Our ranking has gone up so much from the great work your team has done, and the brand is finally getting the organic sales it deserves.',
    name: 'Darrell Goodman',
    role: 'CEO',
  },
  {
    photo: 'https://picsum.photos/seed/amplify-client-2/160/160',
    quote:
      'The new campaign structure paid for itself within weeks. Reporting is clear, communication is fast, and the results speak for themselves.',
    name: 'Melissa Ortiz',
    role: 'Marketing Director',
  },
]

export const callNowLabel = 'Call us now:'
export const callNowNumber = '(+65) 1234 5678'

export interface BlogPost {
  day: string
  monthYear: string
  title: string
  excerpt: string
}

export const blogPosts: BlogPost[] = [
  {
    day: '23',
    monthYear: 'August, 2026',
    title: 'SEO: The Movie — Why Visibility Still Wins',
    excerpt:
      'Search is still the highest-intent channel on the web. Here is how we structure content so it ranks, converts, and compounds.',
  },
  {
    day: '13',
    monthYear: 'July, 2026',
    title: 'What Curling Irons Can Teach Us About Funnel Design',
    excerpt:
      'Sometimes the simplest product lesson applies to marketing funnels: heat, pressure, and timing change the outcome completely.',
  },
  {
    day: '08',
    monthYear: 'June, 2026',
    title: 'Amazon REV Workshop: Road to Seattle',
    excerpt:
      'Notes from our workshop on retail media, review velocity, and the playbooks that win the buy box at scale.',
  },
]

export const footerContact = {
  phone: '(+65) 1234 5678',
  address: '40 Baria Street 13/2 NY City, US',
  email: 'hello@amplify.app',
  hours: ['Mon - Fri: 9:00 - 19:00', 'Closed on Weekends'],
}

export const quickLinks: NavLink[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Forum Registration', href: '#' },
  { label: 'Forum Sign In', href: '#' },
]

export const resourceLinks: NavLink[] = [
  { label: 'Customer Support', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Media & Press', href: '#' },
  { label: 'Our Team', href: '#about' },
]

export const brandBlurb =
  'Integer vehicula mauris libero, at molestie eros imperdiet sit amet. Donec pretium, purus at faucibus varius.'
