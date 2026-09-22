export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export const siteName = 'PowerGrip'
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const skipLabel = 'Skip to content'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home-section', active: true },
  { label: 'Classes', href: '#classes-section' },
  { label: 'Schedule', href: '#schedule-section' },
  { label: 'Trainers', href: '#trainers-section' },
  { label: 'Events', href: '#events-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#footer-section' },
]

export const heroSlides = [
  {
    image: 'https://picsum.photos/seed/powergrip-hero1/1920/1080',
    title: 'This is a Lifestyle There is no Finish Line',
    ctaLabel: 'Join Classes',
  },
  {
    image: 'https://picsum.photos/seed/powergrip-hero2/1920/1080',
    title: "Don't Stop When it Hurts, Stop When You're Done",
    ctaLabel: 'Join Classes',
  },
  {
    image: 'https://picsum.photos/seed/powergrip-hero3/1920/1080',
    title: 'Stop Wishing, Start Doing',
    ctaLabel: 'Join Classes',
  },
]

export const heroTitle = heroSlides[0]!.title
export const heroCtaLabel = heroSlides[0]!.ctaLabel

export interface Program {
  title: string
  description: string
  price: string
  image: string
}

export const programs: Program[] = [
  {
    title: 'Body Building',
    description:
      'Build strength and sculpt your physique with our expert-led body building programs.',
    price: '$25.00',
    image: 'https://picsum.photos/seed/pg-body/400/300',
  },
  {
    title: 'Yoga Program',
    description: 'Find balance and flexibility through guided yoga sessions for all levels.',
    price: '$25.00',
    image: 'https://picsum.photos/seed/pg-yoga/400/300',
  },
  {
    title: 'Aerobics Classes',
    description: 'Boost your cardio health and energy with fun, high-energy aerobics.',
    price: '$25.00',
    image: 'https://picsum.photos/seed/pg-aerobics/400/300',
  },
]

export const servicesTitle = 'Being fit is attractive'
export const servicesSubtitle =
  'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.'

export interface Service {
  icon: 'heart-pulse' | 'dumbbell' | 'swords' | 'shield'
  title: string
  text: string
}

export const services: Service[] = [
  {
    icon: 'heart-pulse',
    title: 'Cardio Program',
    text: 'Elevate your heart rate and burn calories with our dynamic cardio sessions.',
  },
  {
    icon: 'dumbbell',
    title: 'Body Building',
    text: 'Sculpt your muscles and build raw strength with targeted weight training.',
  },
  {
    icon: 'swords',
    title: 'Karate Classes',
    text: 'Learn discipline and self-defense through martial arts training.',
  },
  {
    icon: 'shield',
    title: 'Boxing Program',
    text: 'Build endurance and confidence with high-intensity boxing workouts.',
  },
]

export const scheduleTitle = 'Our Class Schedule'
export const scheduleSubtitle =
  'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.'

export const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export interface ScheduleEntry {
  icon:
    | 'heart-pulse'
    | 'dumbbell'
    | 'swords'
    | 'shield'
    | 'person-standing'
    | 'bike'
    | 'waves'
    | 'flame'
  time: string
  title: string
  trainer: string
}

export const scheduleEntries: ScheduleEntry[] = [
  { icon: 'heart-pulse', time: '06am - 8am', title: 'Cardio Program', trainer: 'Tom Scott' },
  { icon: 'flame', time: '06am - 8am', title: 'Lose Weight Program', trainer: 'Tom Scott' },
  { icon: 'person-standing', time: '06am - 8am', title: 'Yoga Classes', trainer: 'Tom Scott' },
  { icon: 'shield', time: '06am - 8am', title: 'Boxing Program', trainer: 'Tom Scott' },
  { icon: 'swords', time: '06am - 8am', title: 'Karate Classes', trainer: 'Tom Scott' },
  { icon: 'dumbbell', time: '06am - 8am', title: 'Body Building', trainer: 'Tom Scott' },
  { icon: 'waves', time: '06am - 8am', title: 'Swimming Program', trainer: 'Tom Scott' },
  { icon: 'person-standing', time: '06am - 8am', title: 'Basic Exercise', trainer: 'Tom Scott' },
]

export const testimonialsTitle = 'What People Says'
export const testimonialsSubtitle = 'Success Stories'

export interface Testimonial {
  name: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sophia Foster',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/pg-sophia/100/100',
  },
  {
    name: 'John Collins',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    avatar: 'https://picsum.photos/seed/pg-john/100/100',
  },
  {
    name: 'Adam Ross',
    quote:
      'Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    avatar: 'https://picsum.photos/seed/pg-adam/100/100',
  },
]

export const trainersTitle = 'Our Experienced Trainers'
export const trainersSubtitle =
  'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.'

