export const brand = 'Momentum'

export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Dropdown',
    href: '#services',
    children: [
      { label: 'Menu One', href: '#services' },
      {
        label: 'Menu Two',
        href: '#pricing',
        children: [
          { label: 'Sub Menu One', href: '#features' },
          { label: 'Sub Menu Two', href: '#team' },
          { label: 'Sub Menu Three', href: '#newsletter' },
        ],
      },
      { label: 'Menu Three', href: '#testimonials' },
    ],
  },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact Us', href: '#newsletter' },
]

export const hero = {
  kicker: 'New Template',
  headline: 'Bootstrap Five',
  credit: 'A free template by Component Dock',
  ctaLabel: 'Read More',
  image: 'https://picsum.photos/seed/momentum-hero/1920/1080',
}

export const countdown = {
  kicker: "Don't wait",
  title: 'Event Countdown',
  target: '2027-03-01T00:00:00Z',
  labels: ['Days', 'Hours', 'Minutes', 'Seconds'] as const,
  endedMessage: 'We are sorry, Event ended!',
  ctaLabel: 'Get Started',
}

export interface Service {
  title: string
  description: string
  icon: 'camera' | 'settings' | 'image' | 'layers'
}

export const services: Service[] = [
  {
    title: 'Photography',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia there live the blind texts.',
    icon: 'camera',
  },
  {
    title: 'Settings',
    description:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    icon: 'settings',
  },
  {
    title: 'Images',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    icon: 'image',
  },
  {
    title: 'Layered',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia there live the blind texts.',
    icon: 'layers',
  },
]

export const about = {
  kicker: 'Who we are',
  title: 'About us',
  paragraphs: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  ],
  ctaLabel: 'Get Started',
  image: 'https://picsum.photos/seed/momentum-about/800/600',
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  cents: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    price: '49',
    cents: '.99',
  },
  {
    name: 'Basic',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    price: '199',
    cents: '.99',
  },
  {
    name: 'Premium',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    price: '975',
    cents: '.99',
  },
]

export const moreFeatures = {
  kicker: 'Features',
  title: 'More Features',
  blurb:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  items: [
    {
      title: 'Creative',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia there live the blind texts.',
    },
    {
      title: 'Design',
      description:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      title: 'Development',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
  ],
  image: 'https://picsum.photos/seed/momentum-features/1920/1080',
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    name: 'Jessica Smith',
    role: 'Product Marketer @Google',
    avatar: 'https://picsum.photos/id/64/160/160',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    name: 'Craig Norton',
    role: 'Product Marketer @Google',
    avatar: 'https://picsum.photos/id/1027/160/160',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts; it is an almost unorthographic life one day.',
    name: 'Jessica Smith',
    role: 'Product Marketer @Google',
    avatar: 'https://picsum.photos/id/823/160/160',
  },
]

export interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Jessica Green',
    position: 'CEO, Co-Founder',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/id/1027/600/750',
  },
  {
    name: 'Jon Gold',
    position: 'CTO, Co-Founder',
    bio: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/id/823/600/750',
  },
]

export const newsletter = {
  title: 'Subscribe to Newsletter',
  blurb:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  nameLabel: 'Your name',
  emailLabel: 'Your email',
  submitLabel: 'Subscribe',
  nameError: 'Please enter your name.',
  emailError: 'Please enter a valid email address.',
  successMessage: 'Thanks for subscribing — see you soon!',
}

export const footer = {
  socials: ['facebook', 'twitter', 'linkedin', 'dribbble'] as const,
  credit: 'All rights reserved',
  madeWith: 'Made with love by Component Dock',
  componentDockLabel: 'More templates at Component Dock',
  componentDockHref: 'https://www.componentdock.com/',
}
