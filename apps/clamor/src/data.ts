/* All copy/content for Clamor, extracted from the ColorLib "Shout" live
   preview (https://preview.colorlib.com/theme/shout/) on 2026-08-11
   (HTTP 200, "Shout Template"; css/style.css parsed for tokens). Text is
   kept close to the original kind of content; brand name replaced with
   "Clamor". Three original demo typos fixed (noted in the PR):
   "Unobstrusive" → "Unobtrusive", "places to visits" → "places to visit",
   "Auio Post" → "Audio Post". */

const siteName = 'Clamor'
export const skipLabel = 'Skip to main content'
export const documentTitle = 'Clamor — Blog Template'

/* Header — absolute top bar over the featured area: white uppercase logo
   wordmark left (20px, letter-spacing 5px), 44px hamburger toggle right
   (radius 2px, translucent bg, bars → X when the off-canvas menu opens). */
export const logoText = 'Clamor.'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

/* Featured flex — 30% pink intro panel + 70% five-slide image carousel
   (600px tall, dark overlay, title + uppercase meta pinned to the bottom). */
export const introHeadline = 'We Are Functional & Creative Agency'
export const introSubline = 'html5 blog template'
export const sliderLabel = 'Featured posts'
export const sliderAutoplayMs = 5000
export const prevSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'

export interface FeaturedSlide {
  title: string
  meta: string
  seed: string
}

export const featuredSlides: readonly FeaturedSlide[] = [
  {
    title: 'Make website from scratch',
    meta: 'Feb 08, 2018 | Web Design | 4',
    seed: 'clamor-slide-1',
  },
  {
    title: '20 Modern Inspirational UI Examples',
    meta: 'Feb 08, 2018 | Web Design | 4',
    seed: 'clamor-slide-2',
  },
  {
    title: 'Support for Legacy Browsers',
    meta: 'Feb 08, 2018 | Web Design | 4',
    seed: 'clamor-slide-3',
  },
  {
    title: "An Unobtrusive 'Dashboard' Link",
    meta: 'Feb 08, 2018 | Web Design | 4',
    seed: 'clamor-slide-4',
  },
  {
    title: 'Fixing Jagged Google Fonts in Chrome',
    meta: 'Feb 08, 2018 | Web Design | 4',
    seed: 'clamor-slide-5',
  },
]

/* Blog grid — centered intro heading ("Most popular post" label + "What's
   hot" Tenor Sans h2) above a responsive 3/2/1-column grid of white cards
   (image / video / quote / audio / gallery variants). */
export const blogLabel = 'Most popular post'
export const blogHeading = "What's hot"
export const postsLabel = 'Blog posts'
export const readMoreLabel = 'Read More'
export const blogExcerpt =
  'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
export const videoLabel = 'Play video'
export const audioLabel = 'Audio post player'
export const quoteAuthor = '— John Doe'

type BlogPostType = 'image' | 'video' | 'quote' | 'audio' | 'gallery'

export interface BlogPost {
  type: BlogPostType
  title: string
  meta: string
  seed: string
}

export const blogPosts: readonly BlogPost[] = [
  {
    type: 'image',
    title: 'How to become a fashionist?',
    meta: 'Feb 07, 2018 | Web Design | 4',
    seed: 'clamor-post-1',
  },
  {
    type: 'image',
    title: '30 Places you want to visit',
    meta: 'Feb 07, 2018 | Web Design | 4',
    seed: 'clamor-post-2',
  },
  {
    type: 'image',
    title: 'New Arrival Jeans Original For Fashion',
    meta: 'Feb 07, 2018 | Web Design | 4',
    seed: 'clamor-post-3',
  },
  {
    type: 'video',
    title: 'Video Post - Traveler',
    meta: 'Feb 07, 2018 | Web Design | 4',
    seed: 'clamor-post-4',
  },
  {
    type: 'quote',
    title:
      'Quote area Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    meta: 'Feb 07, 2018 | Web Design | 4',
    seed: 'clamor-post-5',
  },
  {
    type: 'image',
    title: 'Tips For A Long Travel',
    meta: 'Feb 07, 2018 | Web Design | 4',
    seed: 'clamor-post-6',
  },
  {
    type: 'audio',
    title: 'Audio Post - Sample',
    meta: 'Feb 07, 2018 | Web Design | 4',
    seed: 'clamor-post-7',
  },
  {
    type: 'image',
    title: 'Food For Your Taste',
    meta: 'Feb 07, 2018 | Web Design | 4',
    seed: 'clamor-post-8',
  },
  {
    type: 'gallery',
    title: 'Slideshow post - Images',
    meta: 'Feb 07, 2018 | Web Design | 4',
    seed: 'clamor-post-9',
  },
]

