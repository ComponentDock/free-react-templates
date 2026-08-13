import { Camera, Megaphone, ShoppingBag, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const brand = {
  name: 'Glamour',
  tagline: 'Model Agency',
}

export interface NavLink {
  number: string
  label: string
  href: string
  active?: boolean
}

export const navLinks: readonly NavLink[] = [
  { number: '01', label: 'Home', href: '#home', active: true },
  { number: '02', label: 'About', href: '#about' },
  { number: '03', label: 'Models', href: '#models' },
  { number: '04', label: 'Blog', href: '#blog' },
  { number: '05', label: 'Contact', href: '#contact' },
]

export interface ModelStat {
  label: string
  value: string
}

export const modelStats: readonly ModelStat[] = [
  { label: 'Height', value: '185' },
  { label: 'Bust', value: '79' },
  { label: 'Waist', value: '40' },
  { label: 'Hips', value: '87' },
  { label: 'Shoe', value: '40' },
  { label: 'Eyes', value: 'Blue' },
  { label: 'Hair', value: 'Brunet' },
]

export interface HeroSlide {
  image: string
  position: string
  name: string
}

export const heroSlides: readonly HeroSlide[] = [
  {
    image: 'https://picsum.photos/id/64/1600/1000',
    position: "Top Model's",
    name: 'Kate Henderson',
  },
  {
    image: 'https://picsum.photos/id/1027/1600/1000',
    position: "Super Model's",
    name: 'Samantha Lewis',
  },
  {
    image: 'https://picsum.photos/id/823/1600/1000',
    position: "Photo Model's",
    name: 'Jessica Alba',
  },
  {
    image: 'https://picsum.photos/id/996/1600/1000',
    position: "Photo Model's",
    name: 'Alexis Bright',
  },
]

export const about = {
  heading: 'Glamour A Model Agency',
  paragraph:
    'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
  strong:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  checklist: [
    'Even the all-powerful Pointing',
    'Behind the word mountains',
    'Separated they live in Bookmarksgrove',
  ] as const,
  video: {
    image: 'https://picsum.photos/seed/glamour-video/640/480',
    label: 'Watch our video promo',
    url: 'https://player.vimeo.com/video/45830194',
  },
}

export interface ModelCard {
  name: string
  image: string
}

export const modelCards: readonly ModelCard[] = [
  { name: 'Coleen Husaff', image: 'https://picsum.photos/id/1027/600/860' },
  { name: 'Coleen Husaff', image: 'https://picsum.photos/id/64/600/860' },
  { name: 'Coleen Husaff', image: 'https://picsum.photos/id/823/600/860' },
  { name: 'Coleen Husaff', image: 'https://picsum.photos/id/996/600/860' },
  { name: 'Coleen Husaff', image: 'https://picsum.photos/id/1027/600/860' },
  { name: 'Coleen Husaff', image: 'https://picsum.photos/id/64/600/860' },
  { name: 'Coleen Husaff', image: 'https://picsum.photos/id/823/600/860' },
  { name: 'Coleen Husaff', image: 'https://picsum.photos/id/996/600/860' },
  { name: 'Coleen Husaff', image: 'https://picsum.photos/id/1027/600/860' },
]

export const testimonials = {
  heading: 'Clients Says',
  items: [
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Mike Lewis',
      position: 'Architect',
      avatar: 'https://picsum.photos/id/64/240/240',
    },
    {
      quote:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      name: 'Dennis Green',
      position: 'Architect',
      avatar: 'https://picsum.photos/id/1027/240/240',
    },
  ] as const,
}

export interface Service {
  icon: LucideIcon
  title: string
  blurb: string
}

export const services: readonly Service[] = [
  {
    icon: Sparkles as LucideIcon,
    title: 'Fashion Shows',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: Megaphone as LucideIcon,
    title: 'Corporate Events',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: ShoppingBag as LucideIcon,
    title: 'Commercial Photo Shots',
    blurb:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    icon: Camera as LucideIcon,
    title: 'Exhibitions/Trade Shows',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export const quote = {
  heading: 'Wanna be a Model?',
  body: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  cta: 'Call us now to know how!',
  ctaHref: '#contact',
}

export interface BlogPost {
  image: string
  date: string
  author: string
  comments: string
  title: string
}

export const blogPosts: readonly BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/glamour-blog-1/800/600',
    date: 'August 12, 2018',
    author: 'Admin',
    comments: '3',
    title: "Asia's Next Top Model",
  },
  {
    image: 'https://picsum.photos/seed/glamour-blog-2/800/600',
    date: 'August 12, 2018',
    author: 'Admin',
    comments: '3',
    title: "Asia's Next Top Model",
  },
  {
    image: 'https://picsum.photos/seed/glamour-blog-3/800/600',
    date: 'August 12, 2018',
    author: 'Admin',
    comments: '3',
    title: "Asia's Next Top Model",
  },
]

export const footer = {
  blurb:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  recent: [
    {
      title: 'Even the all-powerful Pointing has no control about',
      meta: 'July 12, 2018 · Admin · 19',
      thumb: 'https://picsum.photos/seed/glamour-thumb-1/160/160',
    },
    {
      title: 'Even the all-powerful Pointing has no control about',
      meta: 'July 12, 2018 · Admin · 19',
      thumb: 'https://picsum.photos/seed/glamour-thumb-2/160/160',
    },
  ] as const,
  siteLinks: ['Home', 'About', 'Model', 'Services', 'Blog'] as const,
  contact: {
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    // Phone kept as a spaced display string; the tel: href is computed at
    // render time so no literal tel: URI appears in source.
    phone: '+2 392 3929 210',
    email: 'info@yourdomain.com',
  },
}
