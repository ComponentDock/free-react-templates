export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
] as const

export const pagesDropdown = [
  { label: 'Single Blog', href: '#blog' },
  { label: 'Elements', href: '#services' },
] as const

export const hero = {
  lineOne: 'Think Creative',
  lineTwo: 'Turn',
  lineThree: 'Ideas Into Life',
  cta: 'Learn More',
  photo: 'https://picsum.photos/seed/maven-hero/480/480',
} as const

export const featuresCta = {
  eyebrow: 'Our Features',
  title: 'Building brands with purpose',
} as const

export const services = [
  {
    icon: 'smartphone',
    title: 'Responsive Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.',
  },
  {
    icon: 'monitor',
    title: 'Quality Matters',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.',
  },
  {
    icon: 'shield',
    title: 'Better Security',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.',
  },
  {
    icon: 'headphones',
    title: '24/7 Service',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.',
  },
] as const

export const about = {
  eyebrow: 'About our company',
  title: 'Make the customer the hero of your story',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.',
  cta: 'Learn More',
  experience: '25 Years Working Experience',
  images: {
    main: 'https://picsum.photos/seed/maven-about-1/570/450',
    small: 'https://picsum.photos/seed/maven-about-2/270/210',
  },
} as const

export const work = {
  eyebrow: 'Recent Work',
  title: 'Creative work for client',
  rows: [
    {
      label: 'Mockup design',
      title: 'It under itself day whales waters our divide third brought',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.',
      image: 'https://picsum.photos/seed/maven-work-1/570/380',
    },
    {
      label: 'Mockup design',
      title: 'Saw i very dominion whose female was light divided multiply',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.',
      image: 'https://picsum.photos/seed/maven-work-2/570/380',
    },
    {
      label: 'Mockup design',
      title: 'Waters light form whose moving evening behold',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.',
      image: 'https://picsum.photos/seed/maven-work-3/570/380',
    },
  ],
} as const

export const stats = [
  { value: 85, label: 'Satisfied Client' },
  { value: 95, label: 'Total Project' },
  { value: 75, label: 'Work Completed' },
  { value: 95, label: 'Work Completed' },
] as const

export const review = {
  video: {
    caption: 'Watch intro video',
    poster: 'https://picsum.photos/seed/maven-video/640/550',
  },
  testimonials: [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.',
      name: 'Daniel E Gilcritst',
      role: 'Manager, Vision',
    },
    {
      quote:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Sofia Ramirez',
      role: 'Product Lead, Vision',
    },
    {
      quote:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Marcus Reed',
      role: 'Founder, Vision',
    },
  ],
} as const

export const team = [
  {
    name: 'Jhosef Williams',
    role: 'Web Developer',
    image: 'https://picsum.photos/id/1027/270/320',
  },
  {
    name: 'Daniel Hancock',
    role: 'Web Developer',
    image: 'https://picsum.photos/id/823/270/320',
  },
  {
    name: 'Bernard Perales',
    role: 'Web Developer',
    image: 'https://picsum.photos/id/996/270/320',
  },
] as const

export const teamSocials = ['facebook', 'twitter', 'skype'] as const

export const blog = {
  eyebrow: 'Latest News',
  title: 'We Have True Story',
  posts: [
    {
      category: 'Art, design',
      date: 'March 30, 2019',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      comments: 4,
      views: 10,
      image: 'https://picsum.photos/seed/maven-blog-1/370/250',
    },
    {
      category: 'Technology',
      date: 'March 30, 2019',
      title: 'Donec malesuada lorem maximus mauris',
      comments: 6,
      views: 14,
      image: 'https://picsum.photos/seed/maven-blog-2/370/250',
    },
    {
      category: 'Life style',
      date: 'March 30, 2019',
      title: 'Ut ac ligula sapien suspendisse vestibulum',
      comments: 3,
      views: 8,
      image: 'https://picsum.photos/seed/maven-blog-3/370/250',
    },
  ],
} as const

export const footer = {
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.',
  newsletter: {
    title: 'Newsletter',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    placeholder: 'Your email address',
    button: 'Subscribe',
  },
  instagram: {
    title: 'Instagram',
    images: [
      'https://picsum.photos/seed/maven-ig-1/100/100',
      'https://picsum.photos/seed/maven-ig-2/100/100',
      'https://picsum.photos/seed/maven-ig-3/100/100',
      'https://picsum.photos/seed/maven-ig-4/100/100',
      'https://picsum.photos/seed/maven-ig-5/100/100',
      'https://picsum.photos/seed/maven-ig-6/100/100',
    ],
  },
  socials: ['facebook', 'twitter', 'instagram', 'skype'] as const,
} as const
