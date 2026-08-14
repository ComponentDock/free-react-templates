/* Site content — mirrored from the original design's copy (kind + tone kept,
   wording lightly paraphrased where noted). Images are deterministic
   picsum-seeded placeholders; no source assets are copied. */

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Accomodation', href: '#accomodation' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const

/* Blog dropdown panel (source: li.nav-item.submenu — white panel with the
   blog-related pages). */
export const BLOG_DROPDOWN = [
  { label: 'Blog', href: '#blog' },
  { label: 'Blog Details', href: '#blog' },
  { label: 'Elemests', href: '#blog' },
] as const

export const HERO_IMAGE = 'https://picsum.photos/seed/hostelry-hero/1920/1080'

export const BOOKING_TITLE = 'Book Your Room'

export const ADULT_OPTIONS = ['Adult', 'Old', 'Younger', 'Potato'] as const

export const CHILD_OPTIONS = ['Child', 'Baby', 'Child'] as const

export const ROOM_OPTIONS = ['Room 01', 'Room 02', 'Room 03'] as const

export const ROOMS = [
  {
    name: 'Double Deluxe Room',
    price: '$250',
    unit: 'night',
    blurb: 'When you enter into any new area of science, you almost reach certain conclusions.',
    image: 'https://picsum.photos/seed/hostelry-room-1/640/480',
  },
  {
    name: 'Single Deluxe Room',
    price: '$200',
    unit: 'night',
    blurb: 'When you enter into any new area of science, you almost reach certain conclusions.',
    image: 'https://picsum.photos/seed/hostelry-room-2/640/480',
  },
  {
    name: 'Honeymoon Suit',
    price: '$750',
    unit: 'night',
    blurb: 'When you enter into any new area of science, you almost reach certain conclusions.',
    image: 'https://picsum.photos/seed/hostelry-room-3/640/480',
  },
  {
    name: 'Economy Double',
    price: '$200',
    unit: 'night',
    blurb: 'When you enter into any new area of science, you almost reach certain conclusions.',
    image: 'https://picsum.photos/seed/hostelry-room-4/640/480',
  },
] as const

export const FACILITIES_IMAGE = 'https://picsum.photos/seed/hostelry-facilities/1920/1080'

/* Facility cards — original titles keep their source misspellings
   (Sports CLub, Gymnesium). */
export const FACILITIES = [
  { title: 'Restaurant', blurb: 'Dine on seasonal dishes prepared by our resident chefs.' },
  { title: 'Sports CLub', blurb: 'A fully equipped club with courts, classes and coaching.' },
  { title: 'Swimming Pool', blurb: 'A heated outdoor pool with loungers and poolside bar.' },
  { title: 'Rent a Car', blurb: 'Explore the region with our flexible daily rental fleet.' },
  { title: 'Gymnesium', blurb: 'Modern cardio and strength equipment open around the clock.' },
  { title: 'Bar', blurb: 'Craft cocktails, fine wines and light bites until late.' },
] as const

export const ABOUT_IMAGE = 'https://picsum.photos/seed/hostelry-about/640/480'

export const TESTIMONIALS = [
  {
    name: 'Fanny Spencer',
    quote:
      'As conscious traveling Paupers we must always be concerned about our dear Mother Earth. We cannot afford to lose it.',
    image: 'https://picsum.photos/seed/hostelry-client-1/120/120',
  },
  {
    name: 'Amelia Watson',
    quote:
      'The rooms were spotless, the staff attentive, and the breakfast buffet worth waking up for every single morning.',
    image: 'https://picsum.photos/seed/hostelry-client-2/120/120',
  },
  {
    name: 'Lucas Meyer',
    quote:
      'A perfect base for exploring the old town — quiet at night yet a short stroll from everything that matters.',
    image: 'https://picsum.photos/seed/hostelry-client-3/120/120',
  },
  {
    name: 'Sofia Reyes',
    quote:
      'From the welcome drink to the late checkout, every detail felt considered. We will certainly be back.',
    image: 'https://picsum.photos/seed/hostelry-client-4/120/120',
  },
] as const

export const BLOG_POSTS = [
  {
    date: 'January 12, 2026',
    tag: 'Travel / Life Style',
    title: 'Low Cost Advertising',
    excerpt:
      'Acres of Diamonds… you have heard about it. Maybe you have not used it to death like a bad salesman.',
    image: 'https://picsum.photos/seed/hostelry-blog-1/640/420',
  },
  {
    date: 'January 12, 2026',
    tag: 'Travel / Life Style',
    title: 'Creative Outdoor Ads',
    excerpt:
      'Acres of Diamonds… you have heard about it. Maybe you have not used it to death like a bad salesman.',
    image: 'https://picsum.photos/seed/hostelry-blog-2/640/420',
  },
  {
    date: 'January 12, 2026',
    tag: 'Travel / Life Style',
    title: 'It S Classified How To Utilize Free',
    excerpt:
      'Acres of Diamonds… you have heard about it. Maybe you have not used it to death like a bad salesman.',
    image: 'https://picsum.photos/seed/hostelry-blog-3/640/420',
  },
] as const

export const FOOTER_ABOUT =
  'Hostelry is a boutique hotel in the heart of the old town — elegant rooms, fine dining and warm hospitality for every kind of traveler.'

export const NAVIGATION_LINKS = [
  'Home',
  'Feature',
  'Services',
  'Portfolio',
  'Team',
  'Pricing',
  'Blog',
  'Contact',
] as const

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'Behance', href: '#' },
] as const

export const INSTAFEED_IMAGES = [
  'https://picsum.photos/seed/hostelry-insta-1/160/160',
  'https://picsum.photos/seed/hostelry-insta-2/160/160',
  'https://picsum.photos/seed/hostelry-insta-3/160/160',
  'https://picsum.photos/seed/hostelry-insta-4/160/160',
  'https://picsum.photos/seed/hostelry-insta-5/160/160',
  'https://picsum.photos/seed/hostelry-insta-6/160/160',
] as const
