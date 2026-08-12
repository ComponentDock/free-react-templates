/* Sculpt site data — copy and placeholder images for the fitness template.
   Brand palette: burnt orange #f17445 accent, light grey #f2f3f7 sections,
   charcoal #25282a footer, Work Sans type. */

export const BRAND = 'Sculpt'

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Classes', href: '#classes' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Events', href: '#events' },
  { label: 'Blog', href: '#blog' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact', href: '#contact' },
]

export const CLASSES_DROPDOWN = [
  'Classes Single',
  'Cardio Classes',
  'Muscle Classes',
  'Fitness Classes',
  'Body Building',
]

export interface HeroSlide {
  headline: string
  image: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    headline: 'This is a lifestyle there is no finish line',
    image: 'https://picsum.photos/id/512/1600/900',
  },
  {
    headline: "Don't stop when it hurts, stop when you're done",
    image: 'https://picsum.photos/id/74/1600/900',
  },
  {
    headline: 'Stop wishing, start doing',
    image: 'https://picsum.photos/id/910/1600/900',
  },
  {
    headline: 'Working out is a reward not a punishment',
    image: 'https://picsum.photos/id/13/1600/900',
  },
]

export interface Program {
  name: string
  price: string
  month: string
  blurb: string
}

export const PROGRAMS: Program[] = [
  {
    name: 'Fitness Program',
    price: '$150',
    month: 'month',
    blurb: 'Which roasted parts of sentences fly into your mouth.',
  },
  {
    name: 'Yoga Program',
    price: '$150',
    month: 'month',
    blurb: 'Which roasted parts of sentences fly into your mouth.',
  },
  {
    name: 'Dance Program',
    price: '$150',
    month: 'month',
    blurb: 'Which roasted parts of sentences fly into your mouth.',
  },
  {
    name: 'Aerobics Classes',
    price: '$150',
    month: 'month',
    blurb: 'Which roasted parts of sentences fly into your mouth.',
  },
  {
    name: 'Pilates',
    price: '$150',
    month: 'month',
    blurb: 'Which roasted parts of sentences fly into your mouth.',
  },
]

export interface Service {
  title: string
  copy: string
}

export const SERVICES: Service[] = [
  {
    title: 'Cardio Program',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    title: 'Body Building',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    title: 'Karate Classes',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    title: 'Boxing Program',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
]

export const SERVICES_COLLAGE = [
  'https://picsum.photos/seed/sculpt-10/560/240',
  'https://picsum.photos/seed/sculpt-11/280/240',
  'https://picsum.photos/seed/sculpt-12/280/240',
]

export const WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export type ClassIconName =
  'heart-pulse' | 'flame' | 'flower-2' | 'zap' | 'target' | 'dumbbell' | 'waves' | 'person-standing'

export interface ClassEntry {
  icon: ClassIconName
  time: string
  program: string
  trainer: string
}

export const DAILY_CLASSES: ClassEntry[] = [
  { icon: 'heart-pulse', time: '06am - 8am', program: 'Cardio', trainer: 'Tom Scott' },
  { icon: 'flame', time: '08am - 10am', program: 'Loose Weight', trainer: 'Tom Scott' },
  { icon: 'flower-2', time: '10am - 12pm', program: 'Yoga', trainer: 'Tom Scott' },
  { icon: 'zap', time: '12pm - 2pm', program: 'Boxing', trainer: 'Tom Scott' },
  { icon: 'target', time: '2pm - 4pm', program: 'Karate', trainer: 'Tom Scott' },
  { icon: 'dumbbell', time: '4pm - 6pm', program: 'Body Building', trainer: 'Tom Scott' },
  { icon: 'waves', time: '6pm - 8pm', program: 'Swimming', trainer: 'Tom Scott' },
  { icon: 'person-standing', time: '8pm - 10pm', program: 'Basic Exercise', trainer: 'Tom Scott' },
]

export interface Product {
  title: string
  price: string
  salePrice?: string
  image: string
}

export const PRODUCTS: Product[] = [
  {
    title: 'Boxing Gloves',
    price: '$300.00',
    image: 'https://picsum.photos/seed/sculpt-13/300/300',
  },
  {
    title: 'Dumbell',
    price: '$199.00',
    salePrice: '$300.00',
    image: 'https://picsum.photos/seed/sculpt-14/300/300',
  },
  { title: 'Shoes', price: '$300.00', image: 'https://picsum.photos/seed/sculpt-15/300/300' },
  { title: 'Yoga Mat', price: '$300.00', image: 'https://picsum.photos/seed/sculpt-16/300/300' },
]

export interface Stat {
  value: number
  label: string
}

export const STATS: Stat[] = [
  { value: 1500, label: 'Clients' },
  { value: 400, label: 'Trainers' },
  { value: 1200, label: 'Managers' },
  { value: 1300, label: 'Rooms' },
]

export interface Trainer {
  name: string
  role: string
  image: string
}

export const TRAINERS: Trainer[] = [
  { name: 'Diego Carter', role: 'Power Trainer', image: 'https://picsum.photos/id/64/600/800' },
  { name: 'Lea Young', role: 'Yoga Trainer', image: 'https://picsum.photos/id/1027/600/800' },
  { name: 'Alysha Reed', role: 'Dance Trainer', image: 'https://picsum.photos/id/823/600/800' },
  { name: 'George Cooper', role: 'Boxing Trainer', image: 'https://picsum.photos/id/996/600/800' },
  { name: 'Melody Moxin', role: 'Boxing Trainer', image: 'https://picsum.photos/id/64/600/800' },
]

export interface Testimonial {
  quote: string
  name: string
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    name: 'Dave Henderson',
    avatar: 'https://picsum.photos/seed/sculpt-23/60/60',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    name: 'Dave Henderson',
    avatar: 'https://picsum.photos/seed/sculpt-24/60/60',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    name: 'Dave Henderson',
    avatar: 'https://picsum.photos/seed/sculpt-25/60/60',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    name: 'Dave Henderson',
    avatar: 'https://picsum.photos/seed/sculpt-23/60/60',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    name: 'Dave Henderson',
    avatar: 'https://picsum.photos/seed/sculpt-24/60/60',
  },
]

