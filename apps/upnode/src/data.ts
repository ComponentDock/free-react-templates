export const topBar = {
  phone: 'Call Us: 001-1234-88888',
  email: 'Email: info.cololib@gmail.com',
  login: 'Login / Register',
  language: 'English',
}

export const brandName = 'Upnode'

export const navLinks = [
  { label: 'Home', href: '#home', active: true },
  {
    label: 'Hosting',
    href: '#plans',
    children: ['Home', 'Hosting', 'About', 'Blog', 'Blog Details', '404', 'Coming Soon'],
  },
  {
    label: 'Pages',
    href: '#features',
    children: ['Dropdown Item 1', 'Dropdown Item 2', 'Dropdown Item 3'],
  },
  { label: 'About', href: '#features' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const heroSlides = [
  {
    title: 'The Best Web Hosting',
    oldPrice: '$7.99',
    price: '$2.95/month*',
    text: 'Everything you will EVER need to Host and Manage your Website!',
    photo: 'https://picsum.photos/seed/upnode-hero/640/480',
    alt: '',
  },
  {
    title: 'The Best Web Hosting',
    oldPrice: '$7.99',
    price: '$2.95/month*',
    text: 'Everything you will EVER need to Host and Manage your Website!',
    photo: 'https://picsum.photos/seed/upnode-hero-2/640/480',
    alt: '',
  },
]

export const heroCtaLabels = {
  start: 'Get Start Now!',
  chat: 'Live Chat',
}

export const domainSection = {
  title: 'Find Your Perfect Domain Name',
  sub: 'Only $7 for the first year',
  inputPlaceholder: 'Enter Your Domain Name Here',
  inputLabel: 'Domain name',
  extensionLabel: 'Domain extension',
  searchLabel: 'Search Domain',
  emptyDomainMessage: 'Please enter a domain name.',
  invalidDomainMessage: 'Please enter a valid domain name.',
}

export const domainPrices = [
  { extension: '.COM', price: '$5.75' },
  { extension: '.NET', price: '$9.45' },
  { extension: '.ORG', price: '$7.50' },
  { extension: '.US', price: '$5.99' },
  { extension: '.BIZ', price: '$9.99' },
  { extension: '.CO', price: '$6.00' },
]

export const extensions = ['.COM', '.NET', '.ORG', '.US', '.BIZ', '.CO']

export const featuresSection = {
  title: 'Overall Features',
  text: 'Our revolutionary Cloud solution is powerful, simple, and surprisingly affordable.',
}

export const features = [
  {
    title: 'Auto Updates',
    icon: 'refresh',
    text: "Don't be distracted by criticism. Remember the only taste of success some people.",
  },
  {
    title: 'Optimized Software',
    icon: 'server',
    text: "Don't be distracted by criticism. Remember the only taste of success some people.",
  },
  {
    title: 'Daily Backups',
    icon: 'database',
    text: "Don't be distracted by criticism. Remember the only taste of success some people.",
  },
  {
    title: 'Wide Networking',
    icon: 'network',
    text: "Don't be distracted by criticism. Remember the only taste of success some people.",
  },
  {
    title: 'Protected',
    icon: 'shield',
    text: "Don't be distracted by criticism. Remember the only taste of success some people.",
  },
  {
    title: 'Free Support',
    icon: 'headphones',
    text: "Don't be distracted by criticism. Remember the only taste of success some people.",
  },
] as const

export const plansSection = {
  title: 'Choose Your Web Hosting Plan',
  text: 'You want custom hosting plan. No hidden charge.',
}

export const planFeatures = [
  'Unlimited Number of Websites',
  'Unlimited Email Accounts',
  'Unlimited Bandwidth',
  '2X Processing Power & Memory',
]

export const plans = [
  { name: 'Standard Hosting', sale: 'On sale - Save 50%', price: '1.99', best: false },
  { name: 'Advanced Hosting', sale: 'On sale - Save 70%', price: '3.99', best: true },
  { name: 'Unlimited Hosting', sale: 'On sale - Save 85%', price: '7.99', best: false },
] as const

export const planLabels = {
  getStarted: 'Get Started',
  viewAll: 'Click here to see all features',
  perMonth: '/per month',
  bestPlan: 'Best Plan',
}

export const discountSection = {
  title: 'Up to 70% Discount with FREE Domain Name Registration Included!',
  button: 'Get Started',
}

export const discountItems = [
  'FREE Domain Name',
  'FREE Email Address',
  'Plenty of Disk Space',
  'FREE Website Builder',
  'FREE Marketing Tools',
  '1-Click WordPress Install',
]

export const supportSection = {
  title: 'Need help? Call our award-winning support team 24/7:',
  phone: '+65 1234-6868',
  chat: 'Live Chat',
}

export const statsSection = {
  title: 'Proudly Hosting Over',
  highlight: '800,000',
  suffix: 'Websites Since 2000',
  button: 'Get Started',
}

export const footerColumns = [
  {
    title: 'Products',
    links: [
      'Shared Hosting',
      'WordPress Hosting',
      'VPS Hosting',
      'Dedicated Hosting',
      'Reseller Hosting',
      'Hosting Features',
    ],
  },
  {
    title: 'Programs',
    links: [
      'WordPress',
      'Affiliates',
      'Marketing Services',
      'WordPress Guide',
      'Testimonials',
      'Awards & Reviews',
    ],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact', 'Terms Of Service', 'Privacy Policy', 'Blog'],
  },
]

export const newsletter = {
  title: 'Subscribe Newsletter',
  text: 'Subscribe to our email newsletter for useful tips and valuable resources.',
  inputLabel: 'Your Mail',
  placeholder: 'Your Mail',
  buttonLabel: 'Subscribe',
  emptyMessage: 'Please enter your email address.',
  invalidMessage: 'Please enter a valid email address.',
  successMessage: 'Thanks for subscribing!',
}

export const socials = [
  { name: 'Facebook', href: 'https://facebook.com' },
  { name: 'Twitter', href: 'https://twitter.com' },
  { name: 'Google', href: 'https://google.com' },
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'YouTube', href: 'https://youtube.com' },
]

export const payments = ['VISA', 'MasterCard', 'PayPal', 'Discover', 'Amex']

export const componentDockUrl = 'https://www.componentdock.com/'
export const componentDockLabel = 'More templates at Component Dock'
export const copyright = 'Copyright © 2026 All rights reserved'
