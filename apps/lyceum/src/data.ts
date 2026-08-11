/* All copy/content for Lyceum, extracted from the ColorLib "Learnit" live
   preview (https://preview.colorlib.com/theme/learnit/) on 2026-08-11.
   Text keeps the source's kind of content; the brand name is replaced with
   "Lyceum", source placeholder repetition is varied deliberately, and footer
   attribution keeps the ColorLib credit line per project convention. */

export const siteName = 'Lyceum'
export const skipLabel = 'Skip to main content'
export const documentTitle = 'Lyceum — Education Template'

/* Top bar — thin #f9f9ff strip: 4 social icons left, phone + email right. */
export const topBarSocials: readonly string[] = ['Facebook', 'Twitter', 'Dribbble', 'Behance']
export const topBarPhone = '+440 012 3654 896'
export const topBarPhoneLabel = 'Call us'
export const topBarEmail = 'support@colorlib.com'
export const topBarEmailLabel = 'Email us'
export const socialLabel = (name: string) => `Visit our ${name} page`

/* Header — white navbar, uppercase 12px links, Home active, three dropdowns. */
export interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: readonly NavItem[]
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#' },
  {
    label: 'Courses',
    href: '#',
    children: [
      { label: 'Courses', href: '#' },
      { label: 'Course Details', href: '#' },
    ],
  },
  {
    label: 'Pages',
    href: '#',
    children: [{ label: 'Elements', href: '#' }],
  },
  {
    label: 'Blog',
    href: '#',
    children: [
      { label: 'Blog', href: '#' },
      { label: 'Blog Details', href: '#' },
    ],
  },
  { label: 'Contact', href: '#' },
]

export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

/* Hero — full-width photo background, centered white serif headline. */
export const heroHeading = 'We Ensure better education for a better world'
export const heroParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
export const heroCtaLabel = 'Get Started'
export const heroSeed = 'lyceum-1'

/* Finance strip — 4 icon + title items on #f9f9ff. */
export interface FinanceItem {
  title: string
  icon: 'rocket' | 'globe' | 'smile' | 'tag'
}

export const financeItems: readonly FinanceItem[] = [
  { title: 'Science & Engineering', icon: 'rocket' },
  { title: 'Language Courses', icon: 'globe' },
  { title: 'Arts & Design', icon: 'smile' },
  { title: 'Business Studies', icon: 'tag' },
]
export const financeLabel = 'What we teach'

/* Courses — "Popular Free Courses", asymmetric 55/44 grid + sidebar card. */
export const coursesHeading = 'Popular Free Courses'
export const coursesParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const coursesLabel = 'Popular courses'
export const freeBadgeLabel = 'Free'

export interface Course {
  title: string
  students: number
  reviews: number
  instructor: string
  seed: string
  sidebar?: boolean
}

export const courses: readonly Course[] = [
  {
    title: 'Photography Masterclass',
    students: 355,
    reviews: 35,
    instructor: 'T. Robert',
    seed: 'lyceum-2',
  },
  {
    title: 'Web Design Bootcamp',
    students: 412,
    reviews: 48,
    instructor: 'A. Morris',
    seed: 'lyceum-3',
  },
  {
    title: 'Data Science Basics',
    students: 287,
    reviews: 29,
    instructor: 'L. Chen',
    seed: 'lyceum-4',
  },
  {
    title: 'Creative Writing Workshop',
    students: 198,
    reviews: 21,
    instructor: 'S. Patel',
    seed: 'lyceum-5',
  },
  {
    title: 'Marketing Essentials',
    students: 264,
    reviews: 31,
    instructor: 'D. Novak',
    seed: 'lyceum-6',
    sidebar: true,
  },
]

/* Team — "Meet Our Faculty", 4 cards with circular hover overlay + socials. */
export const teamHeading = 'Meet Our Faculty'
export const teamParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const teamLabel = 'Faculty'
export const teamSocials: readonly string[] = ['Facebook', 'Twitter', 'LinkedIn']

export interface TeamMember {
  name: string
  role: string
  seed: string
}

export const teamMembers: readonly TeamMember[] = [
  { name: 'Ethel Davis', role: 'Managing Director (Sales)', seed: 'lyceum-7' },
  { name: 'Stephen Kelby', role: 'Senior Lecturer', seed: 'lyceum-8' },
  { name: 'Martha Bell', role: 'Curriculum Lead', seed: 'lyceum-9' },
  { name: 'Jack Dyson', role: 'Admissions Head', seed: 'lyceum-10' },
]

