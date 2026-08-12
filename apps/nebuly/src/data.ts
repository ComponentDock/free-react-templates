/* Content model for the Nebuly template — a cloud-services & domain
   hosting landing page. All photos are picsum-seeded placeholders, icons
   are lucide-react (brand social icons are inline SVGs in
   components/icons), and fonts load from Google Fonts. */

export const BRAND = 'Nebuly'

interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'Company', href: '#services-section' },
  { label: 'Pricing', href: '#pricing-section' },
  { label: 'Leadership', href: '#testimonials-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const HERO = {
  eyebrow: 'Cloud Services',
  headline: 'Cloud, Management, Template',
  paragraph:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in',
  highlight: '99.9%',
  highlightSuffix: 'uptime, always.',
  cta: 'Get in touch',
  image: 'https://picsum.photos/seed/nebuly-hero/640/520',
} as const

export const PARTNERS = ['Microsoft', 'Android', 'Java', 'Google', 'Adobe'] as const

interface Tld {
  label: string
  price: string
}

export const TLDS: Tld[] = [
  { label: '.com', price: '$9.75' },
  { label: '.net', price: '$9.50' },
  { label: '.biz', price: '$8.95' },
  { label: '.co', price: '$7.80' },
  { label: '.me', price: '$7.95' },
]

export const DOMAIN = {
  heading: 'Search Your Domain Name',
  subtext:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  placeholder: 'Enter your domain name',
  submit: 'Search',
  availablePrefix: 'Great news —',
} as const

export type ServiceIcon = 'cloud' | 'server' | 'headset' | 'shield' | 'database' | 'settings'

interface Service {
  icon: ServiceIcon
  title: string
  blurb: string
}

const SERVICE_BLURB =
  'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'

export const SERVICES = {
  heading: 'Cloud Services',
  items: [
    { icon: 'cloud', title: 'Cloud databases', blurb: SERVICE_BLURB },
    { icon: 'server', title: 'Website Hosting', blurb: SERVICE_BLURB },
    { icon: 'headset', title: 'File Storage', blurb: SERVICE_BLURB },
    { icon: 'shield', title: 'Forex Trading', blurb: SERVICE_BLURB },
    { icon: 'database', title: 'File Backups', blurb: SERVICE_BLURB },
    { icon: 'settings', title: 'Remote Desktop', blurb: SERVICE_BLURB },
  ] as Service[],
} as const

export type FeatureIcon = 'monitor' | 'smartphone' | 'tablet' | 'pen' | 'printer'

interface Feature {
  icon: FeatureIcon
  title: string
  blurb: string
}

export const FEATURES = {
  heading: 'What Our Software Can Do For You',
  items: [
    { icon: 'monitor', title: 'Responsive Design', blurb: SERVICE_BLURB },
    { icon: 'smartphone', title: 'Android Apps Development', blurb: SERVICE_BLURB },
    { icon: 'tablet', title: 'iOS Apps Development', blurb: SERVICE_BLURB },
    { icon: 'pen', title: 'UX/UI Design', blurb: SERVICE_BLURB },
    { icon: 'printer', title: 'Print Ready Design', blurb: SERVICE_BLURB },
  ] as Feature[],
} as const

interface Counter {
  value: string
  label: string
}

export const COUNTERS = {
  heading: 'We Always Try To Understand Users Expectation',
  items: [
    { value: '1,284', label: 'Download' },
    { value: '120', label: 'Awards Won' },
    { value: '300', label: 'Contributors' },
    { value: '5,620', label: 'Satisfied Customers' },
  ] as Counter[],
} as const

export const CTA = {
  heading: 'Have any question about us?',
  subtext:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
  button: 'Get in Touch',
} as const

interface FaqItem {
  question: string
  answer: string
}

export const FAQ = {
  heading: 'Frequently Asks Questions',
  image: 'https://picsum.photos/seed/nebuly-faq/560/700',
  items: [
    {
      question: 'How to Make an Account?',
      answer:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    },
    {
      question: 'How to manage your Dashboard?',
      answer:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    },
    {
      question: 'How to grow your investments funds?',
      answer:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life one day however a small line of blind text by the name of Lorem Ipsum.',
    },
    {
      question: 'What are those requirements for businesses?',
      answer:
        'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text did not listen.',
    },
  ] as FaqItem[],
} as const

interface Plan {
  name: string
  price: string
  tagline?: string
  features: string[]
}

export const PLANS: Plan[] = [
  {
    name: 'Basic Plan',
    price: '$0',
    tagline: '100% free. Forever',
    features: ['150 GB Bandwidth', '100 GB Storage', '$1.00 / GB Overages'],
  },
  {
    name: 'Advance Plan',
    price: '$19',
    features: ['450 GB Bandwidth', '400 GB Storage', '$2.00 / GB Overages'],
  },
  {
    name: 'Expert Plan',
    price: '$49',
    features: ['250 GB Bandwidth', '200 GB Storage', '$5.00 / GB Overages'],
  },
  {
    name: 'Pro Plan',
    price: '$99',
    features: ['450 GB Bandwidth', '400 GB Storage', '$20.00 / GB Overages'],
  },
]

export const PRICING = {
  heading: 'Our Best Pricing',
  button: 'Choose Plan',
} as const

interface Testimonial {
  quote: string
  name: string
  role: string
}

export const TESTIMONIALS = {
  heading: 'What Users Saying',
  previous: 'Previous testimonial',
  next: 'Next testimonial',
  items: [
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
      name: 'Mark Web',
      role: 'Marketing Manager',
    },
    {
      quote:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      name: 'Lina Fox',
      role: 'Product Designer',
    },
    {
      quote:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life one day however a small line of blind text by the name of Lorem Ipsum.',
      name: 'John Carter',
      role: 'Startup Founder',
    },
  ] as Testimonial[],
} as const

interface Post {
  image: string
  meta: string
  title: string
}

export const BLOG = {
  heading: 'Recent Blog',
  items: [
    {
      image: 'https://picsum.photos/seed/nebuly-blog-1/600/400',
      meta: 'May 17, 2020 · Admin · 3',
      title: 'Everything You Need to Know About Cloud Services',
    },
    {
      image: 'https://picsum.photos/seed/nebuly-blog-2/600/400',
      meta: 'May 16, 2020 · Admin · 5',
      title: 'How to Choose the Right Hosting Plan',
    },
    {
      image: 'https://picsum.photos/seed/nebuly-blog-3/600/400',
      meta: 'May 14, 2020 · Admin · 2',
      title: 'Scaling Your Business With the Cloud',
    },
  ] as Post[],
} as const

export const FOOTER = {
  about:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  socials: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'] as const,
  columns: [
    {
      title: 'Useful Links',
      links: ['Company', 'Pricing', 'Leadership', 'Blog', 'Contact'],
    },
    {
      title: 'Navigational',
      links: ['Join Us', 'Blog', 'Privacy & Policy', 'Terms & Condition'],
    },
    {
      title: 'Office',
      links: [
        '203 Fake St. Mountain View',
        'San Francisco, California, USA',
        '+2 392 3929 210',
        'info@yourdomain.com',
      ],
    },
  ],
  componentDock: 'More templates at Component Dock',
  componentDockHref: 'https://www.componentdock.com/',
  credit: 'This template is made with',
} as const
