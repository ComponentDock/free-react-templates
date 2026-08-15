export const siteName = 'Ironpulse'
export const skipLabel = 'Skip to content'

export const navItems = [
  { label: 'Home', href: '#home-section' },
  { label: 'About us', href: '#features-section' },
  { label: 'Classes', href: '#services-section' },
  { label: 'Instructors', href: '#trainers-section' },
  { label: 'News', href: '#events-section' },
  { label: 'Contact', href: '#footer-section' },
] as const
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export const searchLabel = 'Open search'
export const searchOverlayLabel = 'Search overlay'
export const searchInputLabel = 'Search the site'
export const searchSubmitLabel = 'Search'
export const searchCloseLabel = 'Close search'

export const socialItems = [
  { name: 'Facebook', href: 'https://www.facebook.com/' },
  { name: 'Twitter', href: 'https://twitter.com/' },
  { name: 'Pinterest', href: 'https://www.pinterest.com/' },
  { name: 'Behance', href: 'https://www.behance.net/' },
] as const

/* Subject-screened placeholder images (picsum, deterministic seeds/ids):
   hero slides = dark high-contrast scenes (concert stage, monochrome
   architecture, dark shoreline) so the white 130px headline pops; feature
   cards = dark dramatic coast/wave shots under the blue icon circle;
   trainers = verified portraits (1027 dark portrait, 64 golden-hour,
   996 backlit) with paraphrased female names (picsum has no male
   portraits); section backgrounds = dark industrial / shoreline /
   concert for the trainer, membership, sign-up and footer bands. */
export const heroSlides = [
  {
    title: 'Be Fit.Top Gym',
    image: 'https://picsum.photos/id/453/1920/1080',
  },
  {
    title: 'Be Fit.Top Trainer',
    image: 'https://picsum.photos/seed/ironpulse-night/1920/1080',
  },
  {
    title: 'Be Fit.Top Body',
    image: 'https://picsum.photos/seed/ironpulse-bg3/1920/1080',
  },
] as const
export const heroPlayLabel = 'Watch the intro video'
export const heroReadMoreLabel = 'Read More'
export const heroSlideLabel = (index: number) => `Go to slide ${index + 1}`

export const features = [
  {
    title: 'Amazing Setting',
    description:
      'Train in a spacious, well-equipped club with a motivating atmosphere designed around results.',
    icon: 'sparkles' as const,
    image: 'https://picsum.photos/seed/ironpulse-darkbg2/640/420',
  },
  {
    title: 'Best Trainers',
    description:
      'Our certified coaches build personal programs and push you past every plateau safely.',
    icon: 'users' as const,
    image: 'https://picsum.photos/seed/ironpulse-darkbg5/640/420',
  },
  {
    title: 'Diet Plans',
    description:
      'Get a nutrition plan matched to your goal — lose fat, build muscle, or simply feel stronger.',
    icon: 'utensils' as const,
    image: 'https://picsum.photos/seed/ironpulse-darkbg4/640/420',
  },
] as const

export const servicesEyebrow = 'Features'
export const servicesTitle = 'Services'
export const services = [
  {
    title: 'Pilates',
    description:
      'Low-impact classes that build core strength, flexibility and precise body control.',
    icon: 'flower' as const,
  },
  {
    title: 'Free Lifting',
    description: 'Barbell and dumbbell zones with open racks, platforms and coaching on demand.',
    icon: 'dumbbell' as const,
  },
  {
    title: 'Yoga',
    description: 'Restore and recover with guided flows that improve mobility, balance and focus.',
    icon: 'sparkles' as const,
  },
  {
    title: 'Spinning',
    description: 'High-energy indoor cycling sessions with music-driven intervals and live stats.',
    icon: 'bike' as const,
  },
] as const
export const servicesButtonLabel = 'see all the services'

export const trainersEyebrow = 'The Best'
export const trainersTitle = 'Trainers'
export const trainersSeeAllLabel = 'See All'
export const trainersRole = 'Aerobics Instructor'
export const trainers = [
  {
    name: 'Rachel Smith',
    image: 'https://picsum.photos/id/1027/600/800',
  },
  {
    name: 'Michelle Williams',
    image: 'https://picsum.photos/id/64/600/800',
  },
  {
    name: 'Jamie Brown',
    image: 'https://picsum.photos/id/996/600/800',
  },
] as const

export const classesEyebrow = 'Next'
export const classesTitle = 'Upcoming Classes'
export const classes = [
  { name: 'Gym Fitness', time: '11:00–12:00' },
  { name: 'Pilates', time: '12:00–13:00' },
  { name: 'Spinning', time: '13:00–14:00' },
  { name: 'Yoga', time: '14:00–15:00' },
  { name: 'Gym Fitness', time: '15:00–16:00' },
  { name: 'Pilates', time: '16:00–17:00' },
] as const

export const membershipEyebrow = 'Next'
export const membershipTitle = 'Membership Cards'
export const membershipDiscount = '25%'
export const membershipDiscountLabel = 'Discount'

export const signUpEyebrow = 'New'
export const signUpTitle = 'Personal Trainer'
export const signUpDescription =
  'Book a one-on-one session with a certified personal trainer and get a plan built around your body and your schedule.'
export const signUpButtonLabel = 'Sign up Now'

export const footerNavItems = [
  { label: 'Home', href: '#home-section' },
  { label: 'About us', href: '#features-section' },
  { label: 'Classes', href: '#services-section' },
  { label: 'Instructors', href: '#trainers-section' },
  { label: 'News', href: '#events-section' },
  { label: 'Contact', href: '#footer-section' },
] as const
export const subscribeLabel = 'Email address'
export const subscribeButtonLabel = 'Sign Up'
export const subscribePlaceholder = 'your Email'
export const subscribeSuccess = 'Thanks for subscribing!'
export const componentDockLabel = 'Component Dock'
export const componentDockUrl = 'https://www.componentdock.com/'
export const footerCredit = (year: number) =>
  `Copyright © ${year} All rights reserved | This template is made with ♥ by`
