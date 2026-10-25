/** Copy and content inventory for the Dockyard freight template. */
import {
  Bike,
  Package,
  Plane,
  Ship,
  Truck,
  Warehouse,
  type LucideIcon,
} from 'lucide-react'

export const siteName = 'Dockyard'

export const siteBlurb =
  'A freight forwarder moving pallets, containers and time-critical parts between four continents — booked, tracked and cleared by one team.'

export const attribution = { label: 'Component Dock', href: 'https://www.componentdock.com/' }

export const contacts = {
  email: 'dispatch@dockyard-freight.test',
  phone: '+1 (214) 555-0182',
}

export interface SocialLink {
  network: string
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { network: 'Twitter', label: 'Dockyard on Twitter', href: '#home' },
  { network: 'Facebook', label: 'Dockyard on Facebook', href: '#home' },
]

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
]

export const hero = {
  title: 'Transportation & Logistics',
  subline:
    'One dispatch desk for sea, air and road freight — with a tracking number that answers in seconds, not shifts.',
  placeholder: 'Your tracking number',
  cta: 'Track Now',
  image: 'https://picsum.photos/seed/dockyard-port-4/1800/1200',
}

export interface PhotoCard {
  title: string
  blurb: string
  src: string
}

export const photoTrio: PhotoCard[] = [
  {
    title: 'Truck Insurance',
    blurb: 'Cargo cover written per load, so a damaged pallet never becomes a lost quarter.',
    src: 'https://picsum.photos/seed/dockyard-hero-2/800/500',
  },
  {
    title: 'Plane Transportation',
    blurb: 'Charter and consolidated air capacity for parts that cannot wait for a sailing.',
    src: 'https://picsum.photos/seed/dockyard-forklift/800/500',
  },
  {
    title: 'Sea & Air Freight',
    blurb: 'Split a shipment across water and sky, then rejoin it at the destination hub.',
    src: 'https://picsum.photos/seed/container-9/800/500',
  },
]

export interface Service {
  icon: LucideIcon
  title: string
  blurb: string
}

export const services: Service[] = [
  {
    icon: Ship,
    title: 'Sea Freight',
    blurb: 'Full and part container loads on fixed weekly sailings from three coasts.',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    blurb: 'Next-flight-out and consolidated air cargo with customs pre-clearance.',
  },
  {
    icon: Package,
    title: 'Package Forwarding',
    blurb: 'A single receiving address that re-packs and re-labels for any market.',
  },
  {
    icon: Truck,
    title: 'Trucking',
    blurb: 'Regional line-haul and last-mile teams with live proof of delivery.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    blurb: 'Bonded racking, pick-and-pack and short-term overflow space by the pallet.',
  },
  {
    icon: Bike,
    title: 'Delivery',
    blurb: 'Same-day courier runs inside the metro ring, dispatched from our own dock.',
  },
]

export interface Counter {
  value: number
  caption: string
}

export const counters: Counter[] = [
  { value: 19, caption: 'Years in service' },
  { value: 2332, caption: 'Employees' },
  { value: 231, caption: 'Covered countries' },
  { value: 827, caption: 'Couriers' },
]

export interface StaffMember {
  name: string
  role: string
  blurb: string
  avatar: string
}

export const staff: StaffMember[] = [
  {
    name: 'Max Carlson',
    role: 'Head of Ocean Freight',
    blurb: 'Books the sailings and argues the demurrage clock down to the hour.',
    avatar: 'https://picsum.photos/seed/dockyard-staff-1/400/400',
  },
  {
    name: 'Charlotte Pilat',
    role: 'Customs Manager',
    blurb: 'Keeps declarations clean so a container clears before the yard charges rent.',
    avatar: 'https://picsum.photos/seed/dockyard-staff-2/400/400',
  },
  {
    name: 'Nicole Lewis',
    role: 'Client Dispatch Lead',
    blurb: 'Answers the tracking line and owns every exception until it closes.',
    avatar: 'https://picsum.photos/seed/dockyard-staff-3/400/400',
  },
]

export interface PricingFeature {
  label: string
  included: boolean
}

export interface PricingTier {
  name: string
  price: number
  features: PricingFeature[]
  featured: boolean
}

const included = (label: string): PricingFeature => ({ label, included: true })
const excluded = (label: string): PricingFeature => ({ label, included: false })

