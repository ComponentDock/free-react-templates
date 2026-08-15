export interface NavLink {
  label: string
  href: string
  current?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', current: true },
  { label: 'About us', href: '#about' },
  { label: 'Causes', href: '#causes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export const topBar = {
  email: 'contact@ourcharity.com',
  phone: '+24 3772 120 091 / +56452 4567',
}

export interface HeroSlide {
  image: string
  alt: string
}

const heroImage = (n: number) => `https://picsum.photos/seed/amity-hero-${n}/1600/820`

export const heroSlides: HeroSlide[] = [
  { image: heroImage(1), alt: 'Ripe citrus harvest against a bright sky' },
  { image: heroImage(2), alt: 'Fresh water droplet hanging from a green leaf' },
  {
    image: 'https://picsum.photos/id/453/1600/820',
    alt: 'Live music performance at a community event',
  },
]

export interface IconBox {
  title: string
  blurb: string
  icon: 'sprout' | 'handshake' | 'handcoins'
  active?: boolean
}

export const iconBoxes: IconBox[] = [
  {
    title: 'Become a Volunteer',
    blurb: 'Lend a hand and change a life — join our network of volunteers today.',
    icon: 'sprout',
    active: true,
  },
  {
    title: 'Dance & Music',
    blurb: 'Creative after-school programs that keep children inspired and engaged.',
    icon: 'handshake',
  },
  {
    title: 'Online Conference',
    blurb: 'Join our virtual gatherings on fundraising and community building.',
    icon: 'handcoins',
  },
]

export interface EventItem {
  image: string
  alt: string
  date: string
  category: string
  title: string
  excerpt: string
}

export const events: EventItem[] = [
  {
    image: 'https://picsum.photos/seed/amity-event-1/288/200',
    alt: 'Fundraising event attendees',
    date: 'Aug 25, 2018',
    category: 'Ball Room New York',
    title: 'Fundraiser for Kids',
    excerpt: 'An evening of music and giving to fund school supplies for 500 children.',
  },
  {
    image: 'https://picsum.photos/seed/amity-event-2/288/200',
    alt: 'Water well dedication ceremony',
    date: 'Aug 25, 2018',
    category: 'Ball Room New York',
    title: 'Bring water to the childrens',
    excerpt: 'Help us drill clean-water wells for the villages we support this season.',
  },
  {
    image: 'https://picsum.photos/seed/amity-event-3/288/200',
    alt: 'Volunteers at a charity gala',
    date: 'Aug 25, 2018',
    category: 'Ball Room New York',
    title: 'Bring water to the childrens',
    excerpt: 'A community gala raising funds for clean water and school meals.',
  },
]

export interface Cause {
  image: string
  alt: string
  title: string
  excerpt: string
  percentage: number
  raised: string
  goal: string
}

const cause = (n: number, title: string, percentage: number): Cause => ({
  image:
    n === 1
      ? 'https://picsum.photos/id/292/640/420'
      : n === 4
        ? 'https://picsum.photos/id/425/640/420'
        : `https://picsum.photos/seed/amity-cause-${n}/640/420`,
  alt: `Cause photo ${n}`,
  title,
  excerpt: 'Every donation brings clean water and classrooms one step closer.',
  percentage,
  raised: '$56 880',
  goal: '$70 000',
})

export const causes: Cause[] = [
  cause(1, 'Bring water to the childrens', 83),
  cause(2, 'Education for all', 70),
  cause(3, 'Bring water to the childrens', 83),
  cause(4, 'Education for all', 70),
  cause(5, 'Bring water to the childrens', 83),
  cause(6, 'Bring water to the childrens', 70),
]

export const featuredCause: Cause = {
  image: 'https://picsum.photos/seed/amity-featured/492/300',
  alt: 'Community gathering supported by Amity',
  title: 'Fundraiser for Kids',
  excerpt:
    'Support our flagship drive to bring school kits, meals, and teachers to the children who need them most.',
  percentage: 83,
  raised: '$56 880',
  goal: '$70 000',
}

export interface Milestone {
  value: number
  suffix?: string
  label: string
}

export const milestones: Milestone[] = [
  { value: 120, suffix: 'K', label: 'Children helped' },
  { value: 79, label: 'Water wells' },
  { value: 253, label: 'Volunteeres' },
]

export interface NewsItem {
  title: string
  date: string
}

export const newsItems: NewsItem[] = [
  { title: 'A new cause to help', date: 'March 12, 2018' },
  { title: 'We love to help people', date: 'March 12, 2018' },
  { title: 'The new ideas for helping', date: 'March 12, 2018' },
]

export const usefulLinks = [
  'Privacy Polticy',
  'Become a Volunteer',
  'Donate',
  'Testimonials',
  'Causes',
  'Portfolio',
  'News',
]

export const contactInfo = {
  phone: '+45 677 8993000 223',
  email: 'office@template.com',
  address: 'Main Str. no 45-46, b3, 56832, Los Angeles, CA',
}
