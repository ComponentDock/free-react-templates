/* Propel — single-page content model for the recreated business/startup
   corporate landing. Copy is paraphrased demo content (kept same kinds as
   the source: hero headline + lead + CTAs, startup media rows, numbered
   service cards, blog rows, contact form, half-content panels, footer
   widgets). On-page anchors map the single-page recreation's navigation. */

export const BRAND = 'Propel'

export interface NavLink {
  label: string
  href: string
  active?: boolean
  dropdown?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Dropdown', href: '#services', dropdown: true },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#startup' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
]

export const DROPDOWN_LINKS = [
  { label: 'Menu One', href: '#services' },
  { label: 'Menu Two', href: '#blog' },
  { label: 'Menu Three', href: '#startup' },
] as const

export const SUBMENU_LINKS = ['Sub Menu One', 'Sub Menu Two', 'Sub Menu Three'] as const

export const HERO = {
  heading: 'We are here to grow your business',
  lead: 'Propel is the partner for ambitious teams — strategy, design, and engineering under one roof, shipped at startup speed.',
  ctaLabel: 'See our services',
  videoLabel: 'Watch the video',
  videoTitle: 'Propel — How we help businesses grow',
  videoEmbedUrl: 'https://www.youtube.com/embed/mwtbEGNABWU',
  image: 'https://picsum.photos/id/48/1920/1080',
  imageAlt: 'A laptop open on a wooden cafe table, ready for productive work',
} as const

export const STARTUP = {
  heading: 'Startup',
  lead: 'A growth-focused agency helping early-stage companies turn ideas into products that win.',
  rowOne: {
    lead: 'From the first wireframe to the first thousand customers, we work alongside founders.',
    body: 'We pair senior designers with pragmatic engineers so every decision is built to ship. No hand-offs, no black boxes — just momentum.',
    bullets: [
      'Strategy workshops that move fast',
      'Roadmaps built around outcomes',
      'Teams that ship with confidence',
    ],
    image: 'https://picsum.photos/id/180/800/600',
    imageAlt: 'A laptop, notebook and camera on a rustic wooden desk',
    actionLabel: 'Learn more',
  },
  rowTwo: {
    heading: 'Best Company',
    body: 'Named one of the best places to grow a career in product — because we invest in the people doing the work, not just the work itself.',
    image: 'https://picsum.photos/id/1/800/600',
    imageAlt: 'A person working on a laptop at a wooden table',
    actionLabel: 'Learn more',
  },
} as const

export const SERVICES = {
  heading: 'Services',
  lead: 'Everything your business needs to go from idea to income — designed, built, and measured as one system.',
  items: [
    { number: 'Service .01', title: 'Web Design' },
    { number: 'Service .02', title: 'Graphic Design' },
    { number: 'Service .03', title: 'Web Application' },
    { number: 'Service .04', title: 'Expert Copywriting' },
    { number: 'Service .05', title: 'Creative Branding' },
  ],
} as const

export const BLOG = {
  heading: 'Blog Posts',
  lead: 'Notes from the studio on strategy, design, and the business of building software.',
  posts: [
    {
      title: 'Scaling Design Systems Without Friction',
      author: 'Maya Chen',
      date: '23 Aug 2020',
      excerpt:
        'A living design system is a product too — here is how we keep it useful after the hundredth component.',
      image: 'https://picsum.photos/id/20/800/500',
      imageAlt: 'A colorful overhead view of a workspace with an open laptop',
    },
    {
      title: 'Your Landing Page Needs One Clear Message',
      author: 'Leo Grant',
      date: '18 Aug 2020',
      excerpt:
        'The best landing pages say one thing loudly. Every extra message you add is a customer you give permission to leave.',
      image: 'https://picsum.photos/id/60/800/500',
      imageAlt: 'A dark desk with a large monitor, keyboard and notebook',
    },
    {
      title: 'From Brief To Launch: A Two-Week Playbook',
      author: 'Priya Rao',
      date: '11 Aug 2020',
      excerpt:
        'A calm, repeatable process for taking a product from kickoff to launch without burning out the team.',
      image: 'https://picsum.photos/id/26/800/500',
      imageAlt: 'A flat-lay of a wallet, watch, notebook and headphones on gray',
    },
    {
      title: 'The Metrics That Matter After Launch',
      author: 'Sam Ortiz',
      date: '04 Aug 2020',
      excerpt:
        'Traffic is vanity, retention is sanity. The dashboard you build in week one decides the decisions you make in year one.',
      image: 'https://picsum.photos/id/0/800/500',
      imageAlt: 'A laptop on an outdoor wooden table beside a cup of coffee',
    },
  ],
} as const

export const CONTACT = {
  heading: 'Contact',
  lead: 'Tell us where your business is going — we will show you how to get there faster.',
  nameLabel: 'Name',
  emailLabel: 'Email',
  subjectLabel: 'Subject',
  messageLabel: 'Write your message',
  submitLabel: 'Send message',
  successMessage: 'Thank you — your message is on its way, and we reply within one business day.',
} as const

export const PANELS = [
  {
    heading: 'Start Your Business',
    body: 'Launch with a foundation that lasts: a sharp brand, a buildable product plan, and a go-to-market that does not waste your runway.',
    checks: [
      'Market research that de-risks your launch',
      'A brand that stands out on day one',
      'Growth loops built from the first month',
    ],
    image: 'https://picsum.photos/id/180/900/600',
    imageAlt: 'A laptop, notebook and camera on a rustic wooden desk',
    actionLabel: 'Learn more',
  },
  {
    heading: 'Grow Your Business',
    body: 'Momentum is a strategy. We help established teams find the next curve — new channels, sharper pricing, and products people stick with.',
    checks: [
      'Retention and referral programs that scale',
      'Data-driven pricing and packaging',
      'Expansion into new markets and channels',
    ],
    image: 'https://picsum.photos/id/1/900/600',
    imageAlt: 'A person working on a laptop at a wooden table',
    actionLabel: 'Learn more',
  },
] as const

export const FOOTER = {
  aboutHeading: 'About Propel',
  aboutText:
    'Propel is a growth agency for ambitious teams — we build the products and brands that carry businesses forward.',
  connectHeading: 'Connect',
  linksHeading: 'Links',
  companyHeading: 'Company',
  contactHeading: 'Contact',
  links: [
    { label: 'About us', href: '#startup' },
    { label: 'Services', href: '#services' },
    { label: 'News', href: '#blog' },
    { label: 'Careers', href: '#contact' },
    { label: 'Contact', href: '#contact' },
  ],
  address: '43 Raymouth Rd. Baltemoer, London 3910',
  phones: ['+1(123)-456-7890', '+1(123)-456-7890'],
  email: 'info@mydomain.com',
  credit: 'All rights reserved. More templates at',
} as const

export const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com' },
  { name: 'Twitter', href: 'https://www.twitter.com' },
  { name: 'Facebook', href: 'https://www.facebook.com' },
  { name: 'Linkedin', href: 'https://www.linkedin.com' },
  { name: 'Pinterest', href: 'https://www.pinterest.com' },
  { name: 'Dribbble', href: 'https://dribbble.com' },
] as const
