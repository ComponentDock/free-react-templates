import {
  ClipboardCheck,
  Globe,
  Plane,
  Route,
  Ship,
  Train,
  Users,
  Warehouse,
  Wallet,
  ShieldCheck,
  Truck,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  {
    label: 'Pages',
    href: '#pages',
    dropdown: ['About', 'Services Details', 'Blog Details'],
  },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacts', href: '#contacts' },
] as const

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
] as const

export const SERVICES = [
  {
    title: 'Air Freight',
    blurb:
      'Time-critical air cargo with priority handling and door-to-door tracking across every major trade lane.',
    Icon: Plane,
    seed: 'drayage-service-1',
  },
  {
    title: 'Ship Freight',
    blurb:
      'FCL and LCL ocean freight with reliable sailing schedules and full customs documentation support.',
    Icon: Ship,
    seed: 'drayage-service-2',
  },
  {
    title: 'Railway Logistics',
    blurb:
      'Cost-effective intermodal rail corridors that keep long-haul freight moving on predictable transit times.',
    Icon: Train,
    seed: 'drayage-service-3',
  },
  {
    title: 'Ware Housing',
    blurb:
      'Bonded and ambient warehousing with inventory visibility, pick-and-pack, and same-day distribution.',
    Icon: Warehouse,
    seed: 'drayage-service-4',
  },
] as const

export const COUNTERS = [
  {
    value: 9123,
    suffix: '',
    label: 'Employees in Team',
    blurb: 'Trained dispatchers, planners, and drivers powering every shipment.',
    Icon: Users,
  },
  {
    value: 70102,
    suffix: 'km',
    label: 'Kilometer Travel Weekly',
    blurb: 'Covered by our vetted carrier network, week in and week out.',
    Icon: Route,
  },
  {
    value: 1254,
    suffix: '',
    label: 'Worldwide Clients',
    blurb: 'Shippers and brokers who trust us with their freight every day.',
    Icon: Globe,
  },
  {
    value: 20254,
    suffix: '',
    label: 'Projects Done',
    blurb: 'From single pallets to full truckloads, delivered on schedule.',
    Icon: ClipboardCheck,
  },
] as const

export const BENEFITS = [
  {
    title: 'Warehouse Storage',
    blurb:
      'Order tendering is the first stage of a smooth move — our storage network keeps freight staged and ready.',
    Icon: Warehouse,
  },
  {
    title: 'Security Cargo',
    blurb:
      'While your freight is in transit, our team tracks every load and keeps every carrier accountable.',
    Icon: ShieldCheck,
  },
  {
    title: 'Easy Payment',
    blurb:
      'After tendering the load, transparent invoicing and flexible payment terms keep cash flow simple.',
    Icon: Wallet,
  },
  {
    title: 'Fast Delivery',
    blurb:
      'Carriers agree to spot or drop trailers so your freight moves the moment it is ready to roll.',
    Icon: Truck,
  },
] as const

export const PROJECTS = [
  {
    title: 'Freight Carrier',
    blurb: 'A nationwide carrier onboarding program with real-time capacity matching.',
    seed: 'drayage-project-1',
  },
  {
    title: 'Freight Forwarder',
    blurb: 'End-to-end forwarding for a retail importer, from port pick-up to final mile.',
    seed: 'drayage-project-2',
  },
  {
    title: 'Import-Export',
    blurb: 'Customs-cleared cross-border logistics for a growing manufacturer.',
    seed: 'drayage-project-3',
  },
  {
    title: 'Agricultural Truck',
    blurb: 'Seasonal harvest haulage with refrigerated capacity on demand.',
    seed: 'drayage-project-4',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'Drayage rebuilt our inbound logistics in six weeks. Transit times dropped, and for the first time we can see every load on one dashboard.',
    name: 'Eric Carson',
    role: 'CEO Of Drayage',
    seed: 'drayage-avatar-1',
  },
  {
    quote:
      'From port pick-up to final delivery, their dispatch team treats our freight like their own. The call-back form got us a quote the same morning.',
    name: 'Steve Smith',
    role: 'Operations Director',
    seed: 'drayage-avatar-2',
  },
] as const

export const NEWS = [
  {
    title: 'Expert tips for managing peak-season freight demand',
    meta: 'by Ryan Casey · May 2, 2020 · 20 Comments',
    excerpt:
      'Peak season does not have to mean chaos. Disciplined tendering and carrier scorecards keep freight moving when capacity tightens.',
    seed: 'drayage-news-1',
  },
  {
    title: 'How intermodal rail cuts cost on long-haul lanes',
    meta: 'by Ryan Casey · April 18, 2020 · 14 Comments',
    excerpt:
      'Rail beats truck on cost per mile for steady, high-volume lanes. Here is how to decide which freight belongs on the train.',
    seed: 'drayage-news-2',
  },
  {
    title: 'Warehouse staging: the hidden key to on-time deliveries',
    meta: 'by Ryan Casey · March 30, 2020 · 9 Comments',
    excerpt:
      'Most late deliveries are lost in the warehouse, not on the road. Better staging discipline starts with the tender process.',
    seed: 'drayage-news-3',
  },
] as const

export const FOOTER_QUICK_LINKS = ['History', 'Our Staff', 'Our Partners', 'Blog'] as const

export const FOOTER_SERVICE_LINKS = [
  'Air Shipping',
  'Expert Staff',
  'Ground Shipping',
  'Logistic Services',
] as const
