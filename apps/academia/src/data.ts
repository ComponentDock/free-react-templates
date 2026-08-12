/* Central data for the Academia page. Content mirrors the reference demo in
   kind (course catalog, testimonials, blog posts, footer links) with
   original placeholder copy; provenance lives in the spec, not app code. */

export const PHONE_DISPLAY = '+10 378 467 3672'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Pages', href: '#speciality' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export interface Course {
  id: number
  category: string
  title: string
  rating: string
  offer: string
  price: string
  image: string
}

export const COURSE_TABS = [
  'All Courses',
  'Photoshop',
  'UI/UX',
  'Web Design',
  'Web dev',
  'Wordpress',
  'Adobe XD',
  'Sketch App',
  'Illustrator',
] as const

export const COURSES: Course[] = [
  {
    id: 1,
    category: 'Photoshop',
    title: 'Mobile App design step by step from beginner',
    rating: '4.5',
    offer: '$89.00',
    price: '$49',
    image: 'https://picsum.photos/seed/academia-1/300/200',
  },
  {
    id: 2,
    category: 'UI/UX',
    title: 'Complete UI/UX design course for beginners',
    rating: '4.8',
    offer: '$99.00',
    price: '$59',
    image: 'https://picsum.photos/seed/academia-2/300/200',
  },
  {
    id: 3,
    category: 'Web Design',
    title: 'Learn web design from scratch in 30 days',
    rating: '4.6',
    offer: '$79.00',
    price: '$39',
    image: 'https://picsum.photos/seed/academia-3/300/200',
  },
  {
    id: 4,
    category: 'Web dev',
    title: 'Full-stack web development bootcamp',
    rating: '4.9',
    offer: '$129.00',
    price: '$79',
    image: 'https://picsum.photos/seed/academia-4/300/200',
  },
  {
    id: 5,
    category: 'Wordpress',
    title: 'WordPress theme development masterclass',
    rating: '4.4',
    offer: '$95.00',
    price: '$55',
    image: 'https://picsum.photos/seed/academia-5/300/200',
  },
  {
    id: 6,
    category: 'Adobe XD',
    title: 'Adobe XD prototyping essentials',
    rating: '4.3',
    offer: '$69.00',
    price: '$29',
    image: 'https://picsum.photos/seed/academia-6/300/200',
  },
  {
    id: 7,
    category: 'Sketch App',
    title: 'Sketch app interface design course',
    rating: '4.7',
    offer: '$85.00',
    price: '$45',
    image: 'https://picsum.photos/seed/academia-7/300/200',
  },
  {
    id: 8,
    category: 'Illustrator',
    title: 'Illustrator for logo design',
    rating: '4.5',
    offer: '$75.00',
    price: '$35',
    image: 'https://picsum.photos/seed/academia-8/300/200',
  },
  {
    id: 9,
    category: 'Photoshop',
    title: 'Photo retouching and creative manipulation',
    rating: '4.2',
    offer: '$65.00',
    price: '$25',
    image: 'https://picsum.photos/seed/academia-9/300/200',
  },
  {
    id: 10,
    category: 'Web Design',
    title: 'Responsive design with modern CSS',
    rating: '4.6',
    offer: '$88.00',
    price: '$48',
    image: 'https://picsum.photos/seed/academia-10/300/200',
  },
  {
    id: 11,
    category: 'Wordpress',
    title: 'WooCommerce store setup guide',
    rating: '4.3',
    offer: '$92.00',
    price: '$52',
    image: 'https://picsum.photos/seed/academia-11/300/200',
  },
  {
    id: 12,
    category: 'Illustrator',
    title: 'Flat illustration with Illustrator',
    rating: '4.7',
    offer: '$70.00',
    price: '$30',
    image: 'https://picsum.photos/seed/academia-12/300/200',
  },
]

export interface Testimonial {
  quote: string
  author: string
  image: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Working in conjunction with humanitarian aid agencies we have supported programmes to alleviate human suffering.',
    author: '- Jquileen',
    image: 'https://picsum.photos/seed/academia-avatar/80/80',
  },
  {
    quote:
      'The courses transformed how I work — practical projects, patient mentors and a community that keeps you going.',
    author: '- Miranda',
    image: 'https://picsum.photos/seed/academia-avatar2/80/80',
  },
]

export interface Speciality {
  title: string
  blurb: string
  tone: 'iris' | 'brand'
}

export const SPECIALITIES: Speciality[] = [
  {
    title: 'Premium Quality',
    blurb:
      'Lessons are built by working designers and reviewed for clarity, so every minute you spend counts.',
    tone: 'iris',
  },
  {
    title: 'Business Finance',
    blurb:
      'Short practical modules on pricing, clients and freelance growth for creative professionals.',
    tone: 'brand',
  },
  {
    title: 'Premium Courses',
    blurb: 'Unlock the full catalog with lifetime access, certificates and direct mentor feedback.',
    tone: 'iris',
  },
  {
    title: 'Expert Mentors',
    blurb:
      'Learn from instructors who ship real products and answer questions in weekly live sessions.',
    tone: 'brand',
  },
]

export interface BlogPost {
  date: string
  category: string
  title: string
  blurb: string
  image: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    date: '12 Jun, 2019',
    category: 'in Design tips',
    title: 'Commitment to dedicated Support',
    blurb:
      'Firmament morning sixth subdue darkness creeping gathered divide our let god moving in fourth air night.',
    image: 'https://picsum.photos/seed/academia-blog1/350/250',
  },
  {
    date: '18 Jun, 2019',
    category: 'in UI/UX',
    title: 'Pixel perfect design for modern brands',
    blurb:
      'Bring upon it beast let you dominion likeness open place day great. Moving in fourth air night.',
    image: 'https://picsum.photos/seed/academia-blog2/350/250',
  },
  {
    date: '25 Jun, 2019',
    category: 'in Wordpress',
    title: 'Five habits of highly effective students',
    blurb:
      'Creeping gathered divide our let god moving. Moving in fourth air night bring upon it beast.',
    image: 'https://picsum.photos/seed/academia-blog3/350/250',
  },
]

export const FOOTER_COURSES_LINKS = ['Wordpress', 'Photoshop', 'Illustrator', 'Adobe XD', 'UI/UX']
export const FOOTER_RESOURCES_LINKS = ['Free Adobe XD Tutorials', 'About', 'Contact']

export const CONTACT_DETAILS = {
  address: '200, D-block, Green lane USA',
  phone: '+10 367 467 8934',
  email: 'academia@contact.com',
}

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
]
