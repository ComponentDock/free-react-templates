/** Everything the Gridhost page renders, kept in one typed place. */

export interface NavChild {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
  children?: NavChild[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog', href: '#blog' },
      { label: 'Blog details', href: '#blog-details' },
    ],
  },
  {
    label: 'Pages',
    href: '#pricing',
    children: [{ label: 'Elements', href: '#elements' }],
  },
  { label: 'Contact', href: '#contact' },
]

export const CONTACT = {
  phone: '+1 888 240 1180',
  telHref: 'tel:+18882401180',
  email: 'hello@gridhost.example',
  address: '412 Harbour Street, Sixth Floor, Halifax, NS B3J 1S2',
}

export interface Slide {
  id: string
  headline: string
  subline: string
}

export const SLIDES: Slide[] = [
  {
    id: 'slide-grid',
    headline: 'Hosting that runs on its own grid',
    subline: 'Automated control panel · 50% off your first year · plans from $2.50/month',
  },
  {
    id: 'slide-slice',
    headline: 'Every site gets its own slice of the grid',
    subline: 'Dedicated resources, weekly backups and a one-click staging copy',
  },
  {
    id: 'slide-support',
    headline: 'Support that answers before you refresh',
    subline: 'Engineers on the line around the clock, with a four-hour first response',
  },
]

export interface Service {
  slug: 'shared' | 'reseller' | 'cloud'
  ordinal: string
  title: string
  blurb: string
}

export const SERVICES: Service[] = [
  {
    slug: 'shared',
    ordinal: '.01',
    title: 'Shared hosting',
    blurb: 'Your site on a tuned stack that never lets a noisy neighbour slow you down.',
  },
  {
    slug: 'reseller',
    ordinal: '.02',
    title: 'Reseller hosting',
    blurb: 'White-label the grid, set your own prices and bill your clients from one panel.',
  },
  {
    slug: 'cloud',
    ordinal: '.03',
    title: 'Cloud hosting',
    blurb: 'Scale across regions in a click, with hourly snapshots and no contract to unwind.',
  },
]

export interface TldRow {
  tld: string
  price: string
}

export const TLD_ROWS: TldRow[] = [
  { tld: '.com', price: '$3.99 / year' },
  { tld: '.net', price: '$4.19 / year' },
  { tld: '.co', price: '$5.99 / year' },
  { tld: '.io', price: '$12.99 / year' },
  { tld: '.org', price: '$2.99 / year' },
  { tld: '.live', price: '$1.99 / year' },
]

export const TLD_OPTIONS = ['.com', '.net', '.co', '.io', '.org', '.live', '.dev', '.store']

export interface Plan {
  name: string
  price: string
  period: string
  features: string[]
}

export const PLANS: Record<'monthly' | 'yearly', Plan> = {
  monthly: {
    name: 'Grid plan',
    price: '$ 05.00',
    period: 'per month',
    features: [
      'Site traffic lifted by 50%',
      'Social channels wired up',
      'Ten free optimisation passes',
      'Support at any hour, every day',
    ],
  },
  yearly: {
    name: 'Grid plan, paid yearly',
    price: '$ 50.00',
    period: 'per year, two months free',
    features: [
      'Site traffic lifted by 50%',
      'Social channels wired up',
      'Ten free optimisation passes',
      'Support at any hour, every day',
    ],
  },
}

export interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marta Oduya',
    role: 'Owner, Bright Loom Studio',
    quote:
      'We moved nine client sites onto the grid in a single weekend. Nothing has gone down since, and the panel finally tells me what is actually using the CPU.',
    avatar: 'https://picsum.photos/seed/gridhost-founder-1/160/160',
  },
  {
    name: 'Dana Whitlock',
    role: 'Head of engineering, Parcel Nine',
    quote:
      'The staging copy button alone paid for the plan. Our release notes used to take an afternoon; now they take a coffee.',
    avatar: 'https://picsum.photos/seed/gridhost-founder-2/160/160',
  },
]

export interface Post {
  date: string
  title: string
  image: string
  href: string
}

export const POSTS: Post[] = [
  {
    date: '14 March, 2026',
    title: 'Picking a hosting tier without guessing',
    image: 'https://picsum.photos/seed/gridhost-blog-1/800/600',
    href: '#blog-details',
  },
  {
    date: '02 March, 2026',
    title: 'What a daily backup should really cost',
    image: 'https://picsum.photos/seed/gridhost-blog-2/800/600',
    href: '#blog-details',
  },
  {
    date: '21 February, 2026',
    title: 'Moving a domain without dropping a day',
    image: 'https://picsum.photos/seed/gridhost-blog-3/800/600',
    href: '#blog-details',
  },
]

export const FOOTER_PACKAGES = ['Starter grid', 'Business grid', 'Reseller grid', 'Custom build']

export const FOOTER_LINKS = [
  { label: 'Contact us', href: '#contact' },
  { label: 'About us', href: '#about' },
  { label: 'News & articles', href: '#blog' },
  { label: 'Privacy policy', href: '#privacy' },
]

/** The four social networks the hero rail and the footer rings link to. */
export type BrandName = 'Facebook' | 'X' | 'Instagram' | 'LinkedIn'

export const SOCIAL_LINKS: { label: BrandName; href: string }[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'X', href: 'https://x.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

export const PARTNERS = [
  'Meridian',
  'Northstar',
  'Halcyon',
  'Bluewave',
  'Cobalt',
  'Vertex',
]
