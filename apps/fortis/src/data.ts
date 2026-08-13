/* Fortis — web design agency one-pager data.
   Copy kinds mirror the reference preview (agency landing): nav labels,
   hero headline + CTA, about copy + skills, service cards, portfolio tiles,
   stat counters, studio block, testimonials, blog posts, footer widgets. */

export const brand = {
  name: 'Fortis',
  tagline: 'Web Design Agency',
}

export interface NavItem {
  label: string
  href: string
}

export const navLinks: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#works' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

export interface Skill {
  label: string
  percent: number
}

export const skills: Skill[] = [
  { label: 'Writing', percent: 55 },
  { label: 'WordPress', percent: 85 },
  { label: 'Bootstrap', percent: 93 },
  { label: 'jQuery', percent: 83 },
]

export interface Service {
  title: string
  description: string
}

export const services: Service[] = [
  {
    title: 'Web Design',
    description:
      'Clean, conversion-focused websites crafted around your brand and your users, from first wireframe to launch.',
  },
  {
    title: 'Graphic Design',
    description:
      'Logos, identities and marketing visuals that give your business a distinctive, memorable face.',
  },
  {
    title: 'Web Apps',
    description:
      'Fast, accessible web applications built with modern tooling and tested end to end before they ship.',
  },
  {
    title: 'Ecommerce',
    description:
      'Storefronts and checkout flows engineered to turn visitors into repeat customers.',
  },
]

export interface WorkTile {
  title: string
  image: string
}

export const workTiles: WorkTile[] = [
  {
    title: 'Brand identity for a coffee roaster',
    image: 'https://picsum.photos/seed/fortis-3/800/600',
  },
  {
    title: 'Website for an architecture studio',
    image: 'https://picsum.photos/seed/fortis-4/800/600',
  },
  { title: 'Ecommerce storefront redesign', image: 'https://picsum.photos/seed/fortis-5/800/600' },
  {
    title: 'Mobile app for a fitness startup',
    image: 'https://picsum.photos/seed/fortis-6/800/600',
  },
  {
    title: 'Marketing site for a SaaS product',
    image: 'https://picsum.photos/seed/fortis-7/800/600',
  },
  {
    title: 'Editorial design for a magazine',
    image: 'https://picsum.photos/seed/fortis-8/800/600',
  },
]

export interface Counter {
  value: string
  label: string
}

export const counters: Counter[] = [
  { value: '83', label: 'Happy Clients' },
  { value: '3892', label: 'Cup of Coffee' },
  { value: '3,923,892', label: 'Line of Codes' },
  { value: '3892', label: 'Project Finish' },
]

export interface Testimonial {
  quote: string
  author: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Fortis rebuilt our site from the ground up and the difference was immediate — clearer, faster and unmistakably us.',
    author: 'Amelia Clarke',
    image: 'https://picsum.photos/id/1027/140/140',
  },
  {
    quote:
      'A rare agency that sweats the details. Every interaction feels considered and every page loads in a blink.',
    author: 'Emma Wilson',
    image: 'https://picsum.photos/id/64/140/140',
  },
  {
    quote:
      'They took a vague brief and returned a product our whole team is proud to point to. Worth every minute.',
    author: 'Sophie Turner',
    image: 'https://picsum.photos/id/823/140/140',
  },
]

export interface BlogPost {
  title: string
  date: string
  author: string
  excerpt: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Designing for speed: why performance is a feature',
    date: 'July 17, 2019',
    author: 'Admin',
    excerpt:
      'Every extra second of load time costs you attention. Here is how we keep every page we ship fast, accessible and lightweight.',
    image: 'https://picsum.photos/seed/fortis-13/800/500',
  },
  {
    title: 'From wireframe to launch: our design process',
    date: 'June 28, 2019',
    author: 'Admin',
    excerpt:
      'A candid look at how a project moves from first sketch to shipped product — and where the real decisions get made.',
    image: 'https://picsum.photos/seed/fortis-14/800/500',
  },
  {
    title: 'The tools behind our favorite builds',
    date: 'May 9, 2019',
    author: 'Admin',
    excerpt:
      'The frameworks, libraries and rituals that let a small team ship big websites without losing their minds.',
    image: 'https://picsum.photos/seed/fortis-15/800/500',
  },
]

export const quickLinks = ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us']
