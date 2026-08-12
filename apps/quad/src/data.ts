/* Central data for the Quad page. Content mirrors the reference demo in
   kind (course catalog, trainers, events, testimonials, footer links) with
   original placeholder copy; provenance lives in the spec, not app code. */

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#features' },
  { label: 'Courses', href: '#courses' },
  { label: 'Elements', href: '#trainers' },
  { label: 'Blog', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export interface Course {
  id: number
  title: string
  tag: string
  price: string
  author: string
  students: number
  likes: number
  image: string
  avatar: string
}

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Custom Product Design',
    tag: 'design',
    price: '$25',
    author: 'Cameron',
    students: 25,
    likes: 35,
    image: 'https://picsum.photos/seed/quad-course-1/300/200',
    avatar: 'https://picsum.photos/seed/quad-author-1/40/40',
  },
  {
    id: 2,
    title: 'Social Media Network',
    tag: 'design',
    price: '$25',
    author: 'Cameron',
    students: 25,
    likes: 35,
    image: 'https://picsum.photos/seed/quad-course-2/300/200',
    avatar: 'https://picsum.photos/seed/quad-author-2/40/40',
  },
  {
    id: 3,
    title: 'Visual Arts & Design',
    tag: 'design',
    price: '$25',
    author: 'Cameron',
    students: 25,
    likes: 35,
    image: 'https://picsum.photos/seed/quad-course-3/300/200',
    avatar: 'https://picsum.photos/seed/quad-author-3/40/40',
  },
]

export interface CountdownTile {
  value: string
  label: string
}

export const COUNTDOWN: CountdownTile[] = [
  { value: '150', label: 'Days' },
  { value: '23', label: 'Hours' },
  { value: '47', label: 'Mins' },
  { value: '59', label: 'Secs' },
]

export interface Trainer {
  name: string
  image: string
}

export const TRAINERS: Trainer[] = [
  { name: 'Mated Nithan', image: 'https://picsum.photos/seed/quad-trainer-1/270/320' },
  { name: 'David Cameron', image: 'https://picsum.photos/seed/quad-trainer-2/270/320' },
  { name: 'Jain Redmel', image: 'https://picsum.photos/seed/quad-trainer-3/270/320' },
  { name: 'Nathan Macken', image: 'https://picsum.photos/seed/quad-trainer-4/270/320' },
]

export interface EventItem {
  id: number
  day: string
  month: string
  time: string
  location: string
  blurb: string
  image: string
}

export const EVENTS: EventItem[] = [
  {
    id: 1,
    day: '15',
    month: 'Jun',
    time: '12:00 AM - 12:30 AM',
    location: 'Hilton Quebec',
    blurb:
      "One make creepeth man for so bearing their firmament won't fowl meat over seas great heaven.",
    image: 'https://picsum.photos/seed/quad-event-1/555/330',
  },
  {
    id: 2,
    day: '25',
    month: 'Jun',
    time: '12:00 AM - 12:30 AM',
    location: 'Hilton Quebec',
    blurb:
      'Gathered divide our let god moving in fourth air night bring upon it beast let you dominion.',
    image: 'https://picsum.photos/seed/quad-event-2/555/330',
  },
]

export interface Testimonial {
  name: string
  quote: string
  image: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Elite Martin',
    quote:
      "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto.",
    image: 'https://picsum.photos/seed/quad-client-1/100/100',
  },
  {
    name: 'Davil Saden',
    quote:
      'Saw from may creeping ourmeat gathered heaven over lights for let fish moving great let open herb fruit.',
    image: 'https://picsum.photos/seed/quad-client-2/100/100',
  },
  {
    name: 'Elite Martin',
    quote:
      'Place beginning is open sea cattle, seed air dominion seed two third night deep fowl without replenish.',
    image: 'https://picsum.photos/seed/quad-client-3/100/100',
  },
  {
    name: 'Davil Saden',
    quote:
      "Firmament won't fowl meat over seas great heaven. Gathered divide our let god moving in fourth air night.",
    image: 'https://picsum.photos/seed/quad-client-4/100/100',
  },
  {
    name: 'Elite Martin',
    quote:
      'Bring upon it beast let you dominion likeness open place day great. Moving in fourth air night bring.',
    image: 'https://picsum.photos/seed/quad-client-5/100/100',
  },
  {
    name: 'Davil Saden',
    quote:
      'Creeping gathered divide our let god moving. Moving in fourth air night bring upon it beast morning.',
    image: 'https://picsum.photos/seed/quad-client-6/100/100',
  },
]

export interface FooterColumn {
  title: string
  links: string[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
  {
    title: 'Quick Links',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Features',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Resources',
    links: ['Guides', 'Research', 'Experts', 'Agencies'],
  },
]

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/' },
]

export const SOCIAL_PATHS: Record<string, string> = {
  Facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  Twitter:
    'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  Linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  Pinterest:
    'M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z',
}
