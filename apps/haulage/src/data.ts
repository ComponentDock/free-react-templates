import { Package, PackageCheck, Plane, Ship, Truck, Warehouse, type LucideIcon } from 'lucide-react'

/* Content model for the Haulage template — recreated from the ColorLib
   "Cargo" preview (https://preview.colorlib.com/theme/cargo/). All photos
   are picsum-seeded placeholders (no ColorLib assets); icons are
   lucide-react (brand social icons are inline SVGs in the components). */

export const BRAND = 'Haulage'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Team', href: '#staff' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const TOP_BAR = {
  email: 'info@yourdomain.com',
  phone: '1+ (234) 5678 9101',
} as const

export const HERO = {
  headline: 'Choose Your Quality Delivery of Your Cargo',
  subtext:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  image: 'https://picsum.photos/seed/haulage-1/1920/780',
} as const

export const SERVICES = [
  {
    title: 'Sea Freight',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/haulage-2/800/500',
  },
  {
    title: 'Air Freight',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/haulage-3/800/500',
  },
  {
    title: 'Package Forwarding',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/haulage-4/800/500',
  },
] as const

export interface Offer {
  icon: LucideIcon
  title: string
  text: string
}

export const OFFERS: Offer[] = [
  {
    icon: Ship,
    title: 'Sea Freight',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Package,
    title: 'Package Forwarding',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Truck,
    title: 'Trucking',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Warehouse,
    title: 'Warehouse',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: PackageCheck,
    title: 'Delivery',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export const ABOUT = {
  image: 'https://picsum.photos/seed/haulage-5/1200/800',
} as const

export const COUNTERS = [
  { value: 50, suffix: '+', caption: 'Years of Experience' },
  { value: 300, suffix: '+', caption: 'Companies' },
  { value: 108, suffix: '+', caption: 'Covered Countries' },
  { value: 1500, suffix: '+', caption: 'Couriers' },
] as const

export const TEAM = [
  {
    name: 'Max Carlson',
    role: 'Co-Founder',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    image: 'https://picsum.photos/seed/haulage-7/400/400',
  },
  {
    name: 'Charlotte Pilat',
    role: 'Co-Founder',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    image: 'https://picsum.photos/seed/haulage-8/400/400',
  },
  {
    name: 'Nicole Lewis',
    role: 'Co-Founder',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    image: 'https://picsum.photos/seed/haulage-9/400/400',
  },
  {
    name: 'Jean Smith',
    role: 'Financial Manager',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    image: 'https://picsum.photos/seed/haulage-10/400/400',
  },
  {
    name: 'Bob Carry',
    role: 'Loader Manager',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    image: 'https://picsum.photos/seed/haulage-11/400/400',
  },
  {
    name: 'Anne Fisher',
    role: 'Package Manager',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    image: 'https://picsum.photos/seed/haulage-12/400/400',
  },
] as const

export const PRICING = [
  {
    plan: 'Basic',
    price: '$47',
    label: '/year',
    features: [
      'Officia quaerat eaque neque',
      'Possimus aut consequuntur incidunt',
      'Lorem ipsum dolor sit amet',
      'Consectetur adipisicing elit',
    ],
  },
  {
    plan: 'Premium',
    price: '$200',
    label: '/year',
    features: [
      'Officia quaerat eaque neque',
      'Possimus aut consequuntur incidunt',
      'Lorem ipsum dolor sit amet',
      'Consectetur adipisicing elit',
    ],
  },
  {
    plan: 'Professional',
    price: '$750',
    label: '/year',
    features: [
      'Officia quaerat eaque neque',
      'Possimus aut consequuntur incidunt',
      'Lorem ipsum dolor sit amet',
      'Consectetur adipisicing elit',
    ],
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'Can I accept both Paypal and Stripe?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    question: 'What available is refund period?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    question: 'Where are you from?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    question: 'What is your opening time?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    question: 'Can I accept both Paypal and Stripe?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    question: 'What available is refund period?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    question: 'Can I accept both Paypal and Stripe?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    question: 'What available is refund period?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
] as const

export const WHY_US = [
  'Cargo express',
  'Secure Services',
  'Secure Warehouseing',
  'Cost savings',
  'Proven by great companies',
] as const

export const WHY_US_IMAGE = 'https://picsum.photos/seed/haulage-6/900/700'

export const TESTIMONIALS = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    name: 'Ricky Fisher',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    name: 'Ken Davis',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    name: 'Mellisa Griffin',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    name: 'Robert Steward',
  },
] as const

export const ARTICLES = [
  {
    meta: 'Apr 19, 2019',
    title: 'Knowing the Difference Is Key to Effective Logistics',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/haulage-13/150/150',
  },
  {
    meta: 'Apr 19, 2019',
    title: 'Why Your Supply Chain Needs a Digital Upgrade',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/haulage-14/150/150',
  },
] as const

/* Contact info is plain label + value text in the source demo (no links). */
export const CONTACT_INFO = [
  { label: 'Address', value: '34 Street Name, City Name Here, United States' },
  { label: 'Phone', value: '+1 242 4942 290' },
  { label: 'Email', value: 'info@yourdomain.com' },
] as const

/* Footer columns: About Us carries only a blurb; the Features column holds
   the five link list (per the source's footer markup). */
export const FOOTER_FEATURE_LINKS = [
  'About Us',
  'Testimonials',
  'Terms of Service',
  'Privacy',
  'Contact Us',
] as const
