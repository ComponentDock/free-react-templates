/**
 * Glossy data — recreated from the ColorLib "Eden" preview DOM
 * (https://preview.colorlib.com/theme/eden/): same content kinds (coral
 * uppercase category links, Josefin Sans card headings, date/author meta,
 * comment/like/view counts), titles kept close to the original placeholder
 * copy. All imagery uses seeded picsum placeholders.
 */

export const siteName = 'Glossy.'

export const headerSocials = ['facebook', 'twitter', 'instagram', 'skype', 'vimeo'] as const

export const socialLabels: Record<string, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  skype: 'Skype',
  vimeo: 'Vimeo',
  dribbble: 'Dribbble',
  linkedin: 'Linkedin',
}

export interface NavItem {
  label: string
  active?: boolean
  dropdown?: readonly string[]
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', active: true },
  { label: 'Categories' },
  { label: 'Archive' },
  { label: 'Blog', dropdown: ['Blog', 'Blog Details'] },
  { label: 'Latest news' },
  { label: 'Contact us' },
]

export const darkModeLabel = 'Toggle dark mode'

export interface Post {
  seed: string
  category: string
  title: string
  meta: string
  author: string
}

export function imgUrl(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`
}

export const featuredLarge: Post = {
  seed: 'glossy-featured-large',
  category: 'Tours & Travel',
  title: 'Created face stars sixth forth fow',
  meta: 'March 12, 2019',
  author: 'By Alen Mark',
}

export const featuredCenter: Post = {
  seed: 'glossy-featured-center',
  category: 'Lifestyle',
  title: 'The abundantly brought after day fish there image',
  meta: 'March 12, 2019',
  author: 'By Alen Mark',
}

export const featuredStacked: readonly Post[] = [
  {
    seed: 'glossy-featured-stack-1',
    category: 'Lifestyle',
    title: 'Brought all day domi',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
  {
    seed: 'glossy-featured-stack-2',
    category: 'Fashion',
    title: 'Abundantly forth late',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
]

export const editorsPickFeatured: Post = {
  seed: 'glossy-editors-featured',
  category: 'Tours & Travel',
  title: 'A sixth star for the fourth morning',
  meta: 'March 12, 2019',
  author: 'By Alen Mark',
}

export const editorsPickRows: readonly Post[] = [
  {
    seed: 'glossy-editors-row-1',
    category: 'Lifestyle',
    title: 'Light that hath itself god',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
  {
    seed: 'glossy-editors-row-2',
    category: 'Fashion',
    title: 'Hath itself god the morning after',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
]

export const areaHeadingSubtitle = 'Abundantly creeping saw forth spirit can made appear fourth us.'

export const editorsPickTitle = 'Editor Picks'

export const travelNewsTitle = 'Travel News'

export const fashionNewsTitle = 'Fashion News'

export interface VideoPost {
  seed: string
  category: string
  title: string
  meta: string
  comments: string
  likes: string
  views: string
}

export const travelVideo: VideoPost = {
  seed: 'glossy-travel-video',
  category: 'shoes',
  title: 'Wings beat forth across the morning',
  meta: 'March 15, 2019',
  comments: '05 comment',
  likes: '0 like',
  views: '1k view',
}

export const travelSidePosts: readonly Post[] = [
  {
    seed: 'glossy-travel-side-1',
    category: 'Lifestyle',
    title: 'Blessed night morning on',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
  {
    seed: 'glossy-travel-side-2',
    category: 'Fashion',
    title: 'Blessed night morning on the lake',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
]

export const fashionPosts: readonly Post[] = [
  {
    seed: 'glossy-fashion-1',
    category: 'Lifestyle',
    title: 'Evening light on the sixth star',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
  {
    seed: 'glossy-fashion-2',
    category: 'Fashion',
    title: 'Abundantly brought after day',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
  {
    seed: 'glossy-fashion-3',
    category: 'Lifestyle',
    title: 'Fowls of the air in the morning',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
]

export const latestPosts: readonly Post[] = [
  {
    seed: 'glossy-latest-1',
    category: 'Lifestyle',
    title: 'All day the domi was brought',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
  {
    seed: 'glossy-latest-2',
    category: 'Fashion',
    title: 'Forth late and abundantly',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
  {
    seed: 'glossy-latest-3',
    category: 'Lifestyle',
    title: 'The light that hath itself',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
  {
    seed: 'glossy-latest-4',
    category: 'Fashion',
    title: 'Created face of the stars',
    meta: 'March 12, 2019',
    author: 'By Alen Mark',
  },
]

export const aboutBlurb =
  'Bearing fruitful shall fish fill creepeth the dry, over waters made years saw years male his form morning.'

export const contactInfo = [
  { label: 'Address', value: '2301 Morningview Lane, New York' },
  { label: 'Phone', value: '(+01) 123 456 7890' },
  { label: 'Email', value: 'hello@glossy.example' },
] as const

export const importantLinks = [
  'WHMCS-bridge',
  'Search Domain',
  'My Account',
  'Shopping Cart',
  'Our Shop',
] as const

export const newsletterIntro =
  'Won\u2019t greater earth after had called given great yielding green years.'

export const newsletterPlaceholder = 'Your Email Address'

export const newsletterError = 'Please enter a valid email address.'

export const newsletterSuccess = 'Thank you for subscribing!'

export const footerSocials = ['facebook', 'twitter', 'dribbble', 'linkedin'] as const

export const madeWithText = 'All rights reserved | This template is made with'

export const videoButtonLabel = 'Play video'
