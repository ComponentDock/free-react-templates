/* Ivy site data — copy and placeholder images for the university template.
   Brand palette: orange #fd5f00 accent, navy #0d1128, gold #fda638,
   purple #5d50c6 accents, footer #1a1a1a, Poppins type. */

export const BRAND = 'Ivy'

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

export const CONTACT_EMAIL = 'youremail@email.com'
export const CONTACT_PHONE = '+ 1235 2355 98'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Programs', href: '#programs-section' },
  { label: 'Courses', href: '#courses-section' },
  { label: 'Admissions', href: '#admissions-section' },
  { label: 'Contact', href: '#contact-section' },
]

export interface HeroSlide {
  headline: string
  copy: string
  image: string
}

const HERO_COPY =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia.'

export const HERO_SLIDES: HeroSlide[] = [
  {
    headline: 'Education Needs Complete Solution',
    copy: HERO_COPY,
    image: 'https://picsum.photos/seed/ivy-hero-1/1600/600',
  },
  {
    headline: 'University, College School Education',
    copy: HERO_COPY,
    image: 'https://picsum.photos/seed/ivy-hero-2/1600/600',
  },
]

export interface Service {
  title: string
  blurb: string
  icon: 'teachers' | 'education' | 'library' | 'sports'
  tone: 'primary' | 'navy'
}

const SERVICES_BLURB =
  'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'

export const SERVICES: Service[] = [
  { title: 'Certified Teachers', blurb: SERVICES_BLURB, icon: 'teachers', tone: 'primary' },
  { title: 'Special Education', blurb: SERVICES_BLURB, icon: 'education', tone: 'navy' },
  { title: 'Book & Library', blurb: SERVICES_BLURB, icon: 'library', tone: 'primary' },
  { title: 'Sport Clubs', blurb: SERVICES_BLURB, icon: 'sports', tone: 'navy' },
]

export interface Feature {
  title: string
  blurb: string
  icon: 'safety' | 'classes' | 'teachers' | 'classrooms' | 'lessons' | 'sports'
}

const FEATURE_BLURB = 'Far far away, behind the word mountains, far from the countries Vokalia.'

export const FEATURES: Feature[] = [
  { title: 'Safety First', blurb: FEATURE_BLURB, icon: 'safety' },
  { title: 'Regular Classes', blurb: FEATURE_BLURB, icon: 'classes' },
  { title: 'Certified Teachers', blurb: FEATURE_BLURB, icon: 'teachers' },
  { title: 'Sufficient Classrooms', blurb: FEATURE_BLURB, icon: 'classrooms' },
  { title: 'Creative Lessons', blurb: FEATURE_BLURB, icon: 'lessons' },
  { title: 'Sports Facilities', blurb: FEATURE_BLURB, icon: 'sports' },
]

export const OFFER_IMAGE = 'https://picsum.photos/seed/ivy-offer/600/600'
export const OFFER_HEADLINE = 'What We Offer'

export const COUNTER_IMAGE = 'https://picsum.photos/seed/ivy-counter/1600/900'
export const COUNTER_VIDEO_THUMB = 'https://picsum.photos/seed/ivy-video/600/400'
export const COUNTER_VIDEO_URL = 'https://vimeo.com/45830194'

export interface StatCounter {
  value: number
  label: string
}

export const STAT_COUNTERS: StatCounter[] = [
  { value: 18, label: 'Certified Teachers' },
  { value: 401, label: 'Students' },
  { value: 30, label: 'Courses' },
  { value: 50, label: 'Awards Won' },
]

export interface Course {
  title: string
  meta: string
  blurb: string
  image: string
}

export const COURSE_META_TEACHER = 'Mr. Khan'
export const COURSE_META_SEATS = '10 seats'
export const COURSE_META_YEARS = '4 Years'

export const COURSES: Course[] = [
  {
    title: 'Electric Engineering',
    meta: `${COURSE_META_TEACHER} · ${COURSE_META_SEATS} · ${COURSE_META_YEARS}`,
    blurb: 'Separated they live in. A small river named Duden flows by their place.',
    image: 'https://picsum.photos/seed/ivy-course-1/400/300',
  },
  {
    title: 'Electric Engineering',
    meta: `${COURSE_META_TEACHER} · ${COURSE_META_SEATS} · ${COURSE_META_YEARS}`,
    blurb: 'Separated they live in. A small river named Duden flows by their place.',
    image: 'https://picsum.photos/seed/ivy-course-2/400/300',
  },
  {
    title: 'Electric Engineering',
    meta: `${COURSE_META_TEACHER} · ${COURSE_META_SEATS} · ${COURSE_META_YEARS}`,
    blurb: 'Separated they live in. A small river named Duden flows by their place.',
    image: 'https://picsum.photos/seed/ivy-course-3/400/300',
  },
  {
    title: 'Electric Engineering',
    meta: `${COURSE_META_TEACHER} · ${COURSE_META_SEATS} · ${COURSE_META_YEARS}`,
    blurb: 'Separated they live in. A small river named Duden flows by their place.',
    image: 'https://picsum.photos/seed/ivy-course-4/400/300',
  },
]

export interface Teacher {
  name: string
  position: string
  blurb: string
  avatar: string
}

