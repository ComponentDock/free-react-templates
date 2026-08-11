/* All copy/content for Odyssey, extracted from the ColorLib "Ruft" live
   preview (https://preview.colorlib.com/theme/ruft/) on 2026-08-11.
   Text is kept close to the original kind of content; brand name replaced
   with "Odyssey". */

export const siteName = 'Odyssey'
export const skipLabel = 'Skip to main content'

export interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: readonly string[]
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Category', href: '#' },
  { label: 'Archive', href: '#' },
  { label: 'Pages', href: '#', children: ['Elements'] },
  { label: 'Blog', href: '#', children: ['Blog Details'] },
  { label: 'Contact', href: '#' },
]

export const mobileMenuLabel = 'Toggle navigation menu'
export const dropdownToggleLabel = (label: string) => `Toggle ${label} submenu`
export const dropdownOpenLabel = (label: string) => `${label} submenu open`

/* Banner hero — original: full-width image under a purple gradient overlay,
   centered two-line serif H1 (60px, weight 300), carousel arrows on the
   right side. */
export const heroHeadline = ['Charter Yacht', 'The Luxury Of Traveling']
export const heroSlides: readonly { seed: string; alt: string }[] = [
  { seed: 'odyssey-hero-1', alt: 'Charter yacht sailing on a turquoise sea' },
  { seed: 'odyssey-hero-2', alt: 'Coastal road along a dramatic shoreline' },
  { seed: 'odyssey-hero-3', alt: 'Sunset over a calm mountain lake' },
]
export const heroSlideLabel = 'Travel destinations slideshow'
export const prevSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'
export const slideIndicatorLabel = (index: number) => `Go to slide ${index + 1}`

/* Featured post slider — owl-carousel of post-box cards. */
export const authorName = 'Marvel Maison'
export const postDate = '13th Oct, 2018'
export const postType = 'Image Post'
export const postCategory = 'Food & Travel'
export const postComments = '03 Comments'
export const readMoreLabel = 'Read More'
const postExcerpt =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'

export interface SlidePost {
  title: string
  excerpt: string
  seed: string
}

export const sliderPosts: readonly SlidePost[] = [
  {
    title: 'Sailing The Greek Islands At Dusk',
    excerpt: postExcerpt,
    seed: 'odyssey-slide-1',
  },
  {
    title: 'Waking Up Inside A Costa Rican Rainforest',
    excerpt: postExcerpt,
    seed: 'odyssey-slide-2',
  },
  {
    title: 'A Slow Train Through The Swiss Alps',
    excerpt: postExcerpt,
    seed: 'odyssey-slide-3',
  },
  {
    title: 'Street Food Diaries Of Marrakech',
    excerpt: postExcerpt,
    seed: 'odyssey-slide-4',
  },
]

export const postSliderLabel = 'Featured posts'

/* Blog list — 5 single-post-item rows (titles from the live DOM). */
export interface BlogPost {
  title: string
  excerpt: string
  seed: string
}

export const blogPosts: readonly BlogPost[] = [
  {
    title: "It's Hurricane Season But We Are Visiting Hilton Island",
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    seed: 'odyssey-post-1',
  },
  {
    title: 'Global Resorts Network Grn Putting Timeshares To Shame',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    seed: 'odyssey-post-2',
  },
  {
    title: 'A Guide To Rocky Mountain Vacations',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    seed: 'odyssey-post-3',
  },
  {
    title: 'Big Savings On Gas While You Travel',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    seed: 'odyssey-post-4',
  },
  {
    title: 'Tourism Is Back In Full Swing In Cancun Mexico',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    seed: 'odyssey-post-5',
  },
]

export const continueReadingLabel = 'continue Reading'
export const postMetaLabel = 'Post meta'
export const paginationLabel = 'Blog pagination'
export const pageLinkLabel = (page: string) => `Page ${page}`
export const paginationPages = ['01', '02', '03', '04', '09']
export const prevPageLabel = 'Previous'
export const nextPageLabel = 'Next'

/* Sidebar widgets. */
export const searchPlaceholder = 'Search Posts'
export const searchLabel = 'Search'
export const authorWidgetName = 'Charlie ALison Barber'
export const authorRole = 'Senior blog writer'
export const authorBio =
  'Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the same experience for free.'
export const authorWidgetLabel = 'About the author'
export const socialNames: readonly string[] = ['Facebook', 'Twitter', 'Dribbble', 'Behance']
export const socialLabel = (name: string) => `Visit ${name} profile`

export const popularTitle = 'Popular Posts'
export interface PopularPost {
  title: string
  time: string
  seed: string
}
export const popularPosts: readonly PopularPost[] = [
  { title: 'Space Final Frontier', time: '02 hours ago', seed: 'odyssey-popular-1' },
  { title: 'The Amazing Hubble', time: '02 hours ago', seed: 'odyssey-popular-2' },
  { title: 'Astronomy Astrology', time: '02 hours ago', seed: 'odyssey-popular-3' },
  { title: 'Asteroids telescope', time: '02 hours ago', seed: 'odyssey-popular-4' },
]

export const categoriesTitle = 'Post Categories'
export interface CategoryRow {
  name: string
  count: string
}
export const categories: readonly CategoryRow[] = [
  { name: 'Techlology', count: '37' },
  { name: 'Lifestyle', count: '24' },
  { name: 'Fashion', count: '59' },
  { name: 'Art', count: '29' },
  { name: 'Food', count: '15' },
  { name: 'Architecture', count: '09' },
  { name: 'Adventure', count: '44' },
]

export const newsletterTitle = 'Newsletter'
export const emailPlaceholder = 'Email Address'
export const subscribeLabel = 'Subscribe Now'
export const subscribeSuccess = 'Thanks for subscribing!'
export const subscribeError = 'Please enter a valid email address.'

/* Footer — dark #222222, 4 widget columns + bottom bar. */
export const footerAboutTitle = 'About Us'
export const footerAboutBlurb =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
export const footerNewsletterTitle = 'Newsletter'
export const footerNewsletterTagline = 'Stay updated with our latest trends'
export const footerInstagramTitle = 'Instagram Feed'
export const footerInstagramCount = 8
export const instagramImageLabel = (index: number) => `Instagram feed image ${index + 1}`
export const followUsTitle = 'Follow Us'
export const followUsTagline = 'Let us be social'
export const footerCredit = 'Recreated from the ColorLib Ruft design'
export const copyright = `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`
