export interface NavItem {
  label: string
  href: string
  dropdown?: readonly string[]
}

export const header: {
  brand: string
  nav: readonly NavItem[]
  cta: string
} = {
  brand: 'Resume',
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    {
      label: 'Page',
      href: '#page',
      dropdown: ['Blog', 'Blog Details', 'Element', 'Portfolio Details'],
    },
    { label: 'Contact', href: '#contact' },
  ],
  cta: 'Get Free Consultent',
} as const

export const hero = {
  eyebrow: 'Get Every Single Solutions.',
  name: "I'm Designer Harper F. Watson",
  intro:
    'I craft clean, user-centered interfaces and brands that help small teams look and feel professional — from identity systems to fully responsive marketing sites.',
  learnMore: 'Learn More',
  hireMe: 'Hire Me',
  learnMoreHref: '#about',
  hireMeHref: '#contact',
  background: 'https://picsum.photos/seed/resume-studio/1920/1080',
  portrait: 'https://picsum.photos/id/996/800/1000',
  portraitAlt: 'Portrait of the designer Harper F. Watson',
} as const

export const about = {
  heading: 'Designing With Passion While Exploring The World.',
  paragraphs: [
    'I believe great design comes from curiosity: every project starts with research, sketching, and a lot of questions before a single pixel is placed.',
    'From brand identities to product interfaces, I work closely with founders and teams to turn rough ideas into polished, usable experiences that ship on time.',
  ],
  queryHeading: 'Any Type Of Query & Discussion.',
  queryText: 'Late talk with me',
  email: 'hireme@portfolio.com',
  emailLabel: 'hireme@portfolio.com',
} as const

export const services = {
  heading: 'What Services you will Get from me!',
  items: [
    {
      icon: 'pen',
      title: 'UI/UX Design',
      description:
        'Wireframes, prototypes, and pixel-perfect interfaces built around user research and tested usability patterns.',
    },
    {
      icon: 'megaphone',
      title: 'Digital Marketing',
      description:
        'Landing pages and campaigns that convert — messaging, structure, and design working together to grow your audience.',
    },
    {
      icon: 'briefcase',
      title: 'Website Design',
      description:
        'Fast, responsive, accessible websites from concept to launch, with clean code and a design system behind them.',
    },
  ],
} as const

