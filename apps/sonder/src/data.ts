export const siteName = 'Sonder'

export const navLinks = ['Home', 'Styles', 'About', 'Contact'] as const

export interface NavItem {
  label: string
  items: string[]
}

export const dropdowns: NavItem[] = [
  { label: 'Categories', items: ['Lifestyle', 'Health', 'Family', 'Management', 'Travel', 'Work'] },
  { label: 'Blog', items: ['Video Post', 'Audio Post', 'Gallery Post', 'Standard Post'] },
]

export interface FeaturedPost {
  seed: string
  category: string
  title: string
  author: string
  date: string
  big?: boolean
}

export const featuredPosts: FeaturedPost[] = [
  {
    seed: 'sonder-featured-1',
    category: 'Music',
    title: 'What Your Music Preference Says About You and Your Personality.',
    author: 'John Doe',
    date: 'December 29, 2037',
    big: true,
  },
  {
    seed: 'sonder-featured-2',
    category: 'Management',
    title: 'The Pomodoro Technique Really Works.',
    author: 'John Doe',
    date: 'December 27, 2037',
  },
  {
    seed: 'sonder-featured-3',
    category: 'LifeStyle',
    title: 'Throwback To The Good Old Days.',
    author: 'John Doe',
    date: 'December 26, 2037',
  },
]

export interface BlogPost {
  kind: 'standard' | 'quote'
  seed?: string
  date?: string
  title: string
  excerpt?: string
  tags?: string[]
  author?: string
  quote?: string
  attribution?: string
}

export const blogPosts: BlogPost[] = [
  {
    kind: 'standard',
    seed: 'sonder-post-1',
    date: 'December 15, 2037',
    title: 'Just a Standard Format Post.',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fugit beatae ea voluptates molestiae rerum consequatur aliquam, incidunt eaque, reprehenderit qui possimus atque.',
    tags: ['Design', 'Photography'],
    author: 'John Doe',
  },
  {
    kind: 'quote',
    title: 'Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.',
    quote:
      'Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.',
    attribution: 'Esther Banks',
  },
  {
    kind: 'standard',
    seed: 'sonder-post-2',
    date: 'December 10, 2037',
    title: '10 Interesting Facts About Caffeine.',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque corporis nulla aspernatur commodi doloribus, excepturi dolorum rerum tempora voluptatem.',
    tags: ['Health', 'Cooking'],
    author: 'John Doe',
  },
  {
    kind: 'standard',
    seed: 'sonder-post-3',
    date: 'December 8, 2037',
    title: 'No Sugar Oatmeal Cookies.',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Exercitationem facilis doloremque tempora, possimus cum voluptate excepturi expedita aperiam.',
    tags: ['Health', 'Lifestyle'],
    author: 'John Doe',
  },
  {
    kind: 'standard',
    seed: 'sonder-post-4',
    date: 'December 5, 2037',
    title: 'Key Benefits Of Family Photography.',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quas, atque. Officiis, magnam? Porro aperiam quisquam officia nobis, voluptatem eum.',
    tags: ['Family', 'Photography'],
    author: 'John Doe',
  },
  {
    kind: 'standard',
    seed: 'sonder-post-5',
    date: 'December 3, 2037',
    title: 'Workspace Design Trends and Ideas.',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipisci natus laborum culpa nemo dolore tempora quibusdam possimus veniam commodi.',
    tags: ['Work', 'Design'],
    author: 'John Doe',
  },
  {
    kind: 'standard',
    seed: 'sonder-post-6',
    date: 'December 1, 2037',
    title: 'Visiting Theme Parks Improves Your Health.',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sunt dolore magnam voluptas dolores vero, atque iste modi reiciendis vitae tempore.',
    tags: ['Travel', 'Health'],
    author: 'John Doe',
  },
]

export const paginationPages = ['1', '2', '3', '4', '5'] as const
export const currentPage = '2'

export interface PopularPost {
  seed: string
  title: string
  author: string
  date: string
}

export const popularPosts: PopularPost[] = [
  {
    seed: 'sonder-popular-1',
    title: 'Visiting Theme Parks Improves Your Health.',
    author: 'John Doe',
    date: 'December 19, 2037',
  },
  {
    seed: 'sonder-popular-2',
    title: 'Key Benefits Of Family Photography.',
    author: 'John Doe',
    date: 'December 18, 2037',
  },
  {
    seed: 'sonder-popular-3',
    title: 'Workspace Design Trends and Ideas.',
    author: 'John Doe',
    date: 'December 17, 2037',
  },
  {
    seed: 'sonder-popular-4',
    title: 'No Sugar Oatmeal Cookies.',
    author: 'John Doe',
    date: 'December 16, 2037',
  },
]

export const tagCloud = [
  'Salad',
  'Recipe',
  'Places',
  'Tips',
  'Friends',
  'Travel',
  'Exercise',
  'Reading',
  'Running',
  'Self-Help',
  'Vacation',
] as const

export const quickLinks = ['Home', 'Blog', 'Styles', 'About', 'Contact', 'Privacy Policy'] as const

export const archives = [
  'January',
  'December',
  'November',
  'October',
  'September',
  'August',
] as const

export const socialLinks = ['facebook', 'twitter', 'instagram', 'pinterest', 'linkedin'] as const

export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  pinterest: 'Pinterest',
  linkedin: 'LinkedIn',
}

export const newsletterTitle = 'Our Newsletter'
export const newsletterBlurb =
  'Sit debitis quae ratione cum. At quis, eos excepturi, porro corporis blanditiis veniam, numquam quia explicabo.'
export const newsletterLabel = 'Email address'
export const newsletterPlaceholder = 'Your Email Address'
export const newsletterSubmitLabel = 'Send'
export const newsletterError = 'Please enter a valid email address.'
export const newsletterSuccess = 'Thank you for subscribing!'

export const copyright = '© Copyright Sonder 2038'
export const credit = 'Site Template by Colorlib'

export const searchPlaceholder = 'Search...'
export const skipLabel = 'Skip to main content'
