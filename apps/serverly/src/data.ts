import { Cloud, RotateCcw, ShieldCheck } from 'lucide-react'

export const siteName = 'Serverly'

/* Display phone numbers are intentionally spaced (no literal tel: URIs in
   source — hrefs are computed at runtime in the components). */
export const headerPhone = '652-345 3222 11'
export const footerPhone = '+53 345 7953 32453'
export const footerAddress = '1481 Creekside Lane, Avila Beach, CA 931'
export const footerEmail = 'yourmail@gmail.com'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#why' },
  { label: 'Services', href: '#pricing' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

export const utilityLinks = ['Webmail', 'Chat', 'Login'] as const

export const domainExtensions = ['.com', '.io', '.net'] as const

export const domainPrices = [
  { tld: '.com', price: '$3.99', color: '#005cc3' },
  { tld: '.net', price: '$1.99', color: '#a736df' },
  { tld: '.org', price: '$2.99', color: '#fa9900' },
  { tld: '.io', price: '$3.99', color: '#df36b9' },
  { tld: '.info', price: '$13.99', color: '#242424' },
] as const

export const whyFeatures = [
  {
    title: 'Server Protection',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat.',
    icon: ShieldCheck,
  },
  {
    title: 'CloudFlare Integration',
    text: 'Ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat.',
    icon: Cloud,
  },
  {
    title: '30 Day Money-back',
    text: 'Lorem ipsum dolor sit amet, adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat.',
    icon: RotateCcw,
  },
] as const

export const pricingPlans = [
  {
    name: 'beginner',
    priceWhole: 'Free',
    priceFraction: '',
    period: 'Always',
  },
  {
    name: 'recommended',
    priceWhole: '$29',
    priceFraction: '90',
    period: 'Per Month',
  },
  {
    name: 'professional',
    priceWhole: '$59',
    priceFraction: '90',
    period: 'Per Month',
  },
] as const

export const planFeatures = [
  '2 E-mail Addresses',
  '25 GB Space',
  '24h Live Support',
  'Documentation inside',
  'SEO Plan',
] as const

export const bestService = {
  title: 'Choose the best service',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat volutpat. Sed efficitur diam ut interdum ultricies. In a leo vel dolor tempor feugiat. Cras accumsan faucibus magna a imperdiet. Donec mi neque, pretium eu quam at, facilisis venenatis tortor. Suspendisse potenti.',
  bullets: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Maecenas ornare, arcu at lobortis ultrices, neque erat euismod erat.',
    'Nam pulvinar dapibus justo, ac pharetra neque dictum non.',
  ],
  image: 'https://picsum.photos/seed/serverly-service/570/470',
} as const

export const bestServers = {
  title: 'The best servers',
  items: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat volutpat. Sed efficitur diam ut interdum ultricies.',
    'Dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat volutpat. Sed efficitur diam ut interdum ultricies.',
    'In a leo vel dolor tempor feugiat. Cras accumsan faucibus magna a imperdiet. Donec mi neque, pretium eu quam at, facilisis venenatis tortor. Suspendisse accumsan potenti.',
  ],
  image: 'https://picsum.photos/seed/serverly-servers/570/470',
} as const

export const footerColumns = [
  {
    title: 'Hosting Packages',
    links: [
      'Cloud Hosting',
      'Web Hosting',
      'Reseller Hosting',
      'VPS Hosting',
      'Dedicated Servers',
      'Windows Hosting',
      'Linux Servers',
    ],
  },
  {
    title: 'Our Services',
    links: [
      'Web Design',
      'Logo Design',
      'Domains Register',
      'Search Advertising',
      'Email Marketing',
    ],
  },
  {
    title: 'Useful Links',
    links: ['About Us', 'Testimonials', 'Services', 'News', 'Contact'],
  },
] as const

export const paymentCards = ['VISA', 'Mastercard', 'PayPal', 'Amex', 'Discover'] as const
