export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pages', href: '#pages' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export interface Service {
  icon: 'palette' | 'layout' | 'smartphone'
  title: string
  text: string
}

export const services: Service[] = [
  {
    icon: 'palette',
    title: 'Graphic design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    icon: 'layout',
    title: 'Web design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
]

export interface Work {
  category: string
  title: string
  image: string
  featured?: boolean
}

export const works: Work[] = [
  {
    category: 'App Design',
    title: 'Ascent Mobile App',
    image: 'https://picsum.photos/seed/ascent-work-1/800/600',
    featured: true,
  },
  {
    category: 'Brand Identity',
    title: 'Orbit Rebrand',
    image: 'https://picsum.photos/seed/ascent-work-2/600/600',
  },
  {
    category: 'Web Platform',
    title: 'Nimbus Dashboard',
    image: 'https://picsum.photos/seed/ascent-work-3/600/600',
  },
  {
    category: 'Product UI',
    title: 'Pulse Commerce',
    image: 'https://picsum.photos/seed/ascent-work-4/600/600',
  },
  {
    category: 'Campaign Site',
    title: 'Summit Launch',
    image: 'https://picsum.photos/seed/ascent-work-5/600/600',
  },
]

export interface TeamMember {
  name: string
  role: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Brandon Yeald',
    role: 'Founder & CEO',
    image: 'https://picsum.photos/seed/ascent-team-1/400/400',
  },
  {
    name: 'Calvin Anderson',
    role: 'Graphics Designer',
    image: 'https://picsum.photos/seed/ascent-team-2/400/400',
  },
  {
    name: 'Roman Solo',
    role: 'Wordpress Developer',
    image: 'https://picsum.photos/seed/ascent-team-3/400/400',
  },
  {
    name: 'Yeald Kin',
    role: 'Software Engineer',
    image: 'https://picsum.photos/seed/ascent-team-4/400/400',
  },
]

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.',
    author: 'Robert Thomson',
    role: 'Business Owner',
  },
  {
    quote:
      'Fusce ac mattis nulla. Morbi eget ornare dui. Donec imperdiet congue orci consequat mattis, sollicitudin neque sodales vehicula nibh.',
    author: 'Robert Thomson',
    role: 'Business Owner',
  },
  {
    quote:
      'Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Donec rutrum porttitor sollicitudin. Fusce ac mattis nulla.',
    author: 'Robert Thomson',
    role: 'Business Owner',
  },
]

export const footerLinks: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pages', href: '#pages' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export type SocialIcon = 'facebook' | 'twitter' | 'instagram'

export const socials: SocialIcon[] = ['facebook', 'twitter', 'instagram']

export const contactDefaults = {
  name: '',
  email: '',
  subject: '',
  message: '',
}
