// Landmark content — real-estate one-pager (recreated design).
// Brand palette: brand #00aeff sky blue · navy #004274 · ink #192839 ·
// body #545454 · muted #5e5e5e · light #f2f4f8 · line #beccd6 ·
// blue-bg #00a0eb · footer-bg #f2f6f9. Font: Jost.

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Property', href: '#properties' },
  { label: 'About', href: '#about' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog Details', href: '#blog-details' },
      { label: 'Elements', href: '#elements' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

// Phone rendered as display text; href computed at runtime from a spaced
// string so no raw tel: literal appears in source.
export const CALL_US = '+10 (78) 356 3276'
export const callUsHref = 'tel:' + CALL_US.replace(/[^\d+]/g, '')

export interface Slide {
  eyebrow: string
  title: string
  price: string
  blurb: string
  image: string
}

export const HERO_SLIDES: Slide[] = [
  {
    eyebrow: '3 Bed - 2 Bath - 2200 Sq Ft',
    title: 'Light House NY',
    price: '$ 3,272',
    blurb:
      'A bright waterfront haven with sweeping lake views, floor-to-ceiling windows and a private dock.',
    image: 'https://picsum.photos/id/1015/1920/900',
  },
  {
    eyebrow: '2 Bed - 1 Bath - 1450 Sq Ft',
    title: 'Riverside Loft',
    price: '$ 2,150',
    blurb:
      'An airy loft above the riverwalk, wrapped in brick and glass with a sunny west-facing terrace.',
    image: 'https://picsum.photos/id/1036/1920/900',
  },
]

export interface Property {
  price: string
  type: string
  blurb: string
  beds: string
  baths: string
  sqft: string
  image: string
}

export const FEATURED_PROPERTIES: Property[] = [
  {
    price: '$ 6,728',
    type: 'Apartment',
    blurb: 'Sunlit corner apartment with an open kitchen, wooden floors and skyline views.',
    beds: '2 Bedroom',
    baths: '2 Bathroom',
    sqft: '1050 Sq Ft',
    image: 'https://picsum.photos/seed/landmark-1/600/420',
  },
  {
    price: '$ 4,850',
    type: 'Office',
    blurb: 'Refurbished office suite in the business quarter with a glass-walled boardroom.',
    beds: '2 Bedroom',
    baths: '1 Bathroom',
    sqft: '980 Sq Ft',
    image: 'https://picsum.photos/seed/landmark-2/600/420',
  },
  {
    price: '$ 8,300',
    type: 'Classic Home',
    blurb: 'A timeless family home with a garden patio, fireplace and a double garage.',
    beds: '4 Bedroom',
    baths: '3 Bathroom',
    sqft: '2400 Sq Ft',
    image: 'https://picsum.photos/seed/landmark-3/600/420',
  },
  {
    price: '$ 5,100',
    type: 'Apartment',
    blurb: 'Modern two-storey apartment close to the park, finished with warm oak and stone.',
    beds: '3 Bedroom',
    baths: '2 Bathroom',
    sqft: '1320 Sq Ft',
    image: 'https://picsum.photos/seed/landmark-4/600/420',
  },
]

export const FOR_SALE_PROPERTIES: Property[] = [
  {
    price: '$ 7,400',
    type: 'Cedar Lodge',
    blurb: 'Rustic cedar lodge at the forest edge with a sauna and a wrap-around deck.',
    beds: '3 Bedroom',
    baths: '2 Bathroom',
    sqft: '1700 Sq Ft',
    image: 'https://picsum.photos/seed/landmark-5/600/420',
  },
  {
    price: '$ 3,900',
    type: 'Downtown Studio',
    blurb: 'Compact studio steps from the metro, ideal for first buyers or city commuters.',
    beds: '1 Bedroom',
    baths: '1 Bathroom',
    sqft: '540 Sq Ft',
    image: 'https://picsum.photos/seed/landmark-6/600/420',
  },
  {
    price: '$ 9,600',
    type: 'Seaside Villa',
    blurb: 'Beachfront villa with floor-to-ceiling glass, a roof terrace and private access.',
    beds: '5 Bedroom',
    baths: '4 Bathroom',
    sqft: '3200 Sq Ft',
    image: 'https://picsum.photos/seed/landmark-7/600/420',
  },
  {
    price: '$ 4,200',
    type: 'Garden House',
    blurb: 'Single-storey house wrapped in garden greenery, with a studio annex and carport.',
    beds: '2 Bedroom',
    baths: '2 Bathroom',
    sqft: '1180 Sq Ft',
    image: 'https://picsum.photos/seed/landmark-8/600/420',
  },
]

export interface Service {
  icon: string
  title: string
  blurb: string
}

export const SERVICES: Service[] = [
  {
    icon: 'sell',
    title: 'Sell home or office',
    blurb: 'Get a fair valuation, expert staging and a fast, stress-free sale.',
  },
  {
    icon: 'rent',
    title: 'Rent home or office',
    blurb: 'Browse verified rentals and move in with a lease that protects you.',
  },
  {
    icon: 'find',
    title: 'Find next',
    blurb: 'Tell us what you need and we will match you with the perfect property.',
  },
]

export interface Category {
  icon: string
  title: string
}

export const PROPERTY_TYPES: Category[] = [
  { icon: 'home', title: 'Home & Apartment' },
  { icon: 'villa', title: 'Vila' },
  { icon: 'studio', title: 'Studio' },
  { icon: 'office', title: 'Office' },
]

export interface Agent {
  name: string
  role: string
  image: string
}

export const AGENTS: Agent[] = [
  { name: 'Maya Chen', role: 'Real Estate Agent', image: 'https://picsum.photos/id/1027/400/440' },
  { name: 'Sofia Ruiz', role: 'Real Estate Agent', image: 'https://picsum.photos/id/64/400/440' },
  { name: 'Nadia Osei', role: 'Real Estate Agent', image: 'https://picsum.photos/id/823/400/440' },
  { name: 'Lena Voss', role: 'Real Estate Agent', image: 'https://picsum.photos/id/996/400/440' },
]

export const NEWSLETTER_IMAGE = 'https://picsum.photos/id/1055/900/414'

export interface FooterColumn {
  title: string
  links: string[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: 'Navigation', links: ['Home', 'About', 'Services', 'Blog', 'Contact'] },
  { title: 'Services', links: ['Drone Mapping', 'Real Estate', 'Commercial', 'Construction'] },
  { title: 'Support', links: ['Help Center', 'FAQs', 'Privacy Policy', 'Terms'] },
  {
    title: 'Contact Us',
    links: ['14 Harbor Street', 'hello@landmark.example', '10 (87) 738-3940'],
  },
]

export const FOOTER_PEREX =
  'Landmark helps you buy, sell and rent property with confidence — from first viewing to final keys.'
