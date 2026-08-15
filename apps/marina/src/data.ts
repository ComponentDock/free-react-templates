export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export interface ContactBlock {
  icon: 'map-pin' | 'phone' | 'mail'
  line1: string
  line2: string
}

export const contactBlocks: ContactBlock[] = [
  { icon: 'map-pin', line1: 'San Francisco', line2: 'Mountain View, Fake st., CA' },
  { icon: 'phone', line1: '000 209 392 312', line2: 'Toll free' },
  { icon: 'mail', line1: 'info@gmail.com', line2: 'Email us' },
]

export interface HeroSlide {
  headline: string
  paragraph: string
}

export const heroSlides: HeroSlide[] = [
  {
    headline: 'Explore, Discover The Ocean',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos facere rem natus eum voluptatum voluptas, quia repellendus, id.',
  },
  {
    headline: 'Enjoy The Ocean With Your Family',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste rerum officia dolor voluptatibus explicabo, cumque ipsam nam.',
  },
]

export interface Feature {
  title: string
  description: string
}

export const features: Feature[] = [
  {
    title: 'Luxuries Yacht',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum magni sed.',
  },
  {
    title: '30 Years of Experience',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum magni sed.',
  },
  {
    title: 'Good Captain',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum magni sed.',
  },
]

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '349', label: 'Number of Yacht' },
  { value: '7000+', label: 'Customers Satisfied' },
  { value: '120', label: 'Number of Staffs' },
  { value: '493', label: 'Sea Destinations' },
  { value: '230', label: 'Professional Sailors' },
]

export interface Destination {
  image: string
  title: string
  dates: string
  price: string
}

export const destinations: Destination[] = [
  {
    image: 'https://picsum.photos/seed/marina-dest-1/600/450',
    title: 'Croatia — Columbia',
    dates: 'Sep. 05 — Oct. 15',
    price: '$600',
  },
  {
    image: 'https://picsum.photos/seed/marina-dest-2/600/450',
    title: 'Bahamas — Nassau',
    dates: 'Oct. 12 — Nov. 02',
    price: '$800',
  },
  {
    image: 'https://picsum.photos/seed/marina-dest-3/600/450',
    title: 'Greece — Santorini',
    dates: 'Nov. 01 — Nov. 21',
    price: '$750',
  },
  {
    image: 'https://picsum.photos/seed/marina-dest-4/600/450',
    title: 'Maldives — Male',
    dates: 'Dec. 10 — Dec. 30',
    price: '$950',
  },
  {
    image: 'https://picsum.photos/seed/marina-dest-5/600/450',
    title: 'Thailand — Phuket',
    dates: 'Jan. 08 — Jan. 28',
    price: '$700',
  },
  {
    image: 'https://picsum.photos/seed/marina-dest-6/600/450',
    title: 'Italy — Amalfi',
    dates: 'Feb. 02 — Feb. 22',
    price: '$880',
  },
]

export const yachtTypes: string[] = [
  'Motor Yacht',
  'Hi-Speed Yacht',
  'Premium Yacht',
  'Presidential Yacht',
]

export interface TeamMember {
  name: string
  role: string
  image: string
}

export const team: TeamMember[] = [
  {
    name: 'Craig Daniel',
    role: 'Engineer',
    image: 'https://picsum.photos/seed/marina-team-1/400/500',
  },
  {
    name: 'Ricky Fisher',
    role: 'Captain',
    image: 'https://picsum.photos/seed/marina-team-2/400/500',
  },
  {
    name: 'Sarah Young',
    role: 'Coordinator',
    image: 'https://picsum.photos/seed/marina-team-3/400/500',
  },
  {
    name: 'Megan Newman',
    role: 'Navigator',
    image: 'https://picsum.photos/seed/marina-team-4/400/500',
  },
]

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolores, fugiat magni minima sed impedit atque quisquam.',
    author: 'John Doe',
    role: 'CEO and Co-Founder',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam cumque, sapiente eos at excepturi, voluptas animi.',
    author: 'Marina Cole',
    role: 'Travel Blogger',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iste nemo, nobis accusantium animi minima expedita.',
    author: 'Adam Smith',
    role: 'Charter Guest',
  },
]

export interface FooterColumn {
  title: string
  links: string[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Our Company',
    links: ['About', 'News', 'Services', 'Our Team', 'Careers', 'Projects'],
  },
  {
    title: 'Our Services',
    links: ['Industrial', 'Construction', 'Remodeling'],
  },
  {
    title: 'Contact',
    links: ['Help Center', 'Support Community', 'Press', 'FAQ', 'Our Partners'],
  },
]

export const contactInfo = {
  address: '200, D-block, Green lane USA',
  phone: '+10 367 467 8934',
  email: 'info@gmail.com',
}
