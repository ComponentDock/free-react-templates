export const siteName = 'Journee'
export const skipLabel = 'Skip to content'

export interface NavItem {
  label: string
  href: string
  dropdown?: boolean
}
export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'about', href: '#feature-section' },
  { label: 'packages', href: '#packages-section' },
  { label: 'Blog', href: '#blog-section', dropdown: true },
  { label: 'pages', href: '#popular-section', dropdown: true },
  { label: 'Contact', href: '#footer-section' },
]
export const blogDropdown = ['blog', 'Single blog'] as const
export const pagesDropdown = ['Elements'] as const
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const hotlineLabel = 'Hot Line 052'
export const hotlineHref = 'tel:052'

export const heroSubheading = 'Best way to tour'
export const heroHeadline = 'Lorem ipsum dolor amet consec'
export const heroParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const searchTitle = 'search your country'
export const countryOptions = ['country', 'One', 'Two', 'Three'] as const
export const cityOptions = ['city', 'One', 'Two', 'Three'] as const
export const countryLabel = 'Select country'
export const cityLabel = 'Select city'
export const searchButtonLabel = 'search'

export const donationCards = [
  {
    title: 'donation',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    title: 'donation',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    title: 'donation',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
] as const
export const readMoreLabel = 'read more'

export const featureTitle = 'Amazing tour'
export const featureParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
export const featureCards = [
  { place: 'london', count: '35 Places' },
  { place: 'Kashmir', count: '75 Places' },
  { place: 'chaina', count: '85 Places' },
] as const

export const popularTitle = 'Most Popular place'
export const popularParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const popularCards = [
  {
    title: 'Life of Egeft',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Biking in Norway',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Tour of iceland',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
] as const
export const bookNowLabel = 'book now'

export const detailsTitle = 'Amazing tour'
export const detailsParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
export const detailsSpan =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const viewAllLabel = 'view all'

export const packageTitle = 'tour package'
export const packageParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const packageSlides = [
  {
    title: 'Sawpalo, Brasil',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Sawpalo, Brasil',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Sawpalo, Brasil',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Sawpalo, Brasil',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
] as const
export const joinNowLabel = 'join now'
export const starLabel = (index: number) => `Star ${index + 1}`
export const packagePreviousLabel = 'Previous destination'
export const packageNextLabel = 'Next destination'

export const ctaScript = 'Join Our Newsletter'
export const ctaHeading = 'Subscribe to get Updated with new offers'
export const emailLabel = 'Email address'
export const emailPlaceholder = 'Enter your email'
export const subscribeLabel = 'subscribe now'

export const blogTitle = 'our blog'
export const blogParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const blogCards = [
  {
    title: 'Luxerious Car Rental',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    date: '13th Dec',
    likes: '15',
    comments: '10',
  },
  {
    title: 'Luxerious Car Rental',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    date: '13th Dec',
    likes: '15',
    comments: '10',
  },
  {
    title: 'Luxerious Car Rental',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    date: '13th Dec',
    likes: '15',
    comments: '10',
  },
] as const

export const footerAbout =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
export const footerNavLinks = [
  'Home',
  'Features',
  'Services',
  'Portfolio',
  'team',
  'Pricing',
  'Blog',
  'Contact',
] as const
export const newsletterParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
export const newsletterPlaceholder = 'Email Address'
export const newsletterSubmitLabel = 'Subscribe to newsletter'
export const instafeedTitle = 'Instafeed'
export const copyrightPrefix =
  'Copyright © 2026 All rights reserved | This template is made with ♥ by'
export const componentDockUrl = 'https://www.componentdock.com/'
export const componentDockName = 'Component Dock'
export const socialLabel = 'Social media'

/* Placeholder images (picsum seeded — deterministic per template).
   Hero bg = sky-cyan id/300-ish; feature/about, place-details (2),
   tour-plan (2), blog (3), instafeed (8). */
export const heroImage = 'https://picsum.photos/seed/journee-sky/1600/1050'
export const featureImage = 'https://picsum.photos/seed/journee-about/800/600'
export const detailsImage1 = 'https://picsum.photos/seed/journee-detail1/700/800'
export const detailsImage2 = 'https://picsum.photos/seed/journee-detail2/700/800'
export const packageImages = [
  'https://picsum.photos/seed/journee-plan1/800/600',
  'https://picsum.photos/seed/journee-plan2/800/600',
] as const
export const blogImages = [
  'https://picsum.photos/seed/journee-blog1/700/500',
  'https://picsum.photos/seed/journee-blog2/700/500',
  'https://picsum.photos/seed/journee-blog3/700/500',
] as const
export const instafeedImages = Array.from(
  { length: 8 },
  (_, index) => `https://picsum.photos/seed/journee-insta${index + 1}/200/200`,
)
