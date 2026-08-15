export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Agent', href: '#agent' },
  { label: 'Services', href: '#services' },
  { label: 'Properties', href: '#properties' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const brandName = 'HOMESTEAD'

export const heroHeadline = 'The Simplest Way to Find Property'
export const heroSubline =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const heroImage = 'https://picsum.photos/id/1081/1920/1080'
export const heroImageAlt = 'Bright modern residential building against a pale sky'

export const searchPlaceholder = 'Search location'

export type ServiceIcon = 'piggy' | 'wallet' | 'file' | 'lock'

export interface Service {
  title: string
  blurb: string
  icon: ServiceIcon
}

export const services: Service[] = [
  {
    title: 'No Downpayment',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: 'piggy',
  },
  {
    title: 'All Cash Offer',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: 'wallet',
  },
  {
    title: 'Experts in Your Corner',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: 'file',
  },
  {
    title: 'Locked in Pricing',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: 'lock',
  },
]

export interface Property {
  image: string
  alt: string
  oldPrice: string
  price: string
  per: string
  beds: number
  baths: number
  sqft: string
  title: string
  location: string
}

export const properties: Property[] = [
  {
    image: 'https://picsum.photos/id/1076/640/480',
    alt: 'Modern glass high-rise exterior',
    oldPrice: '800,000',
    price: '$3,050',
    per: '/mo',
    beds: 3,
    baths: 2,
    sqft: '1,878',
    title: 'The Blue Sky Home',
    location: 'Oakland',
  },
  {
    image: 'https://picsum.photos/id/1055/640/480',
    alt: 'Bright coastal village houses',
    oldPrice: '950,000',
    price: '$3,750',
    per: '/mo',
    beds: 4,
    baths: 3,
    sqft: '2,340',
    title: 'The Palm Court',
    location: 'Berkeley',
  },
  {
    image: 'https://picsum.photos/id/164/640/480',
    alt: 'Historic canal-side townhouses',
    oldPrice: '720,000',
    price: '$2,890',
    per: '/mo',
    beds: 3,
    baths: 2,
    sqft: '1,620',
    title: 'The Harbor House',
    location: 'Alameda',
  },
]

export interface Step {
  number: string
  title: string
  blurb: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Evaluate Property',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    number: '02',
    title: 'Meet Your Agent',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    number: '03',
    title: 'Close the Deal',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    number: '04',
    title: 'Have Your Property',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export const howItWorksImage = 'https://picsum.photos/id/1081/1600/900'
export const howItWorksImageAlt = 'Modern residential building facade'

export const aboutHeading = 'We Put People First.'
export const aboutParagraphs = [
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
]
export const aboutImage = 'https://picsum.photos/id/164/900/700'
export const aboutImageAlt = 'Bright canal-side neighborhood with historic buildings'

export interface CounterStat {
  value: number
  label: string
}

export const counterStats: CounterStat[] = [
  { value: 305, label: 'Area Population' },
  { value: 1090, label: 'Total Properties' },
  { value: 209, label: 'Average House' },
  { value: 67, label: 'Total Branches' },
]

export interface Testimonial {
  photo: string
  quote: string
  name: string
  role: string
}

export const testimonial: Testimonial = {
  photo: 'https://picsum.photos/id/1027/160/160',
  quote:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  name: 'Rachel Scott',
  role: 'Marketing Manager',
}

export interface Agent {
  photo: string
  name: string
  info: string
}

export const agents: Agent[] = [
  {
    photo: 'https://picsum.photos/id/1027/300/300',
    name: 'Priya Sharma',
    info: 'Listing — 10 Properties',
  },
  {
    photo: 'https://picsum.photos/id/64/300/300',
    name: 'Amelia Hart',
    info: 'Listing — 12 Properties',
  },
  {
    photo: 'https://picsum.photos/id/823/300/300',
    name: 'Nina Kowalski',
    info: 'Listing — 8 Properties',
  },
  {
    photo: 'https://picsum.photos/id/996/300/300',
    name: 'Sofia Marchetti',
    info: 'Listing — 15 Properties',
  },
]

export interface BlogPost {
  image: string
  alt: string
  title: string
  date: string
  author: string
  comments: number
  excerpt: string
}

export const blogPosts: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/homestead-news1/640/420',
    alt: 'Bright sky over a quiet neighborhood',
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'July. 24, 2019',
    author: 'Admin',
    comments: 3,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/homestead-news3/640/420',
    alt: 'Sunlit landscape outside the city',
    title: 'Five Questions to Ask Before Buying Your First Home',
    date: 'July. 18, 2019',
    author: 'Admin',
    comments: 5,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/homestead-blog1/640/420',
    alt: 'Misty hillside behind a new development',
    title: 'How to Price Your Property for a Fast Sale',
    date: 'July. 09, 2019',
    author: 'Admin',
    comments: 2,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export const communityLinks: NavLink[] = [
  { label: 'Search Properties', href: '#properties' },
  { label: 'For Agents', href: '#agent' },
  { label: 'Reviews', href: '#' },
  { label: 'FAQs', href: '#' },
]

export const aboutUsLinks: NavLink[] = [
  { label: 'Our Story', href: '#about' },
  { label: 'Meet the team', href: '#agent' },
  { label: 'Careers', href: '#' },
]

export const companyLinks: NavLink[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Press', href: '#' },
  { label: 'Contact', href: '#contact' },
  { label: 'Careers', href: '#' },
]

export const footerContact = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@homestead.app',
}

export const brandBlurb =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