/* Testimonials — client-side carousel, 3 slides. */
export interface Testimonial {
  name: string
  role: string
  quote: string
  seed: string
}

export const testimonialsLabel = 'Student testimonials'
export const testimonials: readonly Testimonial[] = [
  {
    name: 'Fannie Rowe',
    role: 'Accessories Buyer',
    quote:
      'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more.',
    seed: 'lyceum-11',
  },
  {
    name: 'Gloria Watkins',
    role: 'UX Designer',
    quote:
      'The courses at Lyceum gave me the exact skills I needed to switch careers. The instructors are patient and the material is always up to date.',
    seed: 'lyceum-12',
  },
  {
    name: 'Charles Whitmore',
    role: 'Data Analyst',
    quote:
      'I studied three evenings a week after work and felt supported at every step. The community is friendly and the projects are genuinely useful.',
    seed: 'lyceum-13',
  },
]
export const prevSlideLabel = 'Previous testimonial'
export const nextSlideLabel = 'Next testimonial'
export const slideIndicatorLabel = (index: number) => `Go to testimonial ${index + 1}`
export const starsPerSlide = 5

/* Packages — text column + two pricing cards. */
export const packagesHeading = 'Choose Course Packages'
export const packagesParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const packagesLabel = 'Course packages'
export const joinNowLabel = 'Join Now'

export interface CoursePackage {
  title: string
  tagline: string
  icon: 'graduation' | 'gem'
  features: readonly string[]
  price: string
}

const packageFeatures = [
  'Secure Online Transfer',
  'Unlimited Styles for interface',
  'Reliable Customer Service',
] as const

export const coursePackages: readonly CoursePackage[] = [
  {
    title: 'Premium',
    tagline: 'For the individuals',
    icon: 'graduation',
    features: packageFeatures,
    price: '£399.00',
  },
  {
    title: 'Exclusive',
    tagline: 'For the individuals',
    icon: 'gem',
    features: packageFeatures,
    price: '£399.00',
  },
]

/* Blog — "Latest Posts From Blog", 4 cards. */
export const blogHeading = 'Latest Posts From Blog'
export const blogParagraph =
  'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.'
export const blogLabel = 'Latest posts'

export interface BlogPost {
  title: string
  date: string
  author: string
  snippet: string
  seed: string
}

const blogSnippet =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const blogPosts: readonly BlogPost[] = [
  {
    title: 'Addiction When Gambling Becomes A Problem',
    date: '25 October, 2018',
    author: 'Mark Wiens',
    snippet: blogSnippet,
    seed: 'lyceum-14',
  },
  {
    title: 'The Science Behind Effective Study Habits',
    date: '18 October, 2018',
    author: 'Laura Fields',
    snippet: blogSnippet,
    seed: 'lyceum-15',
  },
  {
    title: 'Designing Classrooms For The Digital Age',
    date: '11 October, 2018',
    author: 'Derek Hale',
    snippet: blogSnippet,
    seed: 'lyceum-16',
  },
  {
    title: 'Why Lifelong Learning Matters In 2018',
    date: '4 October, 2018',
    author: 'Anna Ruiz',
    snippet: blogSnippet,
    seed: 'lyceum-17',
  },
]

/* Impress CTA — full-bleed band over a background photo. */
export const impressHeading = 'Become an instructor'
export const impressParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
export const impressCtaLabel = 'Apply for the post'
export const impressSeed = 'lyceum-18'

/* Footer — #04091e, 4 link columns + newsletter + bottom row. */
export interface FooterColumn {
  title: string
  links: readonly string[]
}

export const footerColumns: readonly FooterColumn[] = [
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
export const newsletterTitle = 'Newsletter'
export const newsletterPrompt = 'Stay updated with our latest trends'
export const newsletterPlaceholder = 'Enter email address'
export const newsletterSubmitLabel = 'Subscribe to newsletter'
export const newsletterSuccess = 'Thanks for subscribing — check your inbox!'
export const newsletterEmailLabel = 'Email address'
export const footerSocials: readonly string[] = ['Facebook', 'Twitter', 'Dribbble', 'Behance']
export const footerCredit = 'This template is made with'
export const footerCreditBy = 'by Colorlib'
export const copyright = `Copyright © ${new Date().getFullYear()} All rights reserved |`