export const TEACHERS: Teacher[] = [
  {
    name: 'Bianca Wilson',
    position: 'Teacher',
    blurb: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    avatar: 'https://picsum.photos/seed/ivy-teacher-1/400/500',
  },
  {
    name: 'Mitch Parker',
    position: 'English Teacher',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    avatar: 'https://picsum.photos/seed/ivy-teacher-2/400/500',
  },
  {
    name: 'Stella Smith',
    position: 'Art Teacher',
    blurb: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    avatar: 'https://picsum.photos/seed/ivy-teacher-3/400/500',
  },
  {
    name: 'Monshe Henderson',
    position: 'Science Teacher',
    blurb: 'Even the all-powerful Pointing has no control about the blind texts.',
    avatar: 'https://picsum.photos/seed/ivy-teacher-4/400/500',
  },
]

export const COURSE_OPTIONS = ['Art Lesson', 'Language Lesson', 'Music Lesson', 'Other Services']

export interface CampusEvent {
  title: string
  day: string
  month: string
  time: string
  blurb: string
}

export const EVENTS: CampusEvent[] = [
  {
    title: 'Spring Open House',
    day: '15',
    month: 'MAR',
    time: '10:00 AM - 4:00 PM',
    blurb:
      'Tour our campus, meet faculty, and learn about admission requirements and financial aid options.',
  },
  {
    title: 'Research Symposium',
    day: '22',
    month: 'MAR',
    time: '2:00 PM - 5:00 PM',
    blurb: 'Annual showcase of student and faculty research projects across all departments.',
  },
  {
    title: 'Alumni Networking Night',
    day: '05',
    month: 'APR',
    time: '6:00 PM - 9:00 PM',
    blurb: 'Connect with successful alumni and expand your professional network.',
  },
]

export interface BlogPost {
  title: string
  date: string
  dateParts: { day: string; month: string; year: string }
  meta: string
  blurb: string
  image: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Skills To Develop Your Child Memory',
    date: 'June 27, 2032',
    dateParts: { day: '26', month: 'June', year: '2032' },
    meta: 'Admin · 3 Comments',
    blurb: 'Even the all-powerful Pointing has no control about the blind texts.',
    image: 'https://picsum.photos/seed/ivy-blog-1/400/300',
  },
  {
    title: 'Skills To Develop Your Child Memory',
    date: 'June 27, 2032',
    dateParts: { day: '26', month: 'June', year: '2032' },
    meta: 'Admin · 3 Comments',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/ivy-blog-2/400/300',
  },
  {
    title: 'Skills To Develop Your Child Memory',
    date: 'June 27, 2032',
    dateParts: { day: '26', month: 'June', year: '2032' },
    meta: 'Admin · 3 Comments',
    blurb: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    image: 'https://picsum.photos/seed/ivy-blog-3/400/300',
  },
]

export interface Testimonial {
  quote: string
  name: string
  position: string
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Ivy gave me the confidence and the skills to build a career I love. The teachers truly care about every student.',
    name: 'Racky Henderson',
    position: 'Student',
    avatar: 'https://picsum.photos/seed/ivy-testimonial-1/100/100',
  },
  {
    quote: 'The campus facilities and the support of the faculty made my years here unforgettable.',
    name: 'Henry Dee',
    position: 'Student',
    avatar: 'https://picsum.photos/seed/ivy-testimonial-2/100/100',
  },
  {
    quote:
      'From the first open house to graduation day, every moment at Ivy felt like being part of a family.',
    name: 'Mark Huff',
    position: 'Student',
    avatar: 'https://picsum.photos/seed/ivy-testimonial-3/100/100',
  },
  {
    quote:
      'The practical courses and career guidance prepared me for the real world better than I ever expected.',
    name: 'Rodel Golez',
    position: 'Student',
    avatar: 'https://picsum.photos/seed/ivy-testimonial-4/100/100',
  },
]

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/ivy-gallery-1/400/400',
  'https://picsum.photos/seed/ivy-gallery-2/400/400',
  'https://picsum.photos/seed/ivy-gallery-3/400/400',
  'https://picsum.photos/seed/ivy-gallery-4/400/400',
  'https://picsum.photos/seed/ivy-gallery-5/400/400',
  'https://picsum.photos/seed/ivy-gallery-6/400/400',
  'https://picsum.photos/seed/ivy-gallery-7/400/400',
  'https://picsum.photos/seed/ivy-gallery-8/400/400',
]

export const FOOTER_ADDRESS = '203 Fake St. Mountain View, San Francisco, California, USA'
export const FOOTER_PHONE = '+2 392 3929 210'
export const FOOTER_EMAIL = 'info@yourdomain.com'

export interface MiniPost {
  title: string
  date: string
  image: string
}

export const MINI_POSTS: MiniPost[] = [
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'June 27, 2032',
    image: 'https://picsum.photos/seed/ivy-mini-1/100/80',
  },
  {
    title: 'A small river named Duden flows by their place',
    date: 'June 20, 2032',
    image: 'https://picsum.photos/seed/ivy-mini-2/100/80',
  },
]

export const QUICK_LINKS = ['Home', 'About', 'Programs', 'Courses', 'Admissions', 'Contact']

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#contact-section' },
  { label: 'Twitter', href: '#contact-section' },
  { label: 'Instagram', href: '#contact-section' },
  { label: 'LinkedIn', href: '#contact-section' },
]
