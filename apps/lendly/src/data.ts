export const brand = 'LENDLY'

export const navLinks = ['Home', 'About Us', 'Pages', 'News', 'Contact'] as const

export const dropdownItems = ['About Us', 'Loans', 'elements'] as const

export const contact = {
  callLabel: 'Call us now!',
  phone: '+45 332 65767 42',
  supportPhone: '+34 56873 2246',
  email: 'contact@lendly.com',
} as const

export const heroSlides = [
  {
    image: 'https://picsum.photos/id/2/1920/1080',
    alt: '',
  },
  {
    image: 'https://picsum.photos/id/26/1920/1080',
    alt: '',
  },
  {
    image: 'https://picsum.photos/id/3/1920/1080',
    alt: '',
  },
] as const

export const hero = {
  headline: 'Looking for a same day loan?',
  paragraph:
    'Lendly connects you with fast, transparent personal loans — apply online in minutes and get a decision the same day.',
  cta: { label: 'Find out more', href: '#why' },
  form: {
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your E-mail',
    phonePlaceholder: 'Your Phone',
    disclaimer:
      'Submitting this form does not affect your credit score. Our team will contact you within one business hour.',
    submitLabel: 'Apply for a loan now!',
    success: 'Thanks! Your application has been received — we will call you shortly.',
  },
} as const

export const why = {
  heading: 'Why Choose us?',
  cards: [
    {
      icon: 'clock',
      title: 'Money in 1 Hour!',
      text: 'Fast approvals mean cash in your account in as little as one hour after you apply.',
    },
    {
      icon: 'headset',
      title: 'Helpfull Staff',
      text: 'Friendly loan specialists are available seven days a week to answer your questions.',
    },
    {
      icon: 'info',
      title: 'Credit History Considered',
      text: 'We look at your whole financial picture, so a less-than-perfect score is not a dead end.',
    },
  ],
  cta: { label: 'Apply Now!', href: '#apply' },
} as const

export const ctaBand = {
  headingPrefix: 'Already have a',
  brandWord: 'LENDLY',
  headingSuffix: 'Bank Loan?',
  subline: "If you're thinking about borrowing more, we're here to help.",
  cta: { label: 'Find out More', href: '#help' },
  image: 'https://picsum.photos/id/1060/1920/700',
} as const

export const features = [
  {
    headline: 'Get a personal loan from just 8.5% APR',
    paragraph:
      'Borrow between $1,000 and $50,000 with fixed monthly payments and no hidden fees. The rate you see is the rate you pay for the whole term.',
    linkLabel: 'Apply for a loan now',
    href: '#apply',
    image: 'https://picsum.photos/id/180/900/640',
    imageAlt: 'Laptop and notebook with planning notes on a wooden desk',
    flip: false,
  },
  {
    headline: 'Get aproved in minutes after you apply online',
    paragraph:
      'Our digital application takes about five minutes. Once approved, the money is transferred directly to your bank account — usually the same day.',
    linkLabel: 'Apply for a loan now',
    href: '#apply',
    image: 'https://picsum.photos/id/48/900/640',
    imageAlt: 'Laptop and smartphone on a café table',
    flip: true,
  },
] as const

export const help = {
  heading: 'How a personal loan can help',
  intro: [
    'A personal loan from Lendly can smooth out life’s bigger moments. Use it for the things that matter and repay in comfortable monthly instalments that fit your budget.',
    'Whatever your plans — a new car, a family event, or consolidating what you owe — a fixed-rate loan gives you certainty from day one.',
  ],
  columns: [
    [
      'Buying a car',
      'Take control of your finances',
      'Pay school tuitions',
      'Adding value to your home',
    ],
    ['Increese your budget', 'Have a day to remember', 'Get a new card', 'Go on a holliday'],
    ['Get an Insurance', 'Take a trip', 'Help your kids', 'Renovate your home'],
  ],
} as const

export const info = {
  heading: "We're here to help",
  hours: 'Monday to Thursday (8am to 8pm), and Friday (8am to 5pm).',
  paragraph:
    'Our support team answers every call and email personally. Visit us or get in touch — we are happy to walk you through your options.',
  image: 'https://picsum.photos/id/20/800/640',
  imageAlt: 'Organized desk workspace with laptop, books, and notebook',
} as const

export const score = {
  heading: 'Calculate my Score',
  subline: "Check your credit reports as often as you want, it won't affect your scores.",
  cta: { label: 'show my score', href: '#contact' },
  image: 'https://picsum.photos/id/453/1920/700',
} as const

export const footer = {
  widgets: [
    {
      title: 'What we do',
      links: [
        'Loans',
        'Car loans',
        'Debt consolidation loans',
        'Home improvement loans',
        'Wedding loans',
        'Innovative Finance ISA',
      ],
    },
    {
      title: 'About us',
      links: [
        'About us',
        'Our story',
        'Meet the board',
        'Meet the leadership team',
        'Awards',
        'Careers',
      ],
    },
    {
      title: 'Legal',
      links: [
        'Privacy policy',
        'Lendly principles',
        'Website terms',
        'Cookie policy',
        'Conflicts policy',
      ],
    },
    {
      title: 'Site Info',
      links: ['Support', 'FAQ', 'Sitemap', 'Careers', 'Contact us'],
    },
  ],
  smallPrint:
    'Lendly is a trading name of Lendly Finance Ltd. All loans are subject to status and affordability checks. Think carefully before borrowing.',
  copyright: '© 2026 Lendly — Loans & Finance · All rights reserved',
  creditLabel: 'More templates at Component Dock',
  creditHref: 'https://www.componentdock.com/',
} as const
