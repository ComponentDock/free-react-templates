export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Agents', href: '#agents' },
  { label: 'Property', href: '#property' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO = {
  price: '$1,570,000',
  headline: 'Beautiful House In Australia',
  address: '156/10 Sapling Street, Harrison, ACT 2914',
  stats: [
    { label: 'Sq Ft.', value: '2911' },
    { label: 'Beds', value: '2' },
    { label: 'Baths', value: '2' },
  ],
  learnMoreLabel: 'Learn More',
} as const

export const FILTER_TABS = ['For Rent', 'For Sale'] as const

export const FILTER_FIELDS = {
  types: ['All Types', 'Townhouses', 'Duplexes', 'Quadplexes', 'Condominiums'],
  bedrooms: ['Any Bedrooms', '0', '1', '2', '3+'],
  bathrooms: ['Any Bathrooms', '0', '1', '2', '3+'],
  minPrice: ['Min Price', '$100', '$200', '$300', '$400'],
  maxPrice: ['Max Price', '$25,000', '$50,000', '$75,000', '$100,000', '$100,000,000'],
} as const

export const SERVICES = [
  {
    title: 'Estate Insurance',
    caption: 'Coverage that protects every listing',
    icon: 'shield',
  },
  {
    title: 'Elegant Bathtub',
    caption: 'Showcase bathrooms buyers love',
    icon: 'bathtub',
  },
  {
    title: 'Fresh Air',
    caption: 'Open, light-filled living spaces',
    icon: 'wind',
  },
  {
    title: 'Estate Calculator',
    caption: 'Instant home value estimates',
    icon: 'calculator',
  },
] as const

export const ABOUT_ROWS = [
  {
    title: 'Mission',
    blurb: 'We match families with the right home through honest advice and deep local knowledge.',
  },
  {
    title: 'Vision',
    blurb: 'A marketplace where every property search ends in the perfect front door.',
  },
] as const

export const PROPERTIES = [
  {
    price: '$570,000',
    seed: 'roost-property-1',
    stats: { sqft: '2911', beds: '2', baths: '2' },
  },
  {
    price: '$1,570,000',
    seed: 'roost-property-2',
    stats: { sqft: '2911', beds: '2', baths: '2' },
  },
  {
    price: '$980,000',
    seed: 'roost-property-3',
    stats: { sqft: '2911', beds: '2', baths: '2' },
  },
] as const

export const PROPERTY_ADDRESS = '156/10 Sapling Street, Harrison, ACT 2914'

export const AGENTS = [
  { name: 'Josh Long', properties: '4 Properties', seed: 'roost-agent-1' },
  { name: 'Melinda David', properties: '10 Properties', seed: 'roost-agent-2' },
  { name: 'Jessica Soft', properties: '18 Properties', seed: 'roost-agent-3' },
] as const

export const TESTIMONIALS = [
  {
    name: 'Josh Long',
    meta: 'Business Man',
    quote:
      'Roost found us our dream home within a week. The team knew the suburb inside out and handled every detail.',
    seed: 'roost-testimonial-1',
  },
  {
    name: 'Jean Doe',
    meta: 'Business Woman',
    quote:
      'Selling through Roost was effortless. Their valuation was spot on and the marketing brought real buyers fast.',
    seed: 'roost-testimonial-2',
  },
  {
    name: 'Jean Doe',
    meta: 'Business Woman',
    quote:
      'From the first viewing to settlement, everything ran like clockwork. I would recommend Roost to anyone.',
    seed: 'roost-testimonial-3',
  },
] as const

export const BLOG_POSTS = [
  {
    title: 'Lorem ipsum dolor sit amet',
    meta: 'July 17, 2019 by Admin',
    excerpt:
      'Perspiciatis quidem harum provident repellat sint officia quos fugit tempora id deleniti.',
    seed: 'roost-blog-1',
  },
  {
    title: 'Consectetur adipiscing elit',
    meta: 'July 17, 2019 by Admin',
    excerpt:
      'Fugit tempora id deleniti perspiciatis quidem harum provident repellat sint officia quos.',
    seed: 'roost-blog-2',
  },
  {
    title: 'Sed do eiusmod tempor',
    meta: 'July 17, 2019 by Admin',
    excerpt:
      'Harum provident repellat sint officia quos fugit tempora id deleniti perspiciatis quidem.',
    seed: 'roost-blog-3',
  },
] as const

export const FOOTER_LINKS = [
  'About Us',
  'Testimonials',
  'Terms of Service',
  'Privacy',
  'Contact Us',
] as const

export const FOOTER = {
  subscribeTitle: 'Subscribe',
  subscribePlaceholder: 'Enter your email',
  sendNowLabel: 'Send Now',
  aboutLinksTitle: 'About Us',
  aboutTitle: 'About',
  aboutBlurb:
    'Roost is a boutique real-estate agency connecting buyers and sellers across Australia with honest advice and local expertise.',
  credit: 'More templates at Component Dock',
} as const

export const SOCIALS = [
  { name: 'Facebook', label: 'Facebook' },
  { name: 'Twitter', label: 'Twitter' },
  { name: 'Instagram', label: 'Instagram' },
] as const
