export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'Properties', href: '#properties-section' },
  { label: 'Agents', href: '#agents-section' },
  { label: 'About', href: '#about-section' },
  { label: 'News', href: '#news-section' },
  { label: 'Contact', href: '#contact-section' },
]

export interface HeroSlide {
  image: string
  headline: string
  paragraph: string
  cta: string
}

const hero = (n: number) => `https://picsum.photos/seed/depot-hero-${n}/1920/1080`

export const heroSlides: HeroSlide[] = [
  {
    image: hero(1),
    headline: 'Buy & Sell Property Here',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vitae, aut inventore repellendus. Iusto, assumenda!',
    cta: 'Get Started',
  },
  {
    image: hero(2),
    headline: 'Find Your Perfect Property For Your Home',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quam doloribus reprehenderit dolore adipisci rerum?',
    cta: 'Get Started',
  },
]

export interface Property {
  title: string
  location: string
  price: string
  image: string
}

const property = (n: number) => `https://picsum.photos/seed/depot-property-${n}/800/600`

export const properties: Property[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  title: 'HD17 19 Utica Ave.',
  location: 'New York - USA',
  price: '$20,000,000',
  image: property(n),
}))

export interface Agent {
  name: string
  role: string
  image: string
}

const agent = (n: number) => `https://picsum.photos/seed/depot-agent-${n}/400/400`

export const agents: Agent[] = [
  { name: 'Allison Holmes', role: 'Real Estate Agent', image: agent(1) },
  { name: 'Dave Simpson', role: 'Real Estate Agent', image: agent(2) },
  { name: 'Ben Thompson', role: 'Real Estate Agent', image: agent(3) },
]

export interface Step {
  number: string
  icon: 'search' | 'key' | 'home'
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01.',
    icon: 'search',
    title: 'Find Property.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    number: '02.',
    icon: 'key',
    title: 'Buy Property.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    number: '03.',
    icon: 'home',
    title: 'Outstanding Houses.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export const checklist: string[] = [
  'Placeat maxime animi minus',
  'Dolore qui placeat maxime',
  'Consectetur adipisicing',
  'Lorem ipsum dolor',
  'Placeat molestias animi',
]

export interface Service {
  icon: 'building' | 'search' | 'home' | 'map' | 'locator' | 'smartphone'
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: 'search',
    title: 'Find Property',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'building',
    title: 'Buy Property',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'home',
    title: 'Beautiful Home',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'locator',
    title: 'Buildings & Lands',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'map',
    title: 'Property Locator',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile Apps',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export interface Testimonial {
  name: string
  role: string
  quote: string
  image: string
}

const testimonial = (n: number) => `https://picsum.photos/seed/depot-testimonial-${n}/200/200`

export const testimonials: Testimonial[] = [
  {
    name: 'Allison Holmes',
    role: 'Customer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum.',
    image: testimonial(1),
  },
  {
    name: 'James Phelps',
    role: 'Customer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum.',
    image: testimonial(2),
  },
  {
    name: 'Nestor Helsin',
    role: 'Customer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum.',
    image: testimonial(3),
  },
]

export interface NewsItem {
  image: string
  meta: string
  title: string
  excerpt: string
}

const news = (n: number) => `https://picsum.photos/seed/depot-news-${n}/800/500`

export const newsItems: NewsItem[] = [1, 2, 3].map((n) => ({
  image: news(n),
  meta: 'Allison Holmes • Jan 18, 2019 • News',
  title: 'Popular Real Estate Properties for 2019',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, assumenda!',
}))

export interface FooterColumn {
  heading: string
  links: string[]
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Quick Links',
    links: ['About Us', 'Services', 'Testimonials', 'Contact Us'],
  },
]

export const socialLinks: string[] = ['facebook', 'twitter', 'instagram']
