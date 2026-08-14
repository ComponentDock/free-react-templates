import { Clapperboard, Megaphone, PenTool, Search, Smartphone, type LucideIcon } from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

export const contactInfo = {
  email: 'needhelp@gmail.com',
  phone: '+10 267 356 0016',
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

/* ------------------------------------------------------------------ */
/* Hero slider                                                         */
/* ------------------------------------------------------------------ */

export interface HeroSlide {
  subHeading: string
  headline: string
  copy: string
}

export const heroSlides: HeroSlide[] = [
  {
    subHeading: 'Popular Online Courses',
    headline: 'The New Way To Learn Properly With Us!',
    copy: 'Learn the skills you need to take you to the next level — join thousands of students on a brighter learning path.',
  },
  {
    subHeading: 'Learn Anywhere, Anytime',
    headline: 'Best Online Courses For Your Bright Future',
    copy: 'Study at your own pace with expert instructors and a curriculum built for real-world results.',
  },
]

export const heroImage = 'https://picsum.photos/seed/orenda-hero/800/840'
export const heroBackdrop = 'https://picsum.photos/seed/orenda-backdrop/1600/900'

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

export interface Category {
  icon: LucideIcon
  title: string
  copy: string
  href: string
}

export const categories: Category[] = [
  {
    icon: PenTool,
    title: 'Web Design',
    copy: 'Master responsive layouts, typography and modern design systems.',
    href: '#courses',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    copy: 'Build cross-platform mobile apps with the latest frameworks.',
    href: '#courses',
  },
  {
    icon: Clapperboard,
    title: 'Video Editing',
    copy: 'Produce cinematic edits with industry-standard workflows.',
    href: '#courses',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    copy: 'Plan and run campaigns that grow brands and convert audiences.',
    href: '#courses',
  },
  {
    icon: Search,
    title: 'SEO Marketing',
    copy: 'Rank higher in search with proven technical and content SEO.',
    href: '#courses',
  },
]

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '1050+', label: 'Topics' },
  { value: '7800+', label: 'Students' },
  { value: '420+', label: 'Courses' },
  { value: '95+', label: 'Instructors' },
]

/* ------------------------------------------------------------------ */
/* Popular courses                                                     */
/* ------------------------------------------------------------------ */

export interface Course {
  image: string
  category: string
  reviews: string
  price: string
  title: string
  href: string
}

export const courses: Course[] = [
  {
    image: 'https://picsum.photos/seed/orenda-course-1/400/300',
    category: 'Design',
    reviews: '52 Review',
    price: 'Free',
    title: 'Graphic Design',
    href: '#courses',
  },
  {
    image: 'https://picsum.photos/seed/orenda-course-2/400/300',
    category: 'Development',
    reviews: '48 Review',
    price: 'Free',
    title: 'Web Development',
    href: '#courses',
  },
  {
    image: 'https://picsum.photos/seed/orenda-course-3/400/300',
    category: 'Marketing',
    reviews: '61 Review',
    price: 'Free',
    title: 'Digital Marketing',
    href: '#courses',
  },
]

/* ------------------------------------------------------------------ */
/* Faculty                                                             */
/* ------------------------------------------------------------------ */

export interface Teacher {
  image: string
  name: string
  role: string
}

export const teachers: Teacher[] = [
  {
    image: 'https://picsum.photos/seed/orenda-faculty-1/350/450',
    name: 'Alexa Janathon',
    role: 'Faculty',
  },
  {
    image: 'https://picsum.photos/seed/orenda-faculty-2/350/450',
    name: 'Janathon Smith',
    role: 'Faculty',
  },
  {
    image: 'https://picsum.photos/seed/orenda-faculty-3/350/450',
    name: 'Alexa MacCalum',
    role: 'Faculty',
  },
  {
    image: 'https://picsum.photos/seed/orenda-faculty-4/350/450',
    name: 'Alexa J Watson',
    role: 'Faculty',
  },
]

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const aboutChecklist = [
  'Creative ideas built on real research and practice',
  'Clear learning paths designed for every skill level',
  'Supportive mentors who help you reach your goals',
]

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "You can't succeed if you just do what others do and follow the well-worn path. You need to create a new and original path for yourself.",
    author: 'Clifford Frazier',
    role: 'Student',
  },
  {
    quote:
      'The courses here gave me the confidence and the skills to land my first role as a product designer.',
    author: 'Andrea Blake',
    role: 'Graduate',
  },
]

export const testimonialBackdrop = 'https://picsum.photos/seed/orenda-testimonial/1600/700'

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export interface Post {
  image: string
  date: string
  category: string
  title: string
  href: '#'
}

export const posts: Post[] = [
  {
    image: 'https://picsum.photos/seed/orenda-blog-1/400/300',
    date: '24 Now',
    category: 'Properties',
    title: 'Footprints in Time is a Perfect House in Kurashiki',
    href: '#',
  },
  {
    image: 'https://picsum.photos/seed/orenda-blog-2/400/300',
    date: '18 Now',
    category: 'Design',
    title: 'Lessons From a Decade of Teaching Creative Skills',
    href: '#',
  },
]

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export interface FooterColumn {
  heading: string
  links: { label: string; href: string }[]
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'About Us',
    links: [
      { label: 'Online Learning', href: '#' },
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Center', href: '#' },
      { label: 'Become an Instructor', href: '#' },
    ],
  },
  {
    heading: 'Our Plans',
    links: [
      { label: 'Free Trial', href: '#' },
      { label: 'Academic Solutions', href: '#' },
      { label: 'Business Solutions', href: '#' },
      { label: 'Government Solutions', href: '#' },
    ],
  },
  {
    heading: 'Admissions',
    links: [
      { label: 'Policy', href: '#' },
      { label: 'Getting Started', href: '#' },
      { label: 'Online Application', href: '#' },
      { label: 'Tuition Calculator', href: '#' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact Us', href: '#' },
      { label: 'System Requirements', href: '#' },
      { label: 'Site Feedback', href: '#' },
    ],
  },
]

export const socials = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Linkedin', name: 'linkedin' },
  { label: 'Instagram', name: 'instagram' },
] as const