export interface ClassCard {
  title: string
  copy: string
  image: string
}

export const CLASS_CARDS: ClassCard[] = [
  {
    title: 'Fitness Gym & Cardio',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    image: 'https://picsum.photos/seed/sculpt-26/250/250',
  },
  {
    title: 'Strength Training',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    image: 'https://picsum.photos/seed/sculpt-27/250/250',
  },
  {
    title: 'Yoga Program',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    image: 'https://picsum.photos/seed/sculpt-28/250/250',
  },
]

export const REQUEST_SERVICES = ['Yoga', 'Boxing', 'Power', 'Body Building']

export interface EventCard {
  day: string
  month: string
  title: string
  organizer: string
  location: string
}

export const EVENTS: EventCard[] = [
  {
    day: '19',
    month: 'APR',
    title: 'Special Training for boxing',
    organizer: 'Noah Henderson',
    location: '291 South 21th Street, Suite 721 New York NY 10016',
  },
  {
    day: '19',
    month: 'APR',
    title: 'Gather for World Yoga Day',
    organizer: 'Noah Henderson',
    location: '291 South 21th Street, Suite 721 New York NY 10016',
  },
  {
    day: '19',
    month: 'APR',
    title: 'Motivational exercise',
    organizer: 'Noah Henderson',
    location: '291 South 21th Street, Suite 721 New York NY 10016',
  },
]

export interface BlogPost {
  title: string
  day: string
  month: string
  image: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '5 Ways to Make Yoga Class More Restorative',
    day: '18',
    month: 'MAY',
    image: 'https://picsum.photos/seed/sculpt-29/400/250',
  },
  {
    title: '3 Balancing Poses for Winter',
    day: '18',
    month: 'MAY',
    image: 'https://picsum.photos/seed/sculpt-30/400/250',
  },
  {
    title: 'Need workout motivation?',
    day: '18',
    month: 'MAY',
    image: 'https://picsum.photos/seed/sculpt-31/400/250',
  },
]

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/sculpt-32/400/300',
  'https://picsum.photos/seed/sculpt-33/400/300',
  'https://picsum.photos/seed/sculpt-34/400/300',
  'https://picsum.photos/seed/sculpt-35/400/300',
  'https://picsum.photos/seed/sculpt-36/400/300',
  'https://picsum.photos/seed/sculpt-37/400/300',
  'https://picsum.photos/seed/sculpt-38/400/300',
  'https://picsum.photos/seed/sculpt-39/400/300',
  'https://picsum.photos/seed/sculpt-40/400/300',
  'https://picsum.photos/seed/sculpt-32/400/300',
]

export const FOOTER_ABOUT =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const QUICK_LINKS = ['About Us', 'Testimonials', 'Classes', 'Blog', 'Contact']

export const RECENT_POSTS = [
  {
    title: 'Tips for sexy body',
    date: '18 April 2018',
    image: 'https://picsum.photos/seed/sculpt-41/70/60',
  },
  {
    title: 'Tips for sexy body',
    date: '18 April 2018',
    image: 'https://picsum.photos/seed/sculpt-42/70/60',
  },
  {
    title: 'Tips for sexy body',
    date: '18 April 2018',
    image: 'https://picsum.photos/seed/sculpt-43/70/60',
  },
]

export const CONTACT_INFO = {
  address: '291 South 21th Street, Suite 721 New York NY 10016',
  phone: '+1 235 2355 98',
  email: 'info@yoursite.com',
  website: 'yourwebsite.com',
}
