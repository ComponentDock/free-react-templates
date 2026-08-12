/* Content model for the Altruist template — recreated from the ColorLib
   "Cause" preview (https://preview.colorlib.com/theme/cause/). All photos
   are picsum-seeded placeholders (no ColorLib assets); icons are
   lucide-react (brand social icons are inline SVGs in components/icons). */

export const BRAND = 'Altruist'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export interface Dropdown {
  label: string
  items: NavLink[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Causes', href: '#causes' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export const NAV_DROPDOWNS: Dropdown[] = [
  {
    label: 'Blog',
    items: [
      { label: 'Blog Home', href: '#events' },
      { label: 'Blog Single', href: '#events' },
    ],
  },
  {
    label: 'Pages',
    items: [
      { label: 'Donation', href: '#donation' },
      { label: 'Event Details', href: '#events' },
      { label: 'Elements', href: '#causes' },
    ],
  },
]

export const HERO = {
  headline: 'New way to give back',
  subtext:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  image: 'https://picsum.photos/seed/altruist-2/900/800',
  videoUrl: 'https://www.youtube-nocookie.com/embed/jNQXAC9IVRw',
} as const

export const CAUSES = [
  {
    title: "Help Restoring Uganda's Water Pipelines Construction",
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/altruist-3/700/500',
    progress: 76,
    pledged: '$7,689',
    days: 29,
  },
  {
    title: "Help Restoring Uganda's Water Pipelines Construction",
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/altruist-4/700/500',
    progress: 76,
    pledged: '$7,689',
    days: 29,
  },
  {
    title: "Help Restoring Uganda's Water Pipelines Construction",
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/altruist-5/700/500',
    progress: 76,
    pledged: '$7,689',
    days: 29,
  },
] as const

export interface StatBox {
  value: string
  suffix: string
  year: string
  colorClass: string
}

/* .collection-box h3 stat colors: orange #f9a22b, black, green #61c524,
   purple #a978e0 (color2 is the default black text). */
export const STATS: StatBox[] = [
  { value: '21', suffix: 'M', year: '2015', colorClass: 'text-stat-orange' },
  { value: '15', suffix: 'M', year: '2016', colorClass: 'text-ink' },
  { value: '23', suffix: 'M', year: '2017', colorClass: 'text-accent' },
  { value: '25', suffix: 'M', year: '2018', colorClass: 'text-stat-purple' },
]

export const CONDITION_CHECKLIST = [
  'Consectetur adipisicing elit sed do eiusmod tempor',
  'Ut enim ad minim veniam quis nostrud exercitation',
  'Duis aute irure dolor in reprehenderit in voluptate',
  'Excepteur sint occaecat cupidatat non proident',
]

export const DONATION_BANNER = {
  headline: 'Donate to help People Around the World',
  subtext:
    'Las Vegas has more than 100,000 hotel rooms to choose from. There is a variety of Las Vegas strip casinos and hotels to choose from. Las Vegas has more than 100,000 hotel rooms.',
  image: 'https://picsum.photos/seed/altruist-7/1920/700',
} as const

export const BRAND_LOGOS = ['NOVAPLEX', 'Vertex', 'Orbitly', 'Alterra', 'Boltline'] as const

export const EVENTS = [
  {
    date: '12th September, 2018',
    title: "Help Restoring Uganda's Water Pipelines Construction",
  },
  {
    date: '12th September, 2018',
    title: "Help Restoring Uganda's Water Pipelines Construction",
  },
  {
    date: '12th September, 2018',
    title: "Help Restoring Uganda's Water Pipelines Construction",
  },
] as const

export const CURRENCIES = ['USD', 'EUR', 'GBP'] as const
