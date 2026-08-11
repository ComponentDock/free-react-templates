/* All copy/content for Campus, extracted from the ColorLib "Academy" live
   preview (https://preview.colorlib.com/theme/academy/) on 2026-08-11.
   Text keeps the source's kind of content; the brand name is replaced with
   "Campus", source typos are fixed deliberately ("Wellcome" → "Welcome",
   "enrole" → "enrol", "begginers" → "beginners"), and the CTA + footer credit
   are reworded (no ColorLib branding). */

export const siteName = 'Campus'
export const skipLabel = 'Skip to main content'

/* Header — 95px top strip (wordmark + "Register / Login") above a light-gray
   #f5f7fa menu bar with uppercase nav links and a green gradient phone block. */
export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'About Us', href: '#' },
  { label: 'Course', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

export const registerLoginLabel = 'Register / Login'
export const phoneNumber = '(+65) 456 332 5568 889'
export const phoneLabel = 'Call our admission office'
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const stickyThreshold = 100

/* Hero — full-screen photo slider (850px), centered white eyebrow + headline
   + green "Read More" button; two slides sharing the same copy (only the
   background photo differs), per the live DOM. */
export interface HeroSlide {
  title: string
  eyebrow: string
  seed: string
}

export const heroEyebrow = 'All the courses you need'
export const heroTitle = 'Welcome to our Online University'
export const heroReadMoreLabel = 'Read More'
export const heroLabel = 'Featured slides'
export const heroSlides: readonly HeroSlide[] = [
  { title: heroTitle, eyebrow: heroEyebrow, seed: 'campus-1' },
  { title: heroTitle, eyebrow: heroEyebrow, seed: 'campus-2' },
]
export const heroAutoplayMs = 5000
export const prevSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'
export const slideIndicatorLabel = (index: number) => `Go to slide ${index + 1}`

/* Green feature band — overlaps the hero's bottom edge. */
export interface Feature {
  title: string
  seed: string
}
export const featureLabel = 'Why choose Campus'
export const features: readonly Feature[] = [
  { title: 'Online Courses', seed: 'campus-feature-1' },
  { title: 'Amazing Teachers', seed: 'campus-feature-2' },
  { title: 'Great Support', seed: 'campus-feature-3' },
]

/* Courses grid — no heading, 3×2 grid of six icon-badge cards. */
export interface Course {
  title: string
  blurb: string
  seed: string
}
const courseBlurb =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export { courseBlurb }
export const coursesLabel = 'Our courses'
export const courses: readonly Course[] = [
  { title: 'Business School', blurb: courseBlurb, seed: 'campus-course-1' },
  { title: 'Marketing', blurb: courseBlurb, seed: 'campus-course-2' },
  { title: 'Photography', blurb: courseBlurb, seed: 'campus-course-3' },
  { title: 'Social Media', blurb: courseBlurb, seed: 'campus-course-4' },
  { title: 'Development', blurb: courseBlurb, seed: 'campus-course-5' },
  { title: 'Design', blurb: courseBlurb, seed: 'campus-course-6' },
]

/* Testimonials — dark photo overlay, white heading, 2×2 grid. */
export interface Testimonial {
  quoteTitle: string
  quote: string
  name: string
  role: string
  seed: string
}
const testimonialQuote =
  'Etiam nec odio vestibulum est mattis efficitur magna. Pellentesque sit amet tellus blandit, eget venenatis nisl. Donec et sollicitudin est, in euismod erat.'
export const testimonialsLabel = 'Testimonials'
export const testimonialsHeading = 'See what our satisfied customers are saying about us'
export const testimonials: readonly Testimonial[] = [
  {
    quoteTitle: 'Great teachers',
    quote: testimonialQuote,
    name: 'Maria Smith',
    role: 'Student',
    seed: 'campus-6',
  },
  {
    quoteTitle: 'Easy and user friendly courses',
    quote: testimonialQuote,
    name: 'Shawn Gaines',
    role: 'Student',
    seed: 'campus-7',
  },
  {
    quoteTitle: 'I just love the courses here',
    quote: testimonialQuote,
    name: 'Ross Cooper',
    role: 'Student',
    seed: 'campus-8',
  },
  {
    quoteTitle: 'One good campus',
    quote: testimonialQuote,
    name: 'James Williams',
    role: 'Student',
    seed: 'campus-9',
  },
]

/* Popular courses — "The Best" / "Top Popular Courses", 2×2 photo cards
   with meta, star ratings and a "See More" link. */
export interface PopularCourse {
  title: string
  meta: string
  rating: number
  blurb: string
  seed: string
}
const popularBlurb =
  'Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod erat.'
export const popularEyebrow = 'The Best'
export const popularHeading = 'Top Popular Courses'
export const popularLabel = 'Popular courses'
export const popularCourses: readonly PopularCourse[] = [
  {
    title: 'Business for beginners',
    meta: 'By Simon Smith · March 18, 2018',
    rating: 5,
    blurb: popularBlurb,
    seed: 'campus-2',
  },
  {
    title: 'Advanced HTML5',
    meta: 'By Simon Smith · March 18, 2018',
    rating: 4,
    blurb: popularBlurb,
    seed: 'campus-3',
  },
  {
    title: 'Marketing 101',
    meta: 'By Simon Smith · March 18, 2018',
    rating: 4,
    blurb: popularBlurb,
    seed: 'campus-4',
  },
  {
    title: 'Business for beginners',
    meta: 'By Simon Smith · March 18, 2018',
    rating: 5,
    blurb: popularBlurb,
    seed: 'campus-5',
  },
]
export const starLabel = (filled: number) => `Rated ${filled} out of 5 stars`
export const seeMoreLabel = 'See More'

/* Partners — five logo links. */
export const partnersLabel = 'Our partners'
export const partnerLabel = (index: number) => `Partner logo ${index + 1}`
export const partnerCount = 5

/* Call to action — green gradient band. */
export const ctaHeading = 'Do you want to enrol at Campus? Get in touch!'
export const ctaLabel = 'Call to action'

/* Footer — dark #232323, four widgets + #141414 bottom bar. */
export const footerAboutBlurb =
  'Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi. Donec et sollicitudin est, in euismod erat. Ut at erat et arcu pulvinar cursus a eget.'
export const usefulLinksTitle = 'Usefull Links'
export const usefulLinks: readonly NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Services & Features', href: '#' },
  { label: 'Accordions and tabs', href: '#' },
  { label: 'Menu ideas', href: '#' },
  { label: 'Gallery', href: '#' },
  { label: 'Contact', href: '#' },
]
export const galleryTitle = 'Gallery'
export const galleryCount = 6
export const galleryLabel = (index: number) => `Gallery image ${index + 1}`
export const contactTitle = 'Contact'
export const contactAddress = '4127/ 5B-C Mislane Road, Gibraltar, UK'
export const contactPhones = 'Main: 203-808-8613 / Office: 203-808-8648'
export const contactEmail = 'office@yourbusiness.com'
export const socialNames: readonly string[] = ['Facebook', 'Twitter', 'Pinterest', 'Instagram']
export const socialLabel = (name: string) => `Visit our ${name} page`
export const copyright = `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`
export const footerCredit = 'Made with ♥ by Component Dock'
