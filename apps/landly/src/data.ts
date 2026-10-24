export const siteName = 'Landly'
export const pageTitle = 'Landly — Real Estate Template'
export const skipLabel = 'Skip to content'
export const menuToggleLabel = 'Toggle menu'

export const creditHref = 'https://www.componentdock.com/'
export const creditLabel = 'Component Dock'

export const year = new Date().getFullYear()
export const copyrightLead = `© ${year} ${siteName}. All rights reserved. More templates at`

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Agents', href: '#agents' },
  { label: 'Property', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const image = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/landly-${seed}/${w}/${h}`

export const heroContent = {
  price: '$1,570,000',
  headline: 'Beautiful House In Australia',
  address: '156/10 Sapling Street, Harrison, ACT 2914',
  cta: 'Learn More',
} as const

export const heroSpecs = [
  { icon: 'area', value: '2911 Sq Ft.' },
  { icon: 'beds', value: '2' },
  { icon: 'baths', value: '2' },
] as const

export const filterTabs = [
  { id: 'rent', label: 'For Rent' },
  { id: 'sale', label: 'For Sale' },
] as const

export const propertyTypes = [
  'All Types',
  'Townhouses',
  'Duplexes',
  'Quadplexes',
  'Condominiums',
] as const

export const bedroomOptions = ['Any Bedrooms', '0', '1', '2', '3+'] as const
export const bathroomOptions = ['Any Bathrooms', '0', '1', '2', '3+'] as const
export const minPrices = ['Min Price', '$100', '$200', '$300', '$400'] as const
export const maxPrices = [
  'Max Price',
  '$25,000',
  '$50,000',
  '$75,000',
  '$100,000',
  '$100,000,000',
] as const

export const filterSubmit = 'Submit'

export const searchLabels = {
  type: 'Property type',
  title: 'Title',
  address: 'Address',
  bedrooms: 'Bedrooms',
  bathrooms: 'Bathrooms',
  minPrice: 'Minimum price',
  maxPrice: 'Maximum price',
} as const

export const services = [
  { icon: 'insurance', title: 'Estate Insurance' },
  { icon: 'bathtub', title: 'Elegant Bathtub' },
  { icon: 'air', title: 'Fresh Air' },
  { icon: 'calculator', title: 'Estate Calculator' },
] as const

export const serviceSubtitle = 'Estate Management'

export const about = {
  heading: 'About Us',
  intro: 'Perspiciatis quidem harum provident repellat sint.',
  rows: [
    {
      icon: 'mission',
      title: 'Mission',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rem sit dolorem saepe ex voluptatum nam nulla et!',
    },
    {
      icon: 'vission',
      title: 'Vission',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rem sit dolorem saepe ex voluptatum nam nulla et!',
    },
  ],
} as const

export const propertiesHeading = 'Latest Properties'
export const propertiesSubtext =
  'Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti.'
export const propertySpecs = [
  { icon: 'area', value: '2911 Sq Ft.' },
  { icon: 'beds', value: '2.' },
  { icon: 'baths', value: '2' },
] as const
export const propertyAddress = '156/10 Sapling Street, Harrison, ACT 2914'

export const properties = [
  { price: '$570,000', seed: 'property-1' },
  { price: '$1,570,000', seed: 'property-2' },
  { price: '$980,000', seed: 'property-3' },
] as const

export const propertyLoop = [...properties, ...properties]

export const agentsHeading = 'Our Agents'
export const agents = [
  { name: 'Josh Long', count: '4 Properties', seed: 'agent-1' },
  { name: 'Melinda David', count: '10 Properties', seed: 'agent-2' },
  { name: 'Jessica Soft', count: '18 Properties', seed: 'agent-3' },
] as const

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
] as const

export const testimonials = [
  {
    role: 'Business Man',
    name: 'Josh Long',
    seed: 'person-1',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sapiente unde pariatur id, hic quos nihil nulla veritatis!',
  },
  {
    role: 'Business Woman',
    name: 'Jean Doe',
    seed: 'person-2',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sapiente unde pariatur id, hic quos nihil nulla veritatis!',
  },
  {
    role: 'Business Woman',
    name: 'Jean Doe',
    seed: 'person-3',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sapiente unde pariatur id, hic quos nihil nulla veritatis!',
  },
] as const

export const testimonialStars = 4

export const blogHeading = 'Blog Posts'
export const posts = [
  {
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2019',
    author: 'Admin',
    seed: 'post-1',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2019',
    author: 'Admin',
    seed: 'post-2',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2019',
    author: 'Admin',
    seed: 'post-3',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
  },
] as const

export const newsletterHeading = 'Subscribe'
export const newsletterPlaceholder = 'Enter your email'
export const newsletterCta = 'Send Now'
export const newsletterError = 'Please enter a valid email address.'
export const newsletterSuccess = 'Thanks — you are subscribed.'
export const newsletterLabel = 'Email address'

export const quickLinksHeading = 'Quick Links'
export const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Contact Us', href: '#contact' },
] as const

export const footerAboutHeading = 'About'
export const footerAboutBody =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolores deserunt, obcaecati fuga quo. Autem explicabo sapiente, maiores.'
