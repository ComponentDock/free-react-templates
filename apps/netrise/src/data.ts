export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Domain', href: '#domain' },
  { label: 'Hosting', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export interface HeroSlide {
  headline: string
  subheading: string
  blurb: string
}

export const heroSlides: HeroSlide[] = [
  {
    headline: 'Everything you get what you need to Host your website',
    subheading: 'Up to 90% Discount with Free Domain Name Registration',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  },
  {
    headline: 'The Web Hosting Platform Made for You',
    subheading: 'Up to 90% Discount with Free Domain Name Registration',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
]

export const tlds: string[] = ['.com', '.net', '.biz', '.co', '.me']

export const tldPrices: Array<{ tld: string; price: string }> = [
  { tld: '.com', price: '$9.75' },
  { tld: '.net', price: '$9.50' },
  { tld: '.biz', price: '$8.95' },
  { tld: '.co', price: '$7.80' },
  { tld: '.me', price: '$7.95' },
]

export interface Service {
  icon: 'shield-check' | 'shield' | 'headset' | 'cloud' | 'settings' | 'zap' | 'gauge'
  title: string
  blurb: string
}

export const guarantees: Service[] = [
  {
    icon: 'shield-check',
    title: '100% Uptime Guarantee',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'shield',
    title: 'Safe and Secured',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'headset',
    title: 'Our Dedicated Support',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'cloud',
    title: 'Domain Transfer',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'settings',
    title: 'DNS Control',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'zap',
    title: 'Fast Loaded',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
]

export interface Counter {
  value: number
  label: string
}

export const counters: Counter[] = [
  { value: 2000, label: 'CMS Installation' },
  { value: 100, label: 'Awards Won' },
  { value: 32000, label: 'Registered Domains' },
  { value: 31998, label: 'Satisfied Customers' },
]

export interface Plan {
  name: string
  price: string
  tagline: string
  features: string[]
}

export const plans: Plan[] = [
  {
    name: 'Free',
    price: '$ 0',
    tagline: '100% free. Forever',
    features: ['150 GB Bandwidth', '100 GB Storage', '$1.00 per GB Overages', 'All features'],
  },
  {
    name: 'Startup',
    price: '$ 19',
    tagline: 'All features are included',
    features: ['450 GB Bandwidth', '400 GB Storage', '$2.00 per GB Overages', 'All features'],
  },
  {
    name: 'Premium',
    price: '$ 49',
    tagline: 'All features are included',
    features: ['250 GB Bandwidth', '200 GB Storage', '$5.00 per GB Overages', 'All features'],
  },
  {
    name: 'Pro',
    price: '$ 99',
    tagline: 'All features are included',
    features: ['450 GB Bandwidth', '400 GB Storage', '$20.00 per GB Overages', 'All features'],
  },
]

export const whyChooseUs: Service[] = [
  {
    icon: 'cloud',
    title: 'Free Domain Transfer',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'gauge',
    title: 'Unlimited BandWidth',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'shield',
    title: 'Security',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'shield-check',
    title: '99% Uptime',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'settings',
    title: 'Free Website Optimization',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'headset',
    title: '24/7 Tech Support',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Mark Web',
    role: 'Marketing Manager',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Mark Web',
    role: 'Interface Designer',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Mark Web',
    role: 'UI Designer',
  },
  {
    quote:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Mark Web',
    role: 'Web Developer',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    name: 'Mark Web',
    role: 'System Analyst',
  },
]

export interface VpsTab {
  id: string
  label: string
  heading: string
  paragraphs: string[]
}

export const vpsTabs: VpsTab[] = [
  {
    id: 'vps',
    label: 'Next gen VPS',
    heading: 'Next gen VPS hosting',
    paragraphs: [
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    ],
  },
  {
    id: 'performance',
    label: 'Performance',
    heading: 'Performance VPS hosting',
    paragraphs: [
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    ],
  },
  {
    id: 'effectiveness',
    label: 'Effectiveness',
    heading: 'Effective VPS hosting',
    paragraphs: [
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
      'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    ],
  },
]

export interface BlogPost {
  image: string
  meta: string
  title: string
  blurb: string
}

export const blogPosts: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/netrise-blog-1/800/500',
    meta: 'Sep. 20, 2018 · Admin · 3 comments',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/netrise-blog-2/800/500',
    meta: 'Sep. 20, 2018 · Admin · 3 comments',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/netrise-blog-3/800/500',
    meta: 'Sep. 20, 2018 · Admin · 3 comments',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export const clients: string[] = ['hosthub', 'cloudnine', 'uplift', 'webster', 'nebulon']

export const usefulLinks: string[] = [
  'Servers',
  'Windows Hosting',
  'Cloud Hosting',
  'OS Servers',
  'Linux Servers',
  'Policy',
]

export const navigationalLinks: string[] = ['Home', 'Domain', 'Hosting', 'About', 'Blog', 'Contact']

export const officeInfo = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
}
