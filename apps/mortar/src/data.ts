export const siteName = 'Mortar'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const topBar = {
  phone: 'Free Call: +1 234 456 78910',
  email: 'Email Address: buildream@info.com',
} as const

export const hero = {
  badge: 'Since 1982',
  headline: 'We Will Be Happy To Take Care Of Your Work',
  highlight: 'Happy',
  primaryCta: 'Contact us',
  secondaryCta: 'Request A Quote',
} as const

export const about = {
  kicker: 'Welcome to Mortar',
  heading: 'Quality and Affordable Constructor',
  paragraph:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  subHeading: 'We Can Help You',
  badgeYears: '38',
  badgeCaption: 'Years of experienced',
  miniServices: [
    {
      title: 'Construction',
      blurb: 'Far far away, behind the word mountains, far from the countries.',
    },
    {
      title: 'Architecture',
      blurb: 'Far far away, behind the word mountains, far from the countries.',
    },
    {
      title: 'Consulting',
      blurb: 'Far far away, behind the word mountains, far from the countries.',
    },
    {
      title: 'Mechanical',
      blurb: 'Far far away, behind the word mountains, far from the countries.',
    },
  ] as const,
} as const

export const trust = {
  kicker: 'Trusted By',
  heading: "Companies We've Worked With",
  clients: ['ABC Corp', 'City Dev', 'State Bank', 'Metro Health', 'Grand Hotels', 'Industrial Co'],
} as const

export const introCta = {
  kicker: 'You May Contact Us For Construction & Renovation Work',
  heading: 'We Are Great Construction Company',
  ctaLabel: 'Make An Appointment',
} as const

export const services = {
  kicker: 'What We Do',
  heading: 'Services',
  items: [
    {
      title: 'Construction Services',
      blurb:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    },
    {
      title: 'Infrastructure Services',
      blurb:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    },
    {
      title: 'Architecture Services',
      blurb:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    },
  ] as const,
  learnMore: 'Learn More',
} as const

export const videoCta = {
  playLabel: 'Watch Our Story',
  heading: 'Building Dreams Into Reality Since 1982',
  paragraph:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  bullets: [
    'Award-winning construction projects',
    'Sustainable building practices',
    'On-time, on-budget delivery',
    'Safety-first approach',
  ],
  ctaLabel: 'Learn More About Us',
} as const

export const counters = [
  { value: '3000', label: 'Completed Projects' },
  { value: '320', label: 'Happy Clients' },
  { value: '1000', label: 'Cup Of Coffee' },
  { value: '587', label: 'Engineers & Staffs' },
] as const

export const team = {
  kicker: 'Team & Staff',
  heading: 'Qualified Engineers',
  role: 'Senior Engineer',
  members: [
    { name: 'Lionel Wurtchbach', photoSeed: 'mortar-staff-1' },
    { name: 'Mike Nintido', photoSeed: 'mortar-staff-2' },
    { name: 'Bea Alam', photoSeed: 'mortar-staff-3' },
    { name: 'John Buffer', photoSeed: 'mortar-staff-4' },
  ] as const,
} as const

export const portfolio = {
  kicker: 'Portfolio',
  heading: 'Projects',
  category: 'Building',
  title: 'High Tower Works',
} as const

export interface PricingTier {
  name: string
  price: string
  tagline: string
  features: { label: string; included: boolean }[]
  featured?: boolean
  ctaLabel: string
}

export const pricing: PricingTier[] = [
  {
    name: 'Basic',
    price: '49K',
    tagline: 'Small renovations',
    ctaLabel: 'Get Quote',
    features: [
      { label: 'Up to 500 sq ft', included: true },
      { label: 'Basic materials', included: true },
      { label: '2-week timeline', included: true },
      { label: '1-year warranty', included: true },
      { label: 'Design consultation', included: false },
      { label: 'Project manager', included: false },
    ],
  },
  {
    name: 'Standard',
    price: '79K',
    tagline: 'Home additions',
    ctaLabel: 'Get Quote',
    features: [
      { label: 'Up to 1,000 sq ft', included: true },
      { label: 'Quality materials', included: true },
      { label: '4-week timeline', included: true },
      { label: '2-year warranty', included: true },
      { label: 'Design consultation', included: true },
      { label: 'Project manager', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '109K',
    tagline: 'Full home builds',
    featured: true,
    ctaLabel: 'Get Quote',
    features: [
      { label: 'Up to 2,500 sq ft', included: true },
      { label: 'Premium materials', included: true },
      { label: '8-week timeline', included: true },
      { label: '5-year warranty', included: true },
      { label: 'Design consultation', included: true },
      { label: 'Dedicated project manager', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: '149K+',
    tagline: 'Commercial projects',
    ctaLabel: 'Contact Us',
    features: [
      { label: 'Unlimited sq ft', included: true },
      { label: 'Custom materials', included: true },
      { label: 'Custom timeline', included: true },
      { label: '10-year warranty', included: true },
      { label: 'Full design team', included: true },
      { label: '24/7 support', included: true },
    ],
  },
]

export const testimonials = {
  kicker: 'Testimonial',
  heading: 'Happy Clients',
  role: 'Marketing Manager',
  slides: [
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      name: 'Roger Scott',
    },
    {
      quote:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      name: 'Roger Scott',
    },
    {
      quote:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      name: 'Roger Scott',
    },
    {
      quote:
        'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks.',
      name: 'Roger Scott',
    },
  ],
} as const

export const blog = {
  kicker: 'Our Blog',
  heading: 'Recent Blog',
  day: '16',
  month: 'Jan',
  metaAuthor: 'Admin',
  metaComments: '3 Comments',
  title: 'Biggest Construction in New York, USA',
  excerpt:
    'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
} as const

export const faqs = {
  kicker: 'Frequently Ask Question',
  heading: 'You Want To Ask Something From Us?',
  paragraph:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  items: [
    {
      question: 'What are the problems in construction?',
      answer:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      question: 'What is best practice in construction?',
      answer:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
  ],
} as const

export const newsletter = {
  heading: 'Subscribe to Our Newsletter',
  subtext: 'Get the latest updates on projects, industry news, and exclusive offers.',
  emailLabel: 'Enter your email address',
  subscribeLabel: 'Subscribe',
  success: 'Thank you for subscribing!',
  error: 'Please enter a valid email address.',
} as const

export const footer = {
  blurb:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  servicesTitle: 'Services',
  servicesLinks: [
    { label: 'Construction Services', meta: 'Admin 19' },
    { label: 'Infrastructure Services', meta: 'Admin 19' },
    { label: 'Architecture Services', meta: 'Admin 19' },
  ],
  quickLinksTitle: 'Quick Links',
  quickLinks: ['Home', 'About', 'Services', 'Project', 'Pricing', 'Contact Us'],
  questionsTitle: 'Have a Questions?',
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
  componentDockHref: 'https://www.componentdock.com/',
  componentDockLabel: 'Component Dock',
  madeWith: 'Made with ♥ by',
  rights: 'All rights reserved',
} as const