export const pricing: PricingTier[] = [
  {
    name: 'Basic',
    price: 47,
    featured: false,
    features: [
      included('Two sea consignments a month'),
      included('Shared warehouse racking'),
      excluded('Dedicated account dispatcher'),
      excluded('Customs pre-clearance desk'),
      excluded('Named-courier last mile'),
    ],
  },
  {
    name: 'Premium',
    price: 200,
    featured: true,
    features: [
      included('Unlimited sea and air consignments'),
      included('Bonded warehouse racking'),
      included('Dedicated account dispatcher'),
      excluded('Customs pre-clearance desk'),
      excluded('Named-courier last mile'),
    ],
  },
  {
    name: 'Professional',
    price: 750,
    featured: false,
    features: [
      included('Unlimited multimodal consignments'),
      included('Bonded warehouse and cross-dock bays'),
      included('Dedicated account dispatcher'),
      included('Customs pre-clearance desk'),
      excluded('Named-courier last mile'),
    ],
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'Which freight modes can I book in one consignment?',
    answer: 'Sea, air and road legs can share one waybill; we split and rejoin the load at our hub.',
  },
  {
    question: 'How often does the tracking number update?',
    answer: 'Every scan posts within five minutes, and the desk calls when a milestone slips.',
  },
  {
    question: 'Do you hold stock in a bonded warehouse?',
    answer: 'Yes — racking and cross-dock bays are available by the pallet, bonded or duty-paid.',
  },
  {
    question: 'Is cargo insurance included in the rate?',
    answer: 'Cover is quoted per load, so you pay for the value you declare and nothing above it.',
  },
  {
    question: 'What is the daily cut-off for next-day despatch?',
    answer: 'Road freight closes at 16:00, air at 18:00, and sea bookings two days before sailing.',
  },
  {
    question: 'Who files the customs declaration?',
    answer: 'Our in-house brokers file it, answer the queries and hand back the cleared entry.',
  },
  {
    question: 'How is the price of a shipment calculated?',
    answer: 'Chargeable weight, mode and distance set the rate; storage and duties are itemised apart.',
  },
  {
    question: 'Which countries are covered?',
    answer: '231 destinations across Europe, the Americas, Asia and the Gulf, plus inland onward legs.',
  },
]

export const why = {
  title: 'Why Dockyard',
  blurb:
    'Freight only feels simple when one team owns the whole chain, from the first pickup scan to the signed delivery note.',
  items: [
    'Cargo express handling on every priority lane',
    'Secure services audited against the insurer checklist',
    'Secure warehousing with bonded and duty-paid zones',
    'Cost savings from consolidated sailings and backhauls',
    'Proven by great companies across four continents',
  ],
  image: 'https://picsum.photos/seed/dockyard-truck/1110/1036',
}

export interface Testimonial {
  quote: string
  name: string
  portrait: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Our seasonal stock used to sit in customs for a week. Dockyard pre-cleared it and the pallets were on our racks the morning the vessel berthed.',
    name: 'Ricky Fisher',
    portrait: 'https://picsum.photos/seed/dockyard-client-1/120/120',
  },
  {
    quote:
      'They move machine parts for us every week and the tracking line has never once told me to call back later. That is the whole product, honestly.',
    name: 'Ken Davis',
    portrait: 'https://picsum.photos/seed/dockyard-client-2/120/120',
  },
  {
    quote:
      'A container arrived with two crushed pallets. The claim was filed, surveyed and settled inside the same month, without a single chasing email.',
    name: 'Mellisa Griffin',
    portrait: 'https://picsum.photos/seed/dockyard-client-3/120/120',
  },
  {
    quote:
      'We split one order across sea and air to hit a launch date, and Dockyard rejoined it at the hub exactly as quoted. Nothing went missing.',
    name: 'Robert Steward',
    portrait: 'https://picsum.photos/seed/dockyard-client-4/120/120',
  },
]

export interface Article {
  title: string
  date: string
  excerpt: string
  image: string
}

export const articles: Article[] = [
  {
    title: 'Knowing the Difference Is Key to Effective Logistics',
    date: 'Apr 19, 2024',
    excerpt:
      'Consolidation and charter look alike on an invoice and behave nothing alike on a quay. Here is how to pick between them.',
    image: 'https://picsum.photos/seed/dockyard-article-1/1040/650',
  },
  {
    title: 'Five Checks Before You Book a Peak-Season Sailing',
    date: 'May 06, 2024',
    excerpt:
      'Space, cut-off, demurrage terms, insurance and the onward road leg — the five numbers that decide a peak booking.',
    image: 'https://picsum.photos/seed/dockyard-article-2/1040/650',
  },
]

export const about = {
  heading: 'About Us',
  blurb:
    'Dockyard started with two trucks and one shared quay slot. Nineteen years later the same desk still answers the phone.',
  videoPoster: 'https://picsum.photos/seed/dockyard-vessel/1900/1239',
}

export const contact = {
  heading: 'Contact Us',
  blurb: 'Tell us what moves, where it starts and when it has to land. The desk replies the same day.',
}

export const footer = {
  aboutHeading: 'About Us',
  featuresHeading: 'Features',
  newsletterHeading: 'Subscribe to Newsletter',
  followHeading: 'Follow Us',
  features: [
    { label: 'Track a shipment', href: '#home' },
    { label: 'Sea freight', href: '#services' },
    { label: 'Air freight', href: '#services' },
    { label: 'Warehousing', href: '#services' },
    { label: 'Contact the desk', href: '#contact' },
  ],
  socials: [
    { network: 'Twitter', label: 'Dockyard on Twitter', href: '#home' },
    { network: 'Facebook', label: 'Dockyard on Facebook', href: '#home' },
    { network: 'Instagram', label: 'Dockyard on Instagram', href: '#home' },
    { network: 'Linkedin', label: 'Dockyard on LinkedIn', href: '#home' },
  ],
}
