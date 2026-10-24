export const brand = {
  name: 'Cargonaut',
  email: 'info@cargonaut.com',
  phone: '1601-609 6780',
  quotePhone: '+10 672 457 356',
  address: ['600/D, Kings road, Green lane', 'NewYork-2563'],
  supportEmail: 'support@cargonaut.com',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Estimate', href: '#estimate' },
  { label: 'Contact', href: '#contact' },
]

export const pagesMenu = ['Service details', 'Elements', 'Blog', 'Single blog']

export type PillarIcon = 'Truck' | 'MonitorSmartphone' | 'Globe2'

export const pillars: { icon: PillarIcon; title: string; description: string }[] = [
  {
    icon: 'Truck',
    title: 'Transportation',
    description:
      'Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.',
  },
  {
    icon: 'MonitorSmartphone',
    title: 'Live Monitoring',
    description:
      'Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.',
  },
  {
    icon: 'Globe2',
    title: 'Worldwide Service',
    description:
      'Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.',
  },
]

export const services = [
  {
    title: 'Ocean Freight',
    description: 'Esteem spirit temper too say adieus who direct esteem.',
    image: 'https://picsum.photos/seed/cargonaut-service-1/640/420',
  },
  {
    title: 'Land Transport',
    description: 'Esteem spirit temper too say adieus who direct esteem.',
    image: 'https://picsum.photos/seed/cargonaut-service-2/640/420',
  },
  {
    title: 'Air Freight',
    description: 'Esteem spirit temper too say adieus who direct esteem.',
    image: 'https://picsum.photos/seed/cargonaut-service-3/640/420',
  },
  {
    title: 'Ocean Freight',
    description: 'Esteem spirit temper too say adieus who direct esteem.',
    image: 'https://picsum.photos/seed/cargonaut-service-4/640/420',
  },
]

export const counters = [
  { value: '42', suffix: '+', label: 'Countries Covered' },
  { value: '97', suffix: '+', label: 'Business Success' },
  { value: '2342', suffix: '', label: 'Happy Client' },
  { value: '3245', suffix: '', label: 'Business Done' },
]

export const reasons = [
  'Apartments frequently or motionless.',
  'Duis aute irure dolor in reprehenderit in voluptate.',
  'Voluptatem quia voluptas sit aspernatur.',
]

export type Testimonial = { quote: string; name: string; role: string }

export const testimonials: [Testimonial, Testimonial, Testimonial] = [
  {
    quote:
      'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices.',
    name: 'Robert Thomson',
    role: 'Business Owner',
  },
  {
    quote:
      'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices.',
    name: 'Robert Thomson',
    role: 'Business Owner',
  },
  {
    quote:
      'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices.',
    name: 'Robert Thomson',
    role: 'Business Owner',
  },
]

export const productTypes = ['small', 'standard', 'high']
export const productSizes = ['M', 'L', 'Xl']
export const cities = ['NewYork', 'Boston', 'Chicago', 'Seattle']

/* Form defaults are named constants, not array indexes, so the state type stays
   `string` under `noUncheckedIndexedAccess`. */
export const defaultProductType = 'standard'
export const defaultProductSize = 'M'
export const defaultDeparture = 'NewYork'
export const defaultDelivery = 'Boston'

export const footerColumns = [
  {
    title: 'Services',
    links: ['Air Transportation', 'Ocean Freight', 'Ocean Cargo', 'Logistics', 'Warehouse Moving'],
  },
  {
    title: 'Company',
    links: ['About', 'News', 'Testimonials', 'Why Us?'],
  },
  {
    title: 'Industries',
    links: ['Chemicals', 'Automotive', 'Consumer Goods', 'Life Science', 'Foreign Trade'],
  },
]