export const portfolio = {
  heading: 'What Services you will Get from me!',
  tabs: ['All', 'Branding', 'Logo', 'UI/UX', 'Web Design'] as const,
  panes: {
    All: [
      {
        src: 'https://picsum.photos/seed/resume-all-1/1200/800',
        alt: 'Featured brand identity project',
      },
      { src: 'https://picsum.photos/seed/resume-all-2/600/800', alt: 'Logo sketch project' },
      { src: 'https://picsum.photos/seed/resume-all-3/600/800', alt: 'Interface design project' },
      { src: 'https://picsum.photos/seed/resume-all-4/1200/800', alt: 'Marketing site project' },
      { src: 'https://picsum.photos/seed/resume-all-5/600/800', alt: 'Editorial layout project' },
      { src: 'https://picsum.photos/seed/resume-all-6/600/800', alt: 'Mobile app design project' },
    ],
    Branding: [
      {
        src: 'https://picsum.photos/seed/resume-brand-1/1200/800',
        alt: 'Brand identity system project',
      },
      { src: 'https://picsum.photos/seed/resume-brand-2/600/800', alt: 'Brand stationery project' },
      { src: 'https://picsum.photos/seed/resume-brand-3/600/800', alt: 'Brand guidelines project' },
      { src: 'https://picsum.photos/seed/resume-brand-4/1200/800', alt: 'Rebrand project' },
      { src: 'https://picsum.photos/seed/resume-brand-5/600/800', alt: 'Brand pattern project' },
      { src: 'https://picsum.photos/seed/resume-brand-6/600/800', alt: 'Brand campaign project' },
    ],
    Logo: [
      { src: 'https://picsum.photos/seed/resume-logo-1/1200/800', alt: 'Wordmark logo project' },
      { src: 'https://picsum.photos/seed/resume-logo-2/600/800', alt: 'Monogram logo project' },
      { src: 'https://picsum.photos/seed/resume-logo-3/600/800', alt: 'Mascot logo project' },
      { src: 'https://picsum.photos/seed/resume-logo-4/1200/800', alt: 'Geometric logo project' },
      { src: 'https://picsum.photos/seed/resume-logo-5/600/800', alt: 'Emblem logo project' },
      { src: 'https://picsum.photos/seed/resume-logo-6/600/800', alt: 'Letterform logo project' },
    ],
    'UI/UX': [
      { src: 'https://picsum.photos/seed/resume-ui-1/1200/800', alt: 'Product dashboard project' },
      { src: 'https://picsum.photos/seed/resume-ui-2/600/800', alt: 'Mobile app flow project' },
      { src: 'https://picsum.photos/seed/resume-ui-3/600/800', alt: 'Design system project' },
      {
        src: 'https://picsum.photos/seed/resume-ui-4/1200/800',
        alt: 'E-commerce experience project',
      },
      { src: 'https://picsum.photos/seed/resume-ui-5/600/800', alt: 'User research project' },
      { src: 'https://picsum.photos/seed/resume-ui-6/600/800', alt: 'Prototype project' },
    ],
    'Web Design': [
      { src: 'https://picsum.photos/seed/resume-web-1/1200/800', alt: 'Corporate website project' },
      { src: 'https://picsum.photos/seed/resume-web-2/600/800', alt: 'Landing page project' },
      { src: 'https://picsum.photos/seed/resume-web-3/600/800', alt: 'Blog design project' },
      { src: 'https://picsum.photos/seed/resume-web-4/1200/800', alt: 'Portfolio website project' },
      { src: 'https://picsum.photos/seed/resume-web-5/600/800', alt: 'E-commerce site project' },
      { src: 'https://picsum.photos/seed/resume-web-6/600/800', alt: 'Web app interface project' },
    ],
  },
} as const

export const cta = {
  heading: 'Dont worry for contact i`m available',
  button: 'Contact Me Now',
  href: '#contact',
} as const

export const testimonials = {
  heading: 'Some Possitive Feedback That Encourage Us',
  items: [
    {
      photo: 'https://picsum.photos/id/823/200/200',
      name: 'Bradley Erickson',
      role: 'UI/UX Designer',
      quote:
        'Harper redesigned our entire product flow in three weeks. Conversion went up and our users finally understand the interface.',
    },
    {
      photo: 'https://picsum.photos/id/64/200/200',
      name: 'Bradley Erickson',
      role: 'UI/UX Designer',
      quote:
        'The brand system Harper delivered is a joy to work with — every asset documented, every color and type style intentional.',
    },
    {
      photo: 'https://picsum.photos/id/1027/200/200',
      name: 'Bradley Erickson',
      role: 'UI/UX Designer',
      quote:
        'Fast, communicative, and detail-obsessed. Our new marketing site loads in under a second and looks stunning on mobile.',
    },
  ],
} as const

export const contact = {
  heading: 'If Not Now, When? Let’s Work Together!',
  intro:
    'Have a project in mind or just want to talk design? Drop me a message and I will get back to you within one business day.',
  email: 'hireme@portfolio.com',
  address1: '221B Baker Street, Post office Box 353',
  address2: 'Park Road, USA - 215431',
} as const

export const footer = {
  email: 'hireme@portfolio.com',
  address1: '221B Baker Street, Post office Box 353',
  address2: 'Park Road, USA - 215431',
  socials: [
    { name: 'facebook', label: 'Facebook' },
    { name: 'twitter', label: 'Twitter' },
    { name: 'instagram', label: 'Instagram' },
    { name: 'youtube', label: 'YouTube' },
  ] as const,
} as const
