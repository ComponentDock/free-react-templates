import {
  Code,
  Handshake,
  PieChart,
  Presentation,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'What We Do', href: '#services' },
  { label: 'The Journal', href: '#blog' },
  { label: 'Who We Are', href: '#about' },
  { label: 'Plans & Pricing', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  headline: 'We create awesome templates for you.',
  subheading:
    'A free template for business websites. For busy business professionals — a small river named Duden flows by their place and supplies it with the necessary regelialia.',
  cta: 'Get Started',
  image: 'https://picsum.photos/seed/folium-hero/1600/900',
} as const

/* ------------------------------------------------------------------ */
/* Intro                                                               */
/* ------------------------------------------------------------------ */

export const introStatement =
  'For busy business professionals — A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'

/* ------------------------------------------------------------------ */
/* Split block with play button                                        */
/* ------------------------------------------------------------------ */

export const splitOne = {
  image: 'https://picsum.photos/seed/folium-split-1/800/600',
  videoUrl: 'https://player.vimeo.com/video/45830194',
  heading: 'Far far away, behind the word mountains',
  paragraphs: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  ],
} as const

/* ------------------------------------------------------------------ */
/* Quote band split block                                              */
/* ------------------------------------------------------------------ */

export const splitTwo = {
  blocks: [
    {
      heading: 'Far far away, behind the word mountains',
      copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      heading: 'A small river named Duden flows by their place',
      copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    },
  ],
  image: 'https://picsum.photos/seed/folium-split-2/800/600',
  quote:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  author: '— Mellissa Clark',
} as const

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  name: string
  role: string
  image: string
  avatar: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Mellissa Clark',
    role: 'Web Designer',
    image: 'https://picsum.photos/seed/folium-t-1/600/800',
    avatar: 'https://picsum.photos/seed/folium-avatar-1/80/80',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    name: 'Louise Kelly',
    role: 'Illustrator Designer',
    image: 'https://picsum.photos/seed/folium-t-2/600/800',
    avatar: 'https://picsum.photos/seed/folium-avatar-2/80/80',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    name: 'Aldin Powell',
    role: 'Web Developer',
    image: 'https://picsum.photos/seed/folium-t-3/600/800',
    avatar: 'https://picsum.photos/seed/folium-avatar-3/80/80',
    quote:
      'Even the all-powerful Pointing has no control about the blind texts — it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
  },
]

/* ------------------------------------------------------------------ */
/* Services (What We Do)                                               */
/* ------------------------------------------------------------------ */

export interface Service {
  icon: LucideIcon
  title: string
  copy: string
}

export const services: Service[] = [
  {
    icon: TrendingUp,
    title: 'Creative Performance',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Target,
    title: 'Reach Performance',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Code,
    title: 'Custom Development',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: PieChart,
    title: 'Creative Performance',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Handshake,
    title: 'Reach Performance',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Presentation,
    title: 'Custom Development',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
]

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export interface Post {
  image: string
  category: string
  title: string
  author: string
  date: string
}

export const posts: Post[] = [
  {
    image: 'https://picsum.photos/seed/folium-blog-1/600/500',
    category: 'Travel',
    title: 'Far far away, behind the word mountains',
    author: 'Wellie Clark',
    date: 'March 20, 2018',
  },
  {
    image: 'https://picsum.photos/seed/folium-blog-2/600/500',
    category: 'Travel',
    title: 'Far far away, behind the word mountains',
    author: 'Wellie Clark',
    date: 'March 20, 2018',
  },
  {
    image: 'https://picsum.photos/seed/folium-blog-3/600/500',
    category: 'Travel',
    title: 'Far far away, behind the word mountains',
    author: 'Wellie Clark',
    date: 'March 20, 2018',
  },
]

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export interface FooterColumn {
  heading: string
  links: { label: string; href: string }[]
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Team', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Communities',
    links: [
      { label: 'Support', href: '#' },
      { label: 'Sharing is Caring', href: '#' },
      { label: 'Better Web', href: '#' },
      { label: 'Good Template', href: '#' },
    ],
  },
  {
    heading: 'Useful links',
    links: [
      { label: 'Bootstrap 4', href: '#' },
      { label: 'jQuery', href: '#' },
      { label: 'HTML5', href: '#' },
      { label: 'Sass', href: '#' },
    ],
  },
]

export const socials = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
] as const
