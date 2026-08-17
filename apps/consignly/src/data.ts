// Consignly — page content model. Brand palette: navy #081158 primary,
// hero navy #070d59, accent cyan #00eaff, soft cyan #29eafd, ink #212529,
// muted #6c757d, label #adb5bd, surface #f8f9fa, footer #efefef.
// Fonts: Montserrat (headings) + Open Sans (body).

export const BRAND = 'Consignly'

interface NavChild {
  label: string
  href: string
  children?: NavChild[]
}

export interface NavLink {
  label: string
  href: string
  active?: boolean
  children?: NavChild[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  {
    label: 'Dropdown',
    href: '#services',
    children: [
      { label: 'Menu One', href: '#services' },
      {
        label: 'Menu Two',
        href: '#services',
        children: [
          { label: 'Sub Menu One', href: '#services' },
          { label: 'Sub Menu Two', href: '#services' },
          { label: 'Sub Menu Three', href: '#services' },
        ],
      },
      { label: 'Menu Three', href: '#services' },
    ],
  },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

export const HERO = {
  headline: 'Find logistic services',
  lead: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  searchPlaceholder: 'Your ZIP code or City. e.g. New York',
  searchLabel: 'Search',
}

export interface Stat {
  value: number
  label: string
}

export const STATS: Stat[] = [
  { value: 2917, label: '# of Companies' },
  { value: 3918, label: '# of Road Freight' },
  { value: 38928, label: '# of Air Freight' },
  { value: 7192, label: '# of Sea Freight' },
]

export type ServiceIcon = 'plane' | 'ship' | 'truck'

export interface Service {
  icon: ServiceIcon
  heading: string
  text: string
}

export const SERVICES: Service[] = [
  {
    icon: 'plane',
    heading: 'Air Freight',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'ship',
    heading: 'Sea Freight',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'truck',
    heading: 'Land Freight',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

interface AboutFeature {
  icon: AboutIcon
  heading: string
  text: string
}

export const ABOUT = {
  subheading: 'Mission',
  heading: 'About Us',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  videoImage: 'https://picsum.photos/seed/consignly-1/800/600',
  videoTitle: 'A tour inside our logistics hub',
  features: [
    {
      icon: 'plane',
      heading: 'Air Freight',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'ship',
      heading: 'Sea Freight',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ] satisfies AboutFeature[],
}

export type AboutIcon = 'plane' | 'ship'

export const VIDEO_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

export const CTA = {
  heading: 'Delivering Results for Industry Leaders',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  buttonLabel: 'Get started',
  image: 'https://picsum.photos/seed/consignly-2/1600/900',
}

export interface Testimonial {
  image: string
  quote: string
  author: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    image: 'https://picsum.photos/seed/consignly-3/160/160',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'John Doe',
    role: 'CEO, Founder',
  },
  {
    image: 'https://picsum.photos/seed/consignly-4/160/160',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'James Woodland',
    role: 'Designer at Facebook',
  },
  {
    image: 'https://picsum.photos/seed/consignly-5/160/160',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'Rob Smith',
    role: 'Product Designer at Twitter',
  },
]

export interface AccordionItem {
  title: string
  body: string
}

export const ACCORDION_ITEMS: AccordionItem[] = [
  {
    title: 'Easily Find Logistics',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Delivering Results for Industry Leaders',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Fast and Secure Transportation',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export interface BlogPost {
  image: string
  date: string
  title: string
  excerpt: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/consignly-6/600/400',
    date: 'Aug 20, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/consignly-7/600/400',
    date: 'Aug 20, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/consignly-8/600/400',
    date: 'Aug 20, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/consignly-9/600/400',
    date: 'Aug 20, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export const ABOUT_FOOTER =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const FOOTER_LINK_LABELS = ['About us', 'Services', 'News', 'Careers', 'Contact']

export const ADDRESS = '43 Raymouth Rd. Baltemoer, London 3910'

export const CONTACT_PHONES = ['+1(123)-456-7890', '+1(123)-456-7890']

export const CONTACT_EMAIL = 'info@mydomain.com'

export type SocialKey = 'instagram' | 'twitter' | 'facebook' | 'linkedin' | 'pinterest' | 'dribbble'

export const SOCIALS: SocialKey[] = [
  'instagram',
  'twitter',
  'facebook',
  'linkedin',
  'pinterest',
  'dribbble',
]