export interface Trainer {
  name: string
  specialty: string
  image: string
}

export const trainers: Trainer[] = [
  {
    name: 'Diego Carter',
    specialty: 'Body Building Trainer',
    image: 'https://picsum.photos/seed/pg-diego/300/300',
  },
  {
    name: 'Lea Young',
    specialty: 'Body Building Trainer',
    image: 'https://picsum.photos/seed/pg-lea/300/300',
  },
  {
    name: 'Alysha Reed',
    specialty: 'Body Building Trainer',
    image: 'https://picsum.photos/seed/pg-alysha/300/300',
  },
  {
    name: 'George Cooper',
    specialty: 'Body Building Trainer',
    image: 'https://picsum.photos/seed/pg-george/300/300',
  },
]

export const classesTitle = 'Our Classes'
export const classesSubtitle =
  'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.'

export interface ClassItem {
  title: string
  description: string
  price: string
  image: string
}

export const classItems: ClassItem[] = [
  {
    title: 'Fitness Gym & Cardio',
    description:
      'Pointing has no control about the blind texts it is an almost unorthographic life.',
    price: '$25.00',
    image: 'https://picsum.photos/seed/pg-class1/400/300',
  },
  {
    title: 'Strength Training',
    description:
      'Pointing has no control about the blind texts it is an almost unorthographic life.',
    price: '$25.00',
    image: 'https://picsum.photos/seed/pg-class2/400/300',
  },
  {
    title: 'Yoga Program',
    description:
      'Pointing has no control about the blind texts it is an almost unorthographic life.',
    price: '$25.00',
    image: 'https://picsum.photos/seed/pg-class3/400/300',
  },
]

export const eventsTitle = 'Upcoming Events'
export const eventsSubtitle =
  'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.'

export interface Event {
  day: string
  month: string
  organizer: string
  title: string
  location: string
}

export const events: Event[] = [
  {
    day: '19',
    month: 'Apr',
    organizer: 'Noah Henderson',
    title: 'Special Training for Karate at PowerGrip Gym',
    location: '291 South 21th Street, Suite 721 New York NY 10016',
  },
  {
    day: '19',
    month: 'Apr',
    organizer: 'Noah Henderson',
    title: 'World Yoga Day at PowerGrip Gym',
    location: '291 South 21th Street, Suite 721 New York NY 10016',
  },
  {
    day: '19',
    month: 'Apr',
    organizer: 'Noah Henderson',
    title: '1st Anniversary of PowerGrip Gym',
    location: '291 South 21th Street, Suite 721 New York NY 10016',
  },
]

export const blogTitle = 'Recent Blog'
export const blogSubtitle =
  'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.'

export interface BlogPost {
  date: string
  month: string
  author: string
  title: string
  excerpt: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    date: '18',
    month: 'Apr',
    author: 'Noah Henderson',
    title: 'Need workout motivation?',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    image: 'https://picsum.photos/seed/pg-blog1/400/300',
  },
  {
    date: '18',
    month: 'Apr',
    author: 'Noah Henderson',
    title: 'Need workout motivation?',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    image: 'https://picsum.photos/seed/pg-blog2/400/300',
  },
  {
    date: '18',
    month: 'Apr',
    author: 'Noah Henderson',
    title: 'Need workout motivation?',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    image: 'https://picsum.photos/seed/pg-blog3/400/300',
  },
]

export const newsletterTitle = 'Subscribe Newsletter'
export const newsletterSubtitle = 'Subscribe our newsletter and get latest update'
export const newsletterPlaceholder = 'Enter your email'
export const newsletterButton = 'Subscribe Now'

export const footerAboutTitle = `About ${siteName} Gym`
export const footerAboutText =
  'Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.'

export const footerLinksTitle = 'Quick Links'
export const footerLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Testimonials', href: '#' },
  { label: 'Classes', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

export const footerRecentTitle = 'Recent Post'
export const footerRecentPosts = [
  {
    title: 'Tips for a strong body',
    date: '18 April 2018',
    image: 'https://picsum.photos/seed/pg-fblog1/100/100',
  },
  {
    title: 'Yoga for beginners',
    date: '18 April 2018',
    image: 'https://picsum.photos/seed/pg-fblog2/100/100',
  },
  {
    title: 'Cardio tips and tricks',
    date: '18 April 2018',
    image: 'https://picsum.photos/seed/pg-fblog3/100/100',
  },
]

export const footerContactTitle = 'Contact Info'
export const footerAddress = '291 South 21th Street, Suite 721 New York NY 10016'
export const footerPhone = '+ 1235 2355 98'
export const footerEmail = 'info@yoursite.com'
export const footerWebsite = 'powergrip.free.componentdock.com'

export const componentDockUrl = 'https://www.componentdock.com/'
export const componentDockLabel = 'Component Dock'