/* Instagram strip — centered uppercase "Instagram" heading + 8 image tiles
   (12.5% width desktop / 25% tablet / 50% mobile, 200px tall). */
export const instagramTitle = 'Instagram'
export const instagramSectionLabel = 'Instagram feed'
export const instagramTileLabel = (index: number) => `Instagram image ${index + 1}`

export const instagramSeeds: readonly string[] = [
  'clamor-insta-1',
  'clamor-insta-2',
  'clamor-insta-3',
  'clamor-insta-4',
  'clamor-insta-5',
  'clamor-insta-6',
  'clamor-insta-7',
  'clamor-insta-8',
]

/* Footer — white, three columns: About Me (portrait, author name, blurb,
   pink social icons), Latest Blog (four thumb + date + title rows),
   Newsletter (email input + full-width pink Subscribe button), then the
   centered copyright bar with the repo-standard credit. */
export const aboutTitle = 'About Me'
export const authorName = 'Vanessa Morgan'
export const aboutBlurb = 'A small river named Duden flows by their place and supplies.'
export const authorPortraitAlt = 'Portrait of Vanessa Morgan'
export const latestTitle = 'Latest Blog'

export interface LatestPost {
  title: string
  date: string
  seed: string
}

export const latestPosts: readonly LatestPost[] = [
  {
    title: 'How to become a fashionist?',
    date: 'February 9, 2018',
    seed: 'clamor-latest-1',
  },
  {
    title: "Want to have a vacation? Here's an affordable Places to go",
    date: 'February 9, 2018',
    seed: 'clamor-latest-2',
  },
  {
    title: '6 simple tips to be a slimmer.',
    date: 'February 9, 2018',
    seed: 'clamor-latest-3',
  },
  {
    title: 'How to become slim?',
    date: 'February 9, 2018',
    seed: 'clamor-latest-4',
  },
]

export const newsletterTitle = 'Newsletter'
export const newsletterBlurb = 'Subscribe to our newsletter and get fresh stories in your inbox.'
export const emailPlaceholder = 'Enter Email address'
export const subscribeLabel = 'Subscribe'
export const subscribeSuccess = 'Thanks for subscribing!'
export const emailError = 'Please enter a valid email address.'
export const copyright = `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`
export const footerCredit = 'Recreated from the ColorLib Shout design'

/* Off-canvas menu — right slide-in panel (360px, white, z-1002): search
   form (fafafa input + pink radius-0 search button), uppercase menu links
   (Blog active → pink), About Me block, Instagram 2x2 tiles. */
export const searchPlaceholder = 'Enter any key to search...'
export const searchLabel = 'Search'
export const searchButtonLabel = 'Submit search'
export const navLabel = 'Off-canvas menu'
export const closeLabel = 'Close off-canvas menu'

export interface MenuLink {
  label: string
  active?: boolean
}

export const menuLinks: readonly MenuLink[] = [
  { label: 'Blog', active: true },
  { label: 'Single Blog' },
  { label: 'About me' },
  { label: 'Contact me' },
]

export const socialNames: readonly string[] = ['Facebook', 'Twitter', 'Dribbble', 'Instagram']
export const socialLabel = (name: string) => `Visit ${name} profile`
export const menuInstagramLabel = (index: number) => `Menu Instagram image ${index + 1}`

export const menuInstagramSeeds: readonly string[] = [
  'clamor-menu-insta-1',
  'clamor-menu-insta-2',
  'clamor-menu-insta-3',
  'clamor-menu-insta-4',
]
